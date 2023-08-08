import { useEffect, useRef, useState } from 'react'

const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
			console.log('isShow', isShow)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
		// eslint-disable-next-line
	}, [])

	return { ref, isShow, setIsShow }
}

export { useOnClickOutside }
