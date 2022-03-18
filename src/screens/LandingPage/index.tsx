import React from 'react';
import { Button, Footer } from '@components';
import { numericData, bottomSectionData } from './data';
import image from '@assets/images/landing-page.jpg';
import styles from './styles.module.scss';

const index = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>JA</h1>
        <div>
          <Button size="large" type="primary" style={styles.spacer}>
            Sign In
          </Button>
          <Button size="large" type="outline">
            Sign Up
          </Button>
        </div>
      </header>
      <section className={styles.sectionWrapper}>
        <div className={styles.numericWrapper}>
          {numericData.map(({ label, description }) => (
            <div key={label}>
              <h1>{label}</h1>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className={styles.topSection}>
          <div>
            <h1>Headline</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam.
            </p>
            <Button size="large" type="outline" iconRight="arrowRight">
              Get started
            </Button>
          </div>
          <img src={image} />
        </div>
        <div className={styles.bottomSection}>
          <div>
            <h3>Header</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              etdolore magna aliqua. Neque vitae tempus quam pellentesque nec nam,
            </p>
          </div>
          <section className={styles.line} />
          <div>
            {bottomSectionData.map((item) => (
              <div key={item.id}>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer style={styles.footer} />
    </div>
  );
};

export default index;
