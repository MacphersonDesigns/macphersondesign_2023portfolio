import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/H_Series_Peninsula_RGB.jpg"
        sizes="100vw"
        width={1920}
        height={300}
        alt="H Series Peninsula"
        className={styles.heroImage}
        priority={true}
      />
      <div className={styles.heroContent}>
        <h1>
          Your Trusted Installers
          <small> Specializing in Propane &amp; Natural Gas </small>
        </h1>
        <p>
          From servicing existing systems to seamless turnkey installations, SHJ
          Gas brings over a decade of expertise to every project. Whether
          you&apos;re integrating new appliances, transitioning from electric to
          gas, or pursuing a comprehensive installation, let us make your
          aspirations a resounding success. Discover the art of excellence
          cultivated over 10 years in the industry, as we redefine work ethic
          and innovation on your next venture.
        </p>
        <div className="button-grp">
          <button className="btn inverse">Get a Free Quote</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
