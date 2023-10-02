import styles from "./service-area.module.scss";

const ServiceArea = () => {
	return (
		<section className={styles.serviceArea}>
			<div className="container">
				<h2>
					Servicing Southwest Florida
					<br />
					<small> Contact us for projects outside this area </small>
				</h2>
				<div className={styles.listGroup}>
					<div className={styles.left}>
						<ul>
							<li>Service</li>
							<li>Tankless W/H</li>
							<li>Fireplaces</li>
							<li>Fire Pits</li>
							<li>Design</li>
							<li>Pool Heaters</li>
						</ul>
					</div>
					<div className={styles.right}>
						<ul>
							<li>Installation</li>
							<li>Interior Piping</li>
							<li>Underground Tank &amp; Line</li>
							<li>Custom Fire Features</li>
							<li>Project Consulting</li>
							<li>Generators</li>
						</ul>
					</div>
				</div>
				<p className={styles.availability}>
					Available for both Residential &amp; Commercial Properties
				</p>
			</div>
		</section>
	);
};

export default ServiceArea;
