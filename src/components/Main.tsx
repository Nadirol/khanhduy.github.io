import projectList from "../projectList";
import { useState, useRef, useEffect } from "react";
import { AboutSection, ContactSection, Popup, ProjectsSection, SkillsSection } from "./home";

let sliderAutoScroll: any;
let images: string[] = ['']

const Main = ({ popupVisible, setPopupVisible }: any): JSX.Element => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const [activeSlideIndex, setActiveSlideIndex] = useState(1)
    const [imageSlides, setImageSlides] = useState(images);
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
        }, 10000);
    }

    const autoScrollOff = () => { clearInterval(sliderAutoScroll) }

    useEffect(() => {
        images.push(images[activeSlideIndex - 1])
        setImageSlides(images)

        imageSlider.current?.scrollBy(
            {
                top: 0,
                left: 1,
                behavior : "smooth"
            }
        );
    }, [activeSlideIndex])

    console.log(document.querySelectorAll('.snap-center').length)

    const turnOffPopup = () => {
        setPopupVisible(false)
        images = ['']
        setImageSlides(images)
        setActiveSlideIndex(1)
        autoScrollOff()
    }

    return (
        <main className="w-container mx-auto">
            <AboutSection key="about"/>
            <SkillsSection  key="skills"/>
            <ProjectsSection key="projects" turnOnPopup={turnOnPopup}/>


            { popupVisible && (
                <Popup
                    key="popup"
                    turnOffPopup={turnOffPopup}
                    autoScrollOff={autoScrollOff}
                    autoScrollOn={autoScrollOn}
                    project={projectList[selectedProjectIndex]}
                    imageSlider={imageSlider}
                    imageSlides={imageSlides}
                    activeSlideIndex={activeSlideIndex}
                />
            )}
            <ContactSection />
            <h6 className="text-neutral-200 font-exo-2 font-normal text-xs leading-none">
                Copyright ©2022 Khanh Duy
            </h6>
        </main>
    )
}

export default Main;