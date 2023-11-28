import Script from 'next/script'
import { Inter } from 'next/font/google'
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
        <Script
          id="chart.js"
          src="https://cdn.jsdelivr.net/npm/chart.js"
          strategy="beforeInteractive">
        </Script>
        <header>
          <h1>NoPe</h1>
          <p>Notification Permissions</p>
        </header>
        {children}
      </body>
    </html>
  )
}
