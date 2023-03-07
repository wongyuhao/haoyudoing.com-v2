
export default interface cvLineItem {
    name: string,
    value: string,
    owner?: string | undefined
}

export default interface cvAPIResponse{
    items: cvLineItem[],
    images: string[],
    pipeline_elapsed: string,
    total_elapsed: string
}

