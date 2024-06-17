import { Oregano } from 'next/font/google'

import { AiOutlineShopping } from 'react-icons/ai'
import ListItem from './list-item'
import Image from 'next/image'

const oregano = Oregano({ subsets: ['latin'], weight: '400' })

const links = [
    {
        url: '/',
        text: 'Início'
    },
    {
        url: '/products',
        text: 'Nossos Produtos'
    }
]

export default function Header() {
    return (
        <header className="
            w-full h-20 bg-gray-100
            flex items-center justify-center
            border-b-2 border-gray-200">
            <div className="
                w-full h-full max-w-7xl flex items-center justify-between">
                <div className="flex gap-2 items-center justify-between">
                    {/* <Image
                        src="/coffee-cup.svg" alt=""
                        width={45} height={45} quality={100}
                        className="w-12 h-12" /> */}

                    <h1 className={`${oregano.className} text-[2rem] text-gray-900`}>
                        Omega <span className="text-amber-700">Coffee</span>
                    </h1>
                </div>

                <nav className="h-full flex items-center justify-center">
                    <ul className="h-full flex">
                        {links.map(link => {
                            return (
                                <ListItem
                                    key={link.text}
                                    link={link} />
                            )
                        })}
                    </ul>
                </nav>

                <button
                    type="button"
                    title="Abrir carrinho de compras"
                    className="
                        p-1 bg-gray-200
                        flex items-center justify-center
                        text-2xl text-gray-900
                        border-2 border-transparent rounded-md
                        transition-colors hover:bg-gray-300/75 focus:outline-none
                        focus-visible:bg-gray-300/75 focus-visible:border-amber-500">
                    <AiOutlineShopping />
                </button>
            </div>
        </header>
    )
}