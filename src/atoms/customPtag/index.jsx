import React from "react";
import PropTypes from "prop-types";

const customPtag = ({ className, children }) => {
  return (
    <div>
      <p className={className}>{children}</p>
    </div>
  );
};

customPtag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

customPtag.defaultProps = {
  className: "",
  children: "",
};
export default customPtag;
