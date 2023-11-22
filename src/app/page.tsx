import Home from "@/components/screens/home/Home";
import { Metadata } from "next";

async function fetchData() {
  const res = await fetch("https://rcw108.com/wp-json/wp/v2/pages/2?acf_format=standard", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Home - RCW108',
}

export default async function HomePage() {
  const {acf} = await fetchData();

  return (
    <>
      {acf && (<Home acf={acf}/>)}
    </>
  )
}
