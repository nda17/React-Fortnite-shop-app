import { useState, useEffect } from 'react'

function useLocalStorage(isInitialValue, key) {
    //Получение данных с Local Storage
    const getValue = () => {
        const storage = localStorage.getItem(key)

        if (storage) {
            return JSON.parse(storage)
        }

        return isInitialValue
    }

    const [value, setValue] = useState(getValue)
        
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export { useLocalStorage } 

// 	// getting stored value
// 	const get = () => {
//         const storage = localStorage.getItem(key)
//         const savedStorage = JSON.parse(storage)

//         return savedStorage ? +savedStorage : isInitialState
//     }

//     const [value, setValue] = useState(get) 

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value])

//     return [value, setValue]

// }

