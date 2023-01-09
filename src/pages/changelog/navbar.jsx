import { IconAirBalloon, IconBrandOpenSource, IconCode, IconDatabaseExport, IconFilter, IconLoader, IconNote, IconUser, IconWall } from "@tabler/icons";

export const logs = [
    {
        title: 'Release of bricks',
        href: 'v1_7_0',
        icon: IconWall,
        date: '2022-12-10',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Data browser extension',
        href: 'v1_6_0',
        icon: IconFilter,
        date: '2022-11-21',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Customizable record export',
        href: 'v1_5_0',
        icon: IconDatabaseExport,
        date: '2022-11-02',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Comments and notes',
        href: 'v1_4_0',
        icon: IconNote,
        date: '2022-10-13',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Attribute calculations',
        href: 'v1_3_0',
        icon: IconCode,
        date: '2022-09-27',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Updating logic',
        href: 'v1_2_0',
        icon: IconLoader,
        date: '2022-09-12',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'Playground preparations',
        href: 'v1_1_0',
        icon: IconAirBalloon,
        date: '2022-18-08',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    },
    {
        title: 'We went open-source!',
        href: 'v1_0_0',
        icon: IconBrandOpenSource,
        date: '2022-07-16',
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    }
]

export default function Navbar() {
    return (
        <div>
            {/* hack */}
        </div>
    )
}