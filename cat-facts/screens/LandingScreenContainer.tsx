import { useState } from "react";
import LandingScreenComponent from "./LandingScreenComponent";

const LandingScreenContainer = () => {
  const [catFacts, setCatFacts] = useState(undefined);
  const [links, setLinks] = useState(undefined);

  const getApiData = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Could not load cat facts ${res.status}`);
      return;
    }

    const { data, links } = await res.json();
    setCatFacts(data);
    setLinks(links);
  };

  const handleGetFactsClick = async () => {
    getApiData("https://catfact.ninja/facts");
  };

  const handlePageLinkClick = async (url: string) => {
    getApiData(url);
  };

  return (
    <LandingScreenComponent
      onGetFactsClick={handleGetFactsClick}
      catFacts={catFacts}
      links={links}
      onPageLinkClick={handlePageLinkClick}
    />
  );
};

export default LandingScreenContainer;
