import Image from 'next/image'
import children from '../../public/home-hero.jpg'
import pencil from '../../public/Icons/1-pencil.png'
import shop from '../../public/Icons/2-shop.png'
import planet from '../../public/Icons/3-planet.png'
import shirt from '../../public/Icons/shirt.png'
import money from '../../public/Icons/money.png'
import heart from '../../public/Icons/heart.png'
import clothes from '../../public/clothes.jpg'
import guy from '../../public/guy.jpg'
import tag from '../../public/Icons/tag.png'
import pledge from '../../public/placeholder-pledge.jpg'





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
           <Image className="ms-5 sm:ms-0" width={100} height={100} src={pencil} alt="pencil and paper" />
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
          <h3 className="text-olive text-lg w-4/5"><strong>TYPICAL BRANDS AREN&apos;T DOING ENOUGH TO HELP COMBAT THE WORLD&apos;S LARGEST ISSUES.</strong></h3>
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
                <button className="bg-slate w-52 h-12 xl:ms-2 text-white border-cream border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange hover:border-orange"><h3>PLEDGE</h3></button>
              </div>
             
            </div>
        </div>
      </div>

      <div className="flex">
      <div className="sm:w-1/2 bg-texture">
          <div className="max-w-screen-sm mx-auto my-10 h-full space-y-10 flex flex-col p-12 text-cream">
            <h4 className="text-center sm:text-start sm:w-5/6 text-2xl lg:text-4xl">How it Works</h4>
            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start gap-y-3 sm:gap-y-0 text-center sm:text-start">
              <Image src={pencil} width={100} height={100} className="mb-3 ms-7 sm:ms-0 sm:mb-0" alt="pencil"/>
              <h3 className="mx-3 mt-5">01.</h3>
              <h3 className="sm:mt-5">TAKE THE PLEDGE TO JOIN OUR GROWING COMMUNITY OF SOCIALLY RESPONSIBLE PEOPLE</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start gap-y-3 sm:gap-y-0 text-center sm:text-start">
              <Image src={shop} width={100} height={100} alt="shopping bag"/>
              <h3 className="mx-3 mt-5">02.</h3>
              <h3 className="sm:mt-5">CONVENIENTLY SHOP PROFIT FOR GOODS AND GET PRODUCTS DELIVERED TO YOUR DOOR</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start gap-y-3 sm:gap-y-0 text-center sm:text-start">
              <Image src={planet} width={100} height={100} alt="planet"/>
              <h3 className="mx-3 mt-5">03.</h3>
              <h3 className="sm:mt-5">SUPPORT CHARITIES WITH YOUR PRUCHASE AT NO EXTRA COST</h3>
          </div>
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

      <div className="w-full bg-water p-5 sm:p-20">
        <div className="max-w-screen-xl bg-cream p-10 sm:p-20 my-5 sm:my-10 mx-auto flex flex-col gap-y-4 items-center text-center">
          <Image src={tag} width={100} height={100} alt="shopping tag"/>
          <h2 className="text-slate text-4xl lg:text-6xl">Our Founding Vision</h2>
          <h3 className="text-forest text-lg w-4/5 my-3">WE RECOGNIZE YOUR INNATE DESIRE TO MAKE A POSITIVE IMPACT ON THE WORLD.</h3>
          <h4 className="text-olive w-4/5 tracking-wide">SOMEBODY BENEFITS FROM YOUR PURCHASES, SO WHY NOT HAVE IT BE CHARITIES THAT SOLVE GLOBAL PROBLEMS?</h4>
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row bg-slate">
        <div className="max-w-screen-sm p-5 sm:p-20">
            <h2 className="text-cream text-4xl xl:text-6xl">Our unwavering commitment is to <em className="text-olive">eradicate social injustices</em> by leveraging the strength of the global economy</h2>
        </div>

        <div className="max-w-screen-sm p-5 sm:p-20">
            <div className="space-y-5 h-full flex flex-col justify-center">
              <h3 className="text-cream">OUR VISION IS TO ERADICATE POVERTY THROUGH ORDINARY TRANSACTIONS, WITHOUT BURDENING CONSUMERS WITH INCREASED COSTS. THE BACKBONE OF OUR NETWORK LIES IN OUR PROFIT FOR GOOD MODEL, WHERE MORE THAN 90% OF PROFITS GO TO CHARITABLE CAUSES.</h3>
              <p className="text-cream">So we connect you to companies that are donating 90%+ of their profits directly to our CHarity Partners at no extra cost to you.</p>
              <div className="">
                <button className="bg-orange w-52 h-12 mb-5 xl:mb-0 xl:me-2 text-white border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>DONATE TODAY</h3></button>
                <button className="bg-slate w-52 h-12 xl:ms-2 text-white border-cream border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange hover:border-orange"><h3>PLEDGE</h3></button>
              </div>
             
            </div>
        </div>
      </div>

      <div className="flex">
      <div className="w-0 sm:w-1/2">
          <Image 
          src={pledge}
          alt="picture of person happily using laptop"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} // optional
          />
        </div>
      <div className="sm:w-1/2 bg-cream">
          <div className="max-w-screen-sm mx-auto h-full space-y-10 flex flex-col">
            <div className="w-full bg-cream text-cream">
              <div className="max-w-screen-sm bg-cream p-5 sm:p-10 my-5 sm:my-10 mx-auto flex flex-col gap-y-4 items-center text-center sm:text-start">
                <h2 className="text-slate text-4xl lg:text-6xl mb-2">Our Profit For Good Pledge</h2>
                <h3 className="text-olive text-lg w-4/5">YOU&apos;LL JOIN A COMMUNITY OF CONSCIOUS SPENDERS WHO ARE FIGHTING FOR PEOPLE AND THE PLANET WITH EVERY DOLLAR YOU SPEND.</h3>
                <p className="text-gray w-4/5 tracking-wide">This free pledge is a conscious commitment to using your dollar to support our Charity Partners. By taking this pledge, you&apos;ll buy goods that you need from a Profit For Good instead of from a similar competitor, because you know 90%+ of your spending will help people + our planet. Plus, you&apo;ll get added to our newsletter that will highlight new Profit for Good&apos;s, bring encouraging news, and inform you about the charities that you&apos;re impacting.</p>
                <p className="text-gray w-4/5 tracking-wide">The pledge encourages you to commit to purhcasing from one of our incredible Profit for Goods within 30 days, empowering charity across the globe. Together, we can end the injustices of the world, just through our daily spending habits.</p>
                <div>
                  <button className="px-5 py-3 font-semibold bg-cream w-full text-orange border-orange border-2 hover:drop-shadow-2xl hover:bg-white hover:text-orange"><h3>TAKE THE PROFIT FOR GOOD PLEDGE</h3></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-start bg-orange text-cream py-10 space-x-3 sm:space-x-20">
        <h4 className="mb-6 sm:mb-0">FUND OUR CAUSE TO DIRECT PROFITS TO PEOPLE AND PLANET</h4>
        <button className="bg-white w-60 h-12 text-orange border-orange border-2 hover:drop-shadow-2xl hover:text-orange"><h3>DONATE TODAY</h3></button>
      </div>
    </>
  )
}