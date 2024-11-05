export default function Card({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
