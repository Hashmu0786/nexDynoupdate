import React from "react";
import PropTypes from "prop-types";

export function Container({ children, className }) {
  return (
    <div className={`container p-8 mx-auto xl:px-0 ${className || ""}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
