import styles from './mainpage.module.scss';

const MainPage = (): JSX.Element => {
    return (
        <main className={styles.main}>
			<div className={styles.description}>
				<p>
					Module Federation Next.JS v13 <b>REMOTE</b>
				</p>
			</div>

			<div className={styles.center}>
				<p>
					main
				</p>
			</div>
		</main>
    )
}

export default MainPage

