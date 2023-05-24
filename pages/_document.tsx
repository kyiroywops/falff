import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html>
                <Head>
                
                    <meta name="description" content="A site for my programming portfolio" />
                    <link rel="icon" href="/favicon.ico" />

                    
                                       
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument