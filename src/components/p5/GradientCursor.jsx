import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper } from "@p5-wrapper/react";

function GradientCursor({sketchID}) {
	const sketch = (p5) => {
		let SIZE = {
			WIDTH: 200,
			HEIGHT: 200,
		}
		let mouseCoords = {
			x: 0,
			y: 0,
		}
		const gradientColor = {
			r: 0, 
			g: 0, 
			b: 0,
		}
		const startingRadius = 170
		let gradientRadius = startingRadius
	
		p5.setup = () => {
			const parent = document.getElementById(sketchID)
			SIZE = {
				WIDTH: (parent.clientWidth + 15), // 15 = scrollbar size
				HEIGHT: parent.clientHeight,
			}
			p5.createCanvas(SIZE.WIDTH, SIZE.HEIGHT, p5.WEBGL);
		}

		// p5.updateWithProps = props => {
		// 	if (props.something) {
		// 		do something
		// 	}
		// };

        const gradientBrush = (x, y, radius, c) => {
            let h = 0
            for (let r = radius; r > 0; --r) {
                h = h+0.06
                p5.noStroke()
                p5.ellipseMode(20)
                p5.fill(c.r, c.g, c.b, h);
                p5.ellipse(x, y, r, r);
            }
        }

		const drawGradient = () => {
			mouseCoords = calculateMouseCoords(p5.mouseX, p5.mouseY)
			if (p5.mouseX != 0 && p5.mouseY != 0) {
                gradientBrush(mouseCoords.x, mouseCoords.y, gradientRadius, gradientColor)
			}
			gradientRadius = gradientRadius + ((Math.random()*2)-1)
		}

		p5.mouseMoved = () => {
			drawGradient()
		}

		// p5.mouseWheel = () => {
		// 	drawGradient()
		// }
	
		// moves [0,0] from top left to the center of the canvas
		const calculateMouseCoords = (mX, mY) => {
			const outX = mX - SIZE.WIDTH/2
			const outY = mY - SIZE.HEIGHT/2
			return {
				x: outX,
				y: outY
			}
		}

		p5.mouseClicked = () => {
			p5.clear()
			gradientRadius = startingRadius
			gradientBrush(mouseCoords.x, mouseCoords.y, gradientRadius)
		}
	}

	return (
		<div id={sketchID} className='w-screen h-full fixed top-0 left-0 z-0 flex justify-center items-center bg-lightgray'>
			<ReactP5Wrapper sketch={sketch}/>
		</div>
	);
}

export default GradientCursor