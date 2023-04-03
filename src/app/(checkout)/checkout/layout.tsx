import CheckoutHeader from "@/components/CheckoutHeader"
import { LayoutProps } from "@/types/layout"

export const metadata = {
    title: 'checkout'
}

const CheckoutLayout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <CheckoutHeader />
            { 
                children 
            }
        </>
    )
}

export default CheckoutLayout