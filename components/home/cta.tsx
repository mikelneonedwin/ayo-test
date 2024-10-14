import clsx from "clsx";
import Link from "next/link";

type props = {
    className?: string
}

const Cta: React.FC<props> = ({ className }) => {
    return (
        <Link href="#" className={clsx(
            "bg-cta text-white font-medium text-lg md:text-xl py-4 px-8 rounded-md transition-all duration-300 hover:bg-cta-active",
            className
        )}>
            Join the Waitlist {" "}
            <i className="material-icons translate-y-1">north_east</i>
        </Link>
    )
}

export default Cta;