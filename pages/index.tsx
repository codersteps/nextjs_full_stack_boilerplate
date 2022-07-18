import Head from 'next/head'
import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store/index'
import ShowMessage from '@/components/common/ShowMessage'

const Home: NextPage = () => {
  const { helloWorld } = useStore()

  return (
    <>
      <Head>
        <title>Next.js Full-Stack Boilerplate</title>
        <meta
          name="description"
          content="A Next.js full-stack boilerplate with TypeScript, Tailwind CSS, and Prisma.js for your future full-stack apps."
        />
      </Head>

      <main className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold font-open">
          Next.js Full-Stack Boilerplate
        </h1>
        <p>
          A Next.js full-stack boilerplate with TypeScript, Tailwind CSS, and
          Prisma.js for your future full-stack apps.
        </p>

        <div className="mt-5 space-y-3">
          <h2 className="text-xl font-bold">Say Hello</h2>
          <input
            className="w-full h-10 px-4 border border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow"
            value={helloWorld.message || ''}
            onChange={(e) => helloWorld.setMessage(e.target.value)}
          />
          <ShowMessage />
        </div>
      </main>
    </>
  )
}

export default observer(Home)
