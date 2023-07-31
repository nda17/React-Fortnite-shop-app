import { useEffect } from "react";

function AlertToCart(props) {
    const { textAlert = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
			const timerId = setTimeout(closeAlert, 1222700);
			return () => {
				clearTimeout(timerId);
			};
			// eslint-disable-next-line
		}, [textAlert]);


	return (
		<div className='alert-banner'>
			<p className='alert-banner__text'>{textAlert}</p>
		</div>
	);
}

export { AlertToCart };

