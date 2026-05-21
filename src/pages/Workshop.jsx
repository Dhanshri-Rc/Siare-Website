import {
  CalendarDays,
  MapPin,
  Users,
  Target,
  CheckCircle,
  CalendarCheck,
  Share2,
  ArrowRight,
  ClipboardCheck,
  PieChart,
  BarChart3,
  Database,
  Mail,
  Phone,
  Globe,
  Clock,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  UserRound,
  TrendingUp,
} from "lucide-react";
import conferenceImg from "../assets/workshopbg.png";
import { Link } from "react-router-dom";
import eventIcon from "../assets/workIcon.png";

export default function Workshop() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section
        className="
    relative
    bg-[#061b45]
    overflow-hidden

    min-h-[440px]
    max-[690px]:min-h-[580px]
    max-[500px]:min-h-[640px]
  "
        style={{
          backgroundImage: `url(${conferenceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="
      w-full max-w-[1320px] mx-auto

      px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20

      py-8
      max-[670px]:py-6
    "
        >
          {/* Breadcrumbs */}
          <div
            className="
        text-white/80
        text-[12px]
        max-[670px]:text-[11px]

        mb-8
        max-[670px]:mb-5

        flex flex-wrap items-center gap-2
      "
          >
            <Link
              to="/"
              className="hover:text-[#e2ac39] transition-colors duration-300"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              to="/events"
              className="hover:text-[#e2ac39] transition-colors duration-300"
            >
              Events
            </Link>

            <span>›</span>
            <span>Workshop on Research Methodology & Data Analysis</span>
          </div>

          <div
            className="
        flex
        flex-row
        gap-5

        max-[670px]:flex-col
        max-[670px]:gap-4
      "
          >
            {/* Workshop Icon Box */}
            <div
              className="
    group

    w-[60px]
    h-[60px]

    max-[670px]:w-[62px]
    max-[670px]:h-[62px]

    rounded-[10px]

    bg-[linear-gradient(180deg,#e2ac39_0%,#c99322_100%)]

    flex items-center justify-center

    shrink-0

    shadow-[0_12px_28px_rgba(201,147,34,0.32)]

    transition-all duration-500 ease-out

    hover:-translate-y-[4px]
    hover:scale-[1.03]

    hover:bg-[linear-gradient(180deg,#f1c258_0%,#d49c26_100%)]

    hover:shadow-[0_18px_40px_rgba(201,147,34,0.48)]
  "
            >
              <img
                src={eventIcon}
                alt="Workshop"
                className="
      w-[90px]
      h-[90px]

      object-contain

      transition-all duration-500

      group-hover:rotate-[10deg]
      group-hover:scale-110
    "
              />
            </div>

            {/* Content */}
            <div className="w-full max-w-[680px]">
              <p
                className="
            text-[#c99322]
            text-[14px]
            max-[670px]:text-[11px]

            font-bold
            uppercase

            flex items-center gap-2

            mb-1
          "
              >
                WORKSHOP
              </p>

              <h1
                className="
            text-white

            text-[1.2rem]
            sm:text-[1.6rem]
            lg:text-[1.9rem]

            max-[670px]:text-[1.35rem]
            max-[420px]:text-[1.18rem]

            font-bold
            leading-[1.15]
          "
              >
                Workshop on
                <br />
                Research Methodology
                <br />& Data Analysis
              </h1>

              <div
                className="
            flex flex-wrap

            gap-6
            max-[670px]:gap-4

            mt-5
            max-[670px]:mt-4

            text-white
            text-[14px]
            max-[670px]:text-[12px]
          "
              >
                <span
                  className="flex items-center gap-2
          "
                >
                  <CalendarDays size={18} />
                  22-23 Aug, 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  In-Person Event
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  Global Event
                </span>
              </div>

              <p
                className="
            text-white/90

            text-[13px]
            max-[670px]:text-[12px]

            leading-[1.7]

            mt-3

            max-w-[460px]
            max-[670px]:max-w-full
          "
              >
                A hands-on workshop designed to build practical skills in
                research methodology and data analysis through interactive
                sessions and real-world exercises.
              </p>

              <div
                className="
            flex flex-wrap
            gap-3

            mt-4

            max-[670px]:grid
            max-[670px]:grid-cols-2
            max-[670px]:gap-3

            max-[420px]:grid-cols-1
          "
              >
                {/* REGISTER */}
                <button
                  className="
              group

              h-[44px]
              px-6

              max-[670px]:px-4
              max-[670px]:w-full

              rounded-[8px]

              bg-[linear-gradient(180deg,#eebb48_0%,#d3aa51_55%,#b88922_100%)]

              text-[#eff1f6]

              font-bold
              text-[13px]
              max-[670px]:text-[11px]

              flex items-center justify-center gap-2

              border border-[#d8a73b]

              shadow-[0_10px_22px_rgba(238,187,72,0.28)]

              transition-all duration-500 ease-out

              hover:-translate-y-[3px]
              hover:scale-[1.03]
              hover:bg-[linear-gradient(180deg,#ffd56a_0%,#eebb48_45%,#b97d12_100%)]
              hover:shadow-[0_18px_36px_rgba(238,187,72,0.50)]

              active:scale-[0.96]
            "
                >
                  <CalendarDays
                    size={16}
                    className="transition-all duration-300 group-hover:rotate-[-10deg]"
                  />
                  REGISTER NOW
                </button>

                {/* DOWNLOAD */}
                <button
                  className="
              group

              h-[44px]
              px-6

              max-[670px]:px-4
              max-[670px]:w-full

              rounded-[8px]

              border border-white/70

              bg-white/8
              backdrop-blur-sm

              text-white
              font-bold
              text-[13px]
              max-[670px]:text-[11px]

              flex items-center justify-center gap-2

              transition-all duration-500

              hover:bg-white
              hover:text-[#071d4f]
              hover:-translate-y-[3px]
              hover:scale-[1.03]
              hover:shadow-[0_16px_34px_rgba(255,255,255,0.18)]

              active:scale-[0.96]
            "
                >
                  <CalendarCheck
                    size={16}
                    className="transition-all duration-300 group-hover:translate-y-[2px]"
                  />
                  ADD TO CALENDAR
                </button>

                {/* SHARE */}
                <button
                  className="
              group

              h-[44px]
              w-[44px]

              max-[670px]:w-full
              max-[670px]:col-span-2
              max-[420px]:col-span-1

              rounded-[8px]

              border border-white/70

              bg-white/8
              backdrop-blur-sm

              text-white

              flex items-center justify-center

              transition-all duration-500

              hover:bg-[linear-gradient(180deg,#eebb48_0%,#d3aa51_55%,#b88922_100%)]
              hover:text-[#071d4f]
              hover:-translate-y-[3px]
              hover:border-[#d8a73b]
              hover:shadow-[0_16px_30px_rgba(238,187,72,0.40)]

              active:scale-[0.92]
            "
                >
                  <Share2
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="relative -mt-10 z-10">
        <div className="w-full max-w-[1150px] mx-auto px-5">
          <div className="bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,.12)] border border-[#e5e7eb] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["DATES", "15-17 July, 2025", CalendarDays],
              ["LOCATION", "Global Event", MapPin],
              ["EVENT TYPE", "In-Person", Users],
              ["ATTENDEES", "500+ Expected", Users],
              ["ORGANIZED BY", "SIARE", Target],
              ["EVENT STATUS", "Upcoming", CheckCircle],
            ].map(([title, value, Icon], i) => (
              <div
                key={i}
                className="p-5 flex gap-3 border-r last:border-r-0 border-[#dce3ee]"
              >
                <Icon className="text-[#0d6efd] shrink-0" size={28} />
                <div>
                  <p className="text-[11px] font-bold text-[#071d4f] uppercase">
                    {title}
                  </p>
                  <p className="text-[13px] font-bold text-[#071d4f] mt-1">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full max-w-[1240px] mx-auto px-6 py-7 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <BlockTitle title="About The Workshop" />
          <p className="text-[#071d4f] text-[14px] leading-[1.65] mb-4 w-full max-w-[520px]">
            This workshop provides participants with a comprehensive
            understanding of research methodology and hands-on training in data
            analysis techniques.
          </p>
          <p className="text-[#071d4f] text-[14px] leading-[1.65] w-full max-w-[520px]  ">
            Through practical examples, tools, and case studies, participants
            will learn how to design research, collect data, apply statistical
            methods, and interpret results with confidence.
          </p>

          <BlockTitle title="Key Learning Outcomes" className="mt-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              [
                "Understand research design and methodology",
                "Learn to frame research questions and choose appropriate methodologies.",
                Target,
                "text-[#006aff]",
              ],
              [
                "Data collection & management",
                "Explore tools and techniques for collecting and organizing data effectively.",
                Database,
                "text-[#ff7a1a]",
              ],
              [
                "Data analysis techniques",
                "Hands-on practice with statistical methods and software tools.",
                BarChart3,
                "text-[#2faa38]",
              ],
              [
                "Interpretation & visualization",
                "Learn to interpret results and create meaningful data visualizations.",
                PieChart,
                "text-purple-600",
              ],
              [
                "Apply findings in research",
                "Use insights and results to strengthen your research outcomes.",
                ClipboardCheck,
                "text-[#36ADA3]",
              ],
            ].map(([t, d, Icon, color], i) => (
              <div
                key={i}
                className="border border-[#dce3ee] rounded-[8px] p-4 text-center hover:-translate-y-1 hover:shadow-lg transition bg-white"
              >
                <Icon size={36} className={`${color} mx-auto mb-3`} />
                <h4 className="text-[#071d4f] text-[13px] font-bold leading-tight">
                  {t}
                </h4>
                <p className="text-[#334968] text-[11px] leading-[1.5] mt-2">
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 mb-2">
            <BlockTitle title="Workshop Facilitators" className="mt-6" />

            <button className="h-[36px] px-4 bg-[#f2f0ec] text-[#c99322] border border-[#c99322] hover:bg-[#c99322] hover:text-white rounded-[6px] text-[12px] font-semibold flex items-center gap-2 transition-all duration-300">
              VIEW ALL FACILITATORS <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              [
                "Dr. Robert Anderson",
                "Professor of Statistics",
                "Stanford University, USA",
                "Expertise: Research Methodology, Data Science",
                "men",
                60,
              ],
              [
                "Dr. Ananya Sharma",
                "Associate Professor",
                "IIT Delhi, India",
                "Expertise: Data Analysis, SPSS, R Programming",
                "women",
                44,
              ],
              [
                "Dr. Kenji Tanaka",
                "Senior Researcher",
                "University of Tokyo, Japan",
                "Expertise: Quantitative Methods, Analytics",
                "men",
                32,
              ],
              [
                "Dr. Maria Gonzalez",
                "Data Scientist",
                "MIT, USA",
                "Expertise: Machine Learning, Data Visualization",
                "women",
                55,
              ],
            ].map(([n, r, u, e, g, id], i) => (
              <div
                key={i}
                className="
        group
        border border-[#dce3ee]
        rounded-[8px]
        overflow-hidden
        bg-white
        text-center
        shadow-[0_6px_18px_rgba(7,29,79,0.06)]
        transition-all duration-300
        hover:-translate-y-[4px]
        hover:shadow-[0_14px_32px_rgba(7,29,79,0.14)]
      "
              >
                <img
                  src={`https://randomuser.me/api/portraits/${g}/${id}.jpg`}
                  alt={n}
                  className="
          w-full
          h-[120px]
          object-cover
          object-top
          transition-all duration-300
          group-hover:scale-[1.03]
        "
                />

                <div className="p-3">
                  <h4 className="text-[#071d4f] text-[12px] font-bold">{n}</h4>

                  <p className="text-[#071d4f] text-[10px] mt-3 leading-[1.5]">
                    {r}
                    <br />
                    {u}
                  </p>

                  <p className="text-[#071d4f] text-[10px] mt-3 leading-[1.5]">
                    {e}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <BlockTitle title="Who should attend?" className="mt-8" />

          <div className="flex items-center justify-between gap-1 flex-wrap">
            {[
              ["Researchers & Academicians", GraduationCap, "text-[#006aff]"],
              // ["PhD Scholars & Postgraduates", GraduationCap, "text-[#2faa38]"],
              ["Industry Professionals", Landmark, "text-[#7c3aed]"],
              ["Project Researchers", BriefcaseBusiness, "text-[#ff7a1a]"],
              [
                "Anyone interested in research & data analysis",
                UserRound,
                "text-[#00a3c7]",
              ],
            ].map(([t, Icon, c], i) => (
              <div key={i} className="flex items-center gap-[12px] w-[170px]">
                <Icon size={46} strokeWidth={1.7} className={`${c} shrink-0`} />
                <p className="text-[#071d4f] text-[12px] font-bold leading-[1.35]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-5">
          <SideCard title="Registration Details">
            {[
              [
                "Early Bird Registration",
                "Until 15 Jul, 2025",
                "₹1,999",
                "text-[#43aa37]",
                "bg-[#eaf7ec]",
              ],
              [
                "Standard Registration",
                "16 Jul – 15 Aug, 2025",
                "₹2,499",
                "text-[#0d6efd]",
                "bg-[#eaf2ff]",
              ],
              [
                "Late Registration",
                "16 Aug – Onsite",
                "₹2,999",
                "text-[#ff7a1a]",
                "bg-[#fff1e5]",
              ],
            ].map(([a, b, price, color, bg], i) => (
              <div
                key={i}
                className="border border-[#dce3ee] rounded-[8px] px-4 py-2 flex items-center gap-3 mb-2 bg-white"
              >
                <div
                  className={`w-[42px] h-[42px] rounded-full ${bg} flex items-center justify-center shrink-0`}
                >
                  <CalendarDays size={21} strokeWidth={1.9} className={color} />
                </div>

                <div className="flex-1">
                  <h4 className="text-[#071d4f] font-bold text-[13px] leading-tight">
                    {a}
                  </h4>
                  <p className="text-[#334968] text-[12px] leading-tight mt-1">
                    {b}
                  </p>
                </div>

                <p className={`${color} font-extrabold text-[13px] shrink-0`}>
                  {price}
                </p>
              </div>
            ))}

            <button
              className="
      group w-full h-[40px]
      bg-[#e2ac39]
      text-white rounded-[6px]
      font-bold text-[13px]
      flex justify-center items-center gap-2
      
      transition-all duration-300
      hover:-translate-y-[2px]
      hover:bg-[#c99322]
      hover:shadow-[0_12px_28px_rgba(226,172,57,0.55)]
      active:scale-[0.97]
    "
            >
              REGISTER NOW
              <ArrowRight
                size={16}
                className="transition-all duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              className="
      group w-full h-[40px] mt-2
      bg-[#f2f0ec]
      text-[#c99322]
      border border-[#c99322]
      rounded-[6px]
      font-semibold text-[12px]
      flex justify-center items-center gap-2
      transition-all duration-300
      hover:-translate-y-[2px]
      hover:bg-[#c99322]
      hover:text-white
      hover:shadow-[0_8px_20px_rgba(13,110,253,0.16)]
      active:scale-[0.97]
    "
            >
              <Users
                size={16}
                className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-[1px]"
              />
              GROUP REGISTRATION
            </button>
          </SideCard>

          <SideCard title="Workshop Highlights">
            {[
              "Hands-on practical sessions",
              "Real-world datasets & case studies",
              "Interactive discussions",
              "Working with industry-standard tools",
              "Certificate of participation",
              "Networking with peers & experts",
            ].map((x, i) => (
              <p
                key={i}
                className="
        group
        text-[#071d4f]
        text-[12px]
        flex items-center gap-2
        mb-1

        transition-all duration-300
        hover:text-[#c99322]
        hover:translate-x-[4px]
        cursor-pointer
      "
              >
                <CheckCircle
                  size={14}
                  className="
          text-[#c99322]
          transition-all duration-300
          group-hover:scale-110
        "
                />

                {x}
              </p>
            ))}
          </SideCard>

          <SideCard title="Important Dates">
            {[
              ["15 Jul, 2025", "Early Bird Registration Ends"],
              ["15 Aug, 2025", "Standard Registration Ends"],
              ["16 Aug, 2025", "Late Registration Starts"],
              ["20 Aug, 2025", "Last Date for Queries"],
              ["22 Aug, 2025", "Workshop Begins"],
            ].map(([date, title], i, arr) => (
              <div
                key={i}
                className="
        group
        relative
        flex
        gap-2
        pl-[2px]
        pb-2

        transition-all duration-300
        hover:translate-x-[4px]
        cursor-pointer
      "
              >
                {/* Timeline */}
                <div className="relative flex flex-col items-center shrink-0">
                  <span
                    className="
            w-[10px]
            h-[10px]
            rounded-full
            border-[2px]
            border-[#c99322]
            bg-white
            z-10

            transition-all duration-300
            group-hover:bg-[#c99322]
            group-hover:scale-110
          "
                  />

                  {i !== arr.length - 1 && (
                    <span
                      className="
              absolute
              top-[10px]
              w-[2px]
              h-[38px]
              bg-[#ececec]
            "
                    />
                  )}
                </div>

                {/* Content */}
                <div className="leading-[1.2]">
                  <p
                    className="
            text-[#071d4f]
            text-[12px]
            font-bold

            transition-colors duration-300
            group-hover:text-[#c99322]
          "
                  >
                    {date}
                  </p>

                  <p className="text-[#071d4f] text-[12px] mt-[2px]">{title}</p>
                </div>
              </div>
            ))}
          </SideCard>

          <SideCard title="Contact Organizer">
            <p className="flex gap-2 text-[12px] font-semibold text-[#071d4f] mb-2">
              <Mail size={16} className="text-[#c99322]" />{" "}
              contact@siaresociety.org
            </p>
            <p className="flex gap-2 text-[12px] font-semibold text-[#071d4f] mb-2">
              <Phone size={16} className="text-[#c99322]" /> +91 738 735 5544
            </p>
            <p className="flex gap-2 text-[12px] font-semibold text-[#071d4f]">
              <Globe size={16} className="text-[#c99322]" /> siaresociety.org
            </p>
          </SideCard>
        </aside>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1240px] mx-auto px-6 pb-8">
        <div
          className="
      relative overflow-hidden
      bg-[#071d4f]
      rounded-[8px]
      px-9 py-5
      min-h-[86px]
      flex flex-col md:flex-row items-center justify-between gap-4
      text-white
      shadow-[0_8px_22px_rgba(7,29,79,0.18)]
    "
        >
          <div className="absolute right-[80px] bottom-0 w-[420px] h-full opacity-30 pointer-events-none bg-[radial-gradient(circle,#006aff_1px,transparent_1.5px)] [background-size:10px_10px]" />

          <div className="relative z-10 flex items-center gap-5">
            <div className="w-[58px] h-[58px] rounded-full border border-[#006aff] flex items-center justify-center shrink-0">
              <TrendingUp size={30} className="text-[#006aff]" />
            </div>

            <p className="font-bold text-[16px] leading-[1.7]">
              Enhance your research skills with practical training{" "}
              <br className="hidden sm:block" />
              and real-world data analysis experience.
            </p>
          </div>

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
            REGISTER NOW
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>
    </main>
  );
}

function BlockTitle({ title, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="text-[#071d4f] font-bold uppercase text-[20px]">
        {title}
      </h2>
      <div className="w-[42px] h-[3px] bg-[#e2ac39] mt-1" />
    </div>
  );
}

function SideCard({ title, children }) {
  return (
    <div className="border border-[#dce3ee] rounded-[10px] p-5 bg-white">
      <BlockTitle title={title} />
      {children}
    </div>
  );
}