import React from "react";
import PropTypes from "prop-types";
import * as styles from "./GalleryInfo.module.css";
import Typography from "../../atoms/typography/Typography.jsx";

export default function GalleryInfo({
  title,
  content,
  captionTitle,
  caption,
  titleAs = "h3",
}) {
  return (
    <article className={styles.infoWrapper}>
      <div className={styles.titleContainer}>
        <Typography as={"p"} variant="h1" className={styles.title}>
          {title}
        </Typography>
      </div>

      <div className={styles.content}>
        <div className={styles.body}>
          <Typography as={"p"} variant="body-regular-1">
            {content}
          </Typography>
        </div>
        <div className={styles.caption}>
          <Typography
            as={"p"}
            variant="caption-title"
            className={styles.captionTitle}
          >
            {captionTitle}
          </Typography>
          <Typography
            as={"p"}
            variant="body-bold"
            className={styles.captionBody}
          >
            {caption}
          </Typography>
        </div>
      </div>
    </article>
  );
}

GalleryInfo.propTypes = {
  title: PropTypes.string.isRequired,
  /** A string containing HTML to be rendered. IMPORTANT: Sanitize this content if it comes from an untrusted source to prevent XSS attacks. */
  content: PropTypes.string.isRequired,
  /** The semantic heading level for the title */
  titleAs: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};
