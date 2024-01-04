import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/lib/providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = `https://${process.env.VERCEL_URL}`

const title = 'Khanh Truong | Front End Engineer From HCMC, Vietnam'
const description =
	'A self-proclaimed composer who specializes in front end development (React.js & Next.js), from HCMC, Vietnam.'

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title,
	description,
	keywords: [
		'Frontend Developer',
		'Frontend Engineer',
		'Full Stack Developer',
		'React Developer',
		'Next.js Developer'
	],
	creator: 'Khanh Truong',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	openGraph: {
		type: 'website',
		url: baseUrl,
		title,
		description,
		siteName: title,
		images: [
			{
				url: '/images/open-graph.png'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@just_khanh01',
		images: '/images/open-graph.png'
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png'
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
				<Providers>
					<Header />
					<main className='flex min-h-screen w-full flex-col'>{children}</main>
					<Footer />
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
