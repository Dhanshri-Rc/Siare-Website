import { ArrowRight, Handshake } from "lucide-react";
import clientsImg from "../assets/client1.png";
// import icon3 from "../assets/icon3.png";
import quoteBg from "../assets/temp.jpeg";

const internationalCollabs = [
  {
    name: "Lincoln University",
    country: "United States",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0PtHEL8SlqJILoXuH3K8u5KaxfLLbS68uA&s",
  },
  {
    name: "Noida International University",
    country: "India",
    logo: "https://niu.edu.in/wp-content/uploads/2022/12/niulogo.jpg",
  },
  {
    name: "Shri Shankaracharya Institute of Professional Management & Technology",
    country: "India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa40u0EvR4QauJL4OzyRQfmEAhEFrxNgP0Jw&s",
  },
  {
    name: "Vishwakarma University",
    country: "India",
    logo: "https://www.vcacs.ac.in/assets/images/logo/VU01.webp",
  },
  {
    name: "University of Batangas",
    country: "Philippines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/UB-Master-Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "Universiti Sains Malaysia",
    country: "Malaysia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYK7pcQAFNCd1I32McFtIGaCISuvHKJXnjQ&s",
  },
  {
    name: "University of Surrey",
    country: "United Kingdom",
    logo: "https://images.seeklogo.com/logo-png/20/1/university-of-surrey-logo-png_seeklogo-207024.png",
  },
  {
    name: "Queensland University of Technology",
    country: "Australia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusXctK48J3NCOf_E5DyCX_pQrMAwRZGzrSQ&s",
  },
  {
    name: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    logo: "https://academy.itu.int/sites/default/files/media/image/LOGO%20UTM.PNG",
  },
  {
    name: "Hanyang University",
    country: "South Korea",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IuoLGI82JI7MQebXpjrc3tsTXlk2D1NvfQ&s",
  },
];

const indianCollabs = [
  {
    name: "Amity University",
    region: "Uttar Pradesh",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzUD4_Rm5czORDVe398oYCxdSRSK9MCzxEQ&s",
  },
  {
    name: "Chandigarh University",
    region: "Punjab",
    logo: "https://images.seeklogo.com/logo-png/43/1/chandigarh-university-cu-logo-png_seeklogo-432515.png",
  },
  {
    name: "Lovely Professional University",
    region: "Punjab",
    logo: "https://i.pinimg.com/736x/a0/75/0c/a0750c5df700b85f0d6498d84bbabc69.jpg",
  },
  {
    name: "Vellore Institute of Technology",
    region: "Tamil Nadu",
    logo: "https://vit.ac.in/vdat2024/VIT_COLOURED%20LOGO.png",
  },
  {
    name: "Manipal University Jaipur",
    region: "Rajasthan",
    logo: "https://d2lk14jtvqry1q.cloudfront.net/media/small_Manipal_University_Jaipur_b0a141f1c0_38b8c78a2d_77930b7e25.png",
  },
  {
    name: "Symbiosis International (Deemed University)",
    region: "Maharashtra",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKMC4xOUpECv6DKZoHu51h6RJiut7tx4mvQ&s",
  },
  {
    name: "SRM University",
    region: "Tamil Nadu",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/SRM-University-Logo-Vector.svg-.png",
  },
  {
    name: "Jain (Deemed-to-be University)",
    region: "Karnataka",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrouLruZWZiJrTLnrTufgOrwpGnJYXq3WBA&s",
  },
  {
    name: "KIIT University",
    region: "Odisha",
    logo: "https://img.favpng.com/21/9/19/kalinga-institute-of-industrial-technology-entrance-exam-deemed-university-kiit-group-of-institutions-png-favpng-ngiWKS2BTuENuewtnqNAYFD4y.jpg",
  },
  {
    name: "Graphic Era Deemed to be University",
    region: "Uttarakhand",
    logo: "https://content3.jdmagicbox.com/comp/varanasi/s9/0542px542.x542.160609070042.k9s9/catalogue/graphic-era-deemed-tobe-university-dehradun-durgakund-varanasi-education-counselling-services-dselwjjd3z.jpg",
  },
];

