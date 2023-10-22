import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

import logo from '../../public/Icons/logo2.png'

import Button from '../components/button.js'
import PledgeButton from '../components/pledge-button.js'

import Twitter from '../../public/Icons/twitter.png'
import Facebook from '../../public/Icons/facebook.png'
import Linkedin from '../../public/Icons/linkedin.png'
import Instagram from '../../public/Icons/instagram.png'




export const metadata = {
  title: 'Profit for good',
  description: 'A Non-Profit Social Movement to make your purchases matter.',
}

// tailwind way of importing font. requires classname for every element.
// const fraunces = localFont({ 
//   src: [
//   {
//     path: '../../public/Fonts/Fraunces/Fraunces-VariableFont.ttf',
//     style: 'normal'
//   },
//   {
//     path: '../../public/Fonts/Fraunces/Fraunces-Italic-VariableFont.ttf',
//     style: 'italic'
//   },
//     ]
// })
// const lexend = localFont({ src: '../../public/Fonts/Lexend_Giga/LexendGiga-VariableFont_wght.ttf'})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Profit for Good. A Non-Profit Social Movement to make your purchases matter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/" />
      </head>

      <body>
      <nav className="absolute invisible lg:visible gap-x-8 p-6 pt-5 flex flex-row w-full justify-end items-center">
        <Link href="/">
          <h4 className="text-cream hover:text-orange transition duration-300 relative after:w-0 hover:after:w-full after:bg-orange after:transition-all after:duration-500 after:absolute after:-bottom-2 after:h-1 after:left-0">
          THE MOVEMENT
          </h4>
        </Link>
        <Link href="/">
          <h4 className="text-cream hover:text-orange transition duration-300 relative after:w-0 hover:after:w-full after:bg-orange after:transition-all after:duration-500 after:absolute after:-bottom-2 after:h-1 after:left-0">
          FOR PHILANTHROPISTS
          </h4>
        </Link>
        <Link href="/">
          <h4 className="text-cream hover:text-orange transition duration-300 relative after:w-0 hover:after:w-full after:bg-orange after:transition-all after:duration-500 after:absolute after:-bottom-2 after:h-1 after:left-0">
          FIND A PROFIT FOR GOOD
          </h4>
        </Link>
        <Link href="/">
          <h4 className="text-cream hover:text-orange transition duration-300 relative after:w-0 hover:after:w-full after:bg-orange after:transition-all after:duration-500 after:absolute after:-bottom-2 after:h-1 after:left-0">
          RESOURCES + ESSAYS
          </h4>
        </Link>
        <Link href="/">
          <h4 className="text-cream hover:text-orange transition duration-300 relative after:w-0 hover:after:w-full after:bg-orange after:transition-all after:duration-500 after:absolute after:-bottom-2 after:h-1 after:left-0">
          CONTACT
          </h4>
        </Link>

        <PledgeButton text="PLEDGE" classes="bg-forest bg-opacity-75 border-orange text-orange hover:bg-white" />
        <Button text="DONATE" classes="btn-oj" />
      </nav>
      {children}
      <footer>
        <div className="flex flex-col flex-wrap space-y-5 text-center md:flex-row md:space-y-0 md:text-start md:justify-evenly py-10 px-5 items-center bg-forest">
          <Image src={logo} width={100} height={100} alt="PFG Logo" />
          <div>
            <h3 className="text-cream max-w-lg">GET UPDATES ON THINGS THAT MATTER IN YOUR INBOX</h3>
            <div>
              <input type="email" name="email" placeholder="ENTER EMAIL" className="h-10 w-40 md:w-64 focus:outline-none focus:ring focus:border-slate bg-forest text-cream border-slate border-2 placeholder:text-cream " />
              <button className="transition duration-300 h-10 w-28 md:w-40 font-semibold tracking-wide bg-slate border-slate border-2 text-cream hover:drop-shadow-2xl hover:bg-white hover:text-orange hover:border-orange outline-none">SIGN UP</button>
            </div>
          </div>
          <div className="text-cream flex flex-col space-y-3 font-semibold">
            <div>(414)-209-4101</div>
            <Link href="mailto:brad@consumerpowerinitiative.org">brad@consumerpowerinitiative.org</Link>                        
          </div>
          <div className="flex flex-col space-y-7">
            <Button text="DONATE TODAY" classes="btn-oj" />
            <PledgeButton text="TAKE THE PLEDGE" classes="btn-opaque" />
    {/*        // <button className="bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
            // <button className="w-60 h-12 text-cream border-cream border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange hover:border-orange bg-opacity-0"><h3>TAKE THE PLEDGE</h3></button>
          */}
          </div>

          <div className="pt-8 w-full">
            <div className="flex justify-center space-x-3 mb-3">
              <Link href="https://www.facebook.com/ConsumerPowerInitiative"><Image src={Facebook} alt="Link to PFG Facebook"/></Link>
              <Link href="https://www.instagram.com/cpowerinit/?hl=en"><Image src={Instagram} alt="Link to PFG Instagram"/></Link>
              <Link href="https://twitter.com/CPowerInit"><Image src={Twitter} alt="Link to PFG Twitter"/></Link>
              <Link href="https://www.linkedin.com/company/consumer-power-initiative"><Image src={Linkedin} alt="Link to PFG LinkedIn"/></Link>
            </div>
            <div>
              <p className="text-center">&#169; CONSUMER POWER INITIATIVE INC 2023. ALL RIGHTS RESERVED. DESIGNED BY SOULBEAM STUDIO.</p>
            </div>
            <div>
              <p className="text-center mt-5">PRIVACY POLICY</p>
            </div>
          </div>
          
        </div>
      </footer>
      </body>
    </html>
  )
}
