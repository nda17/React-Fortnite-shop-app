//5 Функциональный компонент Cart, корзина с товарами. Принимает props с количеством товара, по умолчанию quantity = 0.
import cn from 'clsx'
import styles from './Cart.module.scss'
import { AlertToCart } from './AlertToCart';

function Cart(props) {
	const {
		quantity = 0 /*Количество элементов в корзине, по умолчанию = 0*/,
		handleBasketShow = Function.prototype,
		textAlert = null,
		closeAlert = Function.prototype,
		isAlertShow = false
	} = props

	console.log();
	return (
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
			<AlertToCart
				textAlert={textAlert}
				closeAlert={closeAlert}
				isAlertShow={isAlertShow}
			/>
		</div>
	)
}

export { Cart };