function UnivCard({ name, region, country, logo }) {
  return (
    <div className="bg-white border border-[#dfe6f2] rounded-[8px] p-3 flex flex-col items-center justify-center text-center cursor-pointer min-h-[145px] shadow-[0_3px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,27,87,0.12)]">
      <div className="w-[150px] h-[55px] flex items-center justify-center mb-3">
        <img
          src={logo}
          alt={name}
          className="xl:max-w-[150px] max-h-[65px] md:w-[120px] max-w-[100px] object-contain"
        />
      </div>

      <div className="font-medium text-[#001b57] text-[13px] leading-tight mb-1">
        {name}
      </div>

      <div className="text-[#001b57]/70 text-[12px] font-medium">
        {region || country}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section
        className="
    relative
    bg-navy
    overflow-hidden

    h-auto
    min-h-[360px]
    sm:min-h-[390px]
    md:min-h-[400px]
    lg:h-[400px]

    flex items-end
  "
        style={{
          backgroundImage: `url(${clientsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#00153d]/20" />

        <div
          className="
      relative z-10
    w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20

      py-20
      sm:py-12
      md:py-12
      lg:py-16
      xl:py-20
      md:pb-[6rem]
     
    "
        >
          {/* Title */}
          <h1
            className="
        text-[28px]
        sm:text-[34px]
        md:text-[38px]
        lg:text-[40px]
        xl:text-[42px]

        leading-[0.95]
        font-bold
        text-white
        tracking-tight

        animate-[fadeSlideUp_0.8s_ease-out]
      "
          >
            OUR <span className="text-[#f6aa13]">MEMBERS</span>
          </h1>
          <div className="flex mt-3 mb-5 overflow-hidden rounded-full w-fit">
            <span className="h-[3px] w-[24px] sm:w-[32px] bg-[#43aa37]"></span>
            <span className="h-[3px] w-[24px] sm:w-[32px] bg-[#f6a313]"></span>
            <span className="h-[3px] w-[24px] sm:w-[32px] bg-[#ff352e]"></span>
            <span className="h-[3px] w-[24px] sm:w-[32px] bg-[#0875c9]"></span>
          </div>
          {/* Description */}
          <p
            className="
        text-white
        text-[13px]
        sm:text-[14px]
        md:text-[15px]
        lg:text-[16px]

        leading-[1.55]
        font-normal

        mt-4
        max-w-[390px]

        animate-[fadeSlideUp_1s_ease-out]
      "
          >
            Building global partnerships for research,{" "}
            <br className="hidden sm:block" />
            innovation, and academic excellence.
          </p>

          {/* Stats Boxes */}
          <div
            className="
        flex
        flex-col
        min-[300px]:flex-row
        flex-wrap

        gap-3 sm:gap-4

        mt-6

        animate-[fadeSlideUp_1.2s_ease-out]
      "
          >
            {/* International Box */}
            <div
              className="
          group

          w-full
          min-[300px]:w-auto

          min-w-[150px]
          sm:min-w-[180px]

          h-[86px]
          sm:h-[96px]
          lg:h-[100px]

          bg-[#061b45]/78

          border border-white/40

          rounded-[8px]

          px-4

          flex items-center gap-3

          backdrop-blur-sm

          shadow-[0_8px_18px_rgba(0,0,0,0.18)]

          transition-all duration-300 ease-out

          hover:-translate-y-1
          hover:border-[#38d430]/80
          hover:shadow-[0_14px_28px_rgba(56,212,48,0.22)]
        "
            >
              <div
                className="
            w-[38px]
            h-[38px]
            sm:w-[42px]
            sm:h-[42px]

            flex items-center justify-center

            transition-all duration-300
            group-hover:scale-110
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38d430"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a15 15 0 0 1 0 18" />
                  <path d="M12 3a15 15 0 0 0 0 18" />
                </svg>
              </div>

              <div>
                <div className="text-[#38d430] font-bold text-[28px] sm:text-[30px] leading-none tracking-[-0.03em]">
                  20+
                </div>

                <div className="text-white/90 text-[10px] sm:text-[11px] font-medium leading-[1.15] uppercase tracking-[0.03em] mt-2">
                  INTERNATIONAL
                  <br />
                  COLLABORATIONS
                </div>
              </div>
            </div>

            {/* Indian Box */}
            <div
              className="
          group

          w-full
          min-[300px]:w-auto

          min-w-[150px]
          sm:min-w-[180px]

          h-[86px]
          sm:h-[96px]
          lg:h-[100px]

          bg-[#061b45]/78

          border border-white/40

          rounded-[8px]

          px-4

          flex items-center gap-3

          backdrop-blur-sm

          shadow-[0_8px_18px_rgba(0,0,0,0.18)]

          transition-all duration-300 ease-out

          hover:-translate-y-1
          hover:border-[#f6aa13]/80
          hover:shadow-[0_14px_28px_rgba(246,170,19,0.22)]
        "
            >
              <div
                className="
            w-[40px]
            h-[40px]
            sm:w-[44px]
            sm:h-[44px]

            flex items-center justify-center

            transition-all duration-300
            group-hover:scale-110
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f6aa13"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M3 10h18" />
                  <path d="M5 10v8" />
                  <path d="M9 10v8" />
                  <path d="M15 10v8" />
                  <path d="M19 10v8" />
                  <path d="M4 18h16" />
                  <path d="M12 3l9 5H3l9-5z" />
                </svg>
              </div>

              <div>
                <div className="text-[#ff9d10] font-bold text-[28px] sm:text-[30px] leading-none tracking-[-0.03em]">
                  100+
                </div>

                <div className="text-white/90 text-[10px] sm:text-[11px] font-medium leading-[1.15] uppercase tracking-[0.03em] mt-2">
                  INDIAN
                  <br />
                  COLLABORATIONS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Collaborations */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f7f8fb]">
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-[#f6aa13]" />

              <span className="text-[#f6aa13]">◆</span>

              <h2 className="text-[20px] font-bold text-[#001b57] uppercase tracking-wide">
                INTERNATIONAL COLLABORATIONS
              </h2>

              <span className="text-[#f6aa13]">◆</span>

              <div className="h-px flex-1  max-w-16 bg-[#f6aa13]" />
            </div>

            <p className="text-[#001b57] text-[14px] mx-auto font-medium">
              SIARE partners with leading universities and institutions across
              the globe to foster <br /> knowledge exchange, joint research, and
              academic advancement.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {internationalCollabs.map((c, i) => (
              <UnivCard
                key={i}
                name={c.name}
                country={c.country}
                logo={c.logo}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-[linear-gradient(180deg,#1251a0_0%,#0f468d_45%,#0c3067_100%)] text-white font-medium px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 text-[11px] sm:text-sm uppercase mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(12,48,103,0.32)]">
              VIEW ALL INTERNATIONAL COLLABORATIONS
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Indian Collaborations */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-[#e2ac39]" />

              <span className="text-[#e2ac39]">◆</span>

              <h2 className="text-[20px] font-bold text-[#001b57] uppercase tracking-wide">
                INDIAN COLLABORATIONS
              </h2>

              <span className="text-[#e2ac39]">◆</span>

              <div className="h-px flex-1 max-w-16 bg-[#e2ac39]" />
            </div>

            <p className="text-[#001b57] text-[14px] mx-auto font-medium">
              SIARE collaborates with 100+ leading Indian universities,
              institutes, and organizations <br /> to strengthen research,
              education, and innovation across diverse disciplines.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {indianCollabs.map((c, i) => (
              <UnivCard key={i} name={c.name} region={c.region} logo={c.logo} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-[#e2ac39] text-[#e2ac39] font-medium px-6 sm:px-7 py-2.5 rounded-full flex items-center gap-2 text-[11px] sm:text-sm uppercase mx-auto transition-all duration-300 hover:bg-[#e2ac39] hover:text-[#f5f6f8] hover:-translate-y-1">
              VIEW ALL INDIAN COLLABORATIONS
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}

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
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Handshake Icon */}
              <div
                className="
            w-[50px] h-[50px]
            rounded-full
            border-2 border-[#e2ac39]
            flex items-center justify-center
            shrink-0
          "
              >
                <Handshake className="w-[34px] h-[34px] text-[#e2ac39]" />
              </div>

              <h3
                className="
            text-white
            text-[1rem]
            sm:text-[1rem]
            lg:text-[1.10rem]
            font-Medium
            leading-[1.45]
            max-w-[540px]
          "
              >
                Together, we are shaping the future of research
                <br className="hidden sm:block" />
                and education for a better tomorrow.
              </h3>
            </div>

            {/* Right Button */}
            <a
              href="https://membership.siaresociety.org"
              target="_blank"
              rel="noopener noreferrer"
              className="
    group
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
              BECOME A MEMBER
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}