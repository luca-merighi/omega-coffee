import { ReactNode } from 'react'

import Header from '@/components/header'

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full max-w-5xl py-12">
                    {children}
                </div>
            </main>
        </div>
    )
}