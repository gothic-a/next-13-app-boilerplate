import s from './footer.module.scss'
import Link from 'next/link'
import Counter from '../Counter'

const Footer = (): JSX.Element => {
    return (
        <div className={s.footer}>
            <div className={s.left}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae, necessitatibus facere eos atque sed, voluptas iusto doloribus veniam quibusdam porro accusamus perspiciatis! Rem unde labore accusamus facilis tempore laborum beatae repudiandae officiis tempora et? Vitae, qui quod ullam obcaecati, impedit error aliquam asperiores quo perferendis possimus sint, natus totam.
            </div>
            <Counter />
            <div className={s.right}>
                <Link href={'/'}>
                    <p>main</p>
                </Link>
                <Link href={'/about'}>
                    <p>about</p>
                </Link>
                <Link href={'/checkout'}>
                    <p>checkout</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer