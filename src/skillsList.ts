type skill = {
    id: number,
    title: string,
    image: string,
    description: string,
    link: string,
}

const skillsList: skill[] = [
    {
        id: 1,
        title: 'HTML',
        image: 'images/732212.png',
        description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
        link: 'https://html.com/',
    },
    {
        id: 2,
        title: 'CSS',
        image: 'images/CSS3_logo.png',
        description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
        link: 'https://en.wikipedia.org/wiki/CSS',
    },
    {
        id: 3,
        title: 'JavaScript',
        image: 'images/JavaScript-logo.png',
        description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
        link: 'https://www.javascript.com/',
    },
    {
        id: 4,
        title: 'ReactJS',
        image: 'images/1611079.png',
        description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
        link: 'https://reactjs.org/',
    },
    {
        id: 5,
        title: 'TailwindCSS',
        image: 'images/Tailwind_CSS_Logo.png',
        description: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
        link: 'https://tailwindcss.com/',
    },
    {
        id: 6,
        title: 'TypeScript',
        image: 'images/Typescript_logo_2020.png',
        description: 'TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
        link: 'https://www.typescriptlang.org/',
    },
    {
        id: 7,
        title: 'Node.js',
        image: 'images/nodejs-1-logo-png-transparent.png',
        description: 'Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment.',
        link: 'https://nodejs.org/en/'
    },
    {
        id: 8,
        title: 'Python',
        image: 'images/5848152fcef1014c0b5e4967.png',
        description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.',
        link: 'https://www.python.org/',
    },
]

export default skillsList;