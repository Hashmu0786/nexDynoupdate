import Head from 'next/head';

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal Information | Nextdyno</title>
        <meta
          name="description"
          content="Find important legal information about Nexdyno, including terms of service, privacy policy, and disclaimers."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="container mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold mb-6">Legal Information</h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Terms of Service</h2>
          <p className="text-lg text-gray-700">
            By accessing or using our services, you agree to be bound by our terms and conditions. We reserve the right to update these terms at any time.
          </p>

          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            We are committed to protecting your privacy. Please review our Privacy Policy to learn how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-2xl font-semibold">Disclaimer</h2>
          <p className="text-lg text-gray-700">
            The information provided on this site is for general informational purposes only and does not constitute legal or professional advice.
          </p>

          <h2 className="text-2xl font-semibold">Copyright Notice</h2>
          <p className="text-lg text-gray-700">
            All content on this site, including text, graphics, and logos, is the property of Nexdyno and is protected by copyright laws.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions about our legal policies, please contact us at{" "}
            <a href="nexdyno.business@gmail.com" className="text-blue-600 underline">
            nexdyno.business@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
}
