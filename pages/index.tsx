import React from 'react'
import Head from 'next/head'

import Topbar from 'components/Topbar'
import ScheduleDemo from 'components/ScheduleDemo'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Overlapr</title>
        <meta
          name="description"
          content="Overlap detection tool for graphical representation"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="">
        <Topbar />
        <ScheduleDemo />
      </main>
    </div>
  )
}

export default Home
