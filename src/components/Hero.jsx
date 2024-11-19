const Hero = () => (
	<div className="relative bg-[rgba(184,184,184,255)] text-[rgb(16,16,16)] h-screen flex flex-col justify-center items-center text-center pt-24">
		{/* Background Image */}
		<div
			className="absolute inset-0 bg-cover bg-center"
			style={{
				backgroundImage: 'url(https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
			}}
		></div>

		{/* Overlay */}
		<div className="absolute inset-0 bg-black opacity-80"></div> {/* This is the overlay */}

		{/* Content with Overlay */}
		<div className="relative z-10">
			<h1 className="text-4xl md:text-6xl font-bold text-white">WELCOME TO</h1>
			<h2 className="text-3xl md:text-5xl mt-4 text-[#FFD700]">AZ COMMS & SERVICES</h2>
			<p className="mt-6 text-lg md:text-2xl max-w-3xl text-white">
				Expert Telecom Professional Offering LAN Point Installation, CCTV Camera Setup, Fiber Optic Solutions, and More.
			</p>

			{/* Button */}
			<button className="mt-8 px-6 py-3 bg-[rgb(16,16,16)] text-white font-semibold text-lg rounded-md">
				Explore Our Services
			</button>
		</div>
	</div>
);

export default Hero;
