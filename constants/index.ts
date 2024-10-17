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

export const Images = [
    {
        "large": "https://randomuser.me/api/portraits/women/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/13.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/19.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/women/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
    },
    {
        "large": "https://randomuser.me/api/portraits/men/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
    }
]


export const sellItems = [
    {
        name: 'Digital Products',
        img: '/digital-products.jpg',
        description: 'Sell digital goods such as ebooks, software, music, and any downloadable content directly to your customers. Instantly deliver files to buyers with secure downloads and easy access, streamlining the process from sale to delivery.',
    },
    {
        name: 'Physical Goods',
        img: '/physical-goods.jpg',
        description: 'Manage your stock, process orders, and ship products to customers seamlessly. Whether it’s clothing, gadgets, or handmade items, sell and deliver physical goods through your online store, complete with inventory tracking and shipping options.',
    },
    {
        name: 'Courses & Training',
        img: '/courses-and-training.jpg',
        description: 'Share your expertise by offering online courses or training programs. Create engaging learning experiences with video tutorials, written materials, and assessments that can help your customers gain new skills or knowledge.',
    },
    {
        name: 'Memberships',
        img: '/memberships.jpg',
        description: 'Build a community around your brand by offering exclusive content, perks, and access through memberships. Reward loyal customers with special benefits, discounts, or early access to products and services, all managed effortlessly through your platform.',
    },
    {
        name: 'Subscriptions',
        img: '/subscriptions.jpg',
        description: 'Provide ongoing products or services with subscription-based offerings. Whether it’s monthly deliveries, software access, or regular content, keep customers engaged and generate recurring revenue with flexible, automated subscription plans.',
    },
];

export const waitlistLink = "https://forms.gle/qguPWZQ39vBjJPGR8"