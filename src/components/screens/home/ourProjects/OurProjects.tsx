import { IService } from "@/interfaces/home.interface";
import Our from "./Our";
import { ProjectData } from "@/interfaces/project.interface";

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[];
  btnText: string;
  projects: number[];
  project: any
}

export default async function OurProjects({
  title,
  description,
  services,
  btnText,
  projectsShowed,
  projects,
  project
}: IShowed) {
  return (
    <>
      {project && (
        <Our
          title={title}
          description={description}
          services={services}
          btnText={btnText}
          projectsShowed={projectsShowed}
          projects={projects}
          project={project}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://rcw108.com/wp-json/wp/v2/projects?acf_format=standard",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const project = await res.json();

    return {
      props: {
        project,
      },
      revalidate: 3600, // обновление данных каждый час
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        project: null,
      },
      revalidate: 3600,
    };
  }
}
