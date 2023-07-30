//2 Функциональный компонент - Preloader
export function Preloader() {
	return (
		<div className='d-flex align-items-center preloader-prop'>
			<strong className='preloader-prop__text'>Loading ...</strong>
			<div
				className='spinner-border ml-auto'
				role='status'
				aria-hidden='true'
			></div>
		</div>
	);
}




