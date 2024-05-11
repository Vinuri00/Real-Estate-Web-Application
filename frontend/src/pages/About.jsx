import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-white md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-5xl text-center font-bold text-gray-900 dark:text-black sm:text-2xl">
              GreenLands - Your Destination for Land Investments
            </h2>
            <div className="my-8 xl:mb-16 xl:mt-12">
              {/* Removed the old images and added a new landscape image */}
              <img
                className="mx-auto block w-10/12 h-96"
                src="https://www.oldpoint.com/resourcefiles/personal-loans-images/lot-loans.jpg"
                alt="Landscape"
              />
            </div>
            <div className="mx-auto max-w-2xl space-y-6 md:mb-12 ">
              <p className="text-base font-normal text-gray-500 dark:text-black">
                Our platform provides comprehensive details of experienced
                brokers who can assist you in finding the perfect piece of land.
                You can view their profiles, including their expertise, past
                transactions, and client reviews, helping you make an informed
                decision. Our platform also provides a list of legal services.
              </p>

              <p className="text-base font-normal text-gray-500 dark:text-black">
                Need legal advice or assistance with your land transaction? Our
                platform offers a convenient lawyer booking service. Simply
                browse through our list of experienced real estate lawyers,
                check their availability, and book a video conference to discuss
                your legal needs.
              </p>

              <p className="text-base font-semibold text-gray-900 dark:text-black">
                Why Choose Us?
              </p>
              <li>
                Wide Range of Properties: Explore a wide range of land listings
                from various regions in Sri Lanka, ensuring you find the perfect
                property to suit your needs.
              </li>
              <li>
                Transparent Transactions: We prioritize transparency in all
                transactions, providing you with all the information you need to
                make an informed decision.
              </li>
              <li>
                Easy Communication: Connect with brokers and lawyers seamlessly
                through our platform, ensuring a smooth and hassle-free
                experience.
              </li>
              <li>
                Secure Transactions: Our platform ensures secure transactions
                and protects your personal information at all times.
              </li>

              <p className="text-base font-semibold text-gray-900 dark:text-black">
                How It Works
              </p>
              <li>
                Browse Listings: Explore our comprehensive list of land
                listings, filtering by location, price, and size to find the
                perfect property.
              </li>
              <li>
                View Broker Details: Get to know our experienced brokers and
                their expertise in the real estate market.
              </li>
              <li>
                Book a Lawyer: Schedule a video conference with a real estate
                lawyer to discuss legal matters related to your land
                transaction.
              </li>
              <li>
                Make an Informed Decision: With all the information at your
                fingertips, make an informed decision about your land purchase.
              </li>

              <p className="text-base font-semibold text-gray-900 dark:text-black">
                Get Started
              </p>
              <p>
                Start your land purchasing journey today by browsing through our
                listings and connecting with experienced brokers and lawyers.
                Your dream property is just a click away!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
