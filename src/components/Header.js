import logo from '../images/logo.svg'

const Header = () => {
  const showMenu = () => {
    const navbar = document.querySelector('.navbar')
    const menu = document.querySelector('.menu-button')

    menu.addEventListener('click', () => {
      navbar.classList.toggle('open')
      menu.classList.toggle('rotate')
    })
  }

  return (
    <>
      <header className="absolute w-full flex items-center justify-between py-10 px-5 xl:px-32">
        <div className="lg:absolute lg:top-10">
          <img
            src={logo}
            alt="Loopstudios"
            title="Loopstudios VR"
            className="cursor-pointer"
          />
        </div>

        <nav
          className="navbar bg-black h-screen text-white px-5 py-10 lg:bg-transparent"
          id="navbar"
        >
          <ul className="lg:absolute lg:top-0 left-96">
            <li className="lg:hidden">
              <img src={logo} alt="" />
            </li>
            <li className="pt-28 mb-10 md:mr-5 md:pt-0">
              <button className="uppercase text-3xl md:capitalize md:text-lg">
                About
              </button>
            </li>
            <li className="mb-10 md:mr-5">
              <button className="uppercase text-3xl md:capitalize md:text-lg">
                Careers
              </button>
            </li>
            <li className="mb-10 md:mr-5">
              <button className="uppercase text-3xl md:capitalize md:text-lg">
                Events
              </button>
            </li>
            <li className="mb-10 md:mr-5">
              <button className="uppercase text-3xl md:capitalize md:text-lg">
                Products
              </button>
            </li>
            <li className="mb-10 md:mr-5">
              <button className="uppercase text-3xl md:capitalize md:text-lg">
                Support
              </button>
            </li>
          </ul>
        </nav>

        <div className="menu-button cursor-pointer" onClick={() => showMenu()}>
          <div className="bar bar-1 h-1 w-8 mb-1 bg-white"></div>
          <div className="bar bar-2 h-1 w-8 mb-1 bg-white"></div>
          <div className="bar bar-3 h-1 w-8 mb-1 bg-white"></div>
        </div>
      </header>
    </>
  )
}

export default Header
