import React from "react";

// // Modules
// import classNames from "classnames";
// import types from "prop-types";

// Styles
import "./styles.scss";

export const Tabs = (props) => {
  // const { example } = props;

  // const nameClass = classNames({
  //   nameClass: true,
  //   "nameClass--example": example,
  // });
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

  return <div>Hello!</div>;
};

// Type of props
// Tabs.propTypes = {
//   example: types.bool,
// };

// Tabs.defaultProps = {
//   example: true,
// };
