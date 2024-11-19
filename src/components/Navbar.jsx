import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'About', href: '#about', current: false },
	{ name: 'Services', href: '#services', current: false },
	{ name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const [currentNav, setCurrentNav] = useState('Home'); // Track the current active nav item

	const handleNavClick = (name) => {
		setCurrentNav(name); // Set the clicked nav item as the active one
	};

	return (
		<Disclosure as="nav" className="fixed top-5 left-0 right-0 z-50">
			{({ open }) => (
				<>
					<div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-3xl">
						<div className="bg-[rgb(16,16,16)] relative flex h-16 items-center justify-between shadow-lg rounded-lg">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[rgb(16,16,16)] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-auto"
										src="https://i.postimg.cc/bwwKT16W/Screenshot-from-2024-11-19-15-10-08.png"
										alt="AZ Comms Logo"
									/>
									<span className="ml-3 text-white text-xl font-semibold">
										AZ Comms & Services
									</span>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												onClick={() => handleNavClick(item.name)} // Update the active item on click
												className={classNames(
													'bg-[rgb(16,16,16)]', // Keep the same background
													currentNav === item.name
														? 'text-white' // Brighter text for current
														: 'text-[rgba(184,184,184,255)]', // Default muted text color
													'rounded-md px-3 py-2 text-sm font-medium'
												)}
												aria-current={currentNav === item.name ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile menu panel */}
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									onClick={() => handleNavClick(item.name)} // Update the active item on click
									className={classNames(
										'bg-[rgb(16,16,16)]', // Keep the same background
										currentNav === item.name
											? 'text-white' // Brighter text for current
											: 'text-[rgba(184,184,184,255)]', // Default muted text color
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={currentNav === item.name ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
