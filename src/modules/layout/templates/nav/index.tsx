"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import Image from "next/image"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import AccountIcon from "@modules/common/icons/account"
import Link from "next/link"

const Nav = () => {

  const { toggle } = useMobileMenu()

  return (
    <div
      className="top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto transition-colors border-b duration-200">
        <nav className="content-container flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block">
              <Hamburger setOpen={toggle} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link href="/" className="my-3 text-xl-semi uppercase flex items-center gap-x-2">
              <div className="mt-3 mb-3 hidden md:block">
                Memórias</div>
              <Image
                src="https://cdn.jsdelivr.net/gh/jxto13/memorias-douradas-media@main/public/logo.svg"
                loading="eager"
                priority={true}
                alt="Logo"
                draggable="false"
                width={120}
                height={30}
              />
              <div className="mt-3 mb-3 hidden md:block">
                Douradas</div>
            </Link>
          </div>

          <div className="flex items-center gap-x-4 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-4 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account"><AccountIcon /></Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <div className="max-w-lg">
          <MobileMenu />
        </div>

      </header>
    </div>


  )
}

export default Nav
