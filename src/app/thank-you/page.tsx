import Link from 'next/link';

export default function ThankYou() {
    return (
        <main className="text-3xl grid place-content-center min-h-screen">
            <h1>Thank you for your feedback!</h1>
            <Link
                className="p-4 rounded-md border-[1px] text-center mt-5 border-white/20 hover:border-white duration-300 ease-in-out text-white/20 hover:text-white"
                href={'/'}
            >
                Home
            </Link>
        </main>
    );
}
