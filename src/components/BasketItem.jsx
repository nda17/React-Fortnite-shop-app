//7 Функциональный компонент BasketItem, один элемент корзины, в props приходит информация о товарах
function BasketItem(props) {
	const { mainId, displayName, price, quantity, removeFromBasket = Function.prototype } = props;


	
	
	return (
		<div className='basket__item-block'>
			<div className='basket__item-prop'>
				<h3 className='basket__name-item'>{displayName}</h3>
				<div>
					<span>
						<span className='basket__symbol'>&#8722;</span>
						{quantity}
						<span className='basket__symbol'>&#43;</span>
					</span>
				</div>
			</div>
			<div>
				{price.regularPrice === price.finalPrice
					? price.regularPrice
					: price.finalPrice}
				₽
			</div>
			<span className='basket__symbol-close' onClick={() => removeFromBasket(mainId)}>&#10006;</span>
		</div>
	);
} 

export { BasketItem };
