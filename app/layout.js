import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NoPe',
  description: 'Visualizing real-user notification permission response rates on top sites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>NoPe</h1>
          <p>Notification Permissions</p>
        </header>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
