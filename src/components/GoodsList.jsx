import { GoodsItem } from './GoodsItem';

//3 Функциональный компонент GoodsList для проверки входящих данных и дальнейшей отрисовки контента c пагинацией / вывода ошибки. Через props принимает массив со всеми пришедшими товарами, параметры пагинации, параметры обработки клика Добавить в корзину.
function GoodsList(props) {
	const {
		goods = [],
		cardPerPage,
		currentPage,
		paginate = Function.prototype,
		prevPage = Function.prototype,
		nextPage = Function.prototype,
		addToBasket = Function.prototype,
	} = props; //goods, по умолчанию пустой массив

	//Если в props пусто:
	if (!goods.length) {
		return <h3>Nothing found!</h3>;
	}

    //Пагинация:
	const lastCardIndex = currentPage * cardPerPage; //Индекс последней карточки
	const firstCardIndex = lastCardIndex - cardPerPage; //Индекс первой карточки
	const currentCard = goods.slice(firstCardIndex, lastCardIndex); 
	const pageNumbers = []; //Номер текущей группы страниц

	for (let i = 1; i < Math.ceil(goods.length / cardPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='row row-main'>
			{currentCard.map(item => (
				<GoodsItem
					key={item.mainId}
					{...item}
					addToBasket={
						addToBasket /*Передача addToBasket ниже в GoodsItem как props*/
					}
				/>
			))}
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li className='page-item' key={number}>
						<a href='#0' className='page-link' onClick={() => paginate(number)}>
							{number}
						</a>
					</li>
				))}
			</ul>
			<button className='btn btn-primary' onClick={prevPage}>Prev page</button>
			<button className='btn btn-primary' onClick={nextPage}>Next page</button>
		</div>
	);
}

export { GoodsList };