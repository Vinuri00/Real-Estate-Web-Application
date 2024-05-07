import React, { useState } from "react";

const LegalServices = () => {
  /* const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, content) => {
    setTooltipPosition({ x: e.pageX, y: e.pageY });
    setTooltipContent(content);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  }; */

  return (
    <>
    <div className="">
      <section className="bg-center bg-cover bg-no-repeat bg-[url('assets/images/legal1.webp')] bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Trust Us to Safeguard Your Real Estate Investments
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-24">
            Don't stress over taxes. Hand them off to a pro for{" "}
            <strong className="font-extrabold">
              <i>HALF OFF </i>
            </strong>
            and relax. Say goodbye to tax-related stress and let us handle your
            legal needs. Contact us today to schedule an appointment and take
            advantage of this exclusive offer!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* <div className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4 py-8">
        <h2 className="font-extrabold tracking-tight leading-none text-black md:text-xl lg:text-4xl">
          Our most popular documents
        </h2>
      </div> */}

      <div className="text-3xl font-extrabold text-gray-900 dark:text-white text-center py-14">
        <h2 className="font-extrabold tracking-tight leading-none text-black md:text-xl lg:text-4xl">
          <u className="text-black border-b-2 border-green-600">
            Rocket Lawyer
          </u>
        </h2>
      </div>

      <section className="bg-white dark:bg-white ">
        <div className="py-2 px-4 mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-gray-50 dark:bg-white rounded-lg p-8 md:p-12 shadow-2xl border border-gray relative hover:scale-95 transition-transform duration-700"
              // onMouseMove={(e) => handleMouseMove(e, "Tooltip content")}
              // onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-green-950 dark:text-green-400 mb-2"
              >
                {/* <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 me-1.5"
                >
                  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h11a2.5 2.5 0 0 1 0 5h-11A2.5 2.5 0 0 1 2 4.5ZM2.75 9.083a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2.75 12.663a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2.75 16.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H2.75Z" />
                </svg>
                Transactions
              </a>
              <h2 className="text-gray-900 dark:text-black text-3xl font-extrabold mb-2">
                Business and Contracts
              </h2>
              {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p> */}

              <ul className="font-serif list-disc text-lg font-normal text-gray-500 dark:text-gray-500 mb-4 pl-10 mt-6">
                <li>Leasehold Land</li>
                <li>Slae and purchase Contracts</li>
                <li>Option Contracts</li>
                <li>Ground Lease Agreements</li>
                <li>Development Agreement</li>
              </ul>

              <a
                href="#"
                className="text-green-600 dark:text-green-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <div
                id="tooltip"
                className="bg-black text-white text-sm p-1 absolute rounded-md pointer-events-none"
                style={{ display: "none" }}
              >
                Tooltip content
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-white rounded-lg p-8 md:p-12 shadow-2xl border border-gray hover:scale-95 transition-transform duration-700">
              <a
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-green-950 dark:text-yellow-400 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 me-1.5"
                >
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Property
              </a>
              <h2 className="text-gray-900 dark:text-black text-3xl font-extrabold mb-2">
                Real Estate
              </h2>
              {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p> */}

              <ul className="font-serif list-disc text-lg font-normal text-gray-500 dark:text-gray-500 mb-4 pl-10 mt-6">
                <li>Industrial Lands</li>
                <li>Office Space</li>
                <li>Hospitality and Tourism</li>
                <li>Multifamily Residential</li>
                <li>Commercial Form and Agricultural Land</li>
              </ul>
              <a
                href="#"
                className="text-green-600 dark:text-green-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-white rounded-lg p-8 md:p-12 shadow-2xl border border-gray hover:scale-95 transition-transform duration-700">
              <a
                href="#"
                className="bg-purple-100 text-yellow-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-green-950 dark:text-blue-400 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 me-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
                Legacy
              </a>
              <h2 className="text-gray-900 dark:text-black text-3xl font-extrabold mb-2">
                Family and Personal
              </h2>
              {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p> */}

              <ul className="font-serif list-disc text-lg font-normal text-gray-500 dark:text-gray-500 mb-4 pl-10 mt-6">
                <li>For gift dead</li>
                <li>Ancestral Land</li>
                <li>Inherited Land </li>
                <li>Family Estate</li>
                <li>Trust Property</li>
                <li>Jointly Owned Land</li>
                <li>Heritage Land</li>
              </ul>
              <a
                href="#"
                className="text-green-600 dark:text-green-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <section className="bg-gray-100 dark:bg-green-950">
          <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Have a Legal Question? Get Answers from a Legal Professional
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
              Rocket Lawyer attorneys are available to answer your legal
              questions 24/7. Ask a legal question today and get answers from a
              professional attorney.
            </p>
            <button
              href="#"
              type="button"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900
              transition duration-700 ease-in-out"
            >
              Ask a legal question
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>

      <div className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
        <h2 className="font-extrabold tracking-tight leading-none text-black md:text-xl lg:text-4xl">
          <u className="text-black border-b-2 border-green-600">
            Why Rocket Lawyer?
          </u>
        </h2>
      </div>

      <div className="px-4 mx-auto max-w-screen-xl text-center">
        <h3 className="tracking-tight leading-none text-black md:text-xl lg:text-3xl">
          <i>
            Easily create and access a wide range of legal documents at your
            fingertips.
          </i>
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-500 mt-6">
          Rocket Lawyer is a preferred choice for individuals and businesses
          seeking convenient and efficient legal solutions. With Rocket Lawyer,
          you gain access to a wide range of legal documents and services that
          can be customized to your specific needs. Whether you require a simple
          agreement or a more complex legal document, Rocket Lawyer simplifies
          the process. With Rocket Lawyer, legal assistance is just a few clicks
        </p>
      </div>

      <div className="py-2 px-4 mx-auto max-w-screen-xl">
        <div className="grid md:grid-cols-3 gap-8 font-serif">
          <div className="max-w-sm p-6 bg-white border rounded-lg shadow-xl border-gray-200 relative dark:bg-white dark:border-gray mt-14 text-center hover:scale-110 transition-transform duration-500">
            <svg
              className="w-20 h-20 text-gray-600 dark:text-black mb-3 items-center mx-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clipRule="evenodd"
                />
                <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                <path
                  fillRule="evenodd"
                  d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </svg>
            <a href="#">
              <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
                Easily Customizable
              </h5>
            </a>
            <p className="mb-3 text-justify font-normal text-gray-600 dark:text-gray-500">
              Rocket Lawyer offers a user-friendly platform that allows for easy
              customization, empowering users to tailor legal documents and
              services to their specific needs with minimal effort.
            </p>
            <a
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border rounded-lg shadow-xl border-gray-200 relative dark:bg-white dark:border-gray mt-14 text-center hover:scale-110 transition-transform duration-500">
            <svg
              className="w-20 h-20 text-gray-600 dark:text-black mb-3 items-center mx-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
                  clipRule="evenodd"
                />
              </svg>
            </svg>
            <a href="#">
              <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
                Legal and Reliable
              </h5>
            </a>
            <p className="mb-3 text-justify font-normal text-gray-600 dark:text-gray-500">
              Our documents are veffed by Lawyers and Legal staff. You can be
              sure that you are getting a quality document that will hold up in
              court ensuring the highest quality and legal validity. So you can
              use them with confidence.
            </p>
            <a
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border rounded-lg shadow-xl border-gray-200 relative dark:bg-white dark:border-gray mt-14 text-center hover:scale-110 transition-transform duration-500">
            <svg
              className="w-20 h-20 text-gray-600 dark:text-black mb-3 items-center mx-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </svg>
            <a href="#">
              <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
                Add Protection with Document Defense
              </h5>
            </a>
            <p className="mb-3 text-justify font-normal text-gray-600 dark:text-gray-500">
              With Document Defense, Rocket Lawyer offers protection for your
              legal documents. If the validity of your document is challenged,
              Rocket Lawyer will provide attorney assistance.
            </p>
            <a
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LegalServices;
