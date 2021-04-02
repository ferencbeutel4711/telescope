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
                size: 25
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
                    name: 'First Expansion',
                    target: 'Aldebaran',
                    tier: 'CAPITAL',
                },
                {
                    name: 'New Frontier',
                    target: 'Beta Caeli',
                    tier: 'MEDIUM',
                },
                {
                    name: 'Argus',
                    target: 'Nu Pegasi',
                    tier: 'SMALL',
                },
            ]
        },
        {
            name: 'Aldebaran',
            style: {
                hue: 100,
                saturation: 35,
                lightness: 70,
            },
            position: {
                x: 4600,
                y: 4700,
                size: 40
            },
            planets: [
                {
                    name: 'Saruta',
                    officialName: 'Aldebaran-1',
                    startingDeg: 90,
                    distanceToStar: 0.3,
                    size: 10,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.25
                },
                {
                    name: 'Yalvion',
                    officialName: 'Aldebaran-2',
                    startingDeg: 110,
                    distanceToStar: 0.425,
                    size: 25,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.1
                },
                {
                    name: 'Xephus',
                    officialName: 'Aldebaran-3',
                    startingDeg: 220,
                    distanceToStar: 0.8,
                    size: 90,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.01
                },
            ],
            gates: [
                {
                    name: 'The Turning Point',
                    target: 'Beta Caeli',
                    tier: 'SMALL'
                },
                {
                    name: 'First Expansion',
                    target: 'Sol',
                    tier: 'LARGE'
                },
                {
                    name: 'Independence',
                    target: 'Rigel',
                    tier: 'SMALL'
                },
            ]
        },
        {
            name: 'Beta Caeli',
            style: {
                hue: 69,
                saturation: 34,
                lightness: 65,
            },
            position: {
                x: 3500,
                y: 5100,
                size: 30
            },
            planets: [
                {
                    name: 'Ellenope',
                    officialName: 'Beta Caeli-1',
                    startingDeg: 40,
                    distanceToStar: 0.225,
                    size: 8,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.5
                },
                {
                    name: 'Gisulia',
                    officialName: 'Beta Caeli-2',
                    startingDeg: 80,
                    distanceToStar: 0.355,
                    size: 25,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.2
                },
                {
                    name: 'Ungora',
                    officialName: 'Beta Caeli-3',
                    startingDeg: 320,
                    distanceToStar: 0.6,
                    size: 70,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.1
                },
                {
                    name: 'Golla F',
                    officialName: 'Beta Caeli-4',
                    startingDeg: 200,
                    distanceToStar: 0.8,
                    size: 55,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.075
                },
            ],
            gates: [
                {
                    name: 'The Turning Point',
                    target: 'Aldebaran',
                    tier: 'SMALL'
                },
            ]
        },
        {
            name: 'Nu Pegasi',
            style: {
                hue: 187,
                saturation: 50,
                lightness: 55,
            },
            position: {
                x: 4000,
                y: 6000,
                size: 10
            },
            planets: [
                {
                    name: 'Pegasus',
                    officialName: 'Nu Pegasi-1',
                    startingDeg: 100,
                    distanceToStar: 0.1,
                    size: 6,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.7
                },
                {
                    name: 'Thobanus',
                    officialName: 'Nu Pegasi-2',
                    startingDeg: 210,
                    distanceToStar: 0.24,
                    size: 22,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.24
                },
            ],
            gates: [
                {
                    name: 'Argo',
                    target: 'Sol',
                    tier: 'SMALL'
                },
            ]
        },
        {
            name: 'Rigel',
            style: {
                hue: 52,
                saturation: 60,
                lightness: 60,
            },
            position: {
                x: 4200,
                y: 4500,
                size: 14
            },
            planets: [
                {
                    name: 'Remiuq',
                    officialName: 'Rigel-1',
                    startingDeg: 20,
                    distanceToStar: 0.55,
                    size: 40,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.125
                },
                {
                    name: 'Veogawa',
                    officialName: 'Rigel-2',
                    startingDeg: 265,
                    distanceToStar: 0.95,
                    size: 12,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.25
                },
            ],
            gates: [
                {
                    name: 'Independence',
                    target: 'Aldebaran',
                    tier: 'SMALL'
                },
            ]
        },
        {
            name: 'New Sol',
            style: {
                hue: 226,
                saturation: 66,
                lightness: 54,
            },
            position: {
                x: 7000,
                y: 5000,
                size: 30
            },
            planets: [
                {
                    name: 'HELHEIM',
                    officialName: 'New Sol-1',
                    startingDeg: 60,
                    distanceToStar: 0.225,
                    size: 8,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.55
                },
                {
                    name: 'Terra',
                    officialName: 'New Sol-2',
                    startingDeg: 40,
                    distanceToStar: 0.35,
                    size: 20,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.175
                },
                {
                    name: 'Valhalla',
                    officialName: 'New Sol-3',
                    startingDeg: 90,
                    distanceToStar: 0.55,
                    size: 40,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.1
                },
                {
                    name: 'Niflheim',
                    officialName: 'New Sol-4',
                    startingDeg: 220,
                    distanceToStar: 0.8,
                    size: 60,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.05
                },
                {
                    name: 'Gioll',
                    officialName: 'New Sol-5',
                    startingDeg: 110,
                    distanceToStar: 0.975,
                    size: 6,
                    color: 'rgba(255, 255, 255, 1)',
                    rotationSpeed: 0.4
                },
            ],
            gates: [
            ]
        },
    ]
}
