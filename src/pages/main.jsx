import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/fonts.css";
import * as styles from "./main.module.css";
import Gallery from "../components/templates/gallery/Gallery.jsx";
import Cards from "../components/templates/cards/Cards.jsx";

/**
 *  ASSUMPTION:
 *  Consider galleryItems, galleryInfo and cardDataItem as data being fetched
 *  from a CMS or any external REST API source.
 *
 */
const galleryItems = [
  {
    as: "img",
    src: "./media/left.png",
    alt: "Knowing the process of cooking.",
  },
  {
    as: "img",
    src: "./media/right-top.png",
    alt: "Preparation is essential.",
  },
  {
    as: "img",
    src: "./media/right-bottom.png",
    alt: "The perfect egg for your preference.",
  },
];

const galleryInfo = {
  title: "What Does Cooking Mean?",
  content:
    "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg",
  captionTitle: "The Perfect Egg",
  caption: "Keep water between 67 and 68°C for a flavourful, tender yolk",
};

const cardItemsData = [
  {
    link: "/article-1",
    media: {
      as: "img",
      src: "./media/card-red.png",
      alt: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste",
    },
    title: "Red",
    description:
      "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste",
  },
  {
    link: "/article-2",
    media: {
      as: "img",
      src: "./media/card-green.png",
      alt: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
    },
    title: "Green",
    description:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
  },
  {
    link: "/article-4",
    media: {
      as: "img",
      src: "./media/card-white.png",
      alt: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat",
    },
    title: "White",
    description:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat",
  },
];

function App() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.galleryContainer}>
        <Gallery media={galleryItems} info={galleryInfo} />
      </div>
      <div className={styles.cardsContainer}>
        <Cards title="Taste the Colours" items={cardItemsData} />
      </div>
    </main>
  );
}

// Mount the Header component into the 'app-root' div
const appRoot = ReactDOM.createRoot(document.getElementById("app-root"));
appRoot.render(<App />);
