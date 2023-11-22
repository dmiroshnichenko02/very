import { FC } from "react";

import styles from "./ourProjects.module.scss";

import { ProjectData } from "@/interfaces/project.interface";
import { IService } from "@/interfaces/home.interface";
import ServicesBlock from "@/components/ui/servicesBlock/ServicesBlock";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";
import Our from "./Our";

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

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[],
  btnText: string
}

export default async function OurProjects({title, description, services, btnText, projectsShowed }: IShowed) {
  const projects = await fetchData();

  const showedProjects = projectsShowed.map((projId: number) => {
    const showed = projects.find((item: ProjectData) => item.id === projId);
    return showed;
  });

  return (
    <Our title={title} description={description} services={services} btnText={btnText} showedProjects={showedProjects}/>
  );
}