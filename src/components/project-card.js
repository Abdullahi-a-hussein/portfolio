import Image from "next/image";
export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col w-[400px] customer-box-shadow border-b rounded gap-2 py-5 px-[50px]">
      <div>
        <Image src={project.image} alt="prject image" width={300} />
      </div>
      <hr />
      <div className="flex flex-col gap-1 ">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <hr />
        <div className="w-[280px] tracking-wide text-gray-800">
          {project.description.map((desc) => (
            <p key={desc} className="text-sm my-2 font-normal">
              {desc}
            </p>
          ))}
        </div>
        <hr />
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
