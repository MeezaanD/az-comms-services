import React from 'react';
import {
  FaNetworkWired,
  FaWifi,
  FaVideo,
  FaSatelliteDish,
  FaBolt,
  FaTrashAlt,
  FaGlobe,
  FaEthernet,
  FaPlug,
} from 'react-icons/fa';

const services = [
  {
    title: 'Fibre Installation & Repair',
    description: 'Professional installation and repair of fiber optic connections ensuring reliable high-speed internet.',
    icon: <FaNetworkWired className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'Internet Issues',
    description: 'Troubleshooting and resolving complex internet connectivity problems for homes and businesses.',
    icon: <FaGlobe className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'LAN Cable Installation',
    description: 'Expert installation of Local Area Network cabling for optimal network performance.',
    icon: <FaEthernet className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'Wi-Fi Extension',
    description: 'Extend your Wi-Fi coverage to eliminate dead zones and ensure consistent connectivity.',
    icon: <FaWifi className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'CCTV Installation',
    description: 'Setup of security camera systems to protect your home or business with 24/7 monitoring.',
    icon: <FaVideo className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'DSTV & OpenView Installation',
    description: 'Professional installation and configuration of satellite TV services.',
    icon: <FaSatelliteDish className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'Conduit Installation',
    description: 'Clean and proper installation of conduits for cable management and protection.',
    icon: <FaPlug className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'UPS Installation',
    description: 'Installation of Uninterrupted Power Supply systems to keep your devices running during outages.',
    icon: <FaBolt className="text-blue-600 h-12 w-12" />,
  },
  {
    title: 'Cable Removal',
    description: 'Safe and efficient removal of old or unused cables to clean up your space.',
    icon: <FaTrashAlt className="text-blue-600 h-12 w-12" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 text-gray-800 py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
