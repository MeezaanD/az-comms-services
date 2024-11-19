import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,  // Animation duration
			easing: 'ease-in-out', // Easing style
			once: true, // Trigger animation only once when it comes into view
		});
	}, []);

	return (
		<div>
			<Navbar />
			<Hero />
			<About data-aos="fade-up" />
			<Services data-aos="fade-up" />
			<Contact data-aos="fade-up" />
		</div>
	);
};

export default App;
