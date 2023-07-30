import logo from '../images/shop.jpg';

export function Header() {
	return (
		<header className='container header-prop'>
			<div className='row header'>
				<div className='col-6 left-header-column'>
					<img className='logo-image' src={logo} alt='Logo' />
				</div>
				<div className='col-6 nav-column'>
					<nav>
						<ul className='nav-container'>
							<li className='nav-container__link-wrap'>
								<a href='#0' className='nav-container__link'>
									Catalog
								</a>
							</li>
							<li className='nav-container__link-wrap'>
								<a href='#0' className='nav-container__link'>
									Orders
								</a>
							</li>
							<li className='nav-container__link-wrap'>
								<a href='#0' className='nav-container__link'>
									Favorites
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
