import React from "react";

//Components
import { ContentLimiter } from "../../../components/ContentLimiter";
import { Tabs } from "./Tabs";

// ----------------

export const AboutUsSection = () => {
  return (
    <ContentLimiter>
      <Tabs />
    </ContentLimiter>
  );
};
