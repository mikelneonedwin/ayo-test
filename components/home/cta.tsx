import clsx from "clsx";
import Link from "next/link";

type props = {
    className?: string
}

const Cta: React.FC<props> = ({ className }) => {
    return (
        <Link href="#">
            <button className={clsx(
                "bg-cta text-white font-semibold text-lg md:text-xl py-4 px-8 rounded-md transition-all duration-300 hover:bg-cta-active",
                className
            )}>
                Join the Waitlist {" "}
                <i className="material-icons translate-y-1">north_east</i>
            </button>
        </Link>
    )
}

export default Cta;