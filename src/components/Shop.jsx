import { useState, useEffect } from 'react';
import { API_KEY } from '../config';
import { API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

//1 Функциональный компонент Shop
function Shop() {
	//Состояние компонентов:
	const [goods, setGoods] = useState([]); //Список товаров / функция обновления списка товаров
	const [loading, setLoading] = useState(true); //Прелоадер
	const [order, setOrder] = useState([]); //Корзина с товарами
	const [isBasketShow, setBasketShow] = useState(false); //Состояние отвечающее за статус отображения корзины
	const [infoBanner, setInfoBanner] = useState('');

	//Функция добавления товара в корзину
	const addToBasket = item => {
		const itemIndex = order.findIndex(
			orderItem => orderItem.mainId === item.mainId
		); //Проверка присутствует ли данная карточка уже в корзине
		if (itemIndex < 0) {
			//Если нет, добавляем в корзину 1шт товара:
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem] /*обновление заказов в корзине*/);
			console.log('New item added to cart');
			setInfoBanner('New item added to cart');
		} else {
			//Если уже присутствует:
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					console.log('Quantity increased');
					setInfoBanner('Quantity increased');
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
					
				} else {
					return orderItem;
				}
			});
			setOrder(newOrder);
		}
		console.log(item); 
	};

	//Функция удаления товара из корзины, передаем в BasketList
	const removeFromBasket = itemId => {
		const newOrder = order.filter(el => el.mainId !== itemId);
		console.log('приходящий itemID:', itemId);
		// // console.log('order', newOrder.mainId);
		console.log('newORDER:', newOrder);
		setOrder(newOrder);
	};

	//Функция управления состоянием показа корзины, передаем в BasketList
	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
		document.querySelector('.row-main').classList.toggle('active'); //Blur-эффект
	};

	//Функция загрузки товаров при монтировании и передача в goods
	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then(response => response.json())
			.then(data => {
				data.shop && setGoods(data.shop); //Проверка приходят ли данные // передача данных в Список товаров
				setLoading(false)
			});
		// .catch(error => {
		// 	console.error(error);
		// 	setLoading(false);
		// });
	}, []);

	return (
		<main className='container content-app main-prop'>
			<Cart
				quantity={order.length}
				handleBasketShow={
					handleBasketShow /*Передача состояния handleBasketShow ниже в Cart*/
				}
			/>
			{loading ? (
				<Preloader />
			) : (
				<GoodsList
					goods={goods}
					addToBasket={
						addToBasket
					} /*Передача goods и addToBasket в GoodsList как props */
				/>
			)}
			{
				isBasketShow && (
					<BasketList
						order={order}
						handleBasketShow={handleBasketShow}
						removeFromBasket={removeFromBasket}
					/>
				) /*Если isBasketShow === true?, отрисовать открытую корзину и передать в нее товары*/
			}
		</main>
	);
}

export { Shop };
