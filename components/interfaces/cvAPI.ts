

export default interface cvAPIResponse{
    items: {
        name: string,
        value: string
    }[],
    images: string[],
    pipeline_elapsed: string,
    total_elapsed: string
}