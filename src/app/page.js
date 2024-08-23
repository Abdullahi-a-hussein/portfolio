import Contact from "@/components/contact-info";
import ProjectCard from "@/components/project-card";
import Socials from "@/components/socials";
import TypingAnimation from "@/components/typedText";
import { header, projects, subheader } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col mx-10 my-32 w-11/12 p-2 gap-20">
      <section className="mb-20">
        <div>
          <h1 className="text-4xl font-extrabold w-1/2 mb-5 tracking-wide">
            Hi! My name is <span className="text-blue-500">Abdullahi</span>.
          </h1>
          <TypingAnimation
            styling={"text-2xl font-extrabold tracking-wide text-gray-600"}
            text={subheader}
          />
        </div>
        <div></div>
      </section>
      <hr />
      <section>
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-wider">Projects</h1>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </section>
      <hr />
      <section>
        <h1 className="text-5xl font-extrabold tracking-wider mb-10">
          Contact
        </h1>
        <div>
          <Socials />
        </div>
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
