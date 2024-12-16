export default function Header() {
    return (
        <>
            <header className="relative overflow-hidden">
                <div
                    className="bg-gradient-to-r from-[#000B54] to-purple-900 h-[600px] md:h-[700px] bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #1e3a8a, #6b21a8), url("https://images.unsplash.com/photo-1557683311-eeb53f7fb646")'
                    }}
                >
                    <div className="container mx-auto px-6 py-20">
                        <img
                            src="https://images.unsplash.com/photo-1557683311-eeb53f7fb646"
                            alt="INTRA SOFTWARE"
                            className="w-48 mb-8 mx-auto"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "";
                            }}
                        />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-center">
                            Transformando tus ideas
                            <br />
                            en realidad digital
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-center">
                            Creamos soluciones innovadoras para que tu negocio crezca y se destaque
                        </p>
                    </div>
                </div>
            </header>
        </>
    );
}
