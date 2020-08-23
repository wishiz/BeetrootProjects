import React from 'react';

// Modules
import types from 'prop-types';
import classnames from 'classnames';

// Styles
import './styles.scss';

// ----------------

export default function ContentLimiter({ fullWidth, children }) {
  const contentLimiterClass = classnames({
    'content-limiter': true,
    'content-limiter--full-width': fullWidth,
  });

  return <div className={contentLimiterClass}>{children}</div>;
}

// Type of props
ContentLimiter.propTypes = {
  fullWidth: types.bool,
  children: types.node.isRequired,
};

ContentLimiter.defaultProps = {
  fullWidth: false,
};
