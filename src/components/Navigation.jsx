import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from "react-icons/hi2";
import { RemoveScroll } from 'react-remove-scroll'

const navigationLinks = [
	{
		name: 'ABOUT',
		url: './about'
	},
	{
		name: 'PROJECTS',
		url: './projects'
	},
	{
		name: 'CONTACT',
		url: './contact'
	},
]

const ClickedNavigation = ({ handleNavClick }) => {
	return (
		<nav className='z-40 fixed w-screen h-screen blur-filter text-basegray font-medium font-body tracking-wide'>
			<RemoveScroll className='w-full h-full flex flex-col'>
				<div className='flex justify-between py-5 px-8 text-l'>
					<h1><a className="hover:font-bold hover:drop-shadow-md" href="./">TYMON ZANIEWSKI</a></h1>
					<HiXMark size='1.3em' onClick={handleNavClick}/>
				</div>
				<ul className='grow flex flex-col pt-40 gap-36 items-center text-xl'>
						{navigationLinks.map((navLink) => 
							<li key={navLink.url}><a className="hover:font-bold hover:drop-shadow-md" href={navLink.url}>{navLink.name}</a></li>
						)}
				</ul>	
			</RemoveScroll>
		</nav>
	)
}

const NotClickedNavigation = ({ handleNavClick, desktopHidingThreshold }) => {
	let isAlwaysVisible
	if (desktopHidingThreshold == 0) { isAlwaysVisible = true }
	else { isAlwaysVisible = false }

	const [isVisible, setIsVisible] = useState(isAlwaysVisible)

	// make visible when scrolled past threshold
	useEffect(() => {
		const handleScroll = () => {
			if (!isAlwaysVisible) {
				if (window.scrollY > desktopHidingThreshold) {
					setIsVisible(true)
				} else {
					setIsVisible(false)
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav className={`pointer-events-none ${isVisible ? 'visible' : 'invisible'}`}>
			<div className='z-40 fixed w-full py-5 px-8 flex flex-row justify-between text-l text-basegray font-medium font-body tracking-wide sm:custom-filter'>
				<h1 className=""><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href="./">TYMON ZANIEWSKI</a></h1>
				
				{/* show on mobile sizes */}
				<button onClick={handleNavClick} className='pointer-events-auto'>
					<HiBars3 size='1.3em' className='sm:hidden'/>
				</button>

				{/* show on desktop sizes */}
				<ul className='hidden sm:flex sm:flex-row sm:gap-x-8 pointer-events-auto'>
					{navigationLinks.map((navLink) => 
						<li key={navLink.url}><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href={navLink.url}>{navLink.name}</a></li>
					)}
				</ul>
			</div>

			{/* background */}
			<div className='z-30 fixed w-full h-36 sm:h-24 blur-filter-gradient-down'></div>
		</nav>
	)
}

const Navigation = ({ desktopHidingThreshold }) => {
	const [navClicked, setNavClicked] = useState(false)
	const handleNavClick = () => {
		if (navClicked) desktopHidingThreshold = 0
		if (navClicked) {
			// Enable body scroll
			document.body.style.overflow = 'auto';
		} else {
			// Disable body scroll
			document.body.style.overflow = 'hidden';
		}
		setNavClicked(!navClicked)
	}

	if (navClicked) {
		return <ClickedNavigation handleNavClick={handleNavClick}/>
	}
	else {
		return (
			<NotClickedNavigation 
				handleNavClick={handleNavClick} 
				desktopHidingThreshold={desktopHidingThreshold}
			/>
		)
	}
}

export default Navigation