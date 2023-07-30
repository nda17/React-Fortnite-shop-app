//4 Функциональный компонент - карточка товара, принимающая данные через props 
function GoodsItem(props) {
    const {
			mainId,
			displayName,
			displayDescription,
			price,
			displayAssets,
            addToBasket = Function.prototype,
		} = props;
    return (
			<div className='col-12 cards'>
				<div className='card h-100'>
					<img
						src={displayAssets[0].url}
						id={mainId}
						className='card-img-top'
						alt='Item'
					/>
					<div className='card-body'>
						<h5 className='card-title'>{displayName.toUpperCase()}</h5>
						<p className='card-description'>{displayDescription}</p>
						<div className='card-content-container'>
							<a href='#0' className='btn btn-primary' onClick={() => addToBasket({ /*В момент клика выполянем функцию и передаем в нее параметры*/
                                mainId,
                                displayName,
                                price,
                            })}>
								Buy
							</a>
							{price.finalPrice === price.regularPrice ? (
								<div className='card-info'>
									<p className='card-price'>
										Regular price: {price.regularPrice}&nbsp;
									</p>
									<p>₽</p>
								</div>
							) : (
								<div>
									<s className='card-info'>
										<p className='card-price'>
											Regular price: {price.regularPrice}&nbsp;
										</p>
										<p>₽</p>
									</s>
									<div className='card-info sale'>
										<p className='card-price'>Sale: {price.finalPrice}&nbsp;</p>
										<p>₽</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
}

export { GoodsItem };



        //     "mainId": "BariumDemon_Bundle",
        //     "displayName": "VORACIOUS VELOCITY PACK",
        //     "displayDescription": "",
        //     "displayType": "4 Item Bundle",
        //     "mainType": "bundle",
        //     "offerId": "v2:/caa4e47ab564e7c20bcbec6ce8892993a22dd1f56993826b12f918e5866464c6",
        //     "displayAssets": [
        //         {
        //             "displayAsset": "DAv2_Bundle_Featured_BariumDemon",
        //             "materialInstance": "MI_Bundle_Featured_BariumDemon",
        //             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_BariumDemon/MI_Bundle_Featured_BariumDemon.png",
        //             "flipbook": null,
        //             "background_texture": null,
        //             "background": "https://media.fortniteapi.io/images/shop/caa4e47ab564e7c20bcbec6ce8892993a22dd1f56993826b12f918e5866464c6/v2/MI_Bundle_Featured_BariumDemon/background.png",
        //             "full_background": "https://media.fortniteapi.io/images/shop/caa4e47ab564e7c20bcbec6ce8892993a22dd1f56993826b12f918e5866464c6/v2/MI_Bundle_Featured_BariumDemon/info.en.png"
        //         }
        //     ],
        //     "firstReleaseDate": "2023-01-13",
        //     "previousReleaseDate": "2023-04-30",
        //     "giftAllowed": true,
        //     "buyAllowed": true,
        //     // "price": {
        //     //     "regularPrice": 1600,
        //     //     "finalPrice": 1600,
        //     //     "floorPrice": 1600
        //     // },

        //     "rarity": {
        //         "id": "Epic",
        //         "name": "Epic"
        //     },
        //     "series": null,
        //     "banner": {
        //         "id": "PickaxeWrap",
        //         "name": "Includes Pickaxe & Wrap!",
        //         "intensity": "High"
        //     },
        //     "offerTag": {
        //         "id": "bariumdemondesc",
        //         "text": "Unsheathe the <text color=\"FFFFFFFF\">MOMENTUM</> Pickaxe from the <text color=\"FFFFFFFF\">SOUL SHROUD</> Back Bling when both are equipped!"
        //     },
        //     "granted": [
        //         {
        //             "id": "Character_BariumDemon",
        //             "type": {
        //                 "id": "outfit",
        //                 "name": "Outfit"
        //             },
        //             "name": "Keleritas",
        //             "description": "Speed demon. Literally.",
        //             "rarity": {
        //                 "id": "Epic",
        //                 "name": "Epic"
        //             },
        //             "series": null,
        //             "images": {
        //                 "icon": "https://media.fortniteapi.io/images/ff6a921b3f5e410d62b250dfb3095580/transparent.png",
        //                 "featured": null,
        //                 "background": "https://media.fortniteapi.io/images/cosmetics/ff6a921b3f5e410d62b250dfb3095580/v2/background.png",
        //                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/ff6a921b3f5e410d62b250dfb3095580/v2/icon_background.png",
        //                 "full_background": "https://media.fortniteapi.io/images/cosmetics/ff6a921b3f5e410d62b250dfb3095580/v2/info.en.png"
        //             },
        //             "video": null,
        //             "audio": null,
        //             "gameplayTags": [
        //                 "SoundLibrary.ID.StepType.BarefootHeavy",
        //                 "SoundLibrary.ID.ClothingType.Scales",
        //                 "SoundLibrary.ID.HandType.Robot",
        //                 "Cosmetics.Set.AvidSpeed",
        //                 "Cosmetics.Source.ItemShop",
        //                 "Cosmetics.Filter.Season.23"
        //             ],
        //             "set": {
        //                 "id": "AvidSpeed",
        //                 "name": "Voracious Velocity",
        //                 "partOf": "Part of the Voracious Velocity set."
        //             }
        //         },
        //         {
        //             "id": "Backpack_BariumDemon",
        //             "type": {
        //                 "id": "backpack",
        //                 "name": "BackBling"
        //             },
        //             "name": "Soul Shroud",
        //             "description": "Woven from the souls of battles past.",
        //             "rarity": {
        //                 "id": "Rare",
        //                 "name": "RARE"
        //             },
        //             "series": null,
        //             "images": {
        //                 "icon": "https://media.fortniteapi.io/images/0e633b5b01f1964cfb63d23cc7c28341/transparent.png",
        //                 "featured": null,
        //                 "background": "https://media.fortniteapi.io/images/cosmetics/0e633b5b01f1964cfb63d23cc7c28341/v2/background.png",
        //                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/0e633b5b01f1964cfb63d23cc7c28341/v2/icon_background.png",
        //                 "full_background": "https://media.fortniteapi.io/images/cosmetics/0e633b5b01f1964cfb63d23cc7c28341/v2/info.en.png"
        //             },
        //             "video": null,
        //             "audio": null,
        //             "gameplayTags": [
        //                 "Cosmetics.Set.AvidSpeed",
        //                 "Cosmetics.Source.ItemShop",
        //                 "Cosmetics.Filter.Season.23",
        //                 "Cosmetics.Backpack.IsCape"
        //             ],
        //             "set": {
        //                 "id": "AvidSpeed",
        //                 "name": "Voracious Velocity",
        //                 "partOf": "Part of the Voracious Velocity set."
        //             }
        //         },
        //         {
        //             "id": "Pickaxe_BariumDemon",
        //             "type": {
        //                 "id": "pickaxe",
        //                 "name": "Harvesting Tool"
        //             },
        //             "name": "Momentum",
        //             "description": "This demonic blade is powered by stolen velocity.",
        //             "rarity": {
        //                 "id": "Epic",
        //                 "name": "Epic"
        //             },
        //             "series": null,
        //             "images": {
        //                 "icon": "https://media.fortniteapi.io/images/4bb20bd5fc14e4362cf0d34b70cc931e/transparent.png",
        //                 "featured": null,
        //                 "background": "https://media.fortniteapi.io/images/cosmetics/4bb20bd5fc14e4362cf0d34b70cc931e/v2/background.png",
        //                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/4bb20bd5fc14e4362cf0d34b70cc931e/v2/icon_background.png",
        //                 "full_background": "https://media.fortniteapi.io/images/cosmetics/4bb20bd5fc14e4362cf0d34b70cc931e/v2/info.en.png"
        //             },
        //             "video": null,
        //             "audio": null,
        //             "gameplayTags": [
        //                 "Cosmetics.Pickaxe.OneHanded",
        //                 "Cosmetics.Set.AvidSpeed",
        //                 "Cosmetics.Source.ItemShop",
        //                 "Cosmetics.Filter.Season.23"
        //             ],
        //             "set": {
        //                 "id": "AvidSpeed",
        //                 "name": "Voracious Velocity",
        //                 "partOf": "Part of the Voracious Velocity set."
        //             }
        //         },
        //         {
        //             "id": "Wrap_Barium_Demon",
        //             "type": {
        //                 "id": "wrap",
        //                 "name": "Wrap"
        //             },
        //             "name": "Acceleration",
        //             "description": "Show your style.",
        //             "rarity": {
        //                 "id": "Rare",
        //                 "name": "RARE"
        //             },
        //             "series": null,
        //             "images": {
        //                 "icon": "https://media.fortniteapi.io/images/25465022d6bdc98c1553edaccc295fd3/transparent.png",
        //                 "featured": null,
        //                 "background": "https://media.fortniteapi.io/images/cosmetics/25465022d6bdc98c1553edaccc295fd3/v2/background.png",
        //                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/25465022d6bdc98c1553edaccc295fd3/v2/icon_background.png",
        //                 "full_background": "https://media.fortniteapi.io/images/cosmetics/25465022d6bdc98c1553edaccc295fd3/v2/info.en.png"
        //             },
        //             "video": null,
        //             "audio": null,
        //             "gameplayTags": [
        //                 "Cosmetics.UserFacingFlags.Wrap.Animated",
        //                 "Cosmetics.UserFacingFlags.Reactive.WeaponFire",
        //                 "Cosmetics.Set.AvidSpeed",
        //                 "Cosmetics.Source.ItemShop",
        //                 "Cosmetics.Filter.Season.23"
        //             ],
        //             "set": {
        //                 "id": "AvidSpeed",
        //                 "name": "Voracious Velocity",
        //                 "partOf": "Part of the Voracious Velocity set."
        //             }
        //         }
        //     ],
        //     "priority": -1,
        //     "section": {
        //         "id": "Featured",
        //         "name": "Featured",
        //         "landingPriority": 65
        //     },
        //     "groupIndex": 0,
        //     "storeName": "BRWeeklyStorefront",
        //     "tileSize": "DoubleWide",
        //     "categories": [
        //         "Panel01"
        //     ]
        // },