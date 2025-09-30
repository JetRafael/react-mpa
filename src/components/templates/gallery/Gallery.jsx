import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Gallery.module.css";
import MediaGallery from "../../organisms/media-gallery/MediaGallery.jsx";
import GalleryInfo from "../../molecules/gallery-info/GalleryInfo.jsx";

export default function Gallery({ media, info }) {
  return (
    <div className={styles.galleryLayout}>
      <div className={styles.galleryContainer}>
        <MediaGallery media={media} />
      </div>
      <div className={styles.infoContainer}>
        <GalleryInfo
          title={info.title}
          content={info.content}
          captionTitle={info.captionTitle}
          caption={info.caption}
        />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  /** Array of media objects */
  media: PropTypes.arrayOf(
    PropTypes.shape({
      /** The media source URL */
      src: PropTypes.string.isRequired,
      /** Alternative text for media source */
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Gallery information object */
  info: PropTypes.shape({
    /** Title of the gallery */
    title: PropTypes.string.isRequired,
    /** Content string of the gallery */
    content: PropTypes.string.isRequired,
    /** Optional element string for the title */
    titleAs: PropTypes.string,
  }),
};
