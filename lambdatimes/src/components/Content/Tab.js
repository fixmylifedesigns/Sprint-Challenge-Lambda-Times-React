import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  let tabClass = props.tab === props.selected ? "tab active-tab" : "tab";
  return (
    <div className={tabClass} onClick={props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
};
export default Tab;
