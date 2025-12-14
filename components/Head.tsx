import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ashish Gupta is an avid full stack web and app developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="ashish gupta, ashish, gupta, web developer portfolio, ashish web developer, ashish developer, flutter developer, flutter, mern stack, ashish gupta portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Ashish Gupta's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites and applications that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Ashish Gupta',
};
