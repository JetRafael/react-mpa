import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Typography.module.css";

export default function Typography({
  as: Component = "p",
  variant = "body1",
  children,
  className = "",
  ...attributes
}) {
  const componentClasses = `${styles.base} ${
    styles[variant] || ""
  } ${className}`.trim();
  return (
    <Component className={componentClasses} {...attributes}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  /** Use the appropriate HTML tag for semantic meaning (e.g., 'h1' for a main title) */
  as: PropTypes.elementType,
  /** Select the visual style for the text */
  variant: PropTypes.string,
  /** The text or other elements to be rendered */
  children: PropTypes.node.isRequired,
  /** Optional additional class names */
  className: PropTypes.string,
};
