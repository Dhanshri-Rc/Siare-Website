import { ArrowRight, CalendarDays, Handshake, User } from "lucide-react";
import clientsImg from "../assets/clienttt.png";
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
            <span className="h-[4px] w-[24px] sm:w-[36px] bg-[#43aa37]"></span>
            <span className="h-[4px] w-[24px] sm:w-[36px] bg-[#f6a313]"></span>
            <span className="h-[4px] w-[24px] sm:w-[36px] bg-[#ff352e]"></span>
            <span className="h-[4px] w-[24px] sm:w-[36px] bg-[#0875c9]"></span>
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
                OUR COLLABORATIONS
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
            <button className="text-[#0c3067] border border-[#0c3067] bg-white rounded-[6px] font-medium px-6 sm:px-7 py-2 flex items-center gap-2 text-[11px] sm:text-sm uppercase mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(12,48,103,0.32)]">
              VIEW ALL COLLABORATIONS
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-6 sm:py-8 lg:py-10 overflow-hidden">
  <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Recent Members */}
      <div
        className="
          bg-white
          border border-[#dfe8d8]
          rounded-[18px]
          p-5 sm:p-6
          shadow-[0_10px_28px_rgba(0,0,0,0.05)]
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <User className="text-[#43aa37]" size={30} />

          <h2 className="text-[#071d4f] text-[20px] font-bold uppercase">
            OUR RECENT MEMBERS
          </h2>

          <span className="h-[2px] w-[60px] bg-[#43aa37]" />
        </div>

        <div className="space-y-2">
          {[
            ["Amity University", "Academic Institution", "India", "Joined", "May 2025", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzUD4_Rm5czORDVe398oYCxdSRSK9MCzxEQ&s"],
            ["Chandigarh University", "Academic Institution", "India", "Joined", "Apr 2025", "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"],
            ["Lovely Professional University", "Academic Institution", "India", "Joined", "April 2025", "https://i.pinimg.com/736x/a0/75/0c/a0750c5df700b85f0d6498d84bbabc69.jpg"],
            ["Manipal University Jaipur", "Academic Institution", "India", "Joined", "Mar 2025", "https://cdn.universitykart.com//Content/upload/admin/uhjjm31d.wuj.png"],
            ["Graphic Era (Deemed to be University)", "Academic Institution", "India", "Joined", "Mar 2025", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2dexHKLMm22t4scE2RkoDdOHOjvXqDs-LQ&s"],
          ].map(([name, type, country, label, date, logo], i) => (
            <div
              key={i}
              className="
                group
                bg-white
                border border-[#e5e7eb]
                rounded-[9px]
                px-3 py-2
                flex items-center gap-4
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_22px_rgba(67,170,55,0.12)]
                hover:border-[#e2ac39]/40
              "
            >
              <div className="w-[85px] h-[58px] border-r border-[#e5e7eb] flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt={name}
                  className="max-w-[85px] max-h-[58px] object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-[#071d4f] text-[13px] font-bold leading-tight">
                  {name}
                </h4>
                <p className="text-[#334968] font-medium text-[12px] leading-[1.35]">
                  {type}
                  <br />
                  {country}
                </p>
              </div>

              <div className="flex items-start gap-2 min-w-[85px]">
                <CalendarDays size={14} className="text-[#43aa37] mt-[2px]" />
                <p className="text-[#071d4f] text-[11px] leading-[1.3] font-medium">
                  {label}
                  <br />
                  {date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            className="
              h-[40px]
              px-8
              rounded-[5px]
              border border-[#9aa9bd]
              text-[#071d4f]
              font-bold
              text-[13px]
              uppercase
              inline-flex items-center gap-6
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#e2ac39]
              hover:text-white
              hover:border-[#e2ac39]
              
            "
          >
            VIEW ALL RECENT MEMBERS
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Honorary Members */}
      <div
        className="
          bg-white
          border border-[#f0dfbd]
          rounded-[18px]
          p-5 sm:p-6
          shadow-[0_10px_28px_rgba(0,0,0,0.05)]
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <User className="text-[#e2ac39]" size={30} />

          <h2 className="text-[#071d4f] text-[20px] font-bold uppercase">
            OUR HONORARY MEMBERS
          </h2>

          <span className="h-[2px] w-[60px] bg-[#e2ac39]" />
        </div>

        <div className="space-y-2">
          {[
            ["Dr. Glenn T. May", "Professor Emeritus, Engineering", "United States", "Appointed", "May 2024", "https://randomuser.me/api/portraits/men/41.jpg"],
            ["Prof. R. M. Bhatt", "Former Vice Chancellor", "India", "Appointed", "Mar 2024", "https://randomuser.me/api/portraits/men/52.jpg"],
            ["Dr. Maria da Graça", "Research Director", "Portugal", "Appointed", "Jan 2024", "https://randomuser.me/api/portraits/women/45.jpg"],
            ["Prof. Datuk Ir. Dr. Wahid bin Omar", "Former Dean, Engineering", "Malaysia", "Appointed", "Dec 2023", "https://randomuser.me/api/portraits/men/47.jpg"],
            ["Prof. Soo-Kwang Lee", "Emeritus Professor", "South Korea", "Appointed", "Oct 2023", "https://randomuser.me/api/portraits/men/60.jpg"],
          ].map(([name, role, country, label, date, img], i) => (
            <div
              key={i}
              className="
                group
                bg-white
                border border-[#e5e7eb]
                rounded-[9px]
                px-3 py-2
                flex items-center gap-4
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_22px_rgba(226,172,57,0.14)]
                hover:border-[#e2ac39]/45
              "
            >
              <div className="w-[58px] h-[58px] rounded-full overflow-hidden shrink-0">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-[#071d4f] text-[13px] font-bold leading-tight">
                  {name}
                </h4>
                <p className="text-[#334968] font-medium text-[12px] leading-[1.35]">
                  {role}
                  <br />
                  {country}
                </p>
              </div>

              <div className="flex items-start gap-2 min-w-[95px]">
                <CalendarDays size={14} className="text-[#e2ac39] mt-[2px]" />
                <p className="text-[#071d4f] text-[11px] leading-[1.3] font-medium">
                  {label}
                  <br />
                  {date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            className="
              h-[40px]
              px-8
              rounded-[5px]
              border border-[#9aa9bd]
              text-[#071d4f]
              font-bold
              text-[13px]
              uppercase
              inline-flex items-center gap-6
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#e2ac39]
              hover:text-white
              hover:border-[#e2ac39]
              hover:shadow-[0_10px_22px_rgba(226,172,57,0.25)]
            "
          >
            VIEW ALL HONORARY MEMBERS
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

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