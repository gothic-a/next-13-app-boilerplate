import s from './header.module.scss'
import Link from 'next/link'

const Header = (): JSX.Element => {
    return (
        <div className={s.header}>
            <nav className={s.navigation}>
                <Link href={'/'}>
                    <p>main</p>
                </Link>
                <Link href={'/about'}>
                    <p>about</p>
                </Link>
                <Link href={'/checkout'}>
                    <p>checkout</p>
                </Link>
            </nav>
            <div className={s.login}>
                login
            </div>
        </div>
    )
}

export default Header