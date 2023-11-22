import { FC } from "react";

import styles from "./ourProjects.module.scss";

import { ProjectData } from "@/interfaces/project.interface";
import { IService } from "@/interfaces/home.interface";
import ServicesBlock from "@/components/ui/servicesBlock/ServicesBlock";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";
import Our from "./Our";



interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[],
  btnText: string
  projects?: ProjectData[]
}

export default async function OurProjects({title, description, services, btnText, projectsShowed, projects}: IShowed) {

  const showedProjects = projectsShowed.map((projId: number) => {
    const showed = projects && projects.find((item: ProjectData) => item.id === projId);
    return showed;
  });

  return (
    <Our title={title} description={description} services={services} btnText={btnText} showedProjects={showedProjects}/>
  );
}