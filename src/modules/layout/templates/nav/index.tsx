import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import Button from "@modules/common/components/button"
import Image from "next/image"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import AccountIcon from "@modules/common/icons/account"
// import clsx from "clsx"
import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useEffect, useState } from "react"

const Nav = () => {
  // const pathname = usePathname()
  // const [isHome, setIsHome] = useState(false)
  // const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  // useEffect(() => {
  //   if (isHome) {
  //     const detectScrollY = () => {
  //       if (window.scrollY > 5) {
  //         setIsScrolled(true)
  //       } else {
  //         setIsScrolled(false)
  //       }
  //     }

  //     window.addEventListener("scroll", detectScrollY)

  //     return () => {
  //       window.removeEventListener("scroll", detectScrollY)
  //     }
  //   }
  // }, [isHome])

  // useEffect(() => {
  //   pathname === "/" ? setIsHome(true) : setIsHome(false)
  // }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    // <div
    //   className={clsx("sticky top-0 inset-x-0 z-50 group", {
    //     "!fixed": isHome,
    //   })}
    // >
      <div
      className="sticky top-0 inset-x-0 z-50 group">
      {/* <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          },
        )}
      > */}
      <header className="relative mx-auto transition-colors border-b duration-200 bg-white">
        {/* <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            },
          )}
        > */}
        <nav className="content-container text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block">
              <Hamburger setOpen={toggle} />
            </div>
            {/* <div className="hidden small:block h-full">
              <DropdownMenu />
            </div> */}
          </div>

          <div className="flex items-center h-full">
            <Link href="/" className="my-3 text-xl-semi uppercase flex items-center gap-x-2">
            <div className="mt-3 mb-3 hidden md:block">
                Memórias</div>
              {/* <img
                src="https://cdn.jsdelivr.net/gh/jxto13/memorias-douradas-media@d0a2e2835d4907c19f88508cf1639268b1775f0f/public/bia_logo.svg"
                alt="Memórias Douradas"
                width={120}
                height={30}
              /> */}
              <Image
                src="https://cdn.jsdelivr.net/gh/jxto13/memorias-douradas-media@d0a2e2835d4907c19f88508cf1639268b1775f0f/public/bia_logo.svg"
                loading="eager"
                priority={true}
                alt="Logo"
                draggable="false"
                width={120}
                height={30}
              />
              <div className="mt-3 mb-3 hidden md:block">
                Douradas</div>
              {/* <div className="mt-3 mb-3">
                Memórias Douradas</div> */}
            </Link>
          </div>

          <div className="flex items-center gap-x-4 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-4 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account"><AccountIcon /></Link>
            </div>
            {/* <Button className="h-full flexflex-row">
              <Link className="flex gap-1" href="/cart" passHref>
                <AccountIcon />
              </Link>
            </Button> */}
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
