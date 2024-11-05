import Card from "../components/cards/Card";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";

export default function ServiceSection() {
  return (
    <div id="services" className="max-w-7xl mx-auto p-6 text-center ">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          icon={<FaCogs size={40} className="text-blue-500 mx-auto" />}
          title="Software Development"
          description="Our expert in-house team uses cutting-edge technologies to build software solutions that are robust and scalable."
        />
        <Card
          icon={<FaLaptopCode size={40} className="text-blue-500 mx-auto" />}
          title="Web Development"
          description="Award-winning UX skills and technological expertise make us a leader in web development."
        />
        <Card
          icon={<FaMobileAlt size={40} className="text-blue-500 mx-auto" />}
          title="Mobile App"
          description="We create secure, scalable mobile apps with great user experiences using the latest frameworks."
        />
        <Card
          icon={<FaPalette size={40} className="text-blue-500 mx-auto" />}
          title="Branding"
          description="Our creative team helps brands establish a strong, lasting identity that resonates with their audience."
        />
        <Card
          icon={<FaBullhorn size={40} className="text-blue-500 mx-auto" />}
          title="Digital Marketing"
          description="We're a Google Partner, offering marketing solutions that drive results and engagement."
        />
        <Card
          icon={<FaLaptopCode size={40} className="text-blue-500 mx-auto" />}
          title="UX Design"
          description="We provide top-class UX design, ensuring online experiences are seamless and visually appealing."
        />
      </div>
    </div>
  );
}
