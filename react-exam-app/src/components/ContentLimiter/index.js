import React from "react";

import classnames from "classnames";

// Styles
import "./styles.scss";

export const ContentLimiter = (props) => {
  const contentLimiterClass = classnames({
    "content-limiter": true,
    "content-limiter--full-width": props.fullWidth,
  });

  return <div className={contentLimiterClass}>{props.children}</div>;
};
