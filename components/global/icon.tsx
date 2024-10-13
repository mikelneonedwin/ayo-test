import clsx from "clsx";
import type { MaterialIcon } from "material-icons"
import React from "react"

type IconProps = Omit<React.HTMLAttributes<HTMLElement>, "children"> & {
    icon: MaterialIcon
}

const Icon: React.FC<IconProps> = ({
    icon,
    className,
    ...props
}) => (
    <i
        {...props}
        className={clsx(
            "material-icons",
            className
        )}
    >
        {icon}
    </i>
);

export default Icon;