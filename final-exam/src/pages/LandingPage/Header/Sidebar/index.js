import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Sidebar({ isOpen, list }) {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="sidebar__list">
        {list.map((item, index) => (
          <a
            className="sidebar__list-item"
            href={`#${item.to}`}
            key={`item${item.id}`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.arrayOf(types.object).isRequired,
};
