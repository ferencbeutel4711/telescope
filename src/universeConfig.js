module.exports = {
    stars: [
        {
            name: 'Sol',
            style: {
                hue: 45,
                saturation: 78,
                lightness: 72,
            },
            position: {
                x: 5000,
                y: 5000,
                size: 20
            },
            planets: [
                {
                    name: 'Merkur',
                    officialName: 'Sol-1',
                    startingDeg: 110,
                    distanceToStar: 0.175,
                    size: 6,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.25
                },
                {
                    name: 'Venus',
                    officialName: 'Sol-2',
                    startingDeg: 220,
                    distanceToStar: 0.2,
                    size: 8,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.22
                },
                {
                    name: 'Erde',
                    officialName: 'Sol-3',
                    startingDeg: 90,
                    distanceToStar: 0.25,
                    size: 14,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.18
                },
                {
                    name: 'Mars',
                    officialName: 'Sol-4',
                    startingDeg: 0,
                    distanceToStar: 0.325,
                    size: 18,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.16
                },
                {
                    name: 'Jupiter',
                    officialName: 'Sol-5',
                    startingDeg: 190,
                    distanceToStar: 0.5,
                    size: 40,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.1
                },
                {
                    name: 'Saturn',
                    officialName: 'Sol-6',
                    startingDeg: 0,
                    distanceToStar: 0.625,
                    size: 36,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.066
                },
                {
                    name: 'Uranus',
                    officialName: 'Sol-7',
                    startingDeg: 120,
                    distanceToStar: 0.8,
                    size: 28,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.02
                },
                {
                    name: 'Neptun',
                    officialName: 'Sol-8',
                    startingDeg: 280,
                    distanceToStar: 0.95,
                    size: 26,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.01
                },
            ],
            gates: [
                {
                    name: 'First Contact',
                    target: 'Alpha I',
                    tier: 'SMALL',
                },
                {
                    name: 'New Horizon',
                    target: 'Alpha II',
                    tier: 'MEDIUM',
                }
            ]
        },
        {
            name: 'Alpha I',
            style: {
                hue: 28,
                saturation: 58,
                lightness: 60,
            },
            position: {
                x: 4300,
                y: 4500,
                size: 40
            },
            planets: [
                {
                    name: 'unknown',
                    officialName: 'Alpha I-1',
                    startingDeg: 90,
                    distanceToStar: 0.5,
                    size: 15,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.075
                },
            ],
            gates: [
                {
                    name: 'Gate I',
                    target: 'Alpha II',
                    tier: 'SMALL'
                }
            ]
        },
        {
            name: 'Alpha II',
            style: {
                hue: 227,
                saturation: 37,
                lightness: 80,
            },
            position: {
                x: 3300,
                y: 5200,
                size: 36
            },
            planets: [
                {
                    name: 'unknown',
                    officialName: 'Alpha II-1',
                    startingDeg: 40,
                    distanceToStar: 0.37,
                    size: 12,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.1
                },
                {
                    name: 'unknown',
                    officialName: 'Alpha II-2',
                    startingDeg: 60,
                    distanceToStar: 0.52,
                    size: 18,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.05
                },
            ],
            gates: [
                {
                    name: 'Gate I',
                    target: 'Alpha I',
                    tier: 'SMALL'
                },
                {
                    name: 'Gate II',
                    target: 'Sol',
                    tier: 'MEDIUM'
                }
            ]
        },
    ]
}
