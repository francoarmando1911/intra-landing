export default function Header() {
    return (
        <>
            <header className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-[#000B54] to-purple-900 h-[500px]">
                    <div className="container mx-auto px-6 py-12">
                        <img
                            src="./logo2.png"
                            alt="INTRA SOFTWARE"
                            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 mb-6 mx-auto"
                        />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white text-center">
                            Transformando tus ideas
                            <br />
                            en realidad digital
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto text-center">
                            Creamos soluciones innovadoras para que tu negocio crezca y se destaque
                        </p>
                        {/* Botón para móviles */}
                        <div className="text-center mt-10">
                            <a
                                href="#contact"
                                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-900 to-[#000B54] text-white text-sm sm:text-base rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Contáctenos
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>


    );
}
