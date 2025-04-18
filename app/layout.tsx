import Navbar from '@/components/Navbar';
import '../styles/globals.css';

export const metadata = {
  title: 'Firmi - AI-Powered Financial Research',
  description: 'Financial research made simpler, better, and faster for the modern investor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1f2026]">
        <div className="content-wrapper">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}