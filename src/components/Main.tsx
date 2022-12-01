const Main = (): JSX.Element => {
    return (
        <main className="w-container mx-auto relative z-10">
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
            <section id="skills" className="min-h-screen">
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
        </main>
    )
}

export default Main;