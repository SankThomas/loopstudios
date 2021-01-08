import logo from '../images/logo.svg'
import hamburgerMenu from '../images/icon-hamburger.svg'

const Header = () => {
  return (
    <header className="absolute w-full flex items-center justify-between py-10 px-5">
      <div>
        <img src={logo} alt="Loopstudios" title="Loopstudios VR" />
      </div>

      <div className="menu-btn">
        <div>
          <img src={hamburgerMenu} alt="Menu" title="Menu Icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
