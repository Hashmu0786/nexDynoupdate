import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Nextdyno</title>
        <meta 
          name="description" 
          content="Learn how Nexdyno collects, uses, and protects your personal information in accordance with privacy laws." 
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="container mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-lg text-gray-700">
            At Nexdyno, your privacy is important to us. This Privacy Policy outlines how we collect, 
            use, and protect your personal information. By using our services, you agree to the practices 
            described in this policy.
          </p>

          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="text-lg text-gray-700">
            We collect personal information directly from you when you engage with us through our website 
            or services. This may include your name, email address, phone number, and billing details.
          </p>

          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700 text-lg">
            <li>To provide and improve our services.</li>
            <li>To communicate with you regarding inquiries, updates, or offers.</li>
            <li>To process payments and issue invoices for services.</li>
            <li>To ensure compliance with legal obligations and protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. How We Protect Your Information</h2>
          <p className="text-lg text-gray-700">
            We implement industry-standard security measures to protect your data from unauthorized 
            access, disclosure, or loss. However, no online service can guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold">5. Sharing Your Information</h2>
          <p className="text-lg text-gray-700">
            We do not sell or rent your personal information to third parties. However, we may share your 
            data with trusted partners for payment processing, email communications, or legal compliance.
          </p>

          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="text-lg text-gray-700">
            You have the right to access, correct, or delete the personal information we have about you. 
            You may also object to the processing of your data or request data portability.
          </p>

          <h2 className="text-2xl font-semibold">7. Cookies</h2>
          <p className="text-lg text-gray-700">
            We use cookies to enhance your browsing experience and analyze website traffic. You can control 
            cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
          <p className="text-lg text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy 
            practices or content of those sites. Please review their privacy policies when visiting them.
          </p>

          <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
          <p className="text-lg text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, 
            and your continued use of our services after changes signifies acceptance.
          </p>

          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto: nexdyno.business@gmail.com" className="text-blue-600 underline">
            nexdyno.business@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
}
