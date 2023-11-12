import '@/styles/globals.css';

export const metadata = {
  title: 'dean | project',
  description: 'My portfolio home page.',
}

export default function RootLayout({ children, }) {
  // offset navbar height
  return <>{children}</>
}
