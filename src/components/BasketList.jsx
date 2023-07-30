import { BasketItem } from './BasketItem';

//6 Функциональный компонент BasketList, список заказов в корзине, в props приходит массив со списком заказов и функция управления состоянием показа корзины
function BasketList(props) {
	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
	} = props;

	//Функция рассчета итоговой суммы в корзине
	const totalPrice = order.reduce((acc, el) => {
		const price =
			el.price.regularPrice === el.price.finalPrice
				? el.price.regularPrice
				: el.price.finalPrice;
		return acc + price * el.quantity;
	}, 0);

	return (
		<div className='basket'>
			<h2 className='basket__title'>
				Cart:
				<span
					className='basket__symbol-close symbol'
					onClick={handleBasketShow}
				>
					&#10006;
				</span>
			</h2>

			{order.length ? ( //Если заказы есть, обходим массив с заказами, отрисовываем элементы через BasketItem
				order.map(item => (
					<BasketItem
						key={item.mainId}
						removeFromBasket={removeFromBasket}
						{...item}
					/>
				))
			) : (
				<li className='basket__item-block'>Сart is empty</li>
			)}
			<li className='basket__total'>Total cost: {totalPrice} ₽</li>
			<button className='basket__button-buy'>Buy</button>
		</div>
	);
}

export { BasketList };
