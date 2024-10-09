export interface Usage {
    title: string,
    description: string,
    icon: string
}

export interface Project {
    description: string,
    title: string,
    usage: Usage[],
    image: string,
    github: string,
    viewProject: string,
    iframe?: boolean,
    videos?: string[]
}

export interface MinorProjects {
    title: string,
    description: string,
    tools: string[]
}