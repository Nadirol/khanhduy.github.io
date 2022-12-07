import React from "react"

const Popup = (
    { turnOffPopup, autoScrollOff, autoScrollOn, project, imageSlider, imageSlides, activeSlideIndex }
    : { turnOffPopup: () => void,
        autoScrollOff: () => void,
        autoScrollOn:  () => void,
        project: any,
        imageSlider: React.RefObject<HTMLDivElement>
        imageSlides: string[]
        activeSlideIndex: number}) => {
    return (
        <section className="fixed z-50 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
        bg-neutral-100 dark:bg-neutral-800 bottom-fade">
            <div className="px-6 py-5 w-mobile-screen md:w-[786px] xl:w-[1024px] max-h-[90vh]
                overflow-y-scroll overscroll-y-contain scrollbar-hide ">
                <div className="ml-auto w-fit mb-6">
                    <button className="px-6 py-2 bg-neutral-100 hover:bg-neutral-400 rounded-[10px]" 
                        onClick={() => turnOffPopup()}>
                        Close
                    </button>
                </div>
                <div className={`flex gap-10 slider-x-snap mb-9`} ref={imageSlider}>
                    {imageSlides?.map((item: string, index: number) => (
                        <img src={item} key={index} alt=""
                            onMouseEnter={autoScrollOff}
                            onMouseLeave={autoScrollOn}
                            className={`w-[440px] hover:opacity-100
                                ${activeSlideIndex === index ? 'opacity-100 snap-center' : 'opacity-50'}
                                ${activeSlideIndex === 1 ? '' : 'snap-center'}`}/>
                    ))}
                </div>
                <div className="px-4 md:px-20 mb-20">
                    <h1 className={`${project.primaryColor === 'light-yellow' 
                        ? 'text-light-yellow' : 'text-primary-light-light dark:text-primary-dark-light'}
                            font-exo-2 font-semibold text-4xl mb-9 text-center`}>
                        {project.title}
                    </h1>
                    <div className="flex gap-[18px] w-fit mx-auto mb-9">
                        <a href={project.codeLink} target="_blank" className={`border button-primary
                            ${project.primaryColor === 'light-yellow' 
                            ? 'button-light-yellow' 
                            : 'button-default'}`}>
                            Source Code
                        </a>
                        <a href={project.demoLink} target="_blank" className={`button-primary text-secondary-light-light dark:text-neutral-900
                            ${project.primaryColor === 'light-yellow' 
                            ? 'bg-light-yellow hover:bg-regular-yellow' 
                            : 'bg-primary-light-light dark:bg-primary-dark-light hover:bg-primary-light-regular dark:hover:bg-primary-dark-regular'}`}>
                            Live Demo
                        </a>
                    </div>
                    <div className="flex gap-7 items-center mb-9">
                        <h1 className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-semibold text-xl leading-none mb-auto md:my-auto">TechStack:</h1>
                        <div className="flex gap-x-4 gap-y-2 md:gap-x-6 flex-wrap">
                            {project.stack.map((item: string) => (
                                <button key={item}
                                    className={`border button-primary
                                        ${project.primaryColor === 'light-yellow' 
                                        ? 'button-light-yellow' 
                                        : 'button-default'}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        {project.fullDescription()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popup;