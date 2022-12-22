export function WorkflowIcon({ width = 24, height = 24, ...props }) {
    return <svg width={width} height={height} viewBox="0 0 597 564" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M202.235 349.413L153.354 407.668L332.817 558.256C336.477 561.327 341.934 560.849 345.005 557.189L590.51 264.608C593.581 260.948 593.104 255.491 589.444 252.42L474.708 156.145L425.826 214.399L482.308 261.793C485.968 264.864 486.446 270.321 483.374 273.981L335.632 450.053C332.561 453.714 327.104 454.191 323.444 451.12L202.235 349.413Z" fill="url(#paint0_linear_939_538)" />
        <path d="M425.837 214.403L474.719 156.148L295.255 5.56077C291.595 2.48953 286.138 2.96692 283.067 6.6271L37.5621 299.208C34.4909 302.869 34.9683 308.326 38.6284 311.397L153.365 407.672L202.246 349.417L145.764 302.024C142.104 298.952 141.627 293.495 144.698 289.835L292.44 113.763C295.511 110.103 300.968 109.625 304.629 112.697L425.837 214.403Z" fill="url(#paint1_linear_939_538)" />
        <path d="M158.434 413.821V489.867H392.706C397.484 489.867 401.358 485.994 401.358 481.216V99.278C401.358 94.4999 397.484 90.6266 392.706 90.6266H242.929L242.929 166.672H316.661C321.439 166.672 325.312 170.546 325.312 175.324V405.17C325.312 409.948 321.439 413.821 316.661 413.821H158.434Z" fill="url(#paint2_linear_939_538)" />
        <path d="M242.924 166.675V90.6289L8.65103 90.6289C3.87303 90.6289 -0.000350952 94.5022 -0.000350952 99.2803L-0.000350952 481.218C-0.000350952 485.996 3.87303 489.87 8.65103 489.87H158.428L158.428 413.824H84.6969C79.9188 413.824 76.0455 409.95 76.0455 405.172L76.0455 175.326C76.0455 170.548 79.9188 166.675 84.6969 166.675H242.924Z" fill="url(#paint3_linear_939_538)" />
        <defs>
            <linearGradient id="paint0_linear_939_538" x1="298.681" y1="422.404" x2="447.548" y2="244.991" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D6FDC" />
                <stop offset="1" stopColor="#4285F4" />
            </linearGradient>
            <linearGradient id="paint1_linear_939_538" x1="330.986" y1="138.613" x2="176.84" y2="322.317" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D6FDC" />
                <stop offset="1" stopColor="#4285F4" />
            </linearGradient>
            <linearGradient id="paint2_linear_939_538" x1="279.233" y1="407.741" x2="279.233" y2="176.145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D6FDC" />
                <stop offset="1" stopColor="#4285F4" />
            </linearGradient>
            <linearGradient id="paint3_linear_939_538" x1="121.547" y1="169.586" x2="121.547" y2="409.394" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D6FDC" />
                <stop offset="1" stopColor="#4285F4" />
            </linearGradient>
        </defs>
    </svg>
}

export function WorkflowIconScheme({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <g clip-path="url(#clip0_1051_524)">
                <rect x="5" y="9" width="10" height="10" rx="1" stroke="#A3E635" stroke-width="2" mask="url(#path-1-inside-1_1051_524)" />
                <rect x="6" y="14.0703" width="10" height="10" rx="1" transform="rotate(-45 6 12.0703)" stroke="#A3E635" stroke-width="2" mask="url(#path-2-inside-2_1051_524)" />
            </g>
            <defs>
                <clipPath id="clip0_1051_524">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>);
}
