import { Send, Search } from "lucide-react";
import procImg from "../assets/proc.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import protect from "../assets/protect.png";
import document from "../assets/document.png";
import people from "../assets/people.png";
import security from "../assets/security.png";
import bar from "../assets/bar.png";
// import quoteImg from "../assets/q.png";
import quoteBg from "../assets/temp.jpg";

const categories = [
  {
    num: "01",
    icon: icon1,
    title: "Engineering & Technology",
    desc: "Covers all branches of engineering, innovation, and applied technologies driving industry and society forward.",
    color: "text-blue-600",
    border: "border-[#1e73e8]",
    bg: "bg-[#1e73e8]",
  },
  {
    num: "02",
    icon: icon2,
    title: "Agriculture & Biological Sciences",
    desc: "Focuses on agricultural advancements, biological research, food security, and sustainable development.",
    color: "text-siare-green",
    border: "border-[#43aa37]",
    bg: "bg-[#43aa37]",
  },
  {
    num: "03",
    icon: icon3,
    title: "Computer Science & Information Technology",
    desc: "Includes cutting-edge research in computing, AI, data science, and information systems.",
    color: "text-purple-600",
    border: "border-[#9b55ea]",
    bg: "bg-[#9b55ea]",
  },
  {
    num: "04",
    icon: icon4,
    title: "Management & Economics",
    desc: "Encompasses management studies, economics, finance, entrepreneurship, and organizational research.",
    color: "text-orange-500",
    border: "border-[#f6a313]",
    bg: "bg-[#f6a313]",
  },
  {
    num: "05",
    icon: icon5,
    title: "Health & Medical Sciences",
    desc: "Advances research in healthcare, medicine, public health, and biomedical sciences.",
    color: "text-red-600",
    border: "border-[#ff352e]",
    bg: "bg-[#ff352e]",
  },
  {
    num: "06",
    icon: icon1,
    title: "Environment & Sustainability",
    desc: "Promotes research on environment, climate change, renewable energy, and sustainable solutions.",
    color: "text-teal-600",
    border: "border-[#14b8c7]",
    bg: "bg-[#14b8c7]",
  },
];

// const sideFeatures = [
//   "Scopus Indexed Proceedings",
//   "DOI & ISSN Enabled",
//   "Rigorous Peer Review",
//   "Global Visibility & Impact",
//   "SDG Aligned Research",
// ];

// const whyPublish = [
//   "High-quality peer-reviewed publications",
//   "Global indexing and discoverability",
//   "Permanent DOI & ISSN assignment",
//   "Wide dissemination and academic impact",
//   "Support for sustainable development goals",
// ];

const trustBadges = [
  { icon: protect, label: "Scopus Indexed Proceedings" },
  { icon: document, label: "DOI & ISSN Enabled" },
  { icon: people, label: "Rigorous Peer Review" },
  { icon: icon4, label: "Global Visibility & Impact" },
  { icon: bar, label: "SDG Aligned Research" },
  { icon: security, label: "Ethical & Transparent" },
];

