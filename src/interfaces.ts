export interface project {
    id: number,
    title: string,
    preview: string,
    stack: string[],
    shortDescription: string,
    fullDescription: () => JSX.Element,
    primaryColor: string,
    codeLink: string,
    demoLink: string,
    images: string[],
}

export interface cardProject {
    title: string,
    preview: string,
    stack: string[],
    shortDescription: string,
    primaryColor: string,
    codeLink: string,
    demoLink: string,
    popupToggle: () => void,
}

export interface cardSkill {
    title: string,
    image: string,
    description: string,
    link: string,
}