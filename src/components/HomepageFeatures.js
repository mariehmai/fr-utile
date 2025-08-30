import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Vocabulaire",
    Svg: require("../../static/img/french-book.svg").default,
    description: <>Un dictionnaire des mots courants de la langue française</>,
  },
  {
    title: "Expressions",
    Svg: require("../../static/img/french-conversation.svg").default,
    description: <>Des expressions et situations de la vie courante</>,
  },
  {
    title: "Règles",
    Svg: require("../../static/img/french-grammar.svg").default,
    description: <>Conjugaison, grammaire, et règles communes</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
