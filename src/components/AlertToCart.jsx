import { useState, useEffect } from 'react'
import cn from 'clsx'
import styles from './AlertToCart.module.scss'

function AlertToCart(props) {
	const {
		textAlert = '',
		closeAlert = Function.prototype,
		isAlertShow = false
	} = props
	useEffect(() => {
		const timerId = setTimeout(closeAlert, 1200)
		return () => {
			clearTimeout(timerId)
		}
		// eslint-disable-next-line
	}, [textAlert])

	return (
		<div
			className={cn(styles.alertBanner, {
				[styles.show]: isAlertShow
			})}
		>
			<p className={cn(styles.alertBannerText)}>{textAlert}</p>
		</div>
	)
}

export { AlertToCart }
