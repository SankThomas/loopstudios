import interactiveMobile from '../images/mobile/image-interactive.jpg'
import interactiveDesktop from '../images/desktop/image-interactive.jpg'

const Interactive = () => {
  return (
    <>
      <section className="interactive text-center px-5 py-20 xl:px-32">
        <div>
          <img
            src={interactiveDesktop}
            alt="leader in interactive vr"
            title="Leader in Interactive VR"
          />
        </div>

        <div className="interactive-text px-10">
          <h2 className="pt-10 pb-5 font-bold text-4xl leading-snug">
            The leader in interactive vr
          </h2>
          <p className="leading-7">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  )
}

export default Interactive
