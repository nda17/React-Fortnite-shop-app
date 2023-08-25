import cn from 'clsx'
import styles from './BasketItem.module.scss'

//7 Функциональный компонент BasketItem, один элемент корзины, в props приходит информация о товарах
const BasketItem = props => {
	const {
		offerId,
		displayName,
		price,
		quantity,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype
	} = props

	return (
		<div className={cn(styles.basketItemWrap)}>
			<div className={cn(styles.basketItemProp)}>
				<h3 className={cn(styles.basketNameItem)}>{displayName}</h3>
			</div>
			<span className={cn(styles.basketQuantityBtnWrap)}>
				<a
					href='#0'
					className={cn(styles.basketSymbolBottom)}
					onClick={() => {
						incQuantity(offerId)
					}}
				>
					&#43;
				</a>
				<a
					href='#0'
					className={cn(styles.basketSymbolTop)}
					onClick={() => {
						decQuantity(offerId)
					}}
				>
					&#8722;
				</a>
				{quantity}
			</span>
			<div className={cn(styles.basketPriceWrap)}>
				<span className={cn(styles.basketPriceCostText)}>Cost:</span>
				<div className={cn(styles.basketPrice)}>
					{price.regularPrice === price.finalPrice
						? price.regularPrice * quantity
						: price.finalPrice * quantity}
					<span>₽</span>
				</div>
			</div>
			<span
				className={cn(styles.basketSymbolClose)}
				onClick={() => removeFromBasket(offerId)}
			>
				&#10006;
			</span>
		</div>
	)
}

export { BasketItem }
