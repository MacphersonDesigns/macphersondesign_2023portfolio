import styles from "./page.module.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ServiceArea from "./components/service-area/service-area";
import Knowledge from "./components/knowledge/knowledge";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import Script from "next/script";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Hero />
			<ServiceArea />
			<Knowledge />
			<Footer />
			<Copyright />
		</main>
	);
}
