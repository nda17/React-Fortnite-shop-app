//5 Функциональный компонент Cart, корзина с товарами. Принимает props с количеством товара, по умолчанию quantity = 0.
function Cart(props) {
	const {
		quantity = 0 /*Количество элементов в корзине, по умолчанию = 0*/,
		handleBasketShow = Function.prototype,
	} = props;

	return (
		<div
			className='cart-wrap'
			onClick={
				handleBasketShow /*При клике на корзину вызов функции handleBasketShow*/
			}
		>
			<div className='cart'>
				<img
					className='cart-icon'
					src='https://img.icons8.com/3d-fluency/94/shopping-cart.png'
					alt='shopping-cart'
				/>
				{
					quantity ? (
						<span className='cart-quantity'>{quantity}</span>
					) : (
						0
					) /*если в props есть элементы, отобразить их количество в корзине*/
				}
			</div>
			{quantity ? <span className='cart-quantity'></span> : null}
		</div>
	);
}

export { Cart };
