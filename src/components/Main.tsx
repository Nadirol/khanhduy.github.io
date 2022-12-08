import projectList from "../projectList";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { AboutSection, ContactSection, Popup, ProjectsSection, SkillsSection } from "./home";

let sliderAutoScroll: NodeJS.Timer;
let selectedProjectIndex = 0

const Main = ({ popupVisible, setPopupVisible }: 
    { popupVisible: boolean, setPopupVisible: React.Dispatch<SetStateAction<boolean>> }): JSX.Element => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(1)
    const [imageSlides, setImageSlides] = useState(['']);
    const imageSlider = useRef<HTMLDivElement>(null);

    const turnOnPopup = (index: number) => {
        selectedProjectIndex = index
        setPopupVisible(true);

        setImageSlides(() => {
            console.log(selectedProjectIndex)
            const slides = [...projectList[selectedProjectIndex].images]
            slides.unshift(slides[slides.length - 1])
            return slides
        });

        autoScrollOn();
    };

    const autoScrollOn = () => {
        sliderAutoScroll = setInterval(() => {
            if (imageSlider.current) {
                setActiveSlideIndex((prevIndex: number) => prevIndex + 1)
            }
        }, 2000);
    }

    const autoScrollOff = () => { clearInterval(sliderAutoScroll) }

    useEffect(() => {
        setImageSlides(prevSlides => {
            prevSlides.push(prevSlides[activeSlideIndex - 1])
            return prevSlides
        })

        imageSlider.current?.scrollBy(
            {
                top: 0,
                left: 1,
                behavior : "smooth"
            }
        );
    }, [activeSlideIndex])

    const turnOffPopup = () => {
        setPopupVisible(false)
        setImageSlides([''])
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