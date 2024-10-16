import CTA from "../main/cta";
import { Deliveries, FindWithCatLog, InvoiceLinks, OrdersAndCustomers, Payments, StoreLinks } from "../svg";

interface products extends Omit<Item, "icon"> {
    href: `/${string}`;
    icon: React.JSX.Element;
    iconBg: `#${string}`
}

const products: Array<products> = [
    {
        icon: <StoreLinks />,
        title: "Store Links",
        content: "Showcase your products and take orders with one link",
        href: "/store-links",
        iconBg: "#FDF4E7"
    },
    {
        icon: <OrdersAndCustomers />,
        title: "Orders and Customers",
        content: "Easily keep track of all your orders & customers",
        href: "/orders-and-customers",
        iconBg: "#F8E6EB"
    },
    {
        icon: <Payments />,
        title: "Payment & Invoices",
        content: "Seamlessly collect payments",
        href: "/payments",
        iconBg: "#EBF7F3"
    },
    {
        icon: <InvoiceLinks />,
        title: "Invoice Links",
        content: "Create links you can share with customers to pay you",
        href: "/invoice-links",
        iconBg: "#FDF4E7"
    },
    {
        icon: <FindWithCatLog />,
        href: "/findwithcatlog",
        title: "Find with catlog",
        content: "Find Items on Twitter with the hashtag #findwithcatlog",
        iconBg: "#F8E6EB"
    },
    {
        icon: <Deliveries />,
        href: "/deliveries",
        title: "Deliveries",
        content: "Effortlessly get items delivered at discounted prices",
        iconBg: "#FEEEE6"
    }
]

const Navbar = () => {
    return (
        <header className="py-7 px-10">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-1">
                        <div className="bg-action-default size-[1.5rem] rounded-sm">
                            <div className="h-full w-full nav-icon" />
                        </div>
                        <h2 className="font-bold text-2xl text-action-default">Thrivr</h2>
                    </div>

                    {/* <div className="hidden md:flex gap-6 items-center text-sm text-main-101 font-semibold">
                        <Link href="#">Why Thrivr</Link>
                        <HoverCard>
                            <HoverCardTrigger className="flex items-center">
                                Products <Icon icon="arrow_drop_down" />
                            </HoverCardTrigger>
                        </HoverCard>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Learn</Link>
                    </div> */}

                </div>
                <div className="sm:flex hidden items-center justify-end">
                    <CTA />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;