import cn from 'clsx'
import styles from './GoodsItem.module.scss'

//4 Функциональный компонент - карточка товара, принимающая данные через props
const GoodsItem = props => {
	const {
		offerId,
		displayName,
		displayDescription,
		price,
		displayAssets,
		addToBasket = Function.prototype
	} = props

	return (
		<div className={cn('col-12', styles.cards)}>
			<div className={cn('h-100', 'card', styles.card)}>
				<img
					src={displayAssets[0].full_background}
					id={offerId}
					className={cn('card-img-top', styles.cardImgTop)}
					alt='Item'
				/>
				<div className={cn('card-body')}>
					<h5 className={cn(styles.cardTitle)}>{displayName.toUpperCase()}</h5>
					<p className={cn(styles.cardDescription)}>{displayDescription}</p>
					<div>
						<button
							className={cn('btn', 'btn-primary', styles.btnCard)}
							onClick={() =>
								addToBasket({
									/*В момент клика выполянем функцию и передаем в нее параметры*/
									offerId,
									displayName,
									price
								})
							}
						>
							Buy
						</button>
						{price.finalPrice === price.regularPrice ? (
							<div className={cn(styles.cardInfo)}>
								<p className={cn(styles.cardPrice)}>
									Regular price: {price.regularPrice}&nbsp;
								</p>
								<p>V-Bucks</p>
							</div>
						) : (
							<div>
								<s className={cn(styles.cardInfo)}>
									<p className={cn(styles.cardPrice)}>
										Regular price: {price.regularPrice}&nbsp;
									</p>
									<p>V-Bucks</p>
								</s>
								<div className={cn(styles.cardInfo, styles.sale)}>
									<p className={cn('card-price')}>Sale: {price.finalPrice}&nbsp;</p>
									<p>V-Bucks</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export { GoodsItem }
