export const FEVA: React.FC<{ full?: boolean }> = ({ full }) => {
    return (
        <div className={`w-full h-full bg-[#a11515] flex items-center justify-center ${full ? "tracking-[5px] text-[5rem]" : "tracking-[0.5px] text-[2rem]"}`}>
            FEVA
        </div>
    )
}