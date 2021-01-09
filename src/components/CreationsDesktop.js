import React from 'react'
import data from '../data-desktop'

const CreationsDesktop = () => {
  // eslint-disable-next-line
  const [cards, setCards] = React.useState(data)

  return (
    <section className="creations-desktop px-5 pt-40 xl:px-32">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-4xl">Our Creations</h2>
        </div>
        <div className="text-center">
          <button className="text-center border-black border-2 py-2 px-10 uppercase tracking-widest font-bold transition-all cursor-pointer hover:bg-black hover:text-white">
            See All
          </button>
        </div>
      </div>

      <section className="my-10 pb-20 grid grid-cols-4 gap-10">
        {cards.map((card) => {
          const { id, title, image } = card
          return (
            <article key={id} className="relative hover:opacity-70">
              <img src={image} alt="cards" title="Creations Cards" />
              <h2 className="absolute bottom-0 text-white pl-5 pb-5 text-2xl w-48">
                {title}
              </h2>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default CreationsDesktop
