import {
  Send,
  Calendar,
  MapPin,
  ArrowRight,
  Users,
  // Presentation,
  MonitorPlay,
  GraduationCap,
  Handshake,
  Globe2,
  Lightbulb,
  TrendingUp,
  FileCheck2,
  UsersRound,
} from "lucide-react";
import eventsImg from "../assets/events.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
// import icon1 from "../assets/icon1.png";
// import icon2 from "../assets/icon2.png";
// import icon3 from "../assets/icon3.png";
// import icon4 from "../assets/icon4.png";
// import bar from "../assets/bar.png";
// import document from "../assets/document.png";
// import quoteImg from "../assets/q.png";
import quoteBg from "../assets/temp.jpg";
import { Link } from "react-router-dom";

const sideTypes = [
  {
    icon: Users,
    text: "INTERNATIONAL\nCONFERENCES",
  },
  {
    icon: MonitorPlay,
    text: "WEBINARS",
  },
  {
    icon: GraduationCap,
    text: "SUMMER SCHOOLS",
  },
  {
    icon: Handshake,
    text: "INDUSTRY\nCOLLABORATIONS",
  },
];

const events = [
  {
    img: event1,
    date: "15-17\nJUL\n2025",
    type: "International Conference",
    typeColor: "text-siare-green",
    title: "International Conference on Engineering & Technology",
    location: "Dubai, UAE",
    borderColor: "hover:border-siare-green",
    btnColor: "border-siare-green text-siare-green hover:bg-siare-green",
    dateBg: "bg-[#43aa37]",
    route: "/eventConference",
  },
  {
    img: event2,
    date: "22-24\nAUG\n2025",
    type: "International Conference",
    typeColor: "text-orange-500",
    title: "Global Conference on Sustainability & Environment",
    location: "Copenhagen, Denmark",
    borderColor: "hover:border-orange-400",
    btnColor: "border-orange-400 text-orange-500 hover:bg-orange-500",
    dateBg: "bg-[#f97316]",
    route: "/eventConference",
  },
  {
    img: event3,
    date: "10-12\nSEP\n2025",
    type: "Workshop",
    typeColor: "text-red-500",
    title: "Workshop on Artificial Intelligence & Data Science",
    location: "Singapore",
    borderColor: "hover:border-red-400",
    btnColor: "border-red-400 text-red-500 hover:bg-red-500",
    dateBg: "bg-[#ff352e]",
    route: "/eventWorkshop",
  },
  {
    img: event4,
    date: "05\nOCT\n2025",
    type: "Webinar",
    typeColor: "text-siare-blue",
    title: "Webinar on Research Publishing & Ethics",
    location: "Online",
    borderColor: "hover:border-siare-blue",
    btnColor: "border-siare-blue text-siare-blue hover:bg-siare-blue",
    dateBg: "bg-[#1558c8]",
    route: "/eventWebinar",
  },
];

