import heroImg from '../assets/az-communications-hero.jpg';

const Hero = () => (
	<div className="relative bg-[rgba(184,184,184,255)] text-[rgb(16,16,16)] h-screen flex flex-col justify-center items-center text-center pt-24">
		{/* Background Image */}
		<div
			className="absolute inset-0 bg-cover bg-center"
			style={{
				backgroundImage: `url(${heroImg})`,
			}}
		></div>

		{/* Overlay */}
		<div className="absolute inset-0 bg-black opacity-80"></div>

		{/* Centered Content */}
		<div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
			<h1 className="text-3xl md:text-5xl font-bold mt-4 text-white">Expert Telecommunications Solutions in Cape Town</h1>
			<p className="mt-6 text-lg md:text-2xl max-w-3xl text-white text-center">
				Expert Telecom Professional Offering LAN Point Installation, CCTV Camera Setup, Fiber Optic Solutions, and More.
			</p>
			<button className="mt-8 px-6 py-3 bg-[rgb(16,16,16)] text-white font-semibold text-lg rounded-md">
				Explore Our Services
			</button>
		</div>
	</div>
);

export default Hero;
