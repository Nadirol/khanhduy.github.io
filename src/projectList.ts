import DaltyDescription from "./components/projectDescriptions/DaltyDescription";
import PortfolioDescription from "./components/projectDescriptions/PortfolioDescription";
import { project } from "./interfaces";

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
        shortDescription: 'Personal portfolio built to display summary about myself and my technical skills, showcase of my projects.',
        fullDescription: PortfolioDescription,
        primaryColor: 'default',
        codeLink: 'https://github.com/Nadirol/khanhduy.github.io',
        demoLink: 'https://www.figma.com/file/JpNjrZ9fXGL3ZXeZSYcm4u/Untitled?node-id=0%3A1&t=FalTZUM0Nf4uORIi-3',
        images: ['images/portfolio preview.png','images/portfolio/skills.png','images/portfolio/projects.png','images/portfolio/light.png'],
    }
]

export default projectList;
