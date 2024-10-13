type NavItem = Array<{
    name: string
    link: string
} | {
    name: string;
    items: Array<{
        name: string;
        link: string;
    }>
}>

export const navItems: NavItem = [
    {
        name: "Features",
        link: "#features"       
    },
    {
        name: "Products",
        link: "#products"
    }
]