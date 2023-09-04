import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chordify',
    description: 'Generate chords on the fly.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) =>
{
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    )
}

export default RootLayout;
