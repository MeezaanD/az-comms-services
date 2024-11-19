import React, { useState } from 'react';

// Example of image slider data
const sliderImages = [
	'https://i.postimg.cc/D0Kx846j/1920.webp',
	'https://i.postimg.cc/HnHtpDWF/1920.webp',
	'https://i.postimg.cc/yNydww5D/1920.webp',
];

const Services = () => {
	// State to track the current image index
	const [currentImage, setCurrentImage] = useState(0);

	// Function to go to the previous image
	const prevImage = () => {
		setCurrentImage((prevState) => (prevState === 0 ? sliderImages.length - 1 : prevState - 1));
	};

	// Function to go to the next image
	const nextImage = () => {
		setCurrentImage((prevState) => (prevState === sliderImages.length - 1 ? 0 : prevState + 1));
	};

	return (
		<section id="services">
			<div className="bg-[rgb(16,16,16)] text-white py-16 px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{/* Service Cards with Relevant Icons */}
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* Fibre Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 224L0 416c0 17.7 14.3 32 32 32l64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32L160 64c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">Fibre Installation & Repair</h3>
						<p>Install, repair, and move fibre (FTTH - Fibre to the Home).</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* Internet Issues Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">Internet Issues</h3>
						<p>Repair and localise Internet issues.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* LAN Cable Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M80.3 44C69.8 69.9 64 98.2 64 128s5.8 58.1 16.3 84c6.6 16.4-1.3 35-17.7 41.7s-35-1.3-41.7-17.7C7.4 202.6 0 166.1 0 128S7.4 53.4 20.9 20C27.6 3.6 46.2-4.3 62.6 2.3S86.9 27.6 80.3 44zM555.1 20C568.6 53.4 576 89.9 576 128s-7.4 74.6-20.9 108c-6.6 16.4-25.3 24.3-41.7 17.7S489.1 228.4 495.7 212c10.5-25.9 16.3-54.2 16.3-84s-5.8-58.1-16.3-84C489.1 27.6 497 9 513.4 2.3s35 1.3 41.7 17.7zM352 128c0 23.7-12.9 44.4-32 55.4L320 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-296.6c-19.1-11.1-32-31.7-32-55.4c0-35.3 28.7-64 64-64s64 28.7 64 64zM170.6 76.8C163.8 92.4 160 109.7 160 128s3.8 35.6 10.6 51.2c7.1 16.2-.3 35.1-16.5 42.1s-35.1-.3-42.1-16.5c-10.3-23.6-16-49.6-16-76.8s5.7-53.2 16-76.8c7.1-16.2 25.9-23.6 42.1-16.5s23.6 25.9 16.5 42.1zM464 51.2c10.3 23.6 16 49.6 16 76.8s-5.7 53.2-16 76.8c-7.1 16.2-25.9 23.6-42.1 16.5s-23.6-25.9-16.5-42.1c6.8-15.6 10.6-32.9 10.6-51.2s-3.8-35.6-10.6-51.2c-7.1-16.2 .3-35.1 16.5-42.1s35.1 .3 42.1 16.5z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">LAN Cable Installation</h3>
						<p>Install LAN cable (Cat6) for network points, access points, CCTV cameras, etc.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* Wi-Fi Extension Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">Wi-Fi Extension</h3>
						<p>Extend Wi-Fi coverage in your space.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* CCTV Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">CCTV Installation</h3>
						<p>Install CCTV cameras for security surveillance.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* DSTV Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">DSTV & OpenView Installation</h3>
						<p>Install and repair DSTV and OpenView systems.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* Conduit Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">Conduit Installation</h3>
						<p>Install and lay conduits for fibre, intercoms, etc.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* UPS Installation Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l96 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l16 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l16 0zm304 96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32zM80 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">UPS Installation</h3>
						<p>Fit and supply UPS systems for power backup.</p>
					</div>
					<div className="bg-[rgb(108,108,100)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
						<div className="flex items-center justify-center mb-4">
							{/* Cable Removal Icon */}
							<svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" /></svg>
						</div>
						<h3 className="text-xl font-bold mb-2">Cable Removal</h3>
						<p>Remove any obsolete cables such as old Telecom cable, old TV aerial cables, etc.</p>
					</div>
				</div>

				{/* <div className="flex justify-center my-8">
					<div className="bg-[rgb(16,16,16)] text-white py-16 px-6">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>

						<div className="flex flex-wrap justify-center gap-4">
							{sliderImages.map((image, index) => (
								<div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
									<img src={image} alt={`service-image-${index}`} className="w-full h-auto rounded-lg shadow-lg" />
								</div>
							))}
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Services;
