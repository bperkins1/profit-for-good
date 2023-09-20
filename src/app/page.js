import Image from 'next/image'
import children from '../../public/home-hero.jpg'
import pledge from '../../public/Icons/1-pledge.png'
import shop from '../../public/Icons/2-shop.png'
import planet from '../../public/Icons/3-planet.png'
import shirt from '../../public/Icons/shirt.png'
import money from '../../public/Icons/money.png'
import heart from '../../public/Icons/heart.png'
import clothes from '../../public/clothes.jpg'
import guy from '../../public/guy.jpg'




export default function Home() {
  return (
    <>
 
      <div className="min-h-screen flex flex-wrap">

        <div className="sm:w-1/2 bg-texture">
          <div className="max-w-screen-sm mx-auto h-full space-y-10 flex flex-col justify-end p-12">
            <h1 className="text-cream text-4xl lg:text-7xl">Every dollar for <span className="fraunces-i">people </span>& the <span className="fraunces-i">planet.</span></h1>
            <h3 className="text-slate xl:text-xl">ELIMINATE GLOBAL INJUSTICES BY BUYING FROM PROFT FOR GOODS (PFGS) - BRAND THAT DONATE 90%+ OF THEIR PROFITS TO CHARITABLE CAUSES.</h3>
            <h4 className="text-cream">Our Nonprofit is dedicated to creating a seamless pathway for individuals to support charities through everyday spending.</h4>
            <button className="bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
          </div>
        </div>

        <div className="w-0 sm:w-1/2">
          <Image 
          src={children}
          alt="picture of happy children"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} // optional
          />
        </div>

        <div className="bg-slate flex grow text-cream flex-col items-center gap-y-6 px-5 py-7 sm:flex-row sm:justify-center sm:items-center  sm:p-3 sm:gap-x-5">
           <div className="max-w-screen-xl"></div>
           <Image className="ms-5 sm:ms-0" width={100} height={100} src={pledge} alt="penicl and paper" />
            <h4>01. TAKE THE PLEDGE</h4>
            <Image className="mt-8 sm:mt-0 md:ms-10" width={100} height={100} src={shop} alt="cardboard box"/>
            <h4>02. SHOP PROFIT FOR GOODS</h4>
            <Image className="mt-8 sm:mt-0 md:ms-10" width={100} height={100} src={planet} alt="planet"/>
            <h4>03. SAVE PEOPLE + PLANET</h4> 
        </div>

      </div>
  

      <div className="w-full bg-trees p-5 sm:p-20">
        <div className="max-w-screen-xl bg-cream p-10 sm:p-20 my-5 sm:my-10 mx-auto flex flex-col gap-y-4 items-center text-center">
          <h2 className="text-slate text-4xl lg:text-6xl">Take the power of your dollar back.</h2>
          <h3 className="text-olive text-lg w-4/5"><strong>TYPICAL BRANDS AREN'T DOING ENOUGH TO HELP COMBAT THE WORLD'S LARGEST ISSUES.</strong></h3>
          <p className="text-gray w-4/5 tracking-wide">By purchasing products with the Profit For Good seal, your dollar will be going directly into the pockets of our Charity Partners. You get the product or service you need at no extra cost all while helping end injustices within Gloabl Health and Development, Farmed Animal Welfare, and Environmentalism.</p>
          <div>
            <button className="mb-5 lg:mb-0 lg:me-3 bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
            <button className="lg:ms-3 bg-orange w-60 h-12 text-orange border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange bg-opacity-0"><h3>TAKE THE PLEDGE</h3></button>
          </div>
        </div>
      </div>

      <div className="w-full bg-texture p-5">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center text-white text-4xl lg:text-6xl my-10">
          <h1>We offer a <span className="fraunces-i">unique propostion</span>:</h1>
          <div className="w-4/5 bg-slate p-10 mt-8 text-2xl tracking-wide text-center">THE POWER TO CHOOSE BETWEEN VIRTUALLY IDENTICAL PRODUCTS, EACH WITH ITS OWN IMPACT.</div>
          <div className="w-full my-10">
            <h4 className="w-64 py-2 px-4 mx-auto bg-forest border-cream border-2 text-cream text-base text-center">BUYING A PRODUCT</h4>
          </div>
          <div className="flex flex-row w-full h-44 justify-around px-2 sm:px-40">{/*start here*/}
            <div className="self-end">
              <Image  src={heart} width={100} height={100} fill={false} alt="heart" />
            </div>
            <div className="self-start">
              <Image src={shirt} width={100} height={100} fill={false} alt="t shirt" />
            </div>
            <div className="self-end">
              <Image src={money} width={100} height={100} fill={false} alt="bag of money" />
            </div>
          </div>
          <div className="w-full flex justify-around my-10 gap-x-4 sm-gap-x-0">
            <div className="py-2 px-4 bg-forest border-cream border-2 text-base text-cream text-center">
              <h4 className="tracking-wide">PROFITS TO CHARITY</h4>
              <p>Profit for Good businessess send the profits directly to charity.</p>
            </div>
            <div className="py-2 px-4 bg-forest border-cream border-2 text-base text-cream text-center">
              <h4 className="mb-2">PROFITS TO WEALTHY</h4>
              <p className="mb-2 tracking-wide">Traditional business supports wealthy shareholders.</p>
            </div>
          </div>
        </div>
      </div>   

      <div className="flex p-5 sm:p-20 bg-slate">
        <div className="w-0 sm:w-1/2">
            <Image 
            src={clothes}
            alt="picture of pants and shirts on a rack in a retail store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }} // optional
            />
        </div>

        <div className="sm:w-1/2 bg-slate">
            <div className="max-w-screen-sm space-y-5 h-full flex flex-col justify-center ms-5 sm:ms-16">
              <h2 className="text-cream text-4xl lg:text-6xl">Being a conscious consumer, easily</h2>
              <h3 className="text-cream xl:text-xl">TYPICALLY, BEING A SOCIALLY RESPONSIBLE SHOPPER CAN BE TIME CONSUMING AND EXPENSIVE</h3>
              <p className="text-cream">So we connect you to companies that are donating 90%+ of their profits directly to our CHarity Partners at no extra cost to you.</p>
              <div className="">
                <button className="bg-orange w-52 h-12 mb-5 xl:mb-0 xl:me-2 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
                <button className="bg-slate w-52 h-12 xl:ms-2 text-white border-cream border-2 hover:drop-shadow-2xl hover:bg-white"><h3>PLEDGE</h3></button>
              </div>
             
            </div>
        </div>
      </div>

      <div className="flex">
      <div className="sm:w-1/2 bg-texture">
          <div className="max-w-screen-sm mx-auto h-full space-y-10 flex flex-col p-12">
            <h1 className="text-cream text-4xl lg:text-7xl">Every dollar for <span className="fraunces-i">people </span>& the <span className="fraunces-i">planet.</span></h1>
            <h3 className="text-slate xl:text-xl">ELIMINATE GLOBAL INJUSTICES BY BUYING FROM PROFT FOR GOODS (PFGS) - BRAND THAT DONATE 90%+ OF THEIR PROFITS TO CHARITABLE CAUSES.</h3>
            <h4 className="text-cream">Our Nonprofit is dedicated to creating a seamless pathway for individuals to support charities through everyday spending.</h4>
            <button className="bg-orange w-60 h-12 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
          </div>
        </div>

        <div className="w-0 sm:w-1/2">
          <Image 
          src={guy}
          alt="picture of person happily using laptop"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} // optional
          />
        </div>
      </div>
    </>
  )
}
// export default function Home() {
//   return (
//     <>
//     <div className="flex flex-wrap h-screen">
//       <div className="basis-1/2 bg-texture">
//         <div className="max-w-screen-sm mx-auto h-full space-y-10 flex flex-col justify-end p-12">
//           <h1 className="text-cream text-4xl lg:text-7xl">Every dollar for <span className="fraunces-i">people </span>& the <span className="fraunces-i">planet.</span></h1>
//           <h3 className="text-slate xl:text-xl">ELIMINATE GLOBAL INJUSTICES BY BUYING FROM PROFT FOR GOODS (PFGS) - BRAND THAT DONATE 90%+ OF THEIR PROFITS TO CHARITABLE CAUSES.</h3>
//           <h4 className="text-cream">Our Nonprofit is dedicated to creating a seamless pathway for individuals to support charities through everyday spending.</h4>
//           <button className="bg-orange"><p className="text-cream">DONATE TODAY</p></button>
//         </div>
//       </div>
//       <div className="basis-1/2 flex justify-center content-center">
//         <Image 
//         src={children}
//         alt="picture of happy children"
//         />
//       </div>
//           <Image src={pledge}/>
//           <p>01. TAKE THE PLEDGE</p>  
//     </div>

//     </>
//   )
// }