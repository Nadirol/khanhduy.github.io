import skillsList from "../skillsList";
import SkillCard from "./SkillCard";
import projectList from "../projectList";
import ProjectCard from "./ProjectCard";
import { useState, useRef, useEffect } from "react";

let sliderAutoScroll: any;
let images: string[] = ['']

const Main = ({ popupVisible, setPopupVisible }: any): JSX.Element => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const [activeSlideIndex, setActiveSlideIndex] = useState(1)
    const [imageSlides, setImageSlides] = useState<any>(images);
    const imageSlider = useRef<HTMLDivElement>(null);

    const turnOnPopup = (index: number) => {
        setSelectedProjectIndex(index)
        setPopupVisible(true);
        images = [...projectList[selectedProjectIndex].images]
        images.unshift(images[images.length - 1])
        setImageSlides(images)

        autoScrollOn()
    };

    const autoScrollOn = () => {
        sliderAutoScroll = setInterval(() => {
            if (imageSlider.current) {
                setActiveSlideIndex((prevIndex: number) => prevIndex + 1)
            }
        }, 5000);
    }

        
    const autoScrollOff = () => { clearInterval(sliderAutoScroll) }

    useEffect(() => {
        images.push(images[activeSlideIndex - 1])
        setImageSlides(images)

        console.log(activeSlideIndex)

        imageSlider.current?.scrollBy(
            {
                top: 0,
                left: 1,
                behavior : "smooth"
            }
        );
    }, [activeSlideIndex])    

    useEffect(() => {
        imageSlider.current?.scrollTo(0,0)
    },[popupVisible])

    const turnOffPopup = () => {
        setPopupVisible(false)
        images = ['']
        setImageSlides(images)
        setActiveSlideIndex(1)
        autoScrollOff()
    }

    const contactFormSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <main className="w-container mx-auto z-10">
            <section id="about" className="min-h-section">
                <div className="mt-4 py-7 pl-[6.375rem] grid gap-6 grid-cols-sm-lg">
                    <div className="pt-[84px]">
                        <div className="flex gap-6 flex-col mb-7">
                            <h2 className="text-neutral-50 font-exo-2 font-semibold text-4xl leading-none">
                                Hi, my name is
                            </h2>
                            <h1 className="text-primary-dark-light font-exo-2 font-semibold text-[4.5rem] leading-none">
                                KHANH DUY
                            </h1>
                            <h3 className="text-accent-dark-light font-exo-2 font-semibold text-[2rem] leading-none tracking-widest">
                                Software Developer
                            </h3>
                        </div>

                        <ul className="flex gap-6 flex-col">
                            <li className="flex gap-[14px] items-center">
                                <img src="/images/point icon.svg" alt="" />
                                <h1 className="profile-link">Hanoi, Vietnam</h1>
                            </li>
                            <li className="flex gap-[14px] items-center">
                                <img src="/images/mail icon.svg" alt="" />
                                <h1 className="profile-link">khanhduycb1510@gmail.com</h1>
                            </li>
                            <li className="flex gap-[14px] items-center">
                                <img src="/images/github icon.svg" alt="" />
                                <a className="profile-link">github.com/Nadirol</a>
                            </li>
                            <li className="flex gap-[14px] items-center">
                                <img src="/images/linkedin icon.svg" alt="" />
                                <a className="profile-link">linkedin.com/in/duy-khanh-182144231</a>
                            </li>
                            <li className="flex gap-[14px] items-center">
                                <img src="/images/pdf icon.svg" alt="" />
                                <a className="profile-link">Résume</a>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-[84px] ">
                        <p className="about-paragraph mr-auto max-w-[438px] mb-[80px]">
                            I’m a passionate and creative programmer who aim to build 
                            websites with 
                            <span className="text-primary-dark-light">&nbsp;beautiful&nbsp;</span> UI and 
                            <span className="text-primary-dark-light">&nbsp;intuitive&nbsp;</span> UX using up-to-date technologies.
                        </p>
                        <p className="about-paragraph mr-10 ml-auto text-end max-w-[438px] mb-[136px]">
                            I Look forward to take part in a pofessional working environment to futher
                            <span className="text-primary-dark-light">&nbsp;improve&nbsp;</span>
                            and <span className="text-primary-dark-light">&nbsp;apply&nbsp;</span> my skills.
                        </p>
                        <div className="flex gap-2">
                            <h1 className="text-neutral-400 font-exo-2 font-normal text-xl leading-none">Interests:</h1>
                            <p className="text-neutral-50 font-exo-2 font-normal text-xl leading-none max-w-[387px]">
                                Programming, Graphic Designs, Music, Arts,  Creative Writing, Games. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="min-h-screen w-full mx-auto text-center">
                <h1 className="text-neutral-50 font-exo-2 font-semibold text-[80px] leading-none mb-[42px]">Skills</h1>
                <div className="flex gap-x-[4rem] gap-y-[6.5rem] flex-wrap justify-center">
                    {skillsList.map(item => (
                        <SkillCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
            </section>
            <section id="projects" className="min-h-screen text-center mb-16">
                <h1 className="text-neutral-50 font-exo-2 font-semibold text-[80px] leading-none mb-[42px]">Project</h1>
                <div className="flex gap-12 flex-col">
                    {projectList.map((item, index) => (
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            preview={item.preview}
                            stack={item.stack}
                            shortDescription={item.shortDescription}
                            primaryColor={item.primaryColor}
                            codeLink={item.codeLink}
                            demoLink={item.demoLink}
                            popupToggle={() => turnOnPopup(index)}
                        />
                    ))}
                </div>
            </section>
            { popupVisible && (
                <section className="">
                    <div className="fixed z-50 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 
                        bg-neutral-800 px-6 py-5 w-[1024px] max-h-[90vh] overflow-y-scroll scrollbar-hide">
                        <div className="ml-auto w-fit mb-6">
                            <button className="px-6 py-2 bg-neutral-200 hover:bg-neutral-400 rounded-[10px]" 
                                onClick={() => turnOffPopup()}>
                                Close
                            </button>
                        </div>
                        <div className={`flex gap-10 slider-x-snap mb-9`} ref={imageSlider}>
                            {imageSlides?.map((item: string, index: number) => (
                                <img src={item} key={index} alt="" loading="lazy"
                                    onMouseEnter={autoScrollOff}
                                    onMouseLeave={autoScrollOn}
                                    className={`w-[440px] hover:opacity-100
                                        ${activeSlideIndex === index ? 'opacity-100 snap-center' : 'opacity-50'}
                                        ${activeSlideIndex === 1 ? '' : 'snap-center'}`}/>
                            ))}
                        </div>
                        <div className="px-20">
                            <h1 className={`${projectList[selectedProjectIndex].primaryColor === 'light-yellow' 
                                ? 'text-light-yellow' : 'text-primary-dark-light'}
                                    font-exo-2 font-semibold text-4xl mb-9 text-center`}>
                                {projectList[selectedProjectIndex].title}
                            </h1>
                            <div className="flex gap-[18px] w-fit mx-auto mb-9">
                                <a href={projectList[selectedProjectIndex].codeLink} target="_blank" className={`border button-primary
                                    ${projectList[selectedProjectIndex].primaryColor === 'light-yellow' 
                                    ? 'border-light-yellow text-light-yellow hover:bg-light-yellow hover:text-neutral-900' 
                                    : 'border-primary-dark-light text-primary-dark-light hover:bg-primary-dark-light hover:text-neutral-900'}`}>
                                    Source Code
                                </a>
                                <a href={projectList[selectedProjectIndex].demoLink} target="_blank" className={`button-primary
                                    ${projectList[selectedProjectIndex].primaryColor === 'light-yellow' 
                                    ? 'bg-light-yellow hover:bg-regular-yellow' 
                                    : 'bg-primary-dark-light hover:bg-primary-dark-regular'}`}>
                                    Live Demo
                                </a>
                            </div>
                            <div className="flex gap-7 items-center mb-9">
                                <h1 className="text-neutral-50 font-exo-2 font-semibold text-xl leading-none my-auto">TechStack:</h1>
                                <div className="flex gap-6">
                                    {projectList[selectedProjectIndex].stack.map((item: string) => (
                                        <button key={item}
                                            className={`border button-primary
                                                ${projectList[selectedProjectIndex].primaryColor === 'light-yellow' 
                                                ? 'border-light-yellow text-light-yellow hover:bg-light-yellow hover:text-neutral-900' 
                                                : 'border-primary-dark-light text-primary-dark-light hover:bg-primary-dark-light hover:text-neutral-900'}`}>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                {projectList[selectedProjectIndex].fullDescription()}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <section id="contact" className="my-20">
                <h1 className="text-neutral-50 font-exo-2 font-semibold text-[2rem] mb-[4rem] text-center">
                    Thanks for taking a look,
                    Leave a feedback or message
                </h1>
                <form onSubmit={e => contactFormSubmit(e)} id="contact-form"
                    className="w-form mx-auto grid gap-x-[4.5rem] gap-y-9 grid-cols-2">
                    <div className="form-text">
                        <h1 className="mb-4">Your Name</h1>
                        <input type="text" required placeholder="Enter your name"
                            className="input-form"/>
                    </div>
                    <div className="form-text">
                        <h1 className="mb-4">Email</h1>
                        <input type="email" required placeholder="Enter your email"
                            className="input-form"/>
                    </div>
                    <div className="col-[1/-1] form-text">
                        <h1 className="mb-4">Message</h1>
                        <textarea name="message" form="contact-form" rows={10} placeholder="Leave a message.." 
                            className="input-form">
                        </textarea>
                    </div>
                    <input type="submit" value="Submit" 
                        className="mx-auto col-[1/-1] px-[30px] py-2 bg-primary-dark-light hover:bg-primary-dark-regular
                            text-neutral-900 font-exo-2 font-medium text-base leading-none rounded-[10px]"/>
                </form>
            </section>
            <h6 className="text-neutral-200 font-exo-2 font-normal text-xs leading-none">Copyright ©2022 Khanh Duy</h6>
        </main>
    )
}

export default Main;