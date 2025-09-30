import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Media.module.css";

export default function Media({
  src,
  alt,
  className = "",
  onClick,
  children,
  ...attributes
}) {
  const componentClasses = `${styles.media} ${className}`.trim();

  return (
    <img
      src={src}
      alt={alt}
      loading="Lazy"
      decoding="async"
      className={componentClasses}
      {...attributes}
      onClick={onClick}
    >
      {children}
    </img>
  );
}

Media.propTypes = {
  /** Source URL of the image */
  src: PropTypes.string.isRequired,
  /** Alternative text of the image */
  alt: PropTypes.string.isRequired,
  /** Additional class name of the image component */
  className: PropTypes.string,
  /** OnClick callback of the component */
  onClick: PropTypes.func,
  /** Child node of the component */
  children: PropTypes.node,
};
