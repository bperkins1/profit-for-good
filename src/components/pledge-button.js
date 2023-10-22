'use client';

import { useState } from 'react';
import Popup from 'reactjs-popup'

import Button from './button.js'

export default function Pledge({ text, classes }){


	return (

 <Popup trigger={

 	<button className={"btn " + classes }>
			<h4>{text}</h4>
		</button>
	} 

	position="right center"
	modal
	nested
	>
	   {close => (
      <div className="popup-content flex flex-wrap justify-center content-center text-center sm:text-start w-4/5 sm:w-1/2 bg-cream rounded mx-auto border border-forest">
        
        <h2 className="text-cream rounded w-full bg-forest text-center p-5"> Profit For Good Pledge </h2>
        <div className="p-7">
          {' '}
          <p className="sm:indent-6">
          I realize that my purchases have the power to do good. My purchases can save lives, lift
          people out of poverty, save our environment, and otherwise promote amorejust and happy
          world for all. I understand that in buying from Profit for Good businesses, I can be a part of
          directing our species' proftis toward creating the world we want to see.	
          </p>
          <br />
          <p className="sm:indent-6">
            Therefore, I pledge to consider where the profits from my purchases go, giving preference
          to Profit for Good businesses where possible. I pledge, within 30 days of making this pledge,
          to make at least one purchase from a Profit for Good business.	
          </p>
          <br />
          <p className="sm:indent-6">
            I make this pledge to help prove that we the consumers of the world want the profit from
          our purchases to go toward making a better world, and, where given the choice, we will
          buy the change we want to see in the world.	
          </p>

        </div>

        <div className="flex flex-wrap justify-center space-x-2 w-full">
        	<div className="mt-3">
		        <label className="block text-gray-700" for="firstname">
		        	<h4>First Name</h4>
		      	</label>
		      	<input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:border-orange-500 focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="first name" autocomplete="on" />
	      	</div>

	      	<div className="mt-3">
		      	<label className="block text-gray-700" for="lastname">
		        	<h4>Last Name</h4>
		      	</label>
		      	<input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:border-orange-500 focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="last name" autocomplete="on" />
		
	      	</div>
	      	
	      	<div className="mt-3">
		      	<label className="block text-gray-700" for="emailname">
		        	<h4>Email</h4>
		      	</label>
		      	<input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:border-orange-500 focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="email" autocomplete="on" />
	      	</div>
	      	
  		</div>

       	
          <button
            className="btn bg-slate border-slate text-white hover:bg-cream hover:border-slate hover:text-slate m-3"
            onClick={() => {
              console.log('pledge submitted');
 
            }}
          >
            <h4>SUBMIT</h4>
          </button>	

          <button
            className="btn btn-oj m-3"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <h4>CLOSE</h4>
          </button>
       	
          
       
      </div>
      )}


  </Popup>



		)
}



    