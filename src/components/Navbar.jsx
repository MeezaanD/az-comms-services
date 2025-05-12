import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import logo from '../assets/az-communications-logo-light.png';

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
	const [currentNav, setCurrentNav] = useState('Home');

	const handleNavClick = (name) => {
		setCurrentNav(name);
	};

	return (
		<Disclosure as="nav" className="fixed top-5 left-0 right-0 z-50">
			{({ open }) => (
				<>
					<div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-3xl">
						<div className="bg-[rgb(16,16,16)] flex h-16 items-center justify-between rounded-lg shadow-lg px-4 sm:px-6">
							{/* Logo */}
							<div className="flex items-center flex-shrink-0">
								<img className="h-10 w-auto" src={logo} alt="AZ Comms Logo" />
								<span className="ml-3 text-white text-xl font-semibold hidden sm:block">
									AZ Communications
								</span>
							</div>

							{/* Desktop Nav */}
							<div className="hidden sm:flex flex-1 justify-center items-center space-x-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										onClick={() => handleNavClick(item.name)}
										className={classNames(
											currentNav === item.name
												? 'text-white'
												: 'text-[rgba(184,184,184,255)]',
											'px-3 py-2 rounded-md text-sm font-medium transition duration-150 hover:text-white'
										)}
										aria-current={currentNav === item.name ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>

							{/* Mobile menu button */}
							<div className="flex sm:hidden">
								<DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
						</div>
					</div>

					{/* Mobile menu panel */}
					<DisclosurePanel className="sm:hidden bg-[rgb(16,16,16)] px-4 pt-2 pb-3 rounded-b-lg">
						{navigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as="a"
								href={item.href}
								onClick={() => handleNavClick(item.name)}
								className={classNames(
									currentNav === item.name ? 'text-white' : 'text-gray-400',
									'block px-3 py-2 rounded-md text-base font-medium hover:text-white'
								)}
								aria-current={currentNav === item.name ? 'page' : undefined}
							>
								{item.name}
							</DisclosureButton>
						))}
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
