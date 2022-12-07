import { cardProject } from "../../interfaces";

const ProjectCard = (
    { title, preview, stack, shortDescription, primaryColor, codeLink, demoLink, popupToggle }: cardProject): 
    JSX.Element => {
        return (
            <div className="grid gap-6 xl:gap-[120px] md:grid-cols-sm-lg">
                <div className="mx-auto">
                    <img src={preview} alt="project preview" className="w-preview mx-auto mb-[18px]"/>
                    <div className="flex gap-[18px] w-fit mx-auto">
                        <a href={codeLink} target="_blank" className={`border-0 dark:border button-primary 
                            ${primaryColor === 'light-yellow' 
                            ? 'button-light-yellow' 
                            : 'button-default'}`}>
                            Source Code
                        </a>
                        <a href={demoLink} target="_blank" className={`button-primary text-secondary-light-light dark:text-neutral-900
                            ${primaryColor === 'light-yellow' 
                            ? 'bg-light-yellow hover:bg-regular-yellow' 
                            : 'bg-primary-light-light dark:bg-primary-dark-light hover:bg-primary-light-regular dark:hover:bg-primary-dark-regular'}`}>
                            Live Demo
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-start">
                    <h1 className={`${primaryColor === 'light-yellow' ? 'text-light-yellow' : 'text-primary-light-light dark:text-primary-dark-light'}
                        font-exo-2 font-semibold text-4xl mb-5 drop-shadow-2xl dark:shadow-none`}>
                        {title}
                    </h1>
                    <div className="flex gap-x-6 flex-wrap -md:justify-center">
                        {stack.map((item: string) => (
                            <button key={item}
                                className={`border button-primary mb-5
                                ${primaryColor === 'light-yellow' 
                                ? 'button-light-yellow' 
                                : 'button-default'}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                    <p className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-normal text-2xl mb-3">
                        {shortDescription}
                    </p>
                    <button className={`${primaryColor === 'light-yellow' ? 'text-light-yellow' : 'text-primary-light-light dark:text-primary-dark-light'}
                        font-exo-2 font-medium text-base underline`} onClick={popupToggle}>
                            View More
                    </button>
                </div>
            </div>
        )
}

export default ProjectCard;