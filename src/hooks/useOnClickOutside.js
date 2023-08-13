import { useEffect, useRef, useState } from 'react'

//Отслеживание клика вне области корзины
const useOnClickOutside = isInitialValue => {
	const [isClickOutside, setClickOutside] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClickOutside = event => {
		if (ref.current && ref.current.contains(event.target)) {
			setClickOutside(false)
		} else {
			setClickOutside(true)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isClickOutside, setClickOutside }
}

export { useOnClickOutside }
