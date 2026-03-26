import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JC Arbitrations | Federal IDR & Revenue Recovery',
  description: 'Specialized IDR representation and revenue recovery for out-of-network providers under the No Surprises Act.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/media/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/media/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Statcounter Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13196258; 
              var sc_invisible=1; 
              var sc_security="36981cda";
            `,
          }}
        />
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13196258/0/36981cda/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </head>
      <body className={`${inter.variable} ${merriweather.variable} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
