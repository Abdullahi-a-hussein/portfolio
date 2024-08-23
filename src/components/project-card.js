import Image from "next/image";
export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col w-[400px] shadow-xl gap-2 py-5 px-[50px]">
      <div>
        <Image src={project.image} alt="prject image" width={300} />
      </div>
      <div className="flex flex-col gap-1 ">
        <div className="w-[280px] tracking-wide text-gray-800">
          <h2 className="text-xl font-bold">{project.name}</h2>
          {project.description.map((desc) => (
            <p key={desc} className="text-sm my-2 font-light">
              {desc}
            </p>
          ))}
        </div>
        <div className="flex gap-2 text-gray-700 ">
          {project.tools.map((tool) => (
            <p key={tool} className="font-bold text-xs font-mono">
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
