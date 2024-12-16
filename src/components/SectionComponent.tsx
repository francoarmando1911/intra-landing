import { services } from '../data/LandingPage.tsx'; 

const SectionComponent = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                        >
                            <div className="flex flex-col items-center text-center">
                                {service.icon}  {/* Muestra el icono */}
                                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionComponent;