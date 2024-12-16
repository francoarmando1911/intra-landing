export default function Header() {
    return (
        <>
            <header className="relative overflow-hidden">
                <div className="bg-[#000B54] h-[700px] sm:h-[700px] md:h-[800px] lg:h-[900px] bg-cover bg-center">
                    <div className="container mx-auto px-6 py-20">
                        <img
                            src="./icono.png"
                            alt="INTRA SOFTWARE"
                            className="w-54 sm:w-32 md:w-48 lg:w-64 xl:w-72 mb-8 mx-auto"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white text-center">
                            Transformando tus ideas
                            <br />
                            en realidad digital
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto text-center">
                            Creamos soluciones innovadoras para que tu negocio crezca y se destaque
                        </p>
                    </div>
                </div>
            </header>
        </>
    );
}
