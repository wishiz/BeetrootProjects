import React, { useState } from "react";

// Modules
import classNames from "classnames";

//Components
import { ContentLimiter } from "../../../components/ContentLimiter";
import { TabsContent } from "./TabsContent";

// Styles
import "./styles.scss";

// ----------------

export const AboutUsSection = () => {
  const tabsFlags = [
    { name: "tabOne", title: "History" },
    { name: "tabTwo", title: "Awards" },
    { name: "tabThree", title: "Philosophy" },
  ];

  const tabsContent = [
    { name: "tabOne", content: TabsContent },
    { name: "tabTwo", content: TabsContent },
    { name: "tabThree", content: TabsContent },
  ];

  const [activeTabName, setActiveTabName] = useState(tabsFlags[0].name);

  const handleTabSet = (name) => {
    setActiveTabName(name);
  };

  const tab = tabsContent.find((tab) => tab.name === activeTabName);

  return (
    <ContentLimiter>
      <section className="about-us">
        <div className="about-us__header">
          {tabsFlags.map((flag) => {
            const tabsClass = classNames({
              "about-us__header-flag": true,
              "about-us__header-flag--active": flag.name === activeTabName,
            });

            return (
              <div
                key={flag.name}
                className={tabsClass}
                onClick={() => handleTabSet(flag.name)}
              >
                <p>{flag.title}</p>
              </div>
            );
          })}
        </div>
        <div>
          <tab.content activeTabName={activeTabName} />
        </div>
      </section>
    </ContentLimiter>
  );
};
