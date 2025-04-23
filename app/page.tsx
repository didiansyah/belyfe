import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-indigo-200 after:via-indigo-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-indigo-700 before:dark:opacity-10 after:dark:from-indigo-900 after:dark:via-[#BBA5FF] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          src="/belyfe.svg"
          alt="Belyfe Logo"
          width={160}
          height={35}
          priority
        />
      </div>
      <br/>
      <br/>

      <div className="mb-32 grid text-center">
        <br/>
        <br/>
       <h3 className={`text-5xl md:text-6xl lg:text-6xl font-light leading-tight mb-6`}>
       We bridge between our <br/>investors and founders.
       </h3>
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto opacity-30">
          Belyfe is an aggregator VC firm for technology companies.
        </p>
      </div>
      <footer>
        <p className={`w-full py-6 text-center text-sm opacity-30`}>
        © 2025 Belyfe Labs, All Right Reserved.
        </p>
      </footer>
    </main>
  )
}
