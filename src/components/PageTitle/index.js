import Head from 'next/Head';

export default function PageTitle({ children }) {
    return (
        <Head>
            <title class='titulo'>{children}</title>
        </Head>
    );
}