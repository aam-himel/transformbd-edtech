import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { Toaster } from "@/components/ui/sonner"
import AuthProvider from '@/providers/AuthProvider';
import CoursesProvider from '@/components/shared/CoursesProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TransformBD - Courses',
  description: 'Learn any skill with TransformBD',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>
            <CoursesProvider>
              {children}
            </CoursesProvider>
          </AuthProvider>
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
