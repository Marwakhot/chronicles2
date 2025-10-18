
import './globals.css'

export const metadata = {
  title: 'Chronicles: Rewritten',
  description: 'Walk the roads history forgotten.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
