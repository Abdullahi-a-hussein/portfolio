import ProjectCard from "@/components/project-card";
import TypingAnimation from "@/components/typedText";
import { header, projects, subheader } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col mx-10 mt-32 w-11/12 p-2 gap-20">
      <section className="mb-20">
        <div>
          <h1 className="text-3xl font-extrabold w-1/2 mb-2 tracking-wide">
            Hi! My name is <span className="text-zinc-500">Abdullahi</span>.
          </h1>
          <TypingAnimation
            styling={"text-xl font-extrabold tracking-wide text-gray-600"}
            text={subheader}
          />
        </div>
        <div></div>
      </section>
      <section>
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-wider">Projects</h1>
        </div>
        <div>
          <ProjectCard project={projects[0]} />
        </div>
      </section>
    </div>
  );
}
