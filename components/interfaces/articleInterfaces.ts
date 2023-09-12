export interface Article {
    id: string,
    boardName: string,
    description: string,
    displayImage: {
        url: string
    }
}

export interface ArticleData extends Article{
    content: string,
    case: string
    buildDate: string,
    soundtestLink: string,
}