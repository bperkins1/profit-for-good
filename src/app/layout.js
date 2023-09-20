import './globals.css'
import localFont from 'next/font/local'


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
      <footer></footer>
      </body>
    </html>
  )
}
