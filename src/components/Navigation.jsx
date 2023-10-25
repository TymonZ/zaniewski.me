import { useState, useEffect } from 'react';

const Navigation = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={isVisible ? 'visible' : 'invisible'}>
			<div className='z-40 fixed w-full py-5 px-8 flex flex-row justify-between text-l text-black font-medium font-body tracking-wide custom-filter'>
				<h1 className=""><a class="hover:font-bold hover:drop-shadow-md" href="./">TYMON ZANIEWSKI</a></h1>
				<ul className="flex flex-row space-x-8">
					<li><a class="hover:font-bold hover:drop-shadow-md" href="./about">ABOUT</a></li>
					<li><a class="hover:font-bold hover:drop-shadow-md" href="./projects">PROJECTS</a></li>
					<li><a class="hover:font-bold hover:drop-shadow-md" href="./contact">CONTACT</a></li>
				</ul>
			</div>

			{/* background */}
			<div className='z-30 fixed w-full h-24 blur-filter-gradient-down'>
			</div>
        </nav>
	)
}

export default Navigation