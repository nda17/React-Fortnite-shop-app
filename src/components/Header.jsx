import logo from '../images/fortnite-logo.svg'
import cn from 'clsx'
import styles from './Header.module.scss'

import { Hamburger } from './Hamburger'

function Header() {
	return (
		<header className={cn('container', styles.headerProp)}>
			<div className={cn('row', styles.header)}>
				<div className={cn('col-6', styles.leftHeaderColumn)}>
					<img className={cn(styles.logoImage)} src={logo} alt='Logo' />
				</div>
				<div className={cn('col-6', styles.navColumn)}>
					<nav className={cn('nav-desktop')}>
						<ul className={cn(styles.navContainer)}>
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
					</nav>
					<nav className={cn('nav-mobile')}>
						<Hamburger />
					</nav>
				</div>
			</div>
		</header>
	)
}

export { Header }
