import s from './checkoutHeader.module.scss'
import Link from 'next/link'

const CheckoutHeader = (): JSX.Element => {
    return (
        <div className={s.header}>
            <div className={s.checkout_label}>
                checkout
            </div>
            <div className={s.back}>
                <Link href="/">
                    back to shop
                    <span>&rsaquo;</span>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutHeader