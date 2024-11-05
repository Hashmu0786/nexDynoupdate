import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${blog.slug}`} passHref>
        <div>
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{blog.title}</h2>
          <p className="mt-2 text-gray-600">{blog.description}</p>
          <span className="text-blue-500 inline-block mt-4">Read More</span>
        </div>
      </Link>
    </div>
  );
}
