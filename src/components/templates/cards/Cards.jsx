import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Cards.module.css";
import Card from "../../organisms/card/Card.jsx";
import Typography from "../../atoms/typography/Typography.jsx";

export default function Cards({ title, items = [] }) {
  return (
    <div className={styles.cardsLayout}>
      <div className={styles.titleContainer}>
        <Typography as="h3" variant="h2" className={styles.title}>
          {title}
        </Typography>
      </div>
      <div className={styles.cardGrid}>
        {items.map((item, index) => (
          <Card
            key={index}
            link={item.link}
            media={item.media}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

Cards.propTypes = {
  /** The title for the cards section */
  title: PropTypes.string.isRequired,
  /** An array of card data objects */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      media: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
