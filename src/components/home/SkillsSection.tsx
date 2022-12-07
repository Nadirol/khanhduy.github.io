import { SkillCard } from "../cards";
import skillsList from "../../skillsList";

const SkillsSection = ({}) => {
    return (
        <section id="skills" className="min-h-screen w-full mx-auto text-center">
            <h1 className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-semibold text-[80px] leading-none mb-[42px]">Skills</h1>
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
    )
}

export default SkillsSection