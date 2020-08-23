import React, { useState } from 'react';

// // Modules
import classNames from 'classnames';
// import types from "prop-types";

// Components
import { TabsContent } from '../TabsContent';

// Styles
import './styles.scss';

export const Tabs = ({ flag, content }) => {
  const [activeTabName, setActiveTabName] = useState(tabsFlags[0].name);

  const handleTabSet = (name) => {
    setActiveTabName(name);
  };

  const tab = content.find((tab) => tab.name === activeTabName);

  return (
    <section className="tabs">
      <div className="tabs__header">
        {tabsFlags.map((flag) => {
          const tabsClass = classNames({
            'tabs__header-flag': true,
            'tabs__header-flag--active': flag.name === activeTabName,
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
