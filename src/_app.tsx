// ตัวอย่างใน pages/_app.js
import type { AppProps } from 'next/app';
import { Kanit } from '@next/font/google'
import { useRouter } from 'next/router';
import Menu from '@/app/components/menu';


const kanit = Kanit({
    subsets: ['latin'],
    weight: ['200', '400']
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <main className={kanit.className}>
            <Menu ></Menu>
                <Component {...pageProps} />
        </main>
    );
};

export default App;

