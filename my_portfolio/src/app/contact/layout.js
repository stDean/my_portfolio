import '@/styles/globals.css';

export const metadata = {
  title: 'dean | contact',
  description: 'My portfolio home page.',
}

export default function RootLayout({ children, }) {
  // offset navbar height
  return <main>{children}</main>
}
