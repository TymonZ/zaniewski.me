import { useState, useEffect } from 'react'

const Navigation = ({ hiding }) => {
	let isAlwaysVisible

	if (hiding == 0) {
		isAlwaysVisible = true
	} else {
		isAlwaysVisible = false
	}

	const [isVisible, setIsVisible] = useState(isAlwaysVisible)

	useEffect(() => {
		const handleScroll = () => {
			if (!isAlwaysVisible) {
				if (window.scrollY > hiding) {
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
		<nav className={isVisible ? 'visible pointer-events-none' : 'invisible pointer-events-none'}>
			<div className='z-40 fixed w-full py-5 px-8 flex flex-row justify-between text-l text-black font-medium font-body tracking-wide custom-filter'>
				<h1 className=""><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href="./">TYMON ZANIEWSKI</a></h1>
				<ul className="flex flex-row space-x-8">
					<li><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href="./about">ABOUT</a></li>
					<li><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href="./projects">PROJECTS</a></li>
					<li><a className="pointer-events-auto hover:font-bold hover:drop-shadow-md" href="./contact">CONTACT</a></li>
				</ul>
			</div>

			{/* background */}
			<div className='z-30 fixed w-full h-24 blur-filter-gradient-down'></div>
        </nav>
	)
}

export default Navigation