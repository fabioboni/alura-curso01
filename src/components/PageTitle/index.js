import Head from 'next/Head';

export default function PageTitle({ children }) {
    return (
        <Head>
            <title>{children}</title>
        </Head>
    );
}