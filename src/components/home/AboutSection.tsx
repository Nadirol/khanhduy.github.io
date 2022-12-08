const AboutSection = () => (
    <section id="about" className="min-h-section relative z-10 mb-12">
        <div className="mt-4 py-16 md:py-[112px] xl:pl-[6.375rem] grid gap-20 md:gap-6 grid-cols-1 md:grid-cols-sm-lg xl:grid-cols-base-lg">
            <div className="text-center md:text-start">
                <div className="flex gap-6 flex-col mb-7">
                    <h2 className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-semibold text-4xl leading-none">
                        Hi, my name is
                    </h2>
                    <h1 className="text-primary-light-light dark:text-primary-dark-light font-exo-2 font-semibold text-[4.5rem] leading-none">
                        KHANH DUY
                    </h1>
                    <h3 className="text-accent-light-light dark:text-accent-dark-light font-exo-2 font-semibold text-[2rem] leading-none tracking-widest">
                        Software Developer
                    </h3>
                </div>

                <ul className="flex gap-6 flex-col items-center md:items-start">
                    <li className="about-link">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="svg-fill" d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7873 12.525 12.262C13.5083 10.7373 14 9.38333 14 8.2C14 6.38333 13.4207 4.89567 12.262 3.737C11.104 2.579 9.68333 2 8 2C6.31667 2 4.89567 2.579 3.737 3.737C2.579 4.89567 2 6.38333 2 8.2C2 9.38333 2.49167 10.7373 3.475 12.262C4.45833 13.7873 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z" fill="#4CE0D2"/>
                        </svg>
                        <h1 className="profile-link">Hanoi, Vietnam</h1>
                    </li>
                    <li className="about-link">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="svg-fill" d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.979333 0.196 1.45 0 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.8043 0.979333 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H2ZM18 4L10.525 8.675C10.4417 8.725 10.354 8.76233 10.262 8.787C10.1707 8.81233 10.0833 8.825 10 8.825C9.91667 8.825 9.82933 8.81233 9.738 8.787C9.646 8.76233 9.55833 8.725 9.475 8.675L2 4V14H18V4ZM10 7L18 2H2L10 7ZM2 4V4.25V2.775V2.8V2V2.8V2.787V4.25V4V14V4Z" fill="#4CE0D2"/>
                        </svg>
                        <a href="#contact" className="profile-link">khanhduycb1510@gmail.com</a>
                    </li>
                    <li className="about-link">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="svg-fill" d="M10 0.242256C8.68678 0.242256 7.38642 0.500914 6.17317 1.00346C4.95991 1.50601 3.85752 2.2426 2.92893 3.17119C1.05357 5.04655 0 7.59009 0 10.2423C0 14.6623 2.87 18.4123 6.84 19.7423C7.34 19.8223 7.5 19.5123 7.5 19.2423V17.5523C4.73 18.1523 4.14 16.2123 4.14 16.2123C3.68 15.0523 3.03 14.7423 3.03 14.7423C2.12 14.1223 3.1 14.1423 3.1 14.1423C4.1 14.2123 4.63 15.1723 4.63 15.1723C5.5 16.6923 6.97 16.2423 7.54 16.0023C7.63 15.3523 7.89 14.9123 8.17 14.6623C5.95 14.4123 3.62 13.5523 3.62 9.74226C3.62 8.63226 4 7.74226 4.65 7.03226C4.55 6.78226 4.2 5.74226 4.75 4.39226C4.75 4.39226 5.59 4.12226 7.5 5.41226C8.29 5.19226 9.15 5.08226 10 5.08226C10.85 5.08226 11.71 5.19226 12.5 5.41226C14.41 4.12226 15.25 4.39226 15.25 4.39226C15.8 5.74226 15.45 6.78226 15.35 7.03226C16 7.74226 16.38 8.63226 16.38 9.74226C16.38 13.5623 14.04 14.4023 11.81 14.6523C12.17 14.9623 12.5 15.5723 12.5 16.5023V19.2423C12.5 19.5123 12.66 19.8323 13.17 19.7423C17.14 18.4023 20 14.6623 20 10.2423C20 8.92904 19.7413 7.62868 19.2388 6.41542C18.7362 5.20217 17.9997 4.09977 17.0711 3.17119C16.1425 2.2426 15.0401 1.50601 13.8268 1.00346C12.6136 0.500914 11.3132 0.242256 10 0.242256Z" fill="#4CE0D2"/>
                        </svg>
                        <a href="https://github.com/Nadirol" target="_blank" className="profile-link">github.com/Nadirol</a>
                    </li>
                    <li className="about-link">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="svg-fill" d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="#4CE0D2"/>
                        </svg>
                        <a href="https://www.linkedin.com/in/duy-khanh-182144231/" target="_blank" className="profile-link">
                            linkedin.com/in/duy-khanh-182144231
                        </a>
                    </li>
                    <li className="about-link">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="svg-fill" d="M7 10.5H8V8.5H9C9.28333 8.5 9.521 8.404 9.713 8.212C9.90433 8.02067 10 7.78333 10 7.5V6.5C10 6.21667 9.90433 5.979 9.713 5.787C9.521 5.59567 9.28333 5.5 9 5.5H7V10.5ZM8 7.5V6.5H9V7.5H8ZM11 10.5H13C13.2833 10.5 13.521 10.404 13.713 10.212C13.9043 10.0207 14 9.78333 14 9.5V6.5C14 6.21667 13.9043 5.979 13.713 5.787C13.521 5.59567 13.2833 5.5 13 5.5H11V10.5ZM12 9.5V6.5H13V9.5H12ZM15 10.5H16V8.5H17V7.5H16V6.5H17V5.5H15V10.5ZM6 16C5.45 16 4.97933 15.8043 4.588 15.413C4.196 15.021 4 14.55 4 14V2C4 1.45 4.196 0.979 4.588 0.587C4.97933 0.195667 5.45 0 6 0H18C18.55 0 19.021 0.195667 19.413 0.587C19.8043 0.979 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H6ZM2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V4H2V18H16V20H2Z" fill="#4CE0D2"/>
                        </svg>
                        <a href="/resume-en.pdf" target="_blank" className="profile-link">Résume</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="about-paragraph mr-auto max-w-[438px] mb-[80px] text-center md:text-start">
                    I’m a passionate and creative programmer who aim to build 
                    websites with 
                    <span className="text-primary-light-light dark:text-primary-dark-light">&nbsp;beautiful&nbsp;</span> UI and 
                    <span className="text-primary-light-light dark:text-primary-dark-light">&nbsp;intuitive&nbsp;</span> 
                    UX using up-to-date technologies.
                </p>
                <p className="about-paragraph md:mr-10 ml-auto text-center md:text-end max-w-[438px] mb-16 md:mb-[136px]">
                    I Look forward to take part in a pofessional working environment to futher
                    <span className="text-primary-light-light dark:text-primary-dark-light">&nbsp;improve&nbsp;</span>
                    and <span className="text-primary-light-light dark:text-primary-dark-light">&nbsp;apply&nbsp;</span> my skills.
                </p>
                <div className="flex gap-2">
                    <h1 className="text-neutral-700 dark:text-neutral-400 font-exo-2 font-normal text-xl leading-none">Interests:</h1>
                    <p className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-normal text-xl leading-none max-w-[387px]">
                        Programming, Graphic Designs, Music, Arts,  Creative Writing, Games. 
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default AboutSection;