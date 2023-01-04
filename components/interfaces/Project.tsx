export default interface Project{
    id: string,
    name: string,
    thumbnail: {
        url: URL
    },
    url: URL,
    description: string
}