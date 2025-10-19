import './globals.css'
import SessionProvider from '@/components/SessionProvider'

export const metadata = {
  title: 'Chronicles: Rewritten',
  description: 'Walk the roads history forgotten.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
