import {
  CalendarDays,
  Users,
  CheckCircle,
  Share2,
  ArrowRight,
  Laptop,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Monitor,
  BookOpen,
  Scale,
  FileText,
} from "lucide-react";
import conferenceImg from "../assets/webinar.png";
import { Link } from "react-router-dom";

export default function EventDetailsMiddle() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section
        className="
          relative bg-[#061b45] overflow-hidden
          min-h-[420px]
          max-[670px]:min-h-[400px]
          max-[480px]:min-h-[470px]
          max-[344px]:min-h-[505px]
          max-[320px]:min-h-[560px]
        "
        style={{
          backgroundImage: `url(${conferenceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 max-[670px]:py-6">
          <div className="text-white/80 text-[12px] max-[670px]:text-[11px] mb-8 max-[670px]:mb-5 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-[#e2ac39] transition-colors duration-300">
              Home
            </Link>
            <span>›</span>
            <Link to="/events" className="hover:text-[#e2ac39] transition-colors duration-300">
              Events
            </Link>
            <span>›</span>
            {/* <span>Webinar on Research Publishing & Ethics</span> */}
          </div>

          <div className="flex flex-row gap-5 max-[670px]:gap-3 max-[670px]:items-start">
             <div
        className="
          w-[50px] h-[50px]
          max-[670px]:w-[54px] max-[670px]:h-[82px]

          rounded-[8px]

          bg-[linear-gradient(180deg,#eebb48_0%,#d3aa51_55%,#b88922_100%)]

          text-white

          flex flex-col items-center justify-center

          font-medium
          shrink-0

          shadow-[0_10px_22px_rgba(238,187,72,0.28)]

          transition-all duration-500 ease-out

          hover:-translate-y-[4px]
          hover:scale-[1.04]
          hover:bg-[linear-gradient(180deg,#ffd56a_0%,#eebb48_50%,#b97d12_100%)]
          hover:shadow-[0_18px_34px_rgba(238,187,72,0.45)]
          hover:text-[#071d4f]
        "
      >
        <CalendarDays size={28} />

       
      </div>

            <div className="w-full max-w-[680px] min-w-0">
              <p className="text-white text-[12px] max-[670px]:text-[11px] font-medium uppercase flex items-center gap-2 mb-1">
                <Monitor size={15} />
                Webinar
              </p>

              <h1 className="text-white text-[1.2rem] sm:text-[1.6rem] lg:text-[1.9rem] max-[670px]:text-[1.28rem] max-[420px]:text-[1.08rem] font-bold leading-[1.15] w-full max-w-[450px]">
                Webinar on Research Publishing & Ethics
              </h1>

              <div className="flex flex-wrap gap-6 max-[670px]:gap-4 mt-5 max-[670px]:mt-4 text-white text-[14px] max-[670px]:text-[12px]">
                <span className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  05 Oct, 2025
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  3:00 PM - 4:30 PM (IST)
                </span>

                <span className="flex items-center gap-2">
                  <Monitor size={18} />
                  Online Event
                </span>
              </div>

              <p className="text-white/90 text-[13px] max-[670px]:text-[12px] leading-[1.7] mt-3 max-w-[520px] max-[670px]:max-w-full">
                Join our expert panel to explore best practices in research publishing,
                publication ethics, plagiarism prevention, and responsible authorship.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <button className="group h-[44px] px-6 max-[670px]:px-4 rounded-[8px] bg-[linear-gradient(180deg,#ffe29a_0%,#eeba47_48%,#c8932a_100%)] text-white font-bold text-[13px] max-[670px]:text-[11px] flex items-center justify-center gap-2 border border-[#d4aa35] shadow-[0_10px_22px_rgba(226,172,57,0.28)] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:scale-[1.03] hover:text-white hover:bg-[linear-gradient(180deg,#fff0bc_0%,#eeba47_48%,#b9851e_100%)] hover:shadow-[0_18px_36px_rgba(226,172,57,0.50)] active:scale-[0.96]">
                  REGISTER NOW
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="group h-[44px] px-6 max-[670px]:px-4 rounded-[8px] border border-white/70 bg-white/8 backdrop-blur-sm text-white font-bold text-[13px] max-[670px]:text-[11px] flex items-center justify-center gap-2 transition-all duration-500 hover:bg-[#e2ac39] hover:text-white hover:-translate-y-[3px] hover:scale-[1.03] active:scale-[0.96]">
                  <CalendarDays size={16} />
                  ADD TO CALENDAR
                </button>

                <button className="group h-[44px] w-[44px] max-[670px]:w-[44px] max-[670px]:h-[44px] rounded-[8px] border border-white/70 bg-white/8 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-500 hover:bg-[#e2ac39] hover:text-white hover:-translate-y-[3px] hover:border-[#e2ac39] active:scale-[0.92]">
                  <Share2 size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* INFO BAR */}
      <section className="relative -mt-10 z-10">
        <div className="w-full xl:max-w-[1150px] lg:max-w-[950px] mx-auto px-5">
          <div className="bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,.12)] border border-[#e5e7eb] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden">
            {[
              ["DATE", "05 October, 2025", CalendarDays],
              ["TIME", "3:00 PM - 4:30 PM (IST)", Clock],
              ["EVENT TYPE", "Webinar", Monitor],
              ["PLATFORM", "Zoom (Online)", Laptop],
              ["ATTENDEES", "500+ Expected", Users],
              ["EVENT STATUS", "Upcoming", CheckCircle],
            ].map(([title, value, Icon], i) => (
              <div key={i} className="group relative p-5 flex gap-3 border-r border-b lg:border-b-0 last:border-r-0 border-[#dce3ee] transition-all duration-300 hover:bg-[#faf7ff] hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(124,58,237,0.12)] hover:z-10">
                <Icon size={28} className="text-[#0055e0] shrink-0 transition-all duration-300 group-hover:scale-110  mt-2" />
                <div>
                  <p className="text-[11px] font-bold uppercase text-[#071d4f]  transition-all duration-300">{title}</p>
                  <p className="text-[13px] font-bold text-[#071d4f] mt-1 transition-all duration-300 group-hover:translate-x-[2px]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-9 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <BlockTitle title="About The Webinar" />

          <p className="text-[#041743] text-[14px] leading-[1.65] mb-4 w-full max-w-[580px]">
            This webinar aims to educate researchers, academicians, and students on ethical practices in research publishing. Our experts will discuss publication ethics, peer review process, plagiarism prevention, and tips for publishing in high-quality journals.
          </p>
           <p className="text-[#041743] text-[14px] leading-[1.65] w-full max-w-[610px]">
      The conference will feature keynote speeches, technical sessions,
      panel discussions, workshops, and networking opportunities designed
      to foster collaboration and drive technological advancement for a
      sustainable future.
    </p>

          <BlockTitle title="Topics To Be Covered" className="mt-8" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              ["Introduction to Research Publishing", "Understanding the journey from research to publication.", BookOpen],
              ["Publication Ethics", "Core principles and guidelines for ethical publishing.", Scale],
              ["Avoiding Plagiarism", "Tools, techniques, and best practices for original research.", FileText],
              ["Peer Review Process", "How peer review ensures quality and integrity.", Users],
              ["Choosing the Right Journal", "Tips for selecting the most suitable journals for your research.", TrendingUp],
            ].map(([t, d, Icon], i) => (
              <div key={i} className="group border border-[#dce3ee] rounded-[8px] p-4 text-center bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(226,172,57,0.16)] hover:border-[#e2ac39]/70 hover:bg-[#fffaf1]">
                <Icon size={34} className="text-[#e2ac39] mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <h4 className="text-[#071d4f] text-[12px] font-bold leading-tight transition-all duration-300 group-hover:text-[#b9851e]">
                  {t}
                </h4>
                <p className="text-[#334968] text-[10px] leading-[1.45] mt-2">
                  {d}
                </p>
              </div>
            ))}
          </div>

          <BlockTitle title="Speakers" className="mt-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["Dr. Robert Anderson", "Professor of Engineering", "Stanford University, USA", "Expert in Research Ethics"],
              ["Dr. Ananya Sharma", "Associate Professor", "IIT Delhi, India", "Publication Ethics Expert"],
              ["Dr. Kenji Tanaka", "Senior Researcher", "University of Tokyo, Japan", "Academic Writing Expert"],
              ["Dr. Maria Gonzalez", "Editor-in-Chief", "Global Journal of Science", "Journal Publishing Expert"],
            ].map(([name, role, org, topic], i) => (
              <div key={i} className="group border border-[#dce3ee] rounded-[8px] overflow-hidden bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#e2ac39]/70 hover:shadow-[0_12px_28px_rgba(226,172,57,0.16)]">
                <div className="overflow-hidden">
                  <img
                    src={`https://randomuser.me/api/portraits/${i === 1 || i === 3 ? "women" : "men"}/${30 + i}.jpg`}
                    className="w-full h-[120px] object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-3">
                  <h4 className="text-[#071d4f] text-[12px] font-bold group-hover:text-[#b9851e] transition-all duration-300">
                    {name}
                  </h4>
                  <p className="text-[#334968] text-[10px] mt-1">{role}</p>
                  <p className="text-[#334968] text-[10px] mt-1">{org}</p>
                  <p className="text-[#e2ac39] text-[10px] mt-2">{topic}</p>
                </div>
              </div>
            ))}
          </div>

          <BlockTitle title="How To Join" className="mt-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["Step 1", "Register for the webinar using the registration form.", ClipboardCheck],
              ["Step 2", "Receive the webinar link via email before the event.", Mail],
              ["Step 3", "Join the webinar on time and participate in the live session.", Monitor],
            ].map(([step, text, Icon], i) => (
              <div key={i} className="group flex items-center gap-4">
                <div className="w-[58px] h-[58px] rounded-full bg-[linear-gradient(180deg,#ffe29a_0%,#eeba47_48%,#c8932a_100%)] text-white flex items-center justify-center shrink-0 transition-all duration-300 ">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-[#071d4f] text-[14px] font-bold">{step}</h4>
                  <p className="text-[#334968] text-[14px] leading-[1.55]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-3">
          <SideCard title="Registration Details">
            {[
              ["Early Bird Registration", "Until 15 Sep, 2025", "Free", CalendarCheck],
              ["Standard Registration", "16 Sep - 04 Oct, 2025", "Free", CalendarDays],
              ["Late Registration", "On/After 05 Oct, 2025", "Free", ClipboardCheck],
            ].map(([a, b, fee, Icon], i) => (
              <div key={i} className="group border border-[#dce3ee] rounded-[8px] p-4 flex gap-3 mb-2 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e2ac39] hover:bg-[#fffaf1] hover:shadow-[0_10px_24px_rgba(226,172,57,0.18)]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#fff7e2] text-[#e2ac39] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#e2ac39] group-hover:text-white group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#071d4f] font-bold text-[13px]">{a}</h4>
                  <p className="text-[#334968] text-[12px] mt-1">{b}</p>
                </div>
                <span className="text-[#e2ac39] text-[12px] font-bold">{fee}</span>
              </div>
            ))}

            <button className="group w-full h-[42px] bg-[linear-gradient(180deg,#ffe29a_0%,#eeba47_48%,#c8932a_100%)] hover:text-[#071d4f] rounded-[6px] font-bold text-[13px] flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-1 text-white hover:shadow-[0_12px_26px_rgba(226,172,57,0.38)] active:scale-[0.97]">
              REGISTER NOW
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </SideCard>

          <SideCard title="Who Should Attend?">
            {[
              "Researchers",
              "Academicians",
              "PhD Scholars & Students",
              "Librarians",
              "Journal Editors",
              "Anyone interested in research publishing",
            ].map((x, i) => (
              <p key={i} className="group text-[#071d4f] text-[12px] flex items-center gap-2 mb-1 transition-all duration-300 hover:translate-x-1 hover:text-[#b9851e]">
                <CheckCircle size={14} className="text-[#e2ac39] shrink-0 transition-all duration-300 group-hover:scale-125" />
                {x}
              </p>
            ))}
          </SideCard>

          <SideCard title="Webinar Highlights">
            {[
              "Expert insights from industry leaders",
              "Live Q&A Session",
              "E-Certificate for all participants",
              "Free & Open for all",
            ].map((x, i) => (
              <p key={i} className="group text-[#071d4f] text-[12px] flex items-center gap-2 mb-1 transition-all duration-300 hover:translate-x-1 hover:text-[#b9851e]">
                <CheckCircle size={14} className="text-[#e2ac39] shrink-0 transition-all duration-300 group-hover:scale-125" />
                {x}
              </p>
            ))}
          </SideCard>

          <SideCard title="Event Organizer">
            {[
              [Users, "SIARE Proceedings Platform Global Academic Network"],
              
              [Mail, "info@siare.org"],
              [Globe, "www.siare.org"],
              [Phone, "+91 123 456 7890"],
            ].map(([Icon, text], i) => (
              <p key={i} className="group flex items-center gap-3 text-[12px] text-[#071d4f] mb-2 last:mb-0 transition-all duration-300 hover:translate-x-1 hover:text-[#b9851e]">
                <span className="w-[30px] h-[30px] rounded-full bg-[#fff7e2] text-[#e2ac39] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#e2ac39] group-hover:text-white group-hover:scale-110">
                  <Icon size={15} />
                </span>
                {text}
              </p>
            ))}
          </SideCard>
        </aside>
      </section>

      {/* CTA */}
      <section className="w-full pb-8">
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="group relative overflow-hidden rounded-[10px] px-5 sm:px-7 py-4 flex flex-col md:flex-row items-center justify-between gap-5 text-white bg-[linear-gradient(90deg,#071d4f_0%,#082965_45%,#061b45_100%)] border border-[#143a77] shadow-[0_14px_32px_rgba(7,29,79,0.22)] transition-all duration-500 hover:shadow-[0_18px_42px_rgba(7,29,79,0.34)]">
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-[#e2ac39] bg-[#082965] flex items-center justify-center text-[#e2ac39] transition-all duration-500 ">
                <CalendarDays size={24} />
              </div>

              <p className="font-semibold text-[14px] sm:text-[16px] leading-[1.55] max-w-[480px]">
                Gain valuable insights and learn best practices for ethical and impactful research publishing.
              </p>
            </div>

            <button className="group/btn relative h-[46px] px-8 rounded-[26px] bg-[linear-gradient(180deg,#ffe29a_0%,#eeba47_48%,#c8932a_100%)] border border-[#d4aa35] text-[#071d4f] font-bold text-[13px] uppercase flex items-center gap-3 shadow-[0_10px_24px_rgba(226,172,57,0.28)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:text-white hover:shadow-[0_16px_34px_rgba(226,172,57,0.42)] w-full sm:w-auto">
              REGISTER NOW
              <ArrowRight size={18} className="transition-all duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function BlockTitle({ title, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="text-[#071d4f] font-bold uppercase text-[20px]">{title}</h2>
      <div className="w-[52px] h-[3px] rounded-sm bg-[#e2ac39] mt-2" />
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