const AboutSection = () => (
    <section id="about" className="min-h-section relative z-10 mb-12">
        <div className="mt-4 py-16 md:py-[112px] xl:pl-[6.375rem] grid gap-20 md:gap-6 grid-cols-1 md:grid-cols-sm-lg xl:grid-cols-base-lg">
            <div className="text-center md:text-start">
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

                <ul className="flex gap-6 flex-col items-center md:items-start">
                    <li className="about-link">
                        <img src="/images/point icon.svg" alt="" />
                        <h1 className="profile-link">Hanoi, Vietnam</h1>
                    </li>
                    <li className="about-link">
                        <img src="/images/mail icon.svg" alt="" />
                        <a href="#contact" className="profile-link">khanhduycb1510@gmail.com</a>
                    </li>
                    <li className="about-link">
                        <img src="/images/github icon.svg" alt="" />
                        <a href="https://github.com/Nadirol" target="_blank" className="profile-link">github.com/Nadirol</a>
                    </li>
                    <li className="about-link">
                        <img src="/images/linkedin icon.svg" alt="" />
                        <a href="https://www.linkedin.com/in/duy-khanh-182144231/" target="_blank" className="profile-link">
                            linkedin.com/in/duy-khanh-182144231
                        </a>
                    </li>
                    <li className="about-link">
                        <img src="/images/pdf icon.svg" alt="" />
                        <a className="profile-link">Résume</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="about-paragraph mr-auto max-w-[438px] mb-[80px] text-center md:text-start">
                    I’m a passionate and creative programmer who aim to build 
                    websites with 
                    <span className="text-primary-dark-light">&nbsp;beautiful&nbsp;</span> UI and 
                    <span className="text-primary-dark-light">&nbsp;intuitive&nbsp;</span> UX using up-to-date technologies.
                </p>
                <p className="about-paragraph md:mr-10 ml-auto text-center md:text-end max-w-[438px] mb-16 md:mb-[136px]">
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
)

export default AboutSection;