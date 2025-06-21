import {
    WheelEvent,
    useState,
    useRef,
    useEffect,
    MutableRefObject,
} from "react";
import { POI } from "./POI";
import { SVG } from "./SVG";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const FACTOR = 0.5;

export const WorldDisplay: React.FC = () => {
    const boundRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);
    const poiRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={boundRef}
            className="aspect-[41/19] max-sm:w-full sm:h-full relative overflow-hidden z-1"
        >
            <ZoomProcessor
                boundRef={boundRef}
                mapRef={mapRef}
                poiRef={poiRef}
            />
            <Continents mapRef={mapRef} />
        </div>
    );
};

const ZoomProcessor: React.FC<{
    mapRef: MutableRefObject<HTMLDivElement | null>;
    boundRef: MutableRefObject<HTMLDivElement | null>;
    poiRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ mapRef, boundRef, poiRef }) => {
    const wheelRef = useRef<boolean>(false);
    const [zoom, setZoom] = useState<number>(1);
    const shadowRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<[number, number]>([0, 0]);

    const processZoom = (e: WheelEvent<HTMLDivElement>) => {
        if (
            !mapRef.current ||
            !boundRef.current ||
            !poiRef.current ||
            wheelRef.current
        ) {
            return;
        }
        const newZoom = zoom + (e.deltaY > 0 ? FACTOR : -FACTOR);
        if (newZoom < MIN_ZOOM || newZoom > MAX_ZOOM) {
            return;
        }
        wheelRef.current = true;
        setZoom(newZoom);
        mapRef.current.style.height = poiRef.current.style.height = `${
            newZoom * 100
        }%`;
        const { left, top } = mapRef.current.getBoundingClientRect();
        const {
            left: offsetX,
            top: offsetY,
            width,
            height,
        } = boundRef.current.getBoundingClientRect();
        let newLeft, newTop;
        if (e.deltaY > 0) {
            newLeft = Math.round(
                (left - e.clientX) / (1 - FACTOR / newZoom) + width / 2
            );
            newTop = Math.round(
                (top - e.clientY) / (1 - FACTOR / newZoom) + height / 2
            );
        } else {
            newLeft = left - offsetX + (width * FACTOR) / 2;
            newTop = top - offsetY + (height * FACTOR) / 2;
        }
        if (newLeft > 0) {
            newLeft = 0;
        } else if (newLeft < -width * (newZoom - 1)) {
            newLeft = -width * (newZoom - 1);
        }
        if (newTop > 0) {
            newTop = 0;
        } else if (newTop < -height * (newZoom - 1)) {
            newTop = -height * (newZoom - 1);
        }
        mapRef.current.style.left = poiRef.current.style.left = `${newLeft}px`;
        mapRef.current.style.top = poiRef.current.style.top = `${newTop}px`;
        setTimeout(() => {
            wheelRef.current = false;
        }, 300);
    };

    const removeDrag = () => {
        if (!shadowRef.current || !mapRef.current || !poiRef.current) return;
        mapRef.current.style.transitionProperty =
            poiRef.current.style.transitionProperty = "";
        shadowRef.current.removeEventListener("mousemove", dragging);
    };

    const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (
            !mapRef.current ||
            !anchorRef.current ||
            !poiRef.current ||
            !shadowRef.current
        )
            return;
        const { left, top } = mapRef.current.getBoundingClientRect();
        anchorRef.current = [e.clientX - left, e.clientY - top];
        mapRef.current.style.transitionProperty =
            poiRef.current.style.transitionProperty = "none";
        shadowRef.current.addEventListener("mousemove", dragging);
        shadowRef.current.addEventListener("mouseleave", removeDrag);
    };

    const offDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        removeDrag();
    };

    const dragging = (e: MouseEvent) => {
        if (!mapRef.current || !boundRef.current || !poiRef.current) return;
        const {
            left: boundLeft,
            width,
            top: boundTop,
            height,
        } = boundRef.current.getBoundingClientRect();
        let newLeft = e.clientX - anchorRef.current[0] - boundLeft;
        let newTop = e.clientY - anchorRef.current[1] - boundTop;
        if (newLeft > 0) {
            newLeft = 0;
        } else if (newLeft < -width * (zoom - 1)) {
            newLeft = -width * (zoom - 1);
        }
        if (newTop >= 0) {
            newTop = 0;
        } else if (newTop < -height * (zoom - 1)) {
            newTop = -height * (zoom - 1);
        }
        mapRef.current.style.left = poiRef.current.style.left = `${newLeft}px`;
        mapRef.current.style.top = poiRef.current.style.top = `${newTop}px`;
    };

    return (
        <>
            <div
                ref={shadowRef}
                className="z-2 absolute aspect-[41/19] max-sm:w-full sm:h-full cursor-grab shadow-[inset_0_0_100px_black,inset_0_0_50px_black]"
                onWheel={processZoom}
                onMouseDown={onDrag}
                onMouseUp={offDrag}
            >
                <POI poiRef={poiRef} />
            </div>
            <Zoom zoom={zoom} />
        </>
    );
};

