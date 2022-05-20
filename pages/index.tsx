import Head from 'next/head'
import Logo from '../logos/wf-logo.svg'
import type { NextPage } from 'next'
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Wiserfunding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center space-y-5 bg-gradient-to-tr from-sky-900 via-gray-900 to-black px-20 text-center text-white">
        {/* logo */}
        <Image src={Logo} />
        <h1 className="text-2xl">
          Wiserfunding is currently down for maintenance
        </h1>
        <p>Please check back again shortly</p>
      </main>
    </div>
  )
}

export default Home
