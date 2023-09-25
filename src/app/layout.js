import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import logo from '../../public/Icons/logo2.png'


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
      <nav className="absolute invisible lg:visible gap-x-5 p-6 pt-10 flex flex-row w-full justify-end items-center">
        <p className="text-cream">THE MOVEMENT</p>
        <p className="text-cream">FOR PHILANTHROPISTS</p>
        <p className="text-cream">FIND A PROFIT FOR GOOD</p>
        <p className="text-cream">RESOURCES + ESSAYS</p>
        <p className="text-cream">CONTACT</p>

        <button className="bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>

        <button className="bg-orange w-60 h-12 text-orange border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange bg-opacity-25"><h3>PLEDGE</h3></button>
      </nav>
      {children}
      <footer>
        <div className="flex flex-col space-y-5 text-center md:flex-row md:space-y-0 md:text-start md:justify-evenly py-10 px-5 items-center bg-forest">
          <Image src={logo} width={100} height={100} alt="PFG Logo" />
          <div>
            <h3 className="text-cream max-w-lg">GET UPDATES ON GOOD THINGS THAT MATTER IN YOUR INBOX</h3>
            <div>
              <input type="email" name="email" placeholder="ENTER EMAIL" className="h-10 w-40 md:w-64 focus:outline-none focus:ring focus:border-slate bg-forest text-cream border-slate border-2 placeholder:text-cream " />
              <button className="h-10 w-28 md:w-40 font-semibold tracking-wide bg-slate border-slate border-2 text-cream">SIGN UP</button>
            </div>
          </div>
          <div className="text-cream flex flex-col space-y-3 font-semibold">
            <div>(414)-209-4101</div>
            <Link href="mailto:brad@consumerpowerinitiative.org">brad@consumerpowerinitiative.org</Link>                        
          </div>
          <div className="flex flex-col space-y-7">
            <button className="bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
            <button className="w-60 h-12 text-cream border-cream border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange hover:border-orange bg-opacity-0"><h3>TAKE THE PLEDGE</h3></button>
          </div>
          
        </div>
      </footer>
      </body>
    </html>
  )
}
