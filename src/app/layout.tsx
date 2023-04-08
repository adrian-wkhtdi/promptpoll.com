import "./globals.css"

export const metadata = {
  title: 'PromptPoll.com',
  description: 'Discover, Vote, Inspire!',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
