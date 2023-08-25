import cn from 'clsx'
import styles from './MobileMenu.module.scss'
import { useRef } from 'react'
import { useClickOutside } from '../hooks/useClickOutside' //Хук для закрытия меню при клике вне его блока

const MobileMenu = props => {
	const { isVisible, handleOpenHamburger = Function.prototype } = props //Состояние показан бургер или стрелка (открыто меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, () => handleOpenHamburger()) //Закрытие меню при клике вне его блока

	return (
		!isVisible && (
			<ul className={cn(styles.navContainer)} ref={mobileMenuRef}>
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
	)
}

export { MobileMenu }
