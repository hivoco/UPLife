// "use client";

// import { useState } from "react";

// const Faqs = () => {
//   const faqs = [
//     {
//       id: 1,
//       question:
//         "What makes India Gate Uplife oils different from other cooking oils?",
//       answer:
//         "India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes.",
//     },
//     {
//       id: 2,
//       question: "How does Gut Pro oil benefit digestive health?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lectus nec erat placerat imperdiet. Sed vel est sit amet arcu tempor hendrerit. Fusce sit amet sapien nec libero cursus imperdiet. Vivamus facilisis ligula in quam finibus, a semper nulla efficitur.",
//     },
//     {
//       id: 3,
//       question: "Is India Gate Uplife Lite suitable for weight management?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, mi nec faucibus tincidunt, est velit mattis libero, et lacinia nibh lorem at justo. Cras ac tortor id nulla laoreet malesuada. Sed euismod magna ut nisi fermentum, non placerat sapien varius.",
//     },
//     {
//       id: 4,
//       question: "What cooking methods work best with Uplife oils?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel velit vitae risus gravida rhoncus quis vel leo. Ut nec sapien in turpis porttitor vulputate. Integer sed magna at nulla scelerisque vehicula. Phasellus et neque non tortor luctus gravida vel a nisl.",
//     },
//   ];

//   const [selectedQuesId, setSelectedQuesId] = useState<number | null>(null);

//   return (
//     <div className="py-13 container mx-auto px-6  md:px-16 space-y-11">
//       <div className="capitalize flex flex-col md:flex-row md:items-center justify-between">
//         <h2 className="text-2xl md:text-[42px]/16 font-normal">
//           All Your Uplife Questions - Answered
//         </h2>

//         <div className="relative  w-full md:w-72 mt-4 md:mt-0">
//           <input
//             type="text"
//             placeholder="Search your keyword here"
//             className="w-full p-3 md:p-4  pl-10 md:pl-11 text-base/5 placeholder:text-gray-400  border border-black rounded-full outline-none capitalize"
//           />
//           <svg
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" strokeWidth="2" />
//             <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
//           </svg>
//         </div>
//       </div>

//       <div className="divide-y-3 divide-[#CDD6DA]/25">
//         {faqs.map((faq) => (
//           <div
//             key={faq.id}
//             style={{
//               background: selectedQuesId === faq.id ? "#D9EBE2" : "#fff",
//             }}
//             className="rounded-t-3xl p-2 md:p-6 flex gap-4 md:gap-11 transition-all duration-1000 ease-in-out"
//           >
//             <span className="font-bold text-2xl  md:text-[40px]/12">0{faq.id}</span>

//             <div className="w-full space-y-2.5">
//               <div className="w-full flex items-start justify-between">
//                 <h2 className="text-ld md:text-2xl  ">{faq.question}</h2>
//                 {selectedQuesId === faq.id ? (

//                   <svg onClick={() => setSelectedQuesId(null)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide cursor-pointer md:size-11 size-20 w-20 h-20 lucide-x-icon lucide-x rounded-full p-2 bg-[#000000] text-[#ffffff]"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
//                 ) : (
//                   <svg onClick={() => setSelectedQuesId(faq.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide cursor-pointer md:size-11 size-20  lucide-plus-icon lucide-plus bg-[#F3F5F6] p-2 rounded-full"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
//                 )}
//               </div>

//               {/* {selectedQuesId === faq.id && (
//                 <p className="text-base text-gray-800/85 ">{faq.answer}</p>
//               )} */}

//               <p
//                 className={`text-sm md:text-base text-gray-800/85 overflow-hidden transition-all duration-1000 ease-in-out ${selectedQuesId === faq.id
//                     ? "max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                   }`}
//               >
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faqs;

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
          Frequently Asked Questions{" "}
        </h2>

        <div className="relative  w-full md:w-72 mt-4 md:mt-0">
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
            className="rounded-t-3xl p-2 md:p-6 flex gap-4 md:gap-11 transition-all duration-1000 ease-in-out"
          >
            <span className="font-bold text-2xl  md:text-[40px]/12">
              0{faq.id}
            </span>

            <div className="w-full space-y-2.5">
              <div className="w-full flex items-start justify-between">
                <h2 className="text-ld md:text-2xl  ">{faq.question}</h2>
                {selectedQuesId === faq.id ? (
                  <svg
                    onClick={() => setSelectedQuesId(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide cursor-pointer w-8 h-8 md:w-11 md:h-11 rounded-full p-2 bg-[#000000] text-[#ffffff] flex-shrink-0"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setSelectedQuesId(faq.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide cursor-pointer w-8 h-8 md:w-11 md:h-11 bg-[#F3F5F6] p-2 rounded-full flex-shrink-0"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                )}
              </div>

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
