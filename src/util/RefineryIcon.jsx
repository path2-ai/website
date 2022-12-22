export function RefineryIcon({ width = 24, height = 24, ...props }) {
    return <svg width={width} height={height} viewBox="0 0 597 558" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.709 220.238H0V545.894C0 552.536 5.3842 557.92 12.026 557.92H542.946C549.588 557.92 554.972 552.536 554.972 545.894V337.693H449.263V440.185C449.263 446.827 443.879 452.211 437.237 452.211H117.735C111.093 452.211 105.709 446.827 105.709 440.185V220.238Z" fill="url(#paint0_linear_939_550)" />
        <path d="M490.371 337.684H596.08V12.028C596.08 5.38617 590.696 0.00195312 584.054 0.00195312L53.1337 0.00195312C46.4919 0.00195312 41.1077 5.38617 41.1077 12.028V220.229H146.817V117.737C146.817 111.095 152.201 105.711 158.843 105.711L478.345 105.711C484.987 105.711 490.371 111.095 490.371 117.737V337.684Z" fill="url(#paint1_linear_939_550)" />
        <defs>
            <linearGradient id="paint0_linear_939_550" x1="114.161" y1="388.158" x2="436.096" y2="388.158" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5DE079" />
                <stop offset="1" stopColor="#75EA8E" />
            </linearGradient>
            <linearGradient id="paint1_linear_939_550" x1="486.325" y1="168.961" x2="152.974" y2="168.961" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5DE079" />
                <stop offset="1" stopColor="#75EA8E" />
            </linearGradient>
        </defs>
    </svg>

}

export function RefineryIconScheme({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <g clip-path="url(#clip0_1051_528)">
                <rect x="4" y="9" width="14" height="10" rx="1" stroke="#A3E635" stroke-width="2" mask="url(#path-1-inside-1_1051_528)" />
                <rect x="6" y="5" width="14" height="10" rx="1" stroke="#A3E635" stroke-width="2" mask="url(#path-2-inside-2_1051_528)" />
            </g>
            <defs>
                <clipPath id="clip0_1051_528">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>);
}
