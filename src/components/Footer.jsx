import gh from '../icons/github.svg';

export function Footer() {
	return (
		<footer className='container footer-prop'>
			<div className='row'>
				<div className='col-12'>
					<p className='copyright'>
						© {new Date().getFullYear()}
						<a className='navbar-brand' href='https://github.com/nfdmitry'>
							<img
								className='copyright-image'
								src={gh}
								alt='Github'
								width='30'
								height='30'
							/>
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
