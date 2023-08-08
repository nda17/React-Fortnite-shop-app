//4 Функциональный компонент - карточка товара, принимающая данные через props
import cn from 'clsx'
import styles from './GoodsItem.module.scss'

function GoodsItem(props) {
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
					src={displayAssets[0].url}
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
								<p>₽</p>
							</div>
						) : (
							<div>
								<s className={cn(styles.cardInfo)}>
									<p className={cn(styles.cardPrice)}>
										Regular price: {price.regularPrice}&nbsp;
									</p>
									<p>₽</p>
								</s>
								<div className={cn(styles.cardInfo, styles.sale)}>
									<p className='card-price'>Sale: {price.finalPrice}&nbsp;</p>
									<p>₽</p>
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
