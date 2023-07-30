import { GoodsItem } from "./GoodsItem";

//3 Функциональный компонент GoodsList для проверки входящих данных и дальнейшей отрисовки контента / вывода ошибки. Через props принимает массив со всеми пришедшими товарами. 
function GoodsList(props) {
	const { goods = [], addToBasket = Function.prototype } = props; //goods, по умолчанию пустой массив

    //Если в props пусто:
    if (!goods.length) {
        return <h3>Nothing found!</h3>
    }
    //Иначе обойти goods и отрисовать каждую карточку
    // const pageGoodList = () => {
    //     goods.length / 10 = 
    //     for (let i = 0; i < goods.length; i++) {
    //         if (i <= i + 10)
    //     }
    // } 
    return (
			<div className='row row-main'>
				{goods.map(item => (
					<GoodsItem key={item.mainId} {...item} addToBasket={addToBasket /*Передача addToBasket ниже в GoodsItem как props*/ }/>
				))}
			</div>
		);
}

export { GoodsList };
