import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className="text-3xl grid place-content-center min-h-screen">
            <Link
                className="p-4 rounded-md border-[1px] text-center mt-5 border-white/20 hover:border-white duration-300 ease-in-out text-white/40 hover:text-white"
                href={'/feedback'}
            >
                Feedback
            </Link>
        </main>
    );
}
