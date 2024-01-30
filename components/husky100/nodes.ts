export interface HuskyNode {
    id: string,
    date: string
    out_edges: string[],
    title: string
    content: string
    images: string[]
}

export const nodes: Record<string, HuskyNode> = {
    past: {
        id: "past",
        date: '2001',
        out_edges: ['circle'],
        title: "past",
        content: "content about past",
        images: []
    },
    circle: {
        id: "circle",
        date: '2020-09-1',
        out_edges: ['unite', "cse"],
        title: "Circle",
        content: "content about unite uw",
        images: []
    },
    unite: {
        id: 'unite',
        date: '2020-09-2',
        out_edges: ['circle'],
        title: "Unite UW",
        content: "content about unite uw",
        images: []
    },
    cse: {
        id: 'cse',
        date: '2020-09-3',
        out_edges: ['internships', 'dubhacks'],
        title: "Allen school community",
        content: "content about uw cse",
        images: []
    },
    dubhacks: {
        id: 'dubhacks',
        date: '2020-10',
        out_edges: ['today'],
        title: "dubhacks",
        content: "content about dubhacks",
        images: []
    },
    internships: {
        id: 'internships',
        date: '2021-01',
        out_edges: ['today', "circle"],
        title: "internships",
        content: "content about internships",
        images: []
    },
    today: {
        id: 'today',
        date: '2024',
        out_edges: ['future'],
        title: "today",
        content: "content about today",
        images: []
    },
    future: {
        id: 'future',
        date: '2025',
        out_edges: [],
        title: "future",
        content: "content about future",
        images: []
    }

}

export type HuskyNodeKey = keyof typeof nodes;