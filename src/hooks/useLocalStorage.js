import { useState, useEffect } from 'react'

function useLocalStorage(isInitialState, key) {
	// getting stored value
	const get = () => {
        const storage = localStorage.getItem(key)
        const savedStorage = JSON.parse(storage)

        return savedStorage ? +savedStorage : isInitialState
    }

    const [value, setValue] = useState(get) 

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]

}

export {useLocalStorage}