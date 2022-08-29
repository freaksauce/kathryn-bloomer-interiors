import React from "react"
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../store/hamburger'

export default function Hamburger() {
  const $isMenuOpen = useStore(isMenuOpen);
  return (
    <button
      className={`hamburger hamburger--spin ${$isMenuOpen ? 'is-active' : ''}`}
      type="button"
      
      onClick={() => isMenuOpen.set(!$isMenuOpen)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner">
          <span className="sr-only">menu</span>
        </span>
      </span>
    </button>
  )
}
