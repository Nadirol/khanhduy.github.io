import { ProjectCard } from "../cards";
import projectList from "../../projectList";

const ProjectsSection = ({ turnOnPopup }: { turnOnPopup: (index: number) => void}) => {

    return (
        <section id="projects" className="min-h-screen text-center mb-16">
            <h1 className="text-neutral-50 font-exo-2 font-semibold text-[80px] leading-none mb-[42px]">Project</h1>
            <div className="flex gap-12 flex-col">
                {projectList.map((item, index) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        preview={item.preview}
                        stack={item.stack}
                        shortDescription={item.shortDescription}
                        primaryColor={item.primaryColor}
                        codeLink={item.codeLink}
                        demoLink={item.demoLink}
                        popupToggle={() => turnOnPopup(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection;