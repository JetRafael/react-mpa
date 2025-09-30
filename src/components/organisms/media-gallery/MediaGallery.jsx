import React, { useState } from "react";
import PropTypes from "prop-types";
import Media from "../../atoms/media/Media.jsx";
import MediaViewer from "../../molecules/media-viewer/MediaViewer.jsx";
import * as styles from "./MediaGallery.module.css";

export default function MediaGallery({ media = [] }) {
  const [viewingMedia, setViewingMedia] = useState(null);

  const openViewer = (image) => setViewingMedia(image);
  const closeViewer = () => setViewingMedia(null);

  if (!media.length) {
    return null;
  }

  return (
    <section>
      <div className={styles.galleryGrid}>
        {media.map((image, index) => (
          <div
            key={index}
            className={styles.mediaItem}
            onClick={() => openViewer(image)}
            role="button"
            tabIndex={0}
          >
            <Media {...image} />
          </div>
        ))}
      </div>

      {viewingMedia && (
        <MediaViewer media={viewingMedia} onClose={closeViewer} />
      )}
    </section>
  );
}

MediaGallery.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      /** The media source url */
      src: PropTypes.string.isRequired,
      /** Alternative text for media source */
      alt: PropTypes.string.isRequired,
    })
  ),
};
