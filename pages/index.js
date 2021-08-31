import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant's Community - Green Team</title>
        <meta
          name="description"
          content="This the page about Plants and a team or a community that helps the environment to educate, empower and inspire people to take care of plants and nature."
        ></meta>
        <meta
          property="og:title"
          content="Plant's Community - Green Team"
        ></meta>
        <meta property='og:description' content='This the page about Plants and a team or a community that helps the environment to educate, empower and inspire people to take care of plants and nature.' />
        <meta property='og:url' content='http://localhost:3000/' />
        <meta property='og:type' content='website' />
        <link rel="icon" href="/plant logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="m-0 p-0 h-screen w-full">
        <div
          className="absolute rounded-full border-gray-100 border-2"
          style={{
            height: "800px",
            width: "800px",
            top: "-280px",
            left: "-200px",
            zIndex: "-1",
          }}
        ></div>
        <Main />
      </main>
    </div>
  );
}
