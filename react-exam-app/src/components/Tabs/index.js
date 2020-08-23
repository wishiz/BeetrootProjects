import React, { useState } from 'react';

// Modules
import classNames from 'classnames';
import types from 'prop-types';

// Styles
import './styles.scss';

// ----------------

export default function Tabs({ defaultTab, flags, content }) {
  const [activeTabName, setActiveTabName] = useState(
    defaultTab || flags[0].name,
  );

  function handleTabSet(name) {
    setActiveTabName(name);
  }

  const tab = content.find((tab) => tab.name === activeTabName);

  const flagClass = (name) =>
    classNames({
      'tabs__header-flag': true,
      'tabs__header-flag--active': name === activeTabName,
    });

  return (
    <div className="tabs">
      <div className="tabs__header">
        {flags.map((flag) => (
          <div
            className={flagClass(flag.name)}
            onClick={() => handleTabSet(flag.name)}
          >
            <p>{flag.title}</p>
          </div>
        ))}
      </div>
      <div className="tabs__content">
        <tab.content />
      </div>
    </div>
  );
}

// Type of props
Tabs.propTypes = {
  flags: types.string,
};
