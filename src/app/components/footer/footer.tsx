import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.promise}>
						<h2>
							Our Promise
							<small>
								SHJ Gas is known for our quality and professionalism.
							</small>
						</h2>
						<p>
							We can prove it to you. You can rest assured knowing that our
							services are being provided by a skilled and experienced expert.
							I&apos;m confident in the workmanship we provide and know you will
							be as well. Don&apos;t hesitate — call us today!
						</p>
					</div>
					<div className={styles.contact}>
						<h2>Get in Touch</h2>
						<p>
							505 W Hickpochee Ave Ste 200
							<br />
							Labelle, Florida 33935, Hendy County
							<br />
							<br />
							863-517-5335
							<br />
							Office@SHJServices.net
						</p>
					</div>
				</div>
				<div className={styles.right}>
					<h2>Get a Quote</h2>
					<div className={styles.quote}>
						<form className={styles["quote-form"]}>
							<div className={`${styles["form-group"]} ${styles["fg-50"]}`}>
								<label htmlFor="“name”" className="field-label">
									First Name
								</label>
								<input
									type="text"
									name="“firstName”"
									className={styles.field}
									required
								/>
							</div>

							<div className={`${styles["form-group"]} ${styles["fg-50"]}`}>
								<label htmlFor="“name”" className="field-label">
									Last Name
								</label>
								<input
									type="text"
									name="“lastName”"
									className={styles.field}
									required
								/>
							</div>

							<div className={`${styles["form-group"]} ${styles["fg-50"]}`}>
								<label htmlFor="“name”" className="field-label">
									Email Address
								</label>
								<input
									type="email"
									name="“emailAddress”"
									className={styles.field}
								/>
							</div>

							<div className={`${styles["form-group"]} ${styles["fg-50"]}`}>
								<label htmlFor="phoneNumber" className="field-label">
									Phone Number
								</label>
								<input
									type="number"
									name="phoneNumber"
									id="phoneNumber"
									className={styles.field}
								/>
							</div>

							<div className={`${styles["form-group"]} ${styles["fg-50"]}`}>
								<label htmlFor="message" className="field-label">
									Scope of Work
								</label>
								<textarea
									id="message"
									required
									name="message"
									rows={5}
									cols={55}
									className={styles.field}></textarea>
							</div>

							<button
								className={`${styles["btn"]} ${styles["formSubmit"]} ${styles["fg-100"]}`}>
								Get a Quote
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
