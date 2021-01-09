import React from 'react'
import dataMobile from '../data-mobile'

const Creations = () => {
  // eslint-disable-next-line
  const [mobileCards, setMobileCards] = React.useState(dataMobile)

  return (
    <section className="creations-mobile">
      <h2 className="font-bold text-4xl text-center pb-10">Our creations</h2>
      <section className="pb-10 px-5 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:px-32">
        {mobileCards.map((mobileCard) => {
          const { id, title, image } = mobileCard
          return (
            <article key={id} className="relative hover:opacity-70">
              <img
                src={image}
                alt="cards"
                title="Creations Cards"
                style={{ width: '100%' }}
              />
              <h2 className="absolute bottom-0 text-white pl-5 pb-5 text-2xl w-48">
                {title}
              </h2>
            </article>
          )
        })}
      </section>
      <div className="text-center">
        <button className="text-center border-black border-2 py-2 px-10 uppercase tracking-widest font-bold transition-all cursor-pointer hover:bg-black hover:text-white">
          See All
        </button>
      </div>
    </section>
  )
}

export default Creations
