import { CountryCard } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <section>
        <div className='grid grid-cols-1 gap-10 py-20 justify-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>

    </main>
  )
}
