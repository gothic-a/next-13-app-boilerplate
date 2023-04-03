import '@/styles/global.scss'
import '@/styles/variables.scss'
import { LayoutProps } from '@/types/layout'
import Footer from '@/components/Footer'

const RootLayout = ({ children }: LayoutProps) => {
	return (
		<html lang="en">
			<body>
				{
					children
				}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout	
