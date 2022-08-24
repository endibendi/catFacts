import { useState } from "react";
import { TCatFactApiResponse } from "../types/commonTypes";
import LandingScreenComponent from "./LandingScreenComponent";

type TProps = {
  data: TCatFactApiResponse;
};

const LandingScreenContainer = ({ data }: TProps) => {
  const [catFacts, setCatFacts] = useState(data.data);
  const [links, setLinks] = useState(data.links);

  const handlePageLinkClick = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Could not load cat facts ${res.status}`);
      return;
    }

    const { data, links } = await res.json();
    setCatFacts(data);
    setLinks(links);
  };

  return (
    <LandingScreenComponent
      catFacts={catFacts}
      links={links}
      onPageLinkClick={handlePageLinkClick}
    />
  );
};

export default LandingScreenContainer;
