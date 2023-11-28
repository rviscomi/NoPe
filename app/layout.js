import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notification Permissions</title>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <body className={inter.className}>
        <header>
          <h1>NoPe</h1>
          <p>Notification Permissions</p>
        </header>
        {children}
      </body>
    </html>
  )
}
