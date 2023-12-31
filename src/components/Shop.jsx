import { useState, useEffect } from 'react'
import cn from 'clsx'
import '../assets/styles/index.scss'
import { API_KEY } from '../config'
import { API_URL } from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import { BasketList } from './BasketList'
import axios from 'axios'

//1 Функциональный компонент Shop
function Shop() {
	//Состояние компонентов:
	const [goods, setGoods] = useState([]) //Список товаров / функция обновления списка товаров
	const [loading, setLoading] = useState(true) //Прелоадер
	const [order, setOrder] = useState([]) //Корзина с товарами
	const [isBasketShow, setBasketShow] = useState(false) //Состояние отвечающее за статус отображения корзины
	const [isAlertShow, setAlertShow] = useState(false)
	// eslint-disable-next-line
	const [textAlert, setTextAlert] = useState('') //Информационный баннер корзины (текст)
	const [currentPage, setCurrentPage] = useState(1) //Текущая отображаемая группа страниц (пагинация)
	const [cardPerPage] = useState(10) //Количество отображаемых карточек в одной группе страниц (пагинация)

	//Функция добавления товара в корзину
	const addToBasket = item => {
		const itemIndex = order.findIndex(
			orderItem => orderItem.offerId === item.offerId
		) //Проверка присутствует ли данная карточка уже в корзине
		if (itemIndex < 0) {
			//Если нет, добавляем в корзину 1шт товара:
			const newItem = {
				...item,
				quantity: 1
			}
			setOrder([...order, newItem]) //Обновление заказов в корзине
			setTextAlert('New item added to cart')
			setAlertShow(true)
		} else {
			//Если уже присутствует:
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem
				}
			})
			setOrder(newOrder)
			setTextAlert('Quantity increased')
			setAlertShow(true)
		}
	}

	//Функция удаления товара из корзины, передаем в BasketList
	const removeFromBasket = offerId => {
		const newOrder = order.filter(el => el.offerId !== offerId)
		setOrder(newOrder)
		setTextAlert('Item removed')
		setAlertShow(true)
	}

	//Функция увеличения количества выбранного товара в корзине
	const incQuantity = offerId => {
		const newOrder = order.map(el => {
			if (el.offerId === offerId) {
				const newQuantity = el.quantity + 1
				setTextAlert('Quantity increased')
				setAlertShow(true)
				return {
					...el,
					quantity: newQuantity
				}
			} else {
				return el
			}
		})
		setOrder(newOrder)
	}

	//Функция уменьшения количества выбранного товара в корзине
	const decQuantity = offerId => {
		const newOrder = order.map(el => {
			if (el.offerId === offerId) {
				const newQuantity = el.quantity - 1
				newQuantity >= 1
					? setTextAlert('Quantity reduced')
					: setTextAlert('Quantity cannot be less than 1')
				return {
					...el,
					quantity: newQuantity >= 1 ? newQuantity : 1
				}
			} else {
				return el
			}
		})
		setOrder(newOrder)
		setAlertShow(true)
		setTimeout(() => {
			setAlertShow(false)
		}, 1200)
	}

	//Функция управления состоянием показа корзины, передаем в BasketList
	const handleBasketShow = () => {
		setBasketShow(!isBasketShow)
	}

	//Функция удаления текста из информационного баннера
	const closeAlert = () => {
		setAlertShow(false)
		setTextAlert('')
	}

	//Функция показа страницы с группой карточек при клике кнопки с номером страницы
	const paginate = pageNumber => setCurrentPage(pageNumber)

	//Функция показа предыдущей страницы с карточками, при клике кнопки Prev page
	const prevPage = () => {
		//Если текущая страница с карточками не первая
		if (currentPage !== 1) {
			setCurrentPage(prev => prev - 1)
		} else {
			/* Показ текста */
			setTextAlert('First page')
			setAlertShow(true)
		}
	}

	//Функция показа следующей страницы с карточками, при клике кнопки Next Page
	const nextPage = () => {
		//Если текущая страница с карточками не равна последней странице
		if (currentPage !== Math.ceil(goods.length / cardPerPage)) {
			setCurrentPage(prev => prev + 1)
		} else {
			/* Показ текста */
			setTextAlert('Last page')
			setAlertShow(true)
		}
	}

	//Функция получения товаров с сервера при монтировании и передача в goods
	useEffect(function getGoods() {
		axios({
			url: API_URL,
			headers: {
				Authorization: API_KEY
			}
		})
			.then(response => {
				response.data.shop && setGoods(response.data.shop) //Проверка приходят ли данные // передача данных в Список товаров
				setLoading(false)
			})
			.catch(error => {
				console.error(error)
				setLoading(false)
			})
	}, [])

	return (
		//Контейнер с черным фоном
		<div className={cn('container', 'color-background-content')}>
			<main
				className={cn('container', 'contentApp', 'mainProp', {
					// eslint-disable-next-line
					['show']: isBasketShow
				})}
			>
				<Cart
					quantity={order.length}
					handleBasketShow={
						handleBasketShow /*Передача состояния handleBasketShow ниже в Cart*/
					}
					textAlert={textAlert}
					closeAlert={closeAlert}
					isAlertShow={isAlertShow}
				/>
				{loading ? (
					<Preloader />
				) : (
					<GoodsList
						goods={goods}
						cardPerPage={cardPerPage}
						currentPage={currentPage}
						paginate={paginate}
						prevPage={prevPage}
						nextPage={nextPage}
						addToBasket={addToBasket}
						isBasketShow={isBasketShow}
					/>
				)}
				{
					/*Если isBasketShow === true?, отрисовать открытую корзину и передать в нее товары*/
					isBasketShow && (
						<BasketList
							order={order}
							handleBasketShow={handleBasketShow}
							removeFromBasket={removeFromBasket}
							incQuantity={incQuantity}
							decQuantity={decQuantity}
						/>
					)
				}
			</main>
		</div>
	)
}

export { Shop }
