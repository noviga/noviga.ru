import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Уникальная платформа',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Обучение проходит на специально разработанной интерактивной платформе в увлекательной игровой форме.
        <br /><br />
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/school/platform">
              О платформе
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Понятные цены',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Никаких накруток или скидок в зависимости от обьёма &mdash; вы берёте ровно столько занятий, сколько нужно, по фиксированной и прозрачной цене.
        <br /><br />
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/pricelist">
              Цены
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Мотивированные преподаватели',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        80% оплаты идёт преподавателю, что позволяет нам выбрать лучших из лучших, а преподавателям работать с удовольствием.
        <br /><br />
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/tutors">
              Преподавателям
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
