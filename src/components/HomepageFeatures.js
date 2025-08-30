import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Vocabulaire",
    Svg: require("../../static/img/french-book.svg").default,
    description: <>Un dictionnaire des mots courants de la langue française</>,
    link: "/docs/intro",
  },
  {
    title: "Exercices",
    Svg: require("../../static/img/french-grammar.svg").default,
    description: <>Pratiquez avec des exercices interactifs et auto-correctifs</>,
    link: "/exercices",
  },
  {
    title: "Expressions",
    Svg: require("../../static/img/french-conversation.svg").default,
    description: <>Des expressions et situations de la vie courante</>,
    link: "/docs/intro",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className="text--center" style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
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
