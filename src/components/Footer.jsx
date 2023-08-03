import gh from '../icons/github.svg'
import cn from 'clsx'
import styles from './Footer.module.scss'

function Footer() {
	return (
		<footer className={cn('container', styles.footerProp)}>
			<div className={cn('row', styles.footer)}>
				<div className={cn('col-12', styles.footerCols)}>
					<div className={cn(styles.copyright)}>
						<p className={cn(styles.copyrightUpText)}>
							© {new Date().getFullYear()}
							&nbsp; «Hero shop»
						</p>
						<p className={cn(styles.copyrightBottomText)}>
							All Rights Reserved
						</p>
					</div>
					<a href='https://github.com/nda17'>
						<img
							className={cn(styles.linkContactsGh)}
							src={gh}
							alt='Github'
							width='30'
							height='30'
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
