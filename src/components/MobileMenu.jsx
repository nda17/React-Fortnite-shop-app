import cn from 'clsx'

import styles from './MobileMenu.module.scss'

const MobileMenu = props => {
	// const logoutHandler = () => {}

	const { isVisible } = props //Состояние показан бургер или стрелка

	return (
		// <nav
		// 	className={cn(styles.menu, {
		// 		/* добавление класса styles.show при isShow === true*/
		// 		[styles.show]: isShow
		// 	})}
		// >

		!isVisible && <ul className={cn(styles.navContainer)}>
			<li className={cn(styles.navContainerLinkWrap)}>
				<a href='#0' className={cn(styles.navContainerLink)}>
					Catalog
				</a>
			</li>
			<li className={cn(styles.navContainerLinkWrap)}>
				<a href='#0' className={cn(styles.navContainerLink)}>
					Orders
				</a>
			</li>
			<li className={cn(styles.navContainerLinkWrap)}>
				<a href='#0' className={cn(styles.navContainerLink)}>
					Favorites
				</a>
			</li>
            
		</ul>
	)
}

export { MobileMenu }
