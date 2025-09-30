import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Card.module.css";
import Media from "../../atoms/media/Media.jsx";
import Typography from "../../atoms/typography/Typography.jsx";

export default function Card({ link, media, title, description }) {
  return (
    <article className={styles.card} tabIndex={0}>
      <a href={link} className={styles.mediaLink} aria-label={title}>
        <div className={styles.mediaWrapper}>
          <Media {...media} />
        </div>
      </a>
      <div className={styles.infoWrapper}>
        <Typography as="p" variant="body-bold" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
      </div>
    </article>
  );
}

Card.propTypes = {
  /** The URL the card's media should link to */
  link: PropTypes.string.isRequired,
  /** The media object for the Media atom */
  media: PropTypes.shape({
    as: PropTypes.oneOf(["img"]),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  /** The title of the card */
  title: PropTypes.string.isRequired,
  /** A short description or summary */
  description: PropTypes.string.isRequired,
};
