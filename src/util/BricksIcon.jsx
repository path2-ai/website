import * as React from "react";

export function BricksIcon({ width = 24, height = 24, ...props }) {
    return <svg width={width} height={height} viewBox="0 0 395 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.1289 0H0V231.448C0 236.168 3.82663 239.995 8.54703 239.995H385.88C390.6 239.995 394.427 236.168 394.427 231.448V83.4765H319.298V156.319C319.298 161.04 315.471 164.866 310.751 164.866H83.6759C78.9555 164.866 75.1289 161.04 75.1289 156.319V0Z" fill="url(#paint0_linear_941_691)" />
        <path d="M319.795 240H394.924V8.55197C394.924 3.83157 391.097 0.00492859 386.377 0.00492859L9.04422 0.00492859C4.32379 0.00492859 0.497162 3.83157 0.497162 8.55197V156.523H75.6261V83.6809C75.6261 78.9605 79.4527 75.1338 84.1731 75.1338L311.248 75.1338C315.968 75.1338 319.795 78.9605 319.795 83.6809V240Z" fill="url(#paint1_linear_941_691)" />
        <defs>
            <linearGradient id="paint0_linear_941_691" x1="32.769" y1="8.64281" x2="32.769" y2="82.8318" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E7C23E" />
                <stop offset="1" stopColor="#DFBD40" />
            </linearGradient>
            <linearGradient id="paint1_linear_941_691" x1="28.6988" y1="124.265" x2="29.2232" y2="177.22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E7C23E" />
                <stop offset="1" stopColor="#F5D14E" stopOpacity="0.8" />
            </linearGradient>
        </defs>
    </svg>
}

export function BricksIconScheme({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <g clip-path="url(#clip0_1051_511)">
                <rect x="5" y="12" width="14" height="10" rx="1" stroke="#A3E635" stroke-width="2" mask="url(#path-1-inside-1_1051_511)" />
            </g>
            <defs>
                <clipPath id="clip0_1051_511">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>);
}