const benefits = [
  {
    icon: Globe2,
    color: "text-[#43aa37]",
    title: "GLOBAL NETWORKING",
    desc: "Connect with researchers, professionals, and institutions worldwide.",
  },
  {
    icon: Lightbulb,
    color: "text-[#f6a313]",
    title: "KNOWLEDGE SHARING",
    desc: "Exchange ideas and research findings across diverse disciplines.",
  },
  {
    icon: TrendingUp,
    color: "text-[#ff352e]",
    title: "CAREER GROWTH",
    desc: "Enhance your academic profile and professional opportunities.",
  },
  {
    icon: FileCheck2,
    color: "text-[#0875c9]",
    title: "CERTIFICATION",
    desc: "Receive e-certificates for participation and presentation.",
  },
  {
    icon: UsersRound,
    color: "text-[#7a45c9]",
    title: "REAL IMPACT",
    desc: "Collaborate on solutions that address global challenges.",
  },
];
export default function Events() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section
        className="relative min-h-[340px] md:min-h-[360px] lg:h-[400px] flex items-center overflow-hidden bg-[#001247]"
        style={{
          backgroundImage: `url(${eventsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#001247]/25"></div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-[560px]">
            <h1 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[40px] font-bold text-white uppercase leading-[1.05] tracking-tight">
              EVENTS THAT
              <br />
              <span className="text-[#43aa37]">INSPIRE KNOWLEDGE.</span>
              <br />
              <span className="text-[#f6a313]">DRIVE INNOVATION.</span>
            </h1>

            <div className="flex mt-5 mb-6 overflow-hidden rounded-full w-fit">
              <span className="h-[4px] w-[30px] sm:w-[50px] bg-[#43aa37]"></span>
              <span className="h-[4px] w-[30px] sm:w-[50px] bg-[#f6a313]"></span>
              <span className="h-[4px] w-[30px] sm:w-[50px] bg-[#ff352e]"></span>
              <span className="h-[4px] w-[30px] sm:w-[50px] bg-[#0875c9]"></span>
            </div>

            <p className="text-white text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.55] mb-8 max-w-[560px]">
              SIARE organizes and collaborates in academic events that bring
              together global researchers, innovators, and industry leaders to
              exchange ideas and create impact.
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
    <Calendar
      size={14}
      className="transition-all duration-300 group-hover:scale-110"
    />

    <span>BROWSE PROCEEDINGS</span>
  </button>
</div>
          </div>

          {/* Right Event Types */}
          <div className="hidden lg:flex flex-col w-[180px] shrink-0 text-white">
            {sideTypes.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group flex items-center gap-4 py-[13px]
        border-b border-white/20 cursor-pointer
        transition-all duration-300 hover:translate-x-2"
                >
                  {/* Icon Circle */}
                  <div
                    className="w-[50px] h-[50px] rounded-full
          border-2 border-[#0875c9]
          flex items-center justify-center shrink-0
          transition-all duration-300
          group-hover:scale-110
          group-hover:border-[#ffb347]
          group-hover:shadow-[0_0_20px_rgba(67,170,55,0.45)]"
                  >
                    <Icon
                      size={24}
                      strokeWidth={2.2}
                      className="text-white transition-all duration-300 group-hover:text-[#ffb347]"
                    />
                  </div>

                  {/* Text */}
                  <span
                    className="whitespace-pre-line text-[14px]
          font-normal leading-[1.25]
          uppercase tracking-wide
          transition-all duration-300
          group-hover:text-[#ffb347]"
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-6 px-4 bg-gray-50">
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col items-center text-center mb-[22px]">
            <h2 className="text-[22px] md:text-[24px] font-bold text-[#001b57] uppercase">
              UPCOMING EVENTS
            </h2>
            <div className="flex mt-3 mb-2 overflow-hidden rounded-full w-fit">
              <span className="h-[4px] w-[30px] sm:w-[40px] bg-[#43aa37]"></span>

              <span className="h-[4px] w-[30px] sm:w-[40px] bg-[#f6a313]"></span>

              <span className="h-[4px] w-[30px] sm:w-[40px] bg-[#ff352e]"></span>

              <span className="h-[4px] w-[30px] sm:w-[40px] bg-[#0875c9]"></span>
            </div>
            <p className="mx-auto text-[14px] md:text-[14px] leading-[1.55] font-medium text-[#001b57]">
              Discover our list of upcoming academic events happening around the
              world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[28px] max-w-[1200px] mx-auto">
            {events.map((ev, i) => (
              <div
                key={i}
                className="group bg-white rounded-[12px] overflow-hidden
      shadow-[0_8px_28px_rgba(0,0,0,0.12)]
      border border-[#e6edf5]
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-[0_16px_38px_rgba(0,0,0,0.18)]"
              >
                {/* Image with date badge */}
                <div className="relative h-[160px] overflow-hidden">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  <div
                    className={`absolute top-[14px] left-[14px]
          w-[58px] h-[76px] rounded-[8px]
          flex items-center justify-center text-center text-white
          shadow-[0_6px_16px_rgba(0,0,0,0.25)]
          ${ev.dateBg}`}
                  >
                    <div className="text-[14px] font-medium leading-[1.25] whitespace-pre-line">
                      {ev.date}
                    </div>
                  </div>
                </div>

                <div className="px-[18px] pt-[18px] pb-[20px]">
                  <div
                    className={`flex items-center gap-2 text-[13px] font-bold ${ev.typeColor} mb-[14px]`}
                  >
                    <Calendar size={15} strokeWidth={2.4} />
                    {ev.type}
                  </div>

                  <h4 className="font-semibold text-[#001b57] text-[15px] leading-[1.25] mb-[12px] min-h-[44px]">
                    {ev.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[#001b57] text-[13px] font-medium mb-[22px]">
                    <MapPin size={15} />
                    {ev.location}
                  </div>
<Link to={ev.route}>
                  <button
                    className={`group/btn border ${ev.btnColor}
          font-semibold px-4 py-[10px] rounded-[6px]
          flex items-center justify-center gap-8
          text-[13px] uppercase transition-all duration-300
          w-full hover:text-white`}
                  >
                    VIEW DETAILS
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-[26px]">
            <button
              className="bg-[#e2ac39] text-[#001b57] font-medium px-6 py-[10px]
    rounded-[50px] inline-flex items-center gap-7 text-[14px] uppercase
    shadow-[0_7px_18px_rgba(0,27,87,0.25)]
    transition-all duration-300 hover:scale-105 hover:bg-[#ce9d33]"
            >
              VIEW ALL EVENTS
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-white py-5 sm:py-6 lg:py-7 overflow-hidden">

  {/* Main Container */}
  <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

    {/* Card Wrapper */}
    <div
      className="
        bg-white

        rounded-[12px]

        shadow-[0_8px_24px_rgba(0,0,0,0.06)]

        border border-[#edf1f6]

        px-3 sm:px-5 lg:px-6
        py-4 sm:py-5
      "
    >

      {/* Grid */}
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5

          gap-y-5
          sm:gap-y-6
        "
      >
        {benefits.map((b, i) => {
          const Icon = b.icon;

          return (
            <div
              key={i}
              className={`
                group

                flex items-center

                gap-3 sm:gap-4

                px-2 sm:px-4

                min-h-[74px]

                transition-all duration-300

                hover:-translate-y-1

                ${
                  i !== benefits.length - 1
                    ? "lg:border-r lg:border-[#d9e3ef]"
                    : ""
                }
              `}
            >

              {/* Icon */}
              <div
                className="
                  shrink-0

                  w-[46px]
                  h-[46px]

                  rounded-full

                  flex items-center justify-center

                  bg-[#f8fbff]

                  transition-all duration-300

                  group-hover:scale-110
                  group-hover:shadow-[0_10px_24px_rgba(0,27,87,0.12)]
                "
              >
                <Icon
                  size={30}
                  strokeWidth={1.9}
                  className={`${b.color} transition-all duration-300`}
                />
              </div>

              {/* Content */}
              <div className="min-w-0">

                <h4
                  className="
                    text-[12px]
                    sm:text-[13px]

                    font-bold

                    uppercase

                    leading-[1.2]

                    mb-[4px]

                    text-[#001b57]
                  "
                >
                  {b.title}
                </h4>

                <p
                  className="
                    text-[11px]
                    sm:text-[11.5px]

                    leading-[1.45]

                    font-medium

                    text-[#5a6b85]
                  "
                >
                  {b.desc}
                </p>
              </div>
            </div>
          );
        })}
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