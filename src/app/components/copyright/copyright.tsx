import styles from "./copyright.module.scss";
import Image from "next/image";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p>
        &copy; Copyright 2023. SHJ Gas and Fire Feature Services, LLC. All
        Rights Reserved.
      </p>
      <div className={styles.MacDesigns}>
        <div className={styles.logo}>
          <Image
            src="/images/footer/MacDesigns_logo.svg"
            width={22}
            height={17}
            alt="Macpherson Designs Logo."
            className={styles.maclogo}
          />
        </div>
        <p>
          Site Designed By
          <a href="http://www.macphersondesigns.com" target="new">
            Macpherson Designs
          </a>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
