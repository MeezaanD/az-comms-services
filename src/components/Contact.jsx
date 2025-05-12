import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import banner from '../assets/az-communications-banner.jpg';

const Contact = () => {
	const currentYear = new Date().getFullYear();
	return (
		<section id="contact">
			<div
				className="text-white py-16 px-6"
				style={{
					backgroundImage: `url(${banner})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundColor: 'rgba(16,16,16,0.85)',
					backgroundBlendMode: 'darken',
				}}
			>
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Get in Touch
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-left">
					{/* Column 1: Company Info */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">AZ Communications</h3>
						<p className="text-lg">
							Expert telecommunications solutions for homes and businesses across Cape Town.
						</p>
					</div>

					{/* Column 2: Services */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Services</h3>
						<ul className="space-y-2 text-lg">
							<li>Fibre Installation & Repair</li>
							<li>LAN Cable Installation</li>
							<li>Wi-Fi Extension</li>
							<li>CCTV Installation</li>
							<li>DSTV & OpenView Installation</li>
						</ul>
					</div>

					{/* Column 3: Quick Links */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-lg">
							<li><a href="#" className="hover:underline">Home</a></li>
							<li><a href="#services" className="hover:underline">Services</a></li>
							<li><a href="#about" className="hover:underline">About</a></li>
							<li><a href="#contact" className="hover:underline">Contact</a></li>
						</ul>
					</div>

					{/* Column 4: Contact Details */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
						<div className="space-y-3 text-lg">
							<div>
								<p>Abdul-Karriem Samaai</p>
								<p>
									<FaPhoneAlt className="inline mr-2 text-gray-400" />
									<a href="tel:+27714618796" className="text-[#1DA1F2] hover:underline">
										071 461 8796
									</a>
								</p>
								<p>
									<FaWhatsapp className="inline mr-2 text-[#25D366]" />
									<a href="https://wa.me/27714618796" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
										WhatsApp: 071 461 8796
									</a>
								</p>
							</div>
							<div>
								<p>Alternatively:</p>
								<p>
									<FaPhoneAlt className="inline mr-2 text-gray-400" />
									<a href="tel:+27733866116" className="text-[#1DA1F2] hover:underline">
										073 386 6116
									</a>
								</p>
								<p>
									<FaWhatsapp className="inline mr-2 text-[#25D366]" />
									<a href="https://wa.me/27733866116" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
										WhatsApp: 073 386 6116
									</a>
								</p>
							</div>
							<div>
								<p>
									📧 <a href="mailto:samaaiak@gmail.com" className="text-[#1DA1F2] hover:underline">
										samaaiak@gmail.com
									</a>
								</p>
								<p>
									📧 <a href="mailto:azcomms73@gmail.com" className="text-[#1DA1F2] hover:underline">
										azcomms73@gmail.com
									</a>
								</p>
								<p>Cape Town, South Africa</p>
							</div>
						</div>
					</div>
				</div>

				<p className="text-center text-sm text-gray-300 mt-12">
					© AZ Communications {currentYear}. All Rights Reserved.
				</p>
			</div>
		</section>
	);
};

export default Contact;
