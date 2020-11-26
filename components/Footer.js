const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <amp-img src="/vercel.svg" alt="Vercel Logo"
            width="70"
            height="1em" />
        </a>
      </footer>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer img {
          margin-left: 0.5rem;
        }
        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer .logo {
          height: 1em;
        }
      `}</style>
    </>
  )
}

export default Footer;
