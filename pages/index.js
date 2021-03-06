import Head from 'next/head'

import Main from '../components/Main';
import Footer from '../components/Footer';

export const config = { amp: true }

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main />
        <Footer />
      </div>
      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      * {
        box-sizing: border-box;
      }
    `}</style>
    </>
  )
}
