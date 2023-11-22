import { IService } from "@/interfaces/home.interface";
import Our from "./Our";

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[];
  btnText: string;
  projects: number[];
}

export default async function OurProjects({
  title,
  description,
  services,
  btnText,
  projectsShowed,
  projects
}: IShowed) {
  const project = await fetchData();
  return (
    <Our
      title={title}
      description={description}
      services={services}
      btnText={btnText}
      projectsShowed={projectsShowed}
      projects={projects}
      project={project}
    />
  );
}

async function fetchData() {
  const res = await fetch(
    "https://rcw108.com/wp-json/wp/v2/projects?acf_format=standard",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
