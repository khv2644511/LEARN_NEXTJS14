import '../styles/global.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
    title: {
        template: '%s | Next Moviese',
        default: 'Loading',
    },
    description: 'The bedt movies on thie best framework',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
