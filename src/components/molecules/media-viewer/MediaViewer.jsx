import React from "react";
import PropTypes from "prop-types";
import * as styles from "./MediaViewer.module.css";
import Media from "../../atoms/media/Media";

export default function MediaViewer({ media, onClose }) {
  if (!media) {
    return null;
  }

  // Prevent clicks inside the content area from closing the modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.content} onClick={handleContentClick}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close media viewer"
        >
          &times;
        </button>
        <Media {...media} />
      </div>
    </div>
  );
}

MediaViewer.propTypes = {
  media: PropTypes.shape({
    /** The media source url */
    src: PropTypes.string.isRequired,
    /** Alternative text for media source */
    alt: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
