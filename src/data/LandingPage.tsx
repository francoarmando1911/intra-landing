import { FaCode } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

export const services = [
    {
        icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
    title: "Custom Software Development",
        description: "Tailored solutions to meet your specific business needs with cutting-edge technology."
    },
    {
        icon: <FaMobile className="text-4xl mb-4 text-blue-500" />,
    title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
        icon: <FaCloud className="text-4xl mb-4 text-blue-500" />,
    title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment services for your applications."
    },
    {
        icon: <FaDatabase className="text-4xl mb-4 text-blue-500" />,
    title: "Database Management",
        description: "Efficient database design, optimization, and maintenance services."
    }
];