const Zoom: React.FC<{ zoom: number }> = ({ zoom }) => {
    const SIZE = 20;
    const LINE_SIZE = 36;
    return (
        <div className="max-sm:scale-50 absolute z-10 left-[30%] bottom-6 w-[40%] flex items-center justify-center flex-col bg-gradient-to-r from-transparent to-transparent via-sea-green-dark">
            <div
                className="w-[50%] flex items-center relative"
                style={{ height: `${LINE_SIZE}px` }}
            >
                <div className="w-full h-0.5 bg-white flex justify-between items-center">
                    {Array.from({ length: MAX_ZOOM / FACTOR - 1 }).map(
                        (_, i: number) => (
                            <div
                                key={i}
                                className={`bg-white w-0.5`}
                                style={{
                                    height: `${
                                        i % ((MAX_ZOOM - 1) / FACTOR) === 0
                                            ? LINE_SIZE / 2
                                            : i % 2 === 0
                                            ? LINE_SIZE / 4
                                            : LINE_SIZE / 8
                                    }px`,
                                }}
                            />
                        )
                    )}
                </div>
                <div
                    className="absolute flex items-center justify-center transition-[left]"
                    style={{
                        width: `${SIZE}px`,
                        height: `${SIZE}px`,
                        transform: `translateX(-${
                            SIZE / 2 +
                            (zoom > (MAX_ZOOM + MIN_ZOOM) / 2 ? 1 : -1)
                        }px)`,
                        left: `${((zoom - 1) / (MAX_ZOOM - 1)) * 100}%`,
                    }}
                >
                    <div
                        className="bg-white rotate-[45deg] w-full h-full"
                        style={{
                            transform: `rotate(45deg)`,
                        }}
                    />
                    <span className="text-black text-base absolute">
                        {zoom}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Continents: React.FC<{
    mapRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ mapRef }) => {
    return (
        <div
            ref={mapRef}
            className="z-[1] top-0 left-0 absolute transition-[height,top,left] aspect-[41/19] max-sm:w-full sm:h-full"
        >
            <Grids mapRef={mapRef} />
            <SVG />
        </div>
    );
};

const Grids: React.FC<{ mapRef: MutableRefObject<HTMLDivElement | null> }> = ({
    mapRef,
}) => {
    const boxSize = 2;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimension, setDimension] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        if (!mapRef.current) return;
        setDimension([mapRef.current.clientWidth, mapRef.current.clientHeight]);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;
        const width = canvas.width;
        const height = canvas.height;

        context.clearRect(0, 0, width, height);

        for (let x = boxSize; x <= 100 - boxSize; x += boxSize) {
            context.beginPath();
            context.moveTo((x / 100) * width, 0);
            context.lineTo((x / 100) * width, height);
            context.strokeStyle = "#1a827c";
            context.lineWidth = 1;
            context.stroke();
        }
        const yStart = Math.round((boxSize * width) / height);
        for (let y = yStart; y <= 100 - yStart; y += yStart) {
            context.beginPath();
            context.moveTo(0, (y / 100) * height);
            context.lineTo(width, (y / 100) * height);
            context.strokeStyle = "#1a827c";
            context.lineWidth = 1;
            context.stroke();
        }
    }, [mapRef.current]);

    return (
        <canvas
            className="z-[1] absolute w-full h-full"
            width={dimension[0]}
            height={dimension[1]}
            ref={canvasRef}
        />
    );
};
