export function GatesIcon({ width = 24, height = 24, ...props }) {
    return <svg width={width} height={height} viewBox="0 0 597 597" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M195.277 0.0078125L97.6461 10.2848L87.3691 575.52C87.3691 587.244 97.6461 596.074 107.923 596.074H499.595C504.638 596.074 508.726 586.57 508.726 574.846V207.335H400.817V385.396C400.817 397.119 397.084 508.72 375.125 508.72H215.831C190.139 508.72 195.277 399.975 195.277 388.251V0.0078125Z" fill="url(#paint0_linear_939_545)" />
        <path d="M0.0078125 400.795L5.14632 503.565L580.659 508.703C590.936 508.703 596.074 503.565 596.074 493.288L596.074 96.4772C596.074 91.4345 586.57 87.3466 574.846 87.3466L207.335 87.3466L207.335 195.255H385.396C397.119 195.255 508.72 198.988 508.72 220.948L508.72 380.241C508.72 405.934 399.975 400.795 388.251 400.795L0.0078125 400.795Z" fill="url(#paint1_linear_939_545)" />
        <path d="M400.816 596.066H508.725V21.228C508.725 10.2771 498.448 0.00012207 488.171 0.00012207H107.921C102.879 0.00012207 87.3674 9.50415 87.3674 21.228L87.3681 508.712H195.276V210.679C195.276 198.955 199.009 87.3546 220.968 87.3546H380.262C405.955 87.3546 400.816 196.099 400.816 207.823V596.066Z" fill="url(#paint2_linear_939_545)" />
        <path d="M596.066 195.279V87.3704L15.4156 87.3704C3.69177 87.3704 0.00012207 97.7439 0.00012207 102.787V493.313C0.00012207 498.356 3.69177 508.728 15.4156 508.728L400.803 508.728V400.819L210.679 400.819C199.882 400.819 104.385 400.819 89.3448 400.819C88.2074 400.819 87.3546 399.897 87.3546 398.76V197.338C87.3546 196.201 88.2102 195.279 89.3476 195.279C104.176 195.279 197.039 195.279 207.823 195.279L596.066 195.279Z" fill="url(#paint3_linear_939_545)" />
        <defs>
            <linearGradient id="paint0_linear_939_545" x1="180.588" y1="296.415" x2="425.014" y2="296.415" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5523F" />
                <stop offset="1" stopColor="#FB624E" />
            </linearGradient>
            <linearGradient id="paint1_linear_939_545" x1="296.415" y1="415.484" x2="296.415" y2="171.058" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5523F" />
                <stop offset="1" stopColor="#FB624E" />
            </linearGradient>
            <linearGradient id="paint2_linear_939_545" x1="415.505" y1="299.66" x2="171.08" y2="299.66" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5523F" />
                <stop offset="1" stopColor="#FB624E" />
            </linearGradient>
            <linearGradient id="paint3_linear_939_545" x1="299.66" y1="180.59" x2="299.66" y2="425.016" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5523F" />
                <stop offset="1" stopColor="#FB624E" />
            </linearGradient>
        </defs>
    </svg>

}

export function GatesIconScheme({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <g clip-path="url(#clip0_1051_517)">
                <rect x="5" y="9" width="14" height="10" rx="1" stroke="#A3E635" stroke-width="2" mask="url(#path-1-inside-1_1051_517)" />
                <rect x="5" y="19" width="14" height="10" rx="1" transform="rotate(-90 7 19)" stroke="#A3E635" stroke-width="2" mask="url(#path-2-inside-2_1051_517)" />
            </g>
            <defs>
                <clipPath id="clip0_1051_517">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>);
}
