import { BasketItem } from './BasketItem'
import cn from 'clsx'
import styles from './BasketList.module.scss'
import { useRef } from 'react'
import { useClickOutside } from '../hooks/useClickOutside' //Хук для закрытия корзины при клике вне ее блока

//6 Функциональный компонент BasketList, список заказов в корзине, в props приходит массив со списком заказов и функция управления состоянием показа корзины
const BasketList = props => {
	const basketRef = useRef(null)

	useClickOutside(basketRef, () => handleBasketShow()) //Закрытие корзины при клике вне ее блока

	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
		incQuantity,
		decQuantity
	} = props

	//Функция рассчета итоговой суммы в корзине
	const totalPrice = order.reduce((acc, el) => {
		const price =
			el.price.regularPrice === el.price.finalPrice
				? el.price.regularPrice
				: el.price.finalPrice
		return acc + price * el.quantity
	}, 0)

	return (
		<div className={cn('basketMedia', styles.basket)} ref={basketRef}>
			<h2 className={cn(styles.basketTitle)}>
				Cart:
				<span
					className={cn(styles.basketSymbolClose)}
					onClick={handleBasketShow}
				>
					&#10006;
				</span>
			</h2>
			<div className={cn(styles.basketListElements)}>
				{order.length ? ( //Если заказы есть, обходим массив с заказами, отрисовываем элементы через BasketItem
					order.map(item => (
						<BasketItem
							key={item.offerId}
							removeFromBasket={removeFromBasket}
							incQuantity={incQuantity}
							decQuantity={decQuantity}
							{...item}
						/>
					))
				) : (
					<li className={cn(styles.basketItemWrap)}>Сart is empty</li>
				)}
			</div>
			<li className={cn(styles.basketTotal)}>Total cost: {totalPrice} ₽</li>
			<button className={cn(styles.basketButtonBuy)}>Buy</button>
		</div>
	)
}

export { BasketList }
