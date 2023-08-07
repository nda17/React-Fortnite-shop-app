import { useState } from 'react'

	const useHandleBasketShow = () => {
		const [isBasketShow, setBasketShow] = useState(false) //Состояние отвечающее за статус отображения корзины


		setBasketShow(!isBasketShow)


		return { isBasketShow, setBasketShow}
	}

export { useHandleBasketShow }