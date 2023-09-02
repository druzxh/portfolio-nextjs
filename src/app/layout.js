import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Badrudin - Web Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  let open = false
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className={`p-20 justify-center items-center 3/12`}>
          <Sidebar />
        </div>

        <div className={`w-9/12 h-screen overflow-y-auto`}>
          {children}
        </div>

      </body>
    </html>
  )
}