import cn from 'clsx'
import { FaBars } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import styles from './Hamburger.module.scss'
import { useToggle } from '../hooks/useToggle' 
import { MobileMenu } from './MobileMenu'

const Hamburger = () => {
    const [isVisible, setVisible] = useToggle(true)

	return (
		<div className={cn(styles.hamburgerMenu)}>
			<button onClick={() => setVisible(!isVisible)}>
				{isVisible ? <FaBars className={styles.iconImageHamburger} /> : <FaAngleDown className={styles.iconImageArrowDown} />}
			</button>
            <MobileMenu isVisible={isVisible}/>
		</div>
		// <div className={styles.wrapper} ref={ref}>
		// 	<button onClick={() => setIsShow(!isShow)}>
		// 		{isShow ? <IoClose /> : <CgMenuRight />}
		// 	</button>
		// 	<Menu isShow={isShow} setIsShow={setIsShow} />
		// </div>
	)
}

export {Hamburger}
