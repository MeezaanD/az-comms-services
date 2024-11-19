import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => (
	<section id='contact'>
		<div className="bg-[rgb(16,16,16)] text-white py-16 px-6 text-center">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get in Touch</h2>
			<p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
				Reach out today for a consultation or to learn more about my services.
			</p>
			<div className="flex flex-wrap justify-center gap-12">
				<div className="flex flex-col items-center">
					<h3 className="text-2xl font-semibold mb-2">Abdul-Karriem Samai</h3>
					<p className="text-lg mt-2">
						<FaPhoneAlt className="inline mr-2 text-gray-400" /><a
							href="tel:+27714618796"
							className="text-[#1DA1F2] hover:underline"
							rel="noopener noreferrer">
							Cell: 071 461 8796
						</a>
					</p>
					<p className="text-lg mt-2">
						<FaWhatsapp className="inline mr-2 text-[#25D366]" /> <a
							href="https://wa.me/27714618796"
							className="text-[#25D366] hover:underline"
							rel="noopener noreferrer"
							target="_blank">
							WhatsApp: 071 461 8796
						</a>
					</p>
				</div>
				<div className="flex flex-col items-center">
					<h3 className="text-2xl font-semibold mb-2">Alternatlively</h3>
					<p className="text-lg mt-2">
						<FaPhoneAlt className="inline mr-2 text-gray-400" /><a
							href="tel:+27733866116"
							className="text-[#1DA1F2] hover:underline"
							rel="noopener noreferrer">
							Cell: 073 386 6116
						</a>
					</p>
					<p className="text-lg mt-2">
						<FaWhatsapp className="inline mr-2 text-[#25D366]" /> <a
							href="https://wa.me/27733866116"
							className="text-[#25D366] hover:underline"
							rel="noopener noreferrer"
							target="_blank">
							WhatsApp: 073 386 6116
						</a>
					</p>
				</div>
			</div>
			<div className="mt-8">
				<p className="text-lg">
					📧 <a
						href="mailto:samaaiak@gmail.com"
						className="text-[#1DA1F2] hover:underline"
						rel="noopener noreferrer">
						Email Address: samaaiak@gmail.com
					</a>
				</p>
			</div>
		</div>
	</section>
);

export default Contact;
