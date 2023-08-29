import cn from 'clsx'
import { FaBars } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import styles from './Hamburger.module.scss'
import { useToggle } from '../hooks/useToggle'
import { MobileMenu } from './MobileMenu'

const Hamburger = () => {
	const [isVisible, setVisible] = useToggle(true)

	//Функция управления состоянием показа корзины, передаем в BasketList
	const handleOpenHamburger = () => {
		setVisible(!isVisible)
	}

	return (
		<div className={cn(styles.hamburgerMenu)}>
			<button onClick={() => handleOpenHamburger()}>
				{isVisible ? (
					<FaBars className={cn(styles.iconImageHamburger)} />
				) : (
					<FaAngleDown className={cn(styles.iconImageArrowDown)} />
				)}
			</button>
			<MobileMenu
				isVisible={isVisible}
				handleOpenHamburger={handleOpenHamburger}
			/>
		</div>
	)
}

export { Hamburger }
