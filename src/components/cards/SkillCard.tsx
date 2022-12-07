
const SkillCard = ({ title, image, description, link }: any): JSX.Element => {
    return (
        <a href={link} target="_blank"
            className="mt-auto relative [&:hover>.absolute]:block hover:bg-neutral-100 dark:hover:bg-neutral-800 px-6 pt-6 rounded-t-xl">
            <div className="flex gap-6 flex-col items-center">
                <img src={image} alt="logo" className="max-w-[111px] aspect-square object-contain"/>
                <h1 className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-semibold text-[2rem] leading-none">{title}</h1>
            </div>
            <div className="hidden absolute bottom-0 left-0 w-full translate-y-full 
                bg-neutral-100 dark:bg-neutral-800 z-20 p-2 rounded-b-xl overflow-hidden">
                <p className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-normal text-xs">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default SkillCard;