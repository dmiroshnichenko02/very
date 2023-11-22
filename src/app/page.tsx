import Home from "@/components/screens/home/Home";
import { Metadata } from "next";

async function fetchData() {
  const res = await fetch(
    "https://rcw108.com/wp-json/wp/v2/pages/2?acf_format=standard",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchDataProject() {
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

export const metadata: Metadata = {
  title: "Home - RCW108",
};

export default async function HomePage() {
  const { acf } = await fetchData();

  const projects = await fetchDataProject();

  return <>{acf && <Home acf={acf} projects={projects}/>}</>;
}
