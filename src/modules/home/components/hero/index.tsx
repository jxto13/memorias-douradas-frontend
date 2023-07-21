import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    // <div classNameName="h-[90vh] w-full relative">
    //   <div classNameName="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
    //     <h1 classNameName="text-2xl-semi mb-4 drop-shadow-md shadow-black">
    //       Summer styles are finally here
    //     </h1>
    //     <p classNameName="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
    //       This year, our new summer collection will shelter you from the harsh
    //       elements of a world that doesn&apos;t care if you live or die.
    //     </p>
    //     <UnderlineLink href="/store">Explore products</UnderlineLink>
    //   </div>
    //   <Image
    //     src="https://cdn.jsdelivr.net/gh/jxto13/memorias-douradas-media@47e3885f909d7eada7c3071e669fc841a0b0c2aa/public/pxo.jpg"
    //     loading="eager"
    //     priority={true}
    //     quality={90}
    //     alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
    //     classNameName="absolute inset-0"
    //     draggable="false"
    //     fill
    //     sizes="100vw"
    //     style={{
    //       objectFit: "cover",
    //     }}
    //   />
    // </div>
    <section>
      <div className="content-container py-12">
        {/* <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
            natus?
          </p>
        </header> */}

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

  )
}

export default Hero
