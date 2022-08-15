import React, { useEffect, useState } from "react";
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../store/hamburger'

export default function MobileMenu() {
  const $isMenuOpen = useStore(isMenuOpen);
  const [opacityValue, setOpacityValue] = useState('opacity-0');
  useEffect(() => {
    if ($isMenuOpen) {
      setOpacityValue('opacity-0');
      setTimeout(() => setOpacityValue('opacity-100'), 100);
    } else {
      setOpacityValue('opacity-0');
    }
  }, [$isMenuOpen])
  if ($isMenuOpen) {
    return (
      <div className="fixed top-12 h-full w-full">
        <div className={`${opacityValue} transition-opacity duration-300 ease-in-out bg-white h-full w-full`}>
          <ul className="p-8">
            <li className="py-3 border-b"><a className="text-xl" href="/projects">Projects</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="/about-us">About us</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="/services">Services</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="/media">Media</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="/testimonials">Testimonials</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="/contact">Contact</a></li>
            <li className="py-3 border-b"><a className="text-xl" href="https://store.kathrynbloomerinteriors.com.au/">Online Store</a></li>
          </ul>
        </div>        
      </div>  
    )
  }
}