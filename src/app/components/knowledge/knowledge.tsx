import styles from "./knowledge.module.scss";

const Knowledge = () => {
	return (
		<section className={styles.knowledge}>
			<div className="container">
				<h2>
					Our knowledge <span>&</span> experience
				</h2>
				<p>
					SHJ Gas can handle all your propane and natural gas needs for your
					home, business, or development... Just ask our customers - they have
					been relying on us for expert installation and service.
				</p>
			</div>
			<div className={styles.pageContent}>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Propane Installations</h2>
						<p className={styles.copy}>
							Contractor or Homeowner looking to add propane or have it
							serviced? Look no further, we offer propane tank installations,
							underground gas piping, Interior Piping as well as service.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Natural Gas Installations</h2>
						<p className={styles.copy}>
							As Natural Gas grows in popularity in our area so have we. Have a
							question? Need service? Looking to add Natural Gas on your
							property? Give us a call! We work closely with Teco (People Gas)
							all over South Florida Repairing, Servicing & Installing Natural
							Gas systems.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Fire Feature Design & Installation</h2>
						<p className={styles.copy}>
							We have a passion for Fire Features. At SHJ we enjoy the challenge
							of designing unique systems that meet our clients’ needs, and have
							invested a lot of time in finding systems that can sustain the
							rigors of our climate. Whether it be a fireplace, firepit or
							fire-bowl our company looks forward to bringing this knowledge to
							your projects.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Pool Heater - Gas</h2>
						<p className={styles.copy}>
							Are you tired of waiting a long time for your spa to heat up? Does
							your family spend more time waiting for the pool to heat up than
							they do enjoying it? Ask us about a gas pool heater that can heat
							a 6 person spa in under 20 minutes
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Tankless Water Heater - Gas</h2>
						<p className={styles.copy}>
							Our staff is level 3 certified to install and repair Navien
							Tankless W/Hs. with their stainless steel heat exchanger and
							warranty we have had great success installing them. Unlike
							electric tankless, these units are able to provide up to 10
							gallons per minute at 130 degrees with 98% efficiency making them
							a common swap out to traditional tank heaters.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2 className={styles.title}>Consulting</h2>
						<p className={styles.copy}>
							Let our experience installing gas systems help with your
							mechanical design. We provide consulting services on behalf of the
							client, builder or architect to make sure you are running a safe,
							cost effective system that meets National, State and Local code
							requirements.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<button className="btn">Learn More</button>
			</div>
		</section>
	);
};

export default Knowledge;
