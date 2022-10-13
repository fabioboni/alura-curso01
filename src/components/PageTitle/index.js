import Head from 'next/Head';

function PageTitle({ children }) {
    return (
        <Head>
            <title>{children}</title>
        </Head>
    );
}

export default PageTitle;