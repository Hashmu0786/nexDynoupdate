import Link from "next/link";
import Image from "next/image";
import webDevelopmentImage from "../../../public/assets/blog/website-development.jpg";
import seoStrategiesImage from "../../../public/assets/blog/seo-strategies.jpg";
import brandingTipImage from "../../../public/assets/blog/branding-tips.jpg";
import digitalMarketingImage from "../../../public/assets/blog/digital-marketing.jpg";
import responsiveDesignImage from "../../../public/assets/blog/responsive-design.jpg";

const blogs = [
  {
    slug: "web-development",
    title: "How to Build an Effective Website for Your Business",
    description:
      "A step-by-step guide on creating a high-performing website that drives growth and engagement.",
    image: webDevelopmentImage,
  },
  {
    slug: "seoImportance",
    title: "The Importance of SEO for Modern Businesses",
    description:
      "Discover how SEO strategies can boost your online visibility and attract organic traffic.",
    image: seoStrategiesImage,
  },
  {
    slug: "brandingTips",
    title: "Top 5 Branding Tips for Startups",
    description:
      "Learn essential branding techniques to build a strong and memorable brand identity.",
    image: brandingTipImage,
  },
  {
    slug: "digitalMarketingStrategies",
    title: "Effective Digital Marketing Strategies for 2024",
    description:
      "Stay ahead with the latest digital marketing trends and strategies for business growth.",
    image: digitalMarketingImage,
  },
  {
    slug: "responsiveDesign",
    title: "Why Responsive Design Matters for Your Website",
    description:
      "Understand the significance of mobile-friendly websites and how they impact user experience.",
    image: responsiveDesignImage,
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-black">
          Our Latest Blog Posts
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${blog.slug}`} passHref>
                <div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-2xl font-bold mt-4 text-black">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  <span className="text-blue-500 inline-block mt-4">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
