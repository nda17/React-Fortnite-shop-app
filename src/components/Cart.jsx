import { useEffect } from 'react'
import cn from 'clsx'
import styles from './Cart.module.scss'

//5 Функциональный компонент Cart, корзина с товарами. Принимает props с количеством товара
const Cart = props => {
	const {
		quantity = 0 /*Количество элементов в корзине, по умолчанию = 0*/,
		handleBasketShow = Function.prototype,
		textAlert = null, //Информационный баннер корзины (текст)
		closeAlert = Function.prototype,
		isAlertShow = false
	} = props

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 1200)
		return () => {
			clearTimeout(timerId)
		}
		// eslint-disable-next-line
	}, [textAlert])

	return (
		<div className={cn(styles.cartWrapBlock)}>
			<div
				className={cn(styles.cartWrap)}
				onClick={
					handleBasketShow /*При клике на корзину вызов функции handleBasketShow*/
				}
			>
				<div className={cn(styles.cart)}>
					<img
						className={cn(styles.cartIcon)}
						src='https://img.icons8.com/3d-fluency/94/shopping-cart.png'
						alt='shopping-cart'
					/>
					{
						quantity ? (
							<span className={cn('cart-quantity')}>{quantity}</span>
						) : (
							0
						) /*если в props есть элементы, отобразить их количество в корзине*/
					}
				</div>
				{quantity ? <span className={cn('cart-quantity')}></span> : null}
				<div
					className={cn(styles.alertBanner, {
						[styles.show]: isAlertShow
					})}
				>
					<p className={cn(styles.alertBannerText)}>{textAlert}</p>
				</div>
			</div>
		</div>
	)
}

export { Cart }
