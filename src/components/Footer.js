import logo from '../images/logo.svg'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white flex flex-col items-center justify-center pt-20 pb-5 mt-10 md:flex-row md:justify-between md:px-10 xl:px-32">
        <div className="md:flex md:flex-col">
          <div className="pb-10 pt-8">
            <img src={logo} alt="loopstudios" title="Loopstudios VR" />
          </div>

          <ul className="mb-10 md:flex">
            <li className="mb-5 md:mb-0 md:mr-5">
              <button>About</button>
            </li>
            <li className="mb-5 md:mb-0 md:mr-5">
              <button>Careers</button>
            </li>
            <li className="mb-5 md:mb-0 md:mr-5">
              <button>Events</button>
            </li>
            <li className="mb-5 md:mb-0 md:mr-5">
              <button>Products</button>
            </li>
            <li className="mb-5 md:mb-0 md:mr-5">
              <button>Support</button>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex mb-10">
            <li className="text-2xl mr-5">
              <GrFacebook />
            </li>
            <li className="text-2xl mr-5">
              <FaTwitter />
            </li>
            <li className="text-2xl mr-5">
              <FaPinterest />
            </li>
            <li className="text-2xl mr-5">
              <FaInstagram />
            </li>
          </ul>

          <div className="copyright">
            &copy; 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="attribution bg-black text-white py-5">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopenner noreferrer"
          className="hover:text-white hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://tsbsankara.co.ke"
          target="_blank"
          rel="noopenner noreferrer"
          className="hover:text-white hover:underline"
        >
          Thomas Sankara
        </a>
        .
      </div>
    </>
  )
}

export default Footer
