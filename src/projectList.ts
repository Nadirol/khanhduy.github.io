import DaltyDescription from "./components/projectDescriptions/DaltyDescription"

type project = {
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

const projectList: project[] = [
    {
        id: 1,
        title: 'Dalty Traveling App',
        preview: 'images/dalty preview 2.png',
        stack: ['ReactJS','TailwindCSS','Node.js','REST API'],
        shortDescription: 'Dalty is an application where users can quickly discover new  destinations based on street/city name, radius or categories and view the details of each destination.',
        fullDescription: DaltyDescription,
        primaryColor: 'light-yellow',
        codeLink: 'https://github.com/Nadirol/Dalty-Traveling-App',
        demoLink: 'https://dalty-traveling.netlify.app/',
        images: ['images/dalty/dalty desktop 1.jpg','images/dalty/dalty desktop 2.jpg','images/dalty/dalty desktop 3.jpg','images/dalty/dalty desktop 4.jpg','images/dalty/dalty desktop 5.jpg','images/dalty/dalty dark.jpg',],
    },
    {
        id: 2,
        title: 'Portfolio',
        preview: 'images/portfolio preview.png',
        stack: ['ReactJS','TailwindCSS','Node.js','TypeScript'],
        shortDescription: 'Dalty is an application where users can quickly discover new  destinations based on street/city name, radius or categories and view the details of each destination.',
        fullDescription: DaltyDescription,
        primaryColor: 'default',
        codeLink: 'https://github.com/Nadirol/Dalty-Traveling-App',
        demoLink: 'https://dalty-traveling.netlify.app/',
        images: ['images/dalty/dalty desktop 1.jpg','images/dalty/dalty desktop 2.jpg','images/dalty/dalty desktop 3.jpg','images/dalty/dalty desktop 4.jpg','images/dalty/dalty desktop 5.jpg','images/dalty/dalty dark.jpg',],
    }
]

export default projectList;
