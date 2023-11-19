import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'payNyap',
  description: 'Transfer and topup your wallet',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='header'>
          <div className='header-container'>
            <a href='/'>
              <div className='logo'>payNyap</div>
            </a>
            <div className='button-container'>
              <a href='/register'>
                <button className='filled'>Register</button>
              </a>
              <a href='/login'>
                <button>Login</button>
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
