import React from "react";

// Styles
import "./styles.scss";

// Modules
import { ReactIcon } from "../../../../components/ReactIcon";

// Constants
import { contents } from "./constants";
// ----------------

export const TabsContent = ({ activeTabName }) => {
  const contentToDisplay = contents.find((tab) => tab.name === activeTabName);

  return (
    <div className="tabs-content" key={contentToDisplay.name}>
      <div className="tabs-content__desc">
        <ReactIcon className="tabs-content__icon" size="xxl" color="orange">
          {contentToDisplay.icon()}
        </ReactIcon>
        <h2 className="tabs-content__title">{contentToDisplay.title}</h2>
      </div>
      <div className="tabs-content__text">
        <p>{contentToDisplay["text-top"]}</p>
        <p>{contentToDisplay["text-bottom"]}</p>
      </div>
    </div>
  );
};
