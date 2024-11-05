// app/blog/[slug]/page.js
import Image from "next/image";
import path from "path";
import fs from "fs";

async function getData(slug) {
  const dataFilePath = path.join(
    process.cwd(),
    "src/data/blogs",
    `${slug}.json`
  );

  // Check if the file exists before reading
  if (!fs.existsSync(dataFilePath)) {
    return null; // Return null if the file does not exist
  }

  try {
    const rawData = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading the data file:", error);
    return null; // Return null if there's an error
  }
}

const BlogPage = async ({ params }) => {
  const blogData = await getData(params.slug);

  // If blogData is null, throw an error to trigger the Next.js 404 page
  if (!blogData) {
    throw new Error("Not Found"); // This will trigger the default Next.js 404 page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-96 w-full overflow-hidden">
        {blogData.heroImage && (
          <Image
            src={blogData.heroImage}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
            {blogData.title}
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="space-y-8">
          {blogData.content.map((section, index) => (
            <section key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
      </div>
  );
};

export default BlogPage;
