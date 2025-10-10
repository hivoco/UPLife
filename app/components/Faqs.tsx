"use client";

import { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question:
        "What makes India Gate Uplife oils different from other cooking oils?",
      answer:
        "India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes.",
    },
    {
      id: 2,
      question: "How does Gut Pro oil benefit digestive health?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lectus nec erat placerat imperdiet. Sed vel est sit amet arcu tempor hendrerit. Fusce sit amet sapien nec libero cursus imperdiet. Vivamus facilisis ligula in quam finibus, a semper nulla efficitur.",
    },
    {
      id: 3,
      question: "Is India Gate Uplife Lite suitable for weight management?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, mi nec faucibus tincidunt, est velit mattis libero, et lacinia nibh lorem at justo. Cras ac tortor id nulla laoreet malesuada. Sed euismod magna ut nisi fermentum, non placerat sapien varius.",
    },
    {
      id: 4,
      question: "What cooking methods work best with Uplife oils?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel velit vitae risus gravida rhoncus quis vel leo. Ut nec sapien in turpis porttitor vulputate. Integer sed magna at nulla scelerisque vehicula. Phasellus et neque non tortor luctus gravida vel a nisl.",
    },
  ];

  const [selectedQuesId, setSelectedQuesId] = useState<number | null>(null);

  return (
    <div className="py-13 container mx-auto px-6  md:px-16 space-y-11">
      <div className="capitalize flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="text-2xl md:text-[42px]/16 font-normal">
          All Your Uplife Questions - Answered
        </h2>

        <div className="relative  w-full md:w-72 ">
          <input
            type="text"
            placeholder="Search your keyword here"
            className="w-full p-3 md:p-4  pl-10 md:pl-11 text-base/5 placeholder:text-gray-400  border border-black rounded-full outline-none capitalize"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="divide-y-3 divide-[#CDD6DA]/25">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            style={{
              background: selectedQuesId === faq.id ? "#D9EBE2" : "#fff",
            }}
            className="rounded-t-3xl p-6 flex gap-11 transition-all duration-1000 ease-in-out"
          >
            <span className="font-bold text-2xl  md:text-[40px]/12">0{faq.id}</span>

            <div className="w-full space-y-2.5">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-ld md:text-2xl">{faq.question}</h2>
                {selectedQuesId === faq.id ? (
                  <svg
                  className="cursor-pointer"
                    onClick={() => setSelectedQuesId(null)}
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.945312"
                      y="0.945312"
                      width="32.8591"
                      height="32.8591"
                      rx="16.4295"
                      fill="#20695F"
                    />
                    <path
                      d="M22.8783 13.3092C22.9753 13.2156 23.0526 13.1037 23.1059 12.9799C23.1591 12.8562 23.1872 12.723 23.1884 12.5883C23.1896 12.4536 23.164 12.3199 23.113 12.1952C23.0621 12.0705 22.9868 11.9572 22.8916 11.8618C22.7963 11.7665 22.6831 11.6911 22.5584 11.6401C22.4337 11.589 22.3001 11.5632 22.1654 11.5643C22.0307 11.5655 21.8975 11.5934 21.7737 11.6465C21.6499 11.6996 21.5379 11.7769 21.4442 11.8737L17.3773 15.9393L13.3117 11.8737C13.2189 11.774 13.1068 11.6941 12.9824 11.6386C12.8579 11.5832 12.7235 11.5533 12.5873 11.5509C12.451 11.5485 12.3157 11.5736 12.1894 11.6246C12.063 11.6757 11.9482 11.7516 11.8519 11.848C11.7555 11.9443 11.6796 12.0591 11.6285 12.1855C11.5775 12.3118 11.5524 12.4471 11.5548 12.5834C11.5572 12.7196 11.5871 12.854 11.6425 12.9785C11.698 13.1029 11.778 13.2149 11.8776 13.3078L15.9405 17.3748L11.8749 21.4403C11.6957 21.6327 11.5981 21.8871 11.6028 22.1499C11.6074 22.4128 11.7139 22.6636 11.8998 22.8495C12.0857 23.0355 12.3365 23.1419 12.5994 23.1466C12.8623 23.1512 13.1167 23.0536 13.309 22.8744L17.3773 18.8089L21.4429 22.8758C21.6352 23.055 21.8896 23.1526 22.1525 23.1479C22.4154 23.1433 22.6662 23.0368 22.8521 22.8509C23.038 22.665 23.1445 22.4142 23.1491 22.1513C23.1538 21.8884 23.0562 21.634 22.877 21.4417L18.8141 17.3748L22.8783 13.3092Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                                    className="cursor-pointer"

                    onClick={() => setSelectedQuesId(faq.id)}
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.554688"
                      y="0.602783"
                      width="41.2461"
                      height="41.2461"
                      rx="20.623"
                      fill="#F3F5F6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0384 15.2107H20.3198V20.3665H15.1641V22.085H20.3198V27.2408H22.0384V22.085H27.1942V20.3665H22.0384V15.2107Z"
                      fill="black"
                    />
                  </svg>
                )}
              </div>

              {/* {selectedQuesId === faq.id && (
                <p className="text-base text-gray-800/85 ">{faq.answer}</p>
              )} */}

              <p
                className={`text-sm md:text-base text-gray-800/85 overflow-hidden transition-all duration-1000 ease-in-out ${
                  selectedQuesId === faq.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
