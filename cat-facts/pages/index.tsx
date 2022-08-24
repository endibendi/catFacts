import { error } from "console";
import LandingScreen from "../screens";

export default function Home({ data }) {
  return <LandingScreen data={data} />;
}

export async function getServerSideProps() {
  const res = await fetch("https://catfact.ninja/facts");

  if (!res.ok) {
    console.error(`Could not load cat facts ${res.status}`);
    return;
  }

  const data = await res.json();
  return { props: { data } };
}
