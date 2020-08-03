import React, { useState } from "react";

// // Modules
import classNames from "classnames";
// import types from "prop-types";

// Components
import { TabsContent } from "../TabsContent";

// Styles
import "./styles.scss";

export const Tabs = () => {
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
    <section className="tabs">
      <div className="tabs__header">
        {tabsFlags.map((flag) => {
          const tabsClass = classNames({
            "tabs__header-flag": true,
            "tabs__header-flag--active": flag.name === activeTabName,
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
  );
};