export default function Proceedings() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section
        className="relative min-h-[340px] md:min-h-[360px] lg:h-[400px] flex items-center overflow-hidden bg-[#001247]"
        style={{
          backgroundImage: `url(${procImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#001247]/30"></div>

        <div
          className="relative z-10
   w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
    py-8
    flex flex-col lg:flex-row
    items-center justify-between
    gap-10"
        >
          <div className="max-w-[430px]">
            <h1 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[40px] font-bold text-white uppercase leading-[0.95]">
              SIARE
            </h1>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[40px] font-bold text-[#f6aa13] uppercase leading-[1]">
              PROCEEDINGS
            </h2>

            <div className="flex mt-3 mb-4 overflow-hidden rounded-full w-fit">
              <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#43aa37]"></span>
              <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#f6a313]"></span>
              <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#ff352e]"></span>
              <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#0875c9]"></span>
            </div>

            <p className=" text-white text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.55] font-normal mb-6">
              Explore high-quality, peer-reviewed conference proceedings across
              diverse disciplines and emerging technologies. Published for
              global visibility, impact, and knowledge dissemination.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Submit Button */}
              <button
                className="group
    bg-[#c8932a]
    text-white font-semibold
    px-7 py-3 rounded-[50px]
    flex items-center gap-2 text-[12px] uppercase
    transition-all duration-300
    hover:bg-[#d9a53b]
    hover:shadow-[0_8px_22px_rgba(200,147,42,0.35)]
    hover:-translate-y-[2px]
    active:scale-[0.98]"
              >
                <Send
                  size={14}
                  className="transition-all duration-300 group-hover:-rotate-12 group-hover:translate-x-1"
                />

                <span>SUBMIT PROPOSAL</span>
              </button>

              {/* Browse Button */}
              <button
                className="group
    border border-[#c8932a]
    bg-[#c8932a]/10
    text-[#f7d38a]
    font-semibold
    px-7 py-3 rounded-[50px]
    flex items-center gap-2 text-[12px] uppercase
    transition-all duration-300
    hover:bg-[#c8932a]
    hover:text-white
    hover:shadow-[0_8px_22px_rgba(200,147,42,0.28)]
    hover:-translate-y-[2px]
    active:scale-[0.98]"
              >
                <Search
                  size={14}
                  className="transition-all duration-300 group-hover:scale-110"
                />

                <span>BROWSE PROCEEDINGS</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proceedings Collection */}
      <section className="bg-white py-[28px] ">
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-[22px]">
            <div className="flex flex-col items-center text-center mb-[22px]">
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#001b57] uppercase">
                OUR PROCEEDINGS COLLECTION
              </h2>

              <div className="flex mt-3 mb-2 overflow-hidden rounded-full w-fit">
                <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#43aa37]"></span>

                <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#f6a313]"></span>

                <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#ff352e]"></span>

                <span className="h-[4px] w-[38px] sm:w-[50px] bg-[#0875c9]"></span>
              </div>
            </div>

            <p className="max-w-[560px] mx-auto text-[14px] md:text-[14px] leading-[1.55] font-medium text-[#001b57]">
              SIARE publishes high-quality, peer-reviewed conference proceedings
              in six major disciplines. Each series is curated to advance
              research, foster collaboration, and drive real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-[8px] p-[22px] min-h-[205px]
          shadow-[0_4px_18px_rgba(0,0,0,0.12)]
          border border-[#e3e8f0]
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
              >
                <div className="flex justify-between items-start mb-[16px]">
                  <div
                    className={`w-[58px] h-[58px] rounded-full ${cat.bg} flex items-center justify-center`}
                  >
                    <img
                      src={cat.icon}
                      alt=""
                      className="w-[64px] h-[64px] object-contain brightness-0 invert"
                    />
                  </div>

                  <span className="text-[#cfd3da] text-[23px] font-bold leading-none">
                    {cat.num}
                  </span>
                </div>

                <h4
                  className={`text-[16px] font-bold leading-[1.15] mb-[12px] ${cat.color}`}
                >
                  {cat.title}
                </h4>

                <p className="text-[12px] leading-[1.55] font-medium text-[#001b57] mb-[18px]">
                  {cat.desc}
                </p>

                <span
                  className={`inline-flex items-center text-[11px] font-extrabold uppercase ${cat.color}
            transition-all duration-300 group-hover:translate-x-1`}
                >
                  VIEW PROCEEDINGS <span className="ml-2">➜</span>
                </span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-[28px] bg-[#f4f8fc] rounded-[5px] shadow-[0_4px_14px_rgba(0,0,0,0.08)] px-[16px] py-[18px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {trustBadges.map((b, i) => (
                <div
                  key={i}
                  className={`group flex flex-col items-center justify-center text-center px-[14px] min-h-[70px]
            ${i !== trustBadges.length - 1 ? "lg:border-r lg:border-[#cdd8e5]" : ""}`}
                >
                  <img
                    src={b.icon}
                    alt={b.label}
                    className="w-[30px] h-[30px] object-contain mb-[8px] transition-all duration-300 group-hover:scale-110"
                  />

                  <span className="text-[10px] leading-[1.2] font-bold text-[#001b57] transition-colors duration-300 group-hover:text-[#f6aa13]">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Banner */}
      </section>
     <section className="w-full py-6 sm:py-8 lg:py-10 overflow-hidden">

  {/* Main Container */}
  <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

    <div
      className="
        relative overflow-hidden

        rounded-[20px]

        px-5 sm:px-7 lg:px-10
        py-[18px] sm:py-[20px]

        flex flex-col
        md:flex-row

        items-start
        md:items-center

        gap-5 md:gap-8

        shadow-[0_18px_35px_rgba(0,0,0,0.08)]

        transition-all duration-500
        hover:shadow-[0_24px_45px_rgba(0,0,0,0.12)]
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,28,85,0.92), rgba(0,28,85,0.92)),
          url(${quoteBg})
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      {/* Left Content */}
      <div className="flex-1 relative z-10">

        <p
          className="
            text-white

            text-[13px]
            sm:text-[14px]
            md:text-[15px]

            leading-[1.75]

            font-medium

            max-w-[760px]
          "
        >
          At SIARE, we believe that meaningful research leads to
          real-world impact.
          <br />

          Together, we{" "}

          <span className="text-[#e2ac39] font-semibold">
            advance knowledge, inspire innovation, and build a
            better future.
          </span>
        </p>
      </div>

      {/* Right Button */}
      <button
        className="
          relative z-10

          h-[42px]
          sm:h-[46px]

          px-5 sm:px-7

          rounded-full

          bg-[linear-gradient(180deg,#f3c04d_0%,#e2ac39_52%,#b9851e_100%)]

          border border-[#c8932a]

          text-[#071d4f]

          text-[11px]
          sm:text-[13px]

          uppercase
          font-bold

          flex items-center justify-center gap-2

          shadow-[0_10px_22px_rgba(226,172,57,0.28)]

          transition-all duration-300

          hover:-translate-y-1
          hover:bg-none
          hover:bg-[#c8932a]
          hover:text-white
          hover:shadow-[0_14px_28px_rgba(226,172,57,0.38)]

          whitespace-nowrap

          w-full
          sm:w-auto

          md:ml-auto
        "
      >
        <Send
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

        Submit Proposal
      </button>

    </div>
  </div>
</section>
    </div>
  );
}
