import { useState } from "react";

//Функция с состоянием открытия бургер-меню
const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const toggle = () => {
        setValue(!value)
    } 

    return [value, toggle]
}

export {useToggle}