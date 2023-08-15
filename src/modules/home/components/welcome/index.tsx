import Image from "next/image"

const Welcome = () => {
    return (

        <section>
            <div className="content-container py-14">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl  justify-center flex">

                        <div className="relative w-full max-w-lg">
                            <div className="absolute  rounded-full bg-amber-300 -top-5 -left-5 w-40 h-40 lg:w-72 lg:h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                            <div className="absolute rounded-full bg-amber-300 -bottom-5 -right-5 w-40 h-40 lg:w-72 lg:h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                            <div className="relative">
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/jxto13/memorias-douradas-media@main/public/hero.jpeg"
                                    alt="hero"
                                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                                    width={500}
                                    height={0}
                                />

                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Bem-Vindo "À Memorias Douradas" </span>
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Leve consigo memórias de dias felizes.</h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Explore a nossa coleção e encontre os mais variados Pins e Crachás personalizados com as melhores paisagens da ilha de Porto Santo.
                            Neste cantinho poderá também personalizar com as suas imagens aquando da visita À ilha dourada.</p>
                        <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Transforme pequenos momentos em grandes memórias.
                            Uma mensagem, a sua foto ou simplesmente uma paisagem num iman de frigorifico ou num crachá para a sua mochila.</p>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Welcome
