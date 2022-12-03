const ProjectCard = ({ title, preview, stack, shortDescription, primaryColor, codeLink, demoLink, popupToggle, }: any): JSX.Element => {
    return (
        <div className="grid gap-[120px] grid-cols-xs-lg">
            <div className="mx-auto">
                <img src={preview} alt="project preview" className="max-w-[330px] mb-[18px]"/>
                <div className="flex gap-[18px] w-fit mx-auto">
                    <a href={codeLink} target="_blank" className={`border button-primary
                        ${primaryColor === 'light-yellow' 
                        ? 'border-light-yellow text-light-yellow hover:bg-light-yellow hover:text-neutral-900' 
                        : 'border-primary-dark-light text-primary-dark-light hover:bg-primary-dark-light hover:text-neutral-900'}`}>
                        Source Code
                    </a>
                    <a href={demoLink} target="_blank" className={`button-primary
                        ${primaryColor === 'light-yellow' 
                        ? 'bg-light-yellow hover:bg-regular-yellow' 
                        : 'bg-primary-dark-light hover:bg-primary-dark-regular'}`}>
                        Live Demo
                    </a>
                </div>
            </div>
            <div className="text-start">
                <h1 className={`${primaryColor === 'light-yellow' ? 'text-light-yellow' : 'text-primary-dark-light'}
                    font-exo-2 font-semibold text-4xl mb-5`}>
                    {title}
                </h1>
                <div className="flex gap-6 flex-wrap">
                    {stack.map((item: string) => (
                        <button key={item}
                            className={`border button-primary mb-5
                            ${primaryColor === 'light-yellow' 
                            ? 'border-light-yellow text-light-yellow hover:bg-light-yellow hover:text-neutral-900' 
                            : 'border-primary-dark-light text-primary-dark-light hover:bg-primary-dark-light hover:text-neutral-900'}`}>
                            {item}
                        </button>
                    ))}
                </div>
                <p className="text-neutral-50 font-exo-2 font-normal text-2xl mb-3">
                    {shortDescription}
                </p>
                <button className={`${primaryColor === 'light-yellow' ? 'text-light-yellow' : 'text-primary-dark-light'}
                    font-exo-2 font-medium text-base underline`} onClick={popupToggle}>
                        View More
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;