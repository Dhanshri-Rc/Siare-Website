import { Send, Search } from "lucide-react";
import { Link } from "react-router-dom";
import homeBg from "../assets/home.png";

import image from "../assets/image.png";

import { Shield, Globe2, Users, Leaf } from "lucide-react";
import quoteBg from "../assets/temp.jpeg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";



export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
<section className="relative  overflow-hidden bg-white max-[370px]:h-[380px] h-[320px] xs:h-[300px] sm:h-[360px] md:h-[450px] lg:h-[480px] xl:h-[515px]">

  {/* Background Image Full Width */}
  <img
    src={homeBg}
    alt="SIARE Hero Background"
    className="
      absolute 
     h-full w-full
      z-0
     object-cover
     object-center
      
    "
  />

  {/* Main Content */}
  <div
    className="
      relative z-10
      w-full h-full
      xl:px-8 lg:px-6 md:px-4 sm:px-3 px-3 
      xl:pt-5 lg:pt-4 md:pt-3 sm:pt-2 pt-1
      xl:mx-8 lg:mx-6 md:mx-4 sm:mx-3 mx-3
      flex flex-col
      justify-between
    "
  >
    {/* Top Content */}
    <div className="relative w-full">

      {/* Logo */}
      <div className="w-[160px] sm:w-[200px] md:w-[210px] lg:w-[260px] xl:w-[290px] ">
        <img
          src={image}
          alt="SIARE Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Left Text */}
      <div className="max-w-[620px] ml-1 sm:ml-3 lg:ml-6 mt-2 ">

        <h1
          className="
            font-[650]
            leading-[1]
            tracking-[-0.03em]
            text-[#071d4f]
            text-[1.4rem]
            sm:text-[1.6rem]
            md:text-[2rem]
            lg:text-[2.2rem]
            xl:text-[2.3rem]
          "
        >
          GLOBAL RESEARCH.
          <br />

          <span className="text-[#0057a8]">
            MEANINGFUL CONNECTIONS.
          </span>

          <br />
          REAL IMPACT.
        </h1>

        {/* Color Line */}
        <div className="flex mt-3 xl:mb-4 lg:mb-3 md:mb-2 sm:mb-1 mb-1 items-center ">
          <span className="h-[3px] w-[22px] bg-[#e52320]" />
          <span className="h-[3px] w-[22px] bg-[#22a83a]" />
          <span className="h-[3px] w-[22px] bg-[#f8b51b]" />
          <span className="h-[3px] w-[22px] bg-[#f05a24]" />
        </div>

        {/* Description */}
        <p
          className="
            text-[#071d4f]
            text-[0.75rem]
            sm:text-[0.95rem]
            md:text-[0.90rem]
            lg:text-[1rem]
            leading-[1.45]
            font-medium
            max-w-[500px] 
          "
        >
          SIARE is a trusted platform for publishing high-quality
          conference proceedings across diverse disciplines and emerging
          technologies.
        </p>

        {/* Buttons */}
  <div
  className="
    mt-6
    flex flex-wrap items-center
    gap-2 sm:gap-3

    md:flex-col
    md:items-start

    lg:flex-row
    lg:items-center
  "
>
  {/* Submit */}
 {/* Submit */}
<button
  className="
    h-[36px]
    xl:h-[46px]
    lg:h-[44px]
    md:h-[42px]
    sm:h-[40px]

    xl:min-w-[185px]
    lg:min-w-[175px]
    md:min-w-[170px]
    sm:min-w-[155px]
    min-w-[120px]

    xl:px-5
    lg:px-4
    md:px-5
    sm:px-2
    px-2
    max-[370px]:px-4

    rounded-full

    bg-[linear-gradient(180deg,#1251a0_0%,#0f468d_45%,#0c3067_100%)]

    text-white
    text-[0.75rem]
    sm:text-[0.83rem]
    uppercase

    flex items-center justify-center gap-2

    border border-[#0c3067]

    shadow-[0_8px_18px_rgba(12,48,103,0.32)]

    transition-all duration-300 ease-out

    hover:bg-[linear-gradient(180deg,#166fcf_0%,#1251a0_50%,#0c3067_100%)]
    hover:shadow-[0_12px_26px_rgba(22,111,207,0.45)]
    hover:-translate-y-[1px]

    active:translate-y-0
    active:scale-[0.98]
    active:bg-[linear-gradient(180deg,#0c3067_0%,#09244d_100%)]
  "
>
  <span
    className="
      w-7 h-7
      rounded-full
      bg-white
      text-[#0c3067]
      flex items-center justify-center
      shadow-inner
    "
  >
    <Send size={14} strokeWidth={2.4} />
  </span>

  SUBMIT PROPOSAL
</button>

  {/* Explore */}
  <button
    className="
      h-[36px] xl:h-[46px] lg:h-[44px] md:h-[42px] sm:h-[40px]
      xl:min-w-[185px] lg:min-w-[175px] md:min-w-[165px] sm:min-w-[155px] min-w-[120px]
      xl:px-5 lg:px-4 md:px-3 sm:px-2 px-2

      rounded-full

      bg-white/85
      text-[#0c3067]

      text-[0.75rem]
      sm:text-[0.83rem]
      uppercase

      flex items-center justify-center gap-2

      border-2 border-[#0c3067]

      backdrop-blur-[2px]

      shadow-[0_6px_14px_rgba(12,48,103,0.12)]

      transition-all duration-300 ease-out

      hover:bg-[#0c3067]
      hover:text-white
      hover:shadow-[0_10px_22px_rgba(12,48,103,0.30)]
      hover:-translate-y-[1px]

      active:translate-y-0
      active:scale-[0.98]
      active:bg-[#09244d]
      active:border-[#09244d]
    "
  >
    <Search size={18} />

    EXPLORE PROCEEDINGS
  </button>
</div>
      </div>

      {/* Right Feature Icons */}
      <div
        className="
           md:flex hidden
          absolute
          right-[2.5%]
          bottom-1
          items-end
        "
      >
        {[
        
          { icon: icon2, label: "QUALITY\nPROCEEDINGS" },
          { icon: icon3, label: "WIDER\nVISIBILITY" },
          { icon: icon4, label: "INDEXING &\nGLOBAL REACH" },
          { icon: icon5, label: "SUSTAINABLE" },
        ].map((f, i, arr) => (
          <div
            key={i}
            className={`
              flex flex-col items-center justify-start
              px-2 
              min-w-[85px] lg:min-w-[95px] xl:min-w-[108px]
              ${
                i !== arr.length - 1
                  ? "border-r border-[#9aa9bd]"
                  : ""
              }
            `}
          >
            <img
              src={f.icon}
              alt={f.label}
              className="
                w-[28px] h-[28px]
                lg:w-[38px] lg:h-[38px]
                xl:w-[44px] xl:h-[44px]
                object-contain
              "
            />

            <span
              className="
                text-[#071d4f]
                text-[0.54rem]
                lg:text-[0.64rem]
                xl:text-[0.7rem]
                font-medium
                uppercase
                text-center
                leading-[1.18]
                whitespace-pre-line
                mt-1
              "
            >
              {f.label}
            </span>
          </div>
        ))}
      </div>
      {/* Small Blue Curved Section */}
{/* <div className="absolute left-0 right-0  mt-4 z-20 h-[55px] overflow-hidden">
  <div
    className="
      absolute
      left-[-5%]
      right-[-5%]
      bottom-[-45px]
      h-[85px]
      bg-[#002b63]
      rounded-t-[100%]
    "
  />
</div> */}
    </div>
  </div>

  

</section>

{/* About Section */}
{/* ================= ABOUT SECTION ================= */}
<section className="w-full bg-[#f3f4f6] py-8 sm:py-10 lg:py-12 overflow-hidden">
  <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* Left Image */}
      <div className="relative">

        <div className="rounded-[22px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
            alt="About SIARE"
            className="
              w-full
              h-[250px]
              sm:h-[300px]
              md:h-[340px]
              lg:h-[380px]
              object-cover
            "
          />
        </div>

        {/* Mission Card */}
        {/* <div
          className="
            absolute
            left-4
            bottom-[-22px]

            bg-[linear-gradient(180deg,#1251a0_0%,#0f468d_45%,#0c3067_100%)]

            text-white

            rounded-[18px]

            px-5 py-5

            w-[220px]
            sm:w-[250px]

            border border-[#0c3067]

            shadow-[0_14px_32px_rgba(12,48,103,0.38)]
          "
        >
          <h3 className="text-[1rem] sm:text-[1.08rem] font-bold mb-2">
            Our Mission
          </h3>

          <p className="text-[0.82rem] sm:text-[0.88rem] leading-[1.55] font-medium text-white/95">
            To advance global research by empowering scholars and
            institutions through trusted, innovative publishing solutions.
          </p>
        </div> */}
      </div>

      {/* Right Content */}
      <div className="pt-3 lg:pt-0">

        <span
          className="
            text-[#0d57b7]
            uppercase
            tracking-[0.15em]
            font-bold
            text-[0.78rem]
            sm:text-[0.82rem]
          "
        >
          About SIARE
        </span>

        <h2
          className="
            mt-3
            font-[600]
            leading-[1.14]
            tracking-[-0.03em]

            text-[1.5rem]
            sm:text-[1.5rem]
            md:text-[2rem]
            lg:text-[2rem]

            text-[#071d4f]
          "
        >
          Advancing Knowledge.
          <br />

          <span className="text-[#0d57b7]">
            Empowering Researchers.
          </span>
        </h2>

        <div className="flex mt-3">
          <span className="h-[3px] w-[22px] bg-[#e52320]" />
          <span className="h-[3px] w-[22px] bg-[#22a83a]" />
          <span className="h-[3px] w-[22px] bg-[#f8b51b]" />
          <span className="h-[3px] w-[22px] bg-[#f05a24]" />
        </div>

        <p
          className="
            mt-3
            text-[#334968]
            text-[14px]
            leading-[1.3]
            max-w-[550px]
          "
        >
          The Society of Integrated Academic Research and Education (SIARE)
              is an international scholarly organization dedicated to advancing
              cross-disciplinary research, promoting academic excellence, and
              supporting global collaboration.
        </p>

        {/* Features */}
        <div className="mt-4 space-y-2">

          {[
            "Rigorous peer-review and editorial standards",
            "Global visibility and indexing",
            "Support for interdisciplinary research",
            "Ethical and transparent publishing",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">

              <span className="text-[#0d57b7] text-[1rem] font-bold">
                ✓
              </span>

              <p
                className="
                  text-[#243b5f]
                  text-[0.92rem]
                  sm:text-[0.98rem]
                  font-semibold
                  leading-[1.5]
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/about"
        >
        <button
          className="
            mt-5

            h-[46px]

            px-7

            rounded-[24px]

            bg-[linear-gradient(180deg,#1251a0_0%,#0f468d_45%,#0c3067_100%)]

            border border-[#0c3067]

            text-white

            text-[0.82rem]
            sm:text-[0.88rem]

            uppercase
            font-semibold

            flex items-center justify-center gap-2

            shadow-[0_10px_22px_rgba(12,48,103,0.38)]

            transition-all duration-300
            hover:-translate-y-1
          "
        >
          Learn More About Us →
        </button>
</Link>
      </div>
    </div>
  </div>
</section>



{/* ================= WHY CHOOSE SECTION ================= */}
<section className="w-full bg-[#f3f4f6] py-8 sm:py-10 lg:py-12  overflow-hidden">

  <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

    {/* Heading */}
    <div className="text-center mb-10">

      <p className="text-[#0057a8] text-[0.9rem] font-bold tracking-[0.23em] uppercase mb-2">
        Why Choose SIARE?
      </p>

      <div className="flex mt-3 mb-4 items-center justify-center">
        <span className="h-[3px] w-[22px] bg-[#e52320]" />
        <span className="h-[3px] w-[22px] bg-[#22a83a]" />
        <span className="h-[3px] w-[22px] bg-[#f8b51b]" />
        <span className="h-[3px] w-[22px] bg-[#f05a24]" />
      </div>

      <h2 className="text-[#071d4f] text-[1.6rem] sm:text-[2rem] lg:text-[2rem] font-semibold leading-[1.2]">
        Built for Researchers, Driven by Impact
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">

      {/* Card 1 */}
      <div className="bg-white border border-[#c8d4e6] rounded-[18px] h-[220px] flex flex-col items-center justify-center text-center px-8">
        <div className="w-[55px] h-[55px] rounded-[12px] bg-[#1558b7] flex items-center justify-center mb-6">
          <Shield className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-[#071d4f] text-[1rem] font-bold mb-4">
          Trusted 
        </h3>

        <p className="text-[#334968] text-[0.95rem] leading-[1.55]">
          Maintaining the highest standards of academic.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-[#c8d4e6] rounded-[18px] h-[220px] flex flex-col items-center justify-center text-center px-8">
        <div className="w-[55px] h-[55px] rounded-[12px] bg-[#3f83ff] flex items-center justify-center mb-6">
          <Globe2 className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-[#071d4f] text-[1rem] font-bold mb-4">
          Global Reach
        </h3>

        <p className="text-[#334968] text-[0.95rem] leading-[1.55]">
          Connecting research communities across world.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-[#c8d4e6] rounded-[18px] h-[220px] flex flex-col items-center justify-center text-center px-8">
        <div className="w-[55px] h-[55px] rounded-[12px] bg-[#253c98] flex items-center justify-center mb-6">
          <Users className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-[#071d4f] text-[1rem] font-bold mb-4">
          Research Impact
        </h3>

        <p className="text-[#334968] text-[0.95rem] leading-[1.55]">
          Maximizing visibility and citations for your research.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-[#c8d4e6] rounded-[18px] h-[220px] flex flex-col items-center justify-center text-center px-8">
        <div className="w-[55px] h-[55px] rounded-[12px] bg-[#43b34f] flex items-center justify-center mb-6">
          <Leaf className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-[#071d4f] text-[1rem] font-bold mb-4">
          Sustainable 
        </h3>

        <p className="text-[#334968] text-[0.95rem] leading-[1.55]">
          Committed to responsible and sustainable growth.
        </p>
      </div>

    </div>
  </div>
</section>




{/* Quote Banner */}


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
            md:text-[17px]

            leading-[1.75]

            font-medium

            max-w-[760px]
          "
        >
         Publish. Collaborate. Create Impact.
          <br />

     

          <span className="text-[#e2ac39] font-semibold text-[12px] sm:text-[13px] md:text-[14px]">
            Join researchers and institutions worldwide in advancing
          knowledge.
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
