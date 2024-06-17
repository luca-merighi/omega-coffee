import Link from 'next/link'

interface ListItemProps {
    link: {
        url: string,
        text: string
    }
}

export default function ListItem({ link }: ListItemProps) {
    return (
        <li className="
            h-full
            flex items-center justify-center">
            <Link
                href={link.url}
                className="
                    px-3 py-2
                    text-lg text-gray-700 font-medium
                    rounded-md
                    transition-colors hover:text-amber-600
                    focus:outline-none">
                {link.text}
            </Link>
        </li>
    )
}