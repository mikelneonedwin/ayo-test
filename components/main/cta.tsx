import Link from "next/link";
import { Icon } from "../global";
import clsx from "clsx";
import { waitlistLink } from "@/constants";

const CTA = ({ className }: { className?: string }) => (
    <Link href={waitlistLink} className={clsx(
        "text-center bg-action-default hover:bg-action-hover py-2.5 px-5 text-white font-medium tracking-wide rounded-lg transition duration-300 inline-flex items-center justify-center gap-1",
        className
    )}>
        Join the Waitlist
        <Icon icon="arrow_forward" className="!text-lg -rotate-45" />
    </Link>
)

export default CTA;