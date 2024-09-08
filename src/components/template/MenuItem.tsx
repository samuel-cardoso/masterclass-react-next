import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
    text: string;
    link: string;
    children?: ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.link} className="hover:bg-black p-2 rounded-md px-4 py-2 flex gap-2 items-center">
            {props.children ? props.children : props.text}
        </Link>
    )
}