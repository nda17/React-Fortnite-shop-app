import { GoodsItem } from './GoodsItem'
import cn from 'clsx'
import styles from './GoodsList.module.scss'

//3 Функциональный компонент GoodsList для проверки входящих данных и дальнейшей отрисовки контента c пагинацией / вывода ошибки. Через props принимает массив со всеми пришедшими товарами, параметры пагинации, параметры обработки клика Добавить в корзину.
const GoodsList = props => {
	const {
		goods = [], //Массив с данными с сервера
		cardPerPage, //Количество отображаемых карточек в группе на одной странице (пагинация)
		currentPage, //Текущая страница с группой карточек (пагинация)
		paginate = Function.prototype, //Функция показа страницы с группой карточек при клике кнопки с номером страницы
		prevPage = Function.prototype, //Функция вывода предыдущей группы карточек при клике кнопки Prev page
		nextPage = Function.prototype, //Функция вывода следующей группы карточек при клике кнопки Next Page
		addToBasket = Function.prototype, //Функция добавления товара в корзину
		isBasketShow = false //Состояние отвечающее за статус отображения корзины
	} = props

	//Если в props пусто:
	if (!goods.length) {
		return <h3 className='error-font'>Nothing found!</h3>
	}

	//Пагинация:
	const lastCardIndex = currentPage * cardPerPage //Индекс последней карточки
	const firstCardIndex = lastCardIndex - cardPerPage //Индекс первой карточки
	const currentCard = goods.slice(firstCardIndex, lastCardIndex)
	const pageNumbers = [] //Массив с отображаемыми группами страниц
	for (let i = 1; i <= Math.ceil(goods.length / cardPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div
			className={cn('row', styles.rowSectionMain, {
				[styles.show]: isBasketShow //Серый фильтр при открытой корзине
			})}
		>
			{currentCard.map(item => (
				<GoodsItem
					key={item.offerId}
					{...item}
					addToBasket={
						addToBasket /*Передача addToBasket ниже в GoodsItem как props*/
					}
				/>
			))}
			<ul className={cn(styles.paginations)}>
				{pageNumbers.map(number => (
					<li
						className={cn(styles.paginationsItem, {
							// eslint-disable-next-line
							['activePage']: number === currentPage
						})}
						key={number}
					>
						<a
							href='#0'
							className={cn(styles.paginationsItemLink, {
								// eslint-disable-next-line
								['activePageNumber']: number === currentPage
							})}
							key={number}
							onClick={() => paginate(number)}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
			<div className={cn(styles.pageControlWrap)}>
				<button
					className={cn(
						'btn',
						'btn-primary',
						'pageControlBtn',
						styles.pageControlBtn
					)}
					onClick={prevPage}
				>
					Prev page
				</button>
				<button
					className={cn(
						'btn',
						'btn-primary',
						'pageControlBtn',
						styles.pageControlBtn
					)}
					onClick={nextPage}
				>
					Next page
				</button>
			</div>
		</div>
	)
}

export { GoodsList }
