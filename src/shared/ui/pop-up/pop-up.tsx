import React, { Fragment } from 'react';
import styles from './pop-up.module.less';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopupProps {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: any;
	className?: string;
	isCloseButton?: boolean;
	withScroll?: boolean;
}

const Popup = ({
	children,
	isOpen,
	className,
	setIsOpen,
	isCloseButton = true,
	withScroll,
}: PopupProps) => (
	<Fragment>
		<div
			className={classNames(styles.popup, { [styles.popup_is_open]: isOpen })}
			onPointerDown={(event) => {
				const target = event.target as HTMLElement;
				if (!isCloseButton && target.classList.contains(styles.popup)) {
					setIsOpen((prev: boolean) => !prev);
				}
			}}>
			<div className={classNames(styles.popup_wrap)}>
				<div className={classNames(styles.popup__outer_container)}>
					<div
						className={classNames(className ?? '', {
							[styles.popup__container]: true,
							[styles.popup__container_with_scroll]: withScroll,
							[styles.popup__container_is_open]: isOpen,
							[styles.d_scrollbar]: true,
						})}>
						{children}
					</div>
				</div>

				{isCloseButton && (
					<div
						className={classNames(styles.popup__close_button)}
						onClick={(event: any) => {
							event.stopPropagation();
							setIsOpen((prev: boolean) => !prev);
						}}>
						X
					</div>
				)}
			</div>
		</div>
	</Fragment>
);

export default Popup;
