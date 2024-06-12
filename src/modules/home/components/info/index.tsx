const Info = () => {
    return (
        <section>

            {/* <div className="content-container py-12">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className="text-2xl-regular text-gray-600 mb-3">
                        Contatos
                    </span>
                    <p className="mt-3 text-gray-500">Tem dúvidas? Fale connosco. As suas dúvidas serão sempre respondidas o mais brevemente possível! Utilize os contactos abaixo indicados.</p>
                    <p className="mt-3 text-gray-500">Utilize os contactos abaixo indicados.</p>
                </div>

                <div className="mt-10 lg:mx-auto lg:flex lg:justify-center">
                    <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96 bg-amber-100 rounded-t-lg md:rounded-l-lg">
                        <span className="p-3 text-white rounded-full bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                        <p className="mt-2 text-blue-500">loja@memoriasdouradas.pt</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96 bg-amber-100 rounded-b-lg md:rounded-r-lg">
                        <span className="p-3 text-white rounded-full bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.210l1.293-.970c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800">Telemóvel</h2>
                        <p className="mt-2 text-blue-500">+351 999 999 999</p>
                    </div>
                </div>

bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-spider-web-web-star-snow-background-picture-image_503368.jpg')]
            </div> */}

            {/* <div className="content-container py-12">
                <div className="py-12">
                    <div className="flex flex-col items-center text-center mb-10">
                        <span className="text-2xl-regular text-gray-600 mb-3">
                            Contatos
                        </span>
                        <p className="mt-3 text-gray-600">Tem dúvidas? Fale connosco!</p>
                    </div>

                    <div className="mt-10 lg:mx-auto lg:flex lg:justify-center">
                        <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96">
                            <span className="p-3 text-white rounded-full bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-gray-600">Email</h2>
                            <p className="mt-2 text-blue-600">loja@memoriasdouradas.pt</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96">
                            <span className="p-3 text-white rounded-full bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.210l1.293-.970c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-gray-600">Telemóvel</h2>
                            <p className="mt-2 text-blue-600">+351 999 999 999</p>
                        </div>
                    </div>


                </div>
            </div> */}
            <div className="content-container py-12">
                <div className="py-12">
                    <div className="flex flex-col items-center text-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Contatos</h2>
                        <p className="mt-3 text-gray-600">Tem dúvidas? Fale connosco!</p>
                    </div>

                    <div className="mt-10 lg:mx-auto lg:flex lg:justify-center space-y-10 lg:space-y-0 lg:space-x-10">
                        <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96 bg-white shadow-lg rounded-lg">
                            <h3 className="text-lg font-medium text-gray-700">Email</h3>
                            <a href="mailto:loja@memoriasdouradas.pt" className="mt-2 text-blue-600">loja@memoriasdouradas.pt</a>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96 bg-white shadow-lg rounded-lg">
                            <h3 className="text-lg font-medium text-gray-700">Telemóvel</h3>
                            <p className="mt-2 text-blue-600">+351 926 249 032</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="content-container mt-12">
                <section className="mb-32">
                    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
                    <div className="content-container">
                        <div
                            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="py-12">
                                <div className="flex flex-col items-center text-center mb-10">
                                    <span className="text-2xl-regular text-gray-600 mb-3">
                                        Contatos
                                    </span>
                                    <p className="mt-3 text-gray-500">Tem dúvidas? Fale connosco. As suas dúvidas serão sempre respondidas o mais brevemente possível! Utilize os contactos abaixo indicados.</p>
                                    <p className="mt-3 text-gray-500">Utilize os contactos abaixo indicados.</p>
                                </div>

                                <div className="mt-10 lg:mx-auto lg:flex lg:justify-center">
                                    <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96">
                                        <span className="p-3 text-white rounded-full bg-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>
                                        <h2 className="mt-4 text-lg font-medium text-gray-600">Email</h2>
                                        <p className="mt-2 text-blue-500">loja@memoriasdouradas.pt</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center text-center p-4 lg:w-96">
                                        <span className="p-3 text-white rounded-full bg-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.210l1.293-.970c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>
                                        <h2 className="mt-4 text-lg font-medium text-gray-600">Telemóvel</h2>
                                        <p className="mt-2 text-blue-500">+351 999 999 999</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
        </section>
    )
}

export default Info;
