import cn from 'clsx'
import styles from './Preloader.module.scss'

//2 Функциональный компонент - Preloader
const Preloader = () => {
	return (
		<div className={cn('d-flex', 'align-items-center', styles.preloaderProp)}>
			<strong className={cn(styles.preloaderPropText)}>Loading ...</strong>
			<div
				className='spinner-border ml-auto'
				role='status'
				aria-hidden='true'
			></div>
		</div>
	)
}

export { Preloader }
