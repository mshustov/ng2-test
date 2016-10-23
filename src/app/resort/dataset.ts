import { Resort } from './index';

export const tags = ['hotel', 'fishing', 'tours', 'weather'];

export const resorts: Resort[] = [
    {
        id: 1,
        name: 'Resort Alpha',
        description: 'Sed perspiciatis',
        address: 'Et harum quidem',
        phone: 'Tel:+1285 968 685',
        temperature: '37',
        social: {
            following: 370,
            followers: 129
        },
        tags: ['hotel', 'fishing'],
        imageUrls: [
            'images/resort1.jpeg'
        ]
    },
    {
        id: 2,
        name: 'Resort Beta',
        description: 'Sed perspiciatis',
        address: 'Et harum quidem',
        phone: 'Tel:+1285 968 685',
        temperature: '24',
        social: {
            following: 862,
            followers: 761
        },
        tags: ['weather', 'tours'],
        imageUrls: [
            'images/resort2.jpeg'
        ]
    },
    {
        id: 3,
        name: 'Resort Gamma',
        description: 'Sed perspiciatis',
        address: 'Et harum quidem',
        phone: 'Tel:+1285 968 685',
        temperature: '20',
        social: {
            following: 71,
            followers: 45
        },
        tags: ['tours', 'hotel'],
        imageUrls: [
            'images/resort3.jpeg'
        ]
    }
]
