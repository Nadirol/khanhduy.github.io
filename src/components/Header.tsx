import { useState } from "react";

const Header = ({ popupVisible }: any): JSX.Element => {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);

    const openNavMenu = () => {
        setNavMenuOpen(state => !state)
    }

    const closeNavMenu = () => {
        setNavMenuOpen(state => !state)
    }

    return (
        <header className={`w-container mx-auto flex justify-between items-center py-[18px] xl:px-10 
        sticky top-0 left-0 z-20 backdrop-blur-sm ${popupVisible ? 'dark-overlay-screen' : ''} `}>
            <a href="#" className="text-primary-dark-light font-exo-2 font-semibold text-xl leading-none">
                &lt; KHANH DUY &gt;
            </a>
            <div className="flex items-center justify-between md:w-full">
                <ul className="flex gap-3 xl:gap-7 mx-auto">
                    <li>
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                    <li>
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">Contact Me</a>
                    </li>
                </ul>
                <div className="flex gap-9">
                    <button>
                        <img src="/images/light bulb.svg" alt="theme toggle"/>
                    </button>
                    <button className="border border-primary-dark-light rounded-[10px] px-5 py-2    
                        text-primary-dark-light font-exo-2 font-normal text-base leading-none
                            hover:bg-primary-dark-light hover:text-neutral-900">
                        Résume
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header;