import gh from '../icons/github.svg';

export function Footer() {
	return (
		<footer className='container footer-prop'>
			<div className='row footer'>
				<div className='col-12 footer-cols'>
					<div className='copyright'>
						<p className='copyright__up-text'>
							© {new Date().getFullYear()}
							&nbsp; «Hero shop»
						</p>
						<p className='copyright__bottom-text'>All Rights Reserved</p>
					</div>
					<div className='link-contacts'>
						<a className='navbar-brand' href='https://github.com/nda17'>
							<img
								className='link-contacts__gh'
								src={gh}
								alt='Github'
								width='30'
								height='30'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
