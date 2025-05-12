import React from 'react';

const About = () => (
  <section id="about" className="bg-white text-black py-16 px-6">
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Our Expert
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Bio */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Abdul-Karriem Samaai
          </h3>
          <p className="text-lg mb-6 font-medium">
            Founder & Telecommunications Expert
          </p>
          <p className="text-lg mb-4">
            With over a decade of experience in the telecommunications industry, Abdul-Karriem Samaai has
            established himself as a trusted expert in network solutions across Cape Town.
          </p>
          <p className="text-lg mb-4">
            His extensive knowledge in fiber optics, LAN installation, CCTV setup, and other telecom services
            has helped countless homes and businesses achieve reliable connectivity and security.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Certified telecommunications technician</li>
            <li>Expert in fiber optic solutions</li>
            <li>Specialized in network troubleshooting</li>
            <li>Dedicated to customer satisfaction</li>
          </ul>
        </div>

        {/* Right Column: Mission & Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Commitment</h3>
          <blockquote className="italic border-l-4 border-blue-700 pl-4 text-gray-800 mb-6">
            “At AZ Comms & Services, we're committed to providing top-quality telecommunications solutions
            with exceptional service. Every installation, repair, and consultation is handled with the utmost
            professionalism and attention to detail.”
          </blockquote>

          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Professional and reliable service</li>
            <li>Experienced technician with proven track record</li>
            <li>Competitive pricing and honest quotes</li>
            <li>Comprehensive solutions for all your networking needs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
