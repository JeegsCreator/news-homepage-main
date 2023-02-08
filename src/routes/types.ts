export interface blogData {
    title: string,
    description: string,
    image?: string
}

export interface returnData {
    main?: blogData,
    news?: blogData[],
    popular?: blogData[]
}