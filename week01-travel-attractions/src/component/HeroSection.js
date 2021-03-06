import React, { useState } from "react";
import logo from '../img/taiwan.png';

console.log(logo); // /ltaiwan.png

function HeroSection() {
    return (
    
        <div class="relative bg-white overflow-hidden">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
        
              <div>
                <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div class="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span class="sr-only">台灣旅遊景點</span>
                          <img class="h-8 w-auto sm:h-10" src={logo}/>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
        
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">台灣旅遊景點</span>
                    <span class="block text-indigo-600 xl:inline">Taiwan Travel Attraction</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                   
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="h-48 flex flex-wrap content-center ...">
                      <ul class="flex">
                        <li class="flex-1 mr-2">
                          <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">美食</a>
                        </li>
                        <li class="flex-1 mr-2">
                          <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">景點</a>
                        </li>
                        <li class="flex-1 mr-2">
                          <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">活動</a>
                        </li>
                        <li class="flex-1 mr-2">
                          <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">住宿</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1503505344463-859206198e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
          </div>
        </div>
        
    );
  }
  
  export default HeroSection;
  