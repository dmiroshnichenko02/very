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

export default function OurProjects({
  title,
  description,
  services,
  btnText,
  projectsShowed,
  projects,
}: IShowed) {
  return (
    <Our
      title={title}
      description={description}
      services={services}
      btnText={btnText}
      projectsShowed={projectsShowed}
      projects={projects}
    />
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

    const projects = await res.json();

    return {
      props: {
        projects,
      },
      revalidate: 3600, // обновление данных каждый час
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        projects: null,
      },
      revalidate: 3600,
    };
  }
}
