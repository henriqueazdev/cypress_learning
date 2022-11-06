import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cypress demo</title>
        <meta name="description" content="Teste inicial do cypress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="content">
        <ul>
          <Link href={"/teste"}>teste</Link>
        </ul>
      </div>
    </div>
  );
}
