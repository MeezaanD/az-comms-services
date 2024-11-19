import React from 'react';

const About = () => (
	<section id='about'>
		<div className="bg-[rgb(16,16,16)] text-white py-16 px-6 text-center">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">About Abdul-Karriem Samai</h2>
			<div className="max-w-4xl mx-auto">
				{/* About Me */}
				<h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD700]">About Me</h3>
				<p className="text-lg md:text-xl mb-8 text-start">
					I am an accomplished Telecomms technician based in the city of <span className="text-[#FFD700]">Cape Town</span>, South Africa. With over 15 years of hands-on experience in the field, I have honed my expertise and built a strong foundation in telecommunications. Additionally, I have expanded my skillset into the networking field, allowing me to offer comprehensive solutions to clients. Currently, I am proud to serve as a subcontractor for <span className="text-[#FFD700]">Open Serve</span> as well. This opportunity has further enriched my professional journey, enabling me to deliver exceptional workmanship and uphold the high standards expected in the industry. Throughout my career, I have always prioritized myself in delivering and guaranteeing superior workmanship, which has been a constant source of pride for me.
				</p>

				{/* My Experience */}
				<h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD700]">My Experience</h3>
				<p className="text-lg md:text-xl text-start">
					With over <span className="text-[#FFD700]">15 years</span> of experience, I have worked in various roles within the telecommunications industry, gaining invaluable hands-on experience. I have expanded my expertise into the <span className="text-[#FFD700]">networking</span> field, providing complete solutions that are both efficient and reliable. I take pride in the high standards of work that I uphold, always ensuring that each project I complete exceeds expectations. This dedication has allowed me to build a strong reputation and continue growing professionally.
				</p>
			</div>
		</div>
	</section>
);

export default About;
