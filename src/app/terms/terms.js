import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Nexdyno</title>
        <meta 
          name="description" 
          content="Read the complete terms and conditions of using Nexdyno's services, including your rights and responsibilities." 
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="container mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-lg text-gray-700">
            Welcome to Nexdyno! By accessing and using our website or services, 
            you agree to comply with the terms outlined below. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          <p className="text-lg text-gray-700">
            Our services are intended to empower businesses through web development, 
            SEO, digital marketing, and branding solutions. You agree to use our 
            services only for lawful purposes and in compliance with all applicable laws.
          </p>

          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p className="text-lg text-gray-700">
            You are responsible for the information and content you provide while using our services.
            Misuse, unlawful activities, or attempts to interfere with the proper functioning of 
            our services will result in termination of access.
          </p>

          <h2 className="text-2xl font-semibold">4. Payment and Fees</h2>
          <p className="text-lg text-gray-700">
            All payments for services rendered must be made in accordance with our pricing policies.
            We reserve the right to update pricing or service offerings at any time with prior notice.
          </p>

          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-lg text-gray-700">
            All content, including text, graphics, logos, and code, is the intellectual property 
            of Nexdyno and may not be used without our written permission.
          </p>

          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-lg text-gray-700">
            We are not liable for any direct or indirect damages resulting from the use of our services.
            This includes, but is not limited to, loss of data, business interruption, or system failures.
          </p>

          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p className="text-lg text-gray-700">
            We reserve the right to update these Terms of Service at any time. 
            Your continued use of our services following any changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions about these terms, please contact us at:{" "}
            <a href="mailto: nexdyno.business@gmail.com" className="text-blue-600 underline">
            nexdyno.business@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
}
