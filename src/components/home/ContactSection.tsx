
const ContactSection = () => (
    <section id="contact" className="my-20">
        <h1 className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-semibold text-[2rem] mb-[4rem] text-center">
            Thanks for taking a look, <br />
            Leave a feedback or message
        </h1>
        <form action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" method="POST" id="contact-form"
            className="w-form mx-auto grid gap-x-4 md:gap-x-[4.5rem] gap-y-9 grid-cols-2">
            <div className="form-text">
                <h1 className="mb-4">Your Name</h1>
                <input type="text" name="name" required placeholder="Enter your name"
                    className="input-form"/>
            </div>
            <div className="form-text">
                <h1 className="mb-4">Email</h1>
                <input type="email" name="email" required placeholder="Enter your email" 
                    className="input-form"/>
            </div>
            <div className="col-[1/-1] form-text">
                <h1 className="mb-4">Message</h1>
                <textarea name="message" form="contact-form" rows={10} placeholder="Leave a message.." 
                    className="input-form">
                </textarea>
            </div>
            <input type="submit" value="Submit" 
                className="mx-auto col-[1/-1] px-8 py-3 bg-primary-light-light hover:bg-primary-light-regular
                    dark:bg-primary-dark-light dark:hover:bg-primary-dark-regular
                        text-secondary-light-light dark:text-neutral-900 font-exo-2 font-medium text-base leading-none rounded-[10px]"/>
            <input type="hidden" name="_next" value={'http://localhost:5173/#projects'}/>
            <input type="hidden" name="_captcha" value="false"/>
        </form>
    </section>
)

export default ContactSection;