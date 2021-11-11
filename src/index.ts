const isSmoothScrollSupported = (() => {
	let isSupported: boolean | null = null

	return () => {
		if (isSupported === null) {
			const testElement = document.createElement('div')
			// Close enough to javascript behavior: 'smooth' so we assume the support is the same
			testElement.style.setProperty('scroll-behavior', 'smooth')

			isSupported = testElement.style.scrollBehavior === 'smooth'
		}

		return isSupported
	}
})()

export const scrollBy = (container: HTMLElement | Window, top: number, left: number) => {
	if (isSmoothScrollSupported()) {
		container.scrollBy({
			top: top,
			left: left,
			behavior: 'smooth',
		})
	} else {
		const duration = 500
		const initialTop = container instanceof Window ? container.scrollY : container.scrollTop
		const initialLeft = container instanceof Window ? container.scrollX : container.scrollLeft
		const startTime = new Date().getTime()
		const loop = () => {
			requestAnimationFrame(() => {
				const currentTime = new Date().getTime()
				const progress = Math.min(1, (currentTime - startTime) / duration)
				const easedProgress = Math.pow(progress, 1.675) // Ease-in
				container.scrollTo({
					top: initialTop + easedProgress * top,
					left: initialLeft + easedProgress * left,
					behavior: 'instant' as ScrollBehavior,
				})

				if (progress < 1) {
					loop()
				}
			})
		}
		loop()
	}
}
