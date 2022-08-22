import { useState } from "react";
import LandingScreenComponent from "./LandingScreenComponent";

const LandingScreenContainer = () => {
  const [catFacts, setCatFacts] = useState(undefined);

  const handleGetFactsClick = async () => {
    const res = await fetch("https://catfact.ninja/facts");

    if (!res.ok) {
      console.error(`Could not load cat facts ${res.status}`);
      return;
    }

    const { data } = await res.json();
    setCatFacts(data);
  };

  console.log(catFacts);

  return (
    <LandingScreenComponent
      onGetFactsClick={handleGetFactsClick}
      catFacts={catFacts}
    />
  );
};

export default LandingScreenContainer;
