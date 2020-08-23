import React from 'react';

// Modules
import types from 'prop-types';
import ReactIcon from '../../../../components/ReactIcon';

// Styles
import './styles.scss';
// ----------------

export default function TabContent({ contentToDisplay }) {
  return (
    <div className="tabs-content" key={contentToDisplay.id}>
      <div className="tabs-content__desc">
        <ReactIcon className="tabs-content__icon" size="xxl" color="orange">
          {contentToDisplay.icon()}
        </ReactIcon>
        <h2 className="tabs-content__title">{contentToDisplay.title}</h2>
      </div>
      <div className="tabs-content__text">
        <p>{contentToDisplay['text-top']}</p>
        <p>{contentToDisplay['text-bottom']}</p>
      </div>
    </div>
  );
}

TabContent.propTypes = {
  activeTabName: types.string,
};
