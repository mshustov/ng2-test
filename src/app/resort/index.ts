interface Social {
    following: number
    followers: number
}

export class Resort {
    id: number
    name: string
    address: string
    description: string
    phone: string
    temperature: string
    social: Social
    tags: string[]

    imageUrls: string[]
}
