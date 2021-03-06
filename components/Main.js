import Link from 'next/link';

const Main = () => {
  return (
    <>
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/cv">Let's see my CV</Link>
      </main>
      <style jsx>{`
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        
        .title {
          text-align: center;
        }
      `}</style>
    </>
  )
};

export default Main;