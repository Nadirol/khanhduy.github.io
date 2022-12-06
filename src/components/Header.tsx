import { useState } from "react";

const Header = ({ popupVisible }: any): JSX.Element => {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);

    const toggleNavMenu = () => {
        setNavMenuOpen(state => !state)
    }

    return (
        <header className={`w-container-full mx-auto flex justify-between items-center -md:px-4 py-[18px] xl:px-10 
            sticky top-0 left-0 z-20 ${popupVisible ? 'dark-overlay-screen' : ''}
                ${navMenuOpen ? '' : 'backdrop-blur-sm'}`}>
            <a href="#" className={`text-primary-dark-light font-exo-2 font-semibold text-xl leading-none cursor-pointer
                ${navMenuOpen ? '-md:opacity-0 pointer-events-none' : '-md:opacity-100'}`}>
                &lt; KHANH DUY &gt;
            </a>
            { navMenuOpen ? 
                <img src="images/close icon.svg" alt="close" onClick={toggleNavMenu}
                    className='md:hidden fixed right-6 top-[18px] cursor-pointer z-50'/>
                :
                <img src="images/menu icon.svg" alt="menu"  onClick={toggleNavMenu}
                    className='md:hidden fixed right-6 top-[18px] cursor-pointer z-50'/>
            }
            <div className={`${ navMenuOpen ? 'flex -md:translate-x-0' : 'hidden -md:translate-x-full'} mobile-nav
                    md:flex items-center md:justify-between md:h-full`}>
                <a href="#" className={`text-primary-dark-light font-exo-2 font-semibold text-xl leading-none cursor-pointer
                    ${navMenuOpen ? '-md:opacity-100 ' : '-md:opacity-0 pointer-events-none'} md:hidden`}>
                    &lt; KHANH DUY &gt;
                </a>
                <ul className="flex -md:flex-col -md:items-center gap-7 md:gap-3 xl:gap-7 mx-auto">
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
                <div className="flex -md:flex-col -md:items-center gap-9">
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