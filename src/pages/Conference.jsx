import {
  CalendarDays, MapPin, Users, Target, CheckCircle, Download,
  Share2, ArrowRight, Settings, Building2, Cpu, Laptop,
  TrendingUp, HeartPulse, Leaf, MoreHorizontal, Mail, Phone, Globe
} from "lucide-react";
import conferenceImg from "../assets/conferencebg.png";
import { Link } from "react-router-dom";

export default function EventDetailsMiddle() {
  return (
    <main className="w-full bg-white">

      {/* HERO */}
    <section
  className="
    relative
    bg-[#061b45]
    overflow-hidden

    min-h-[420px]
    max-[670px]:min-h-[560px]
    max-[480px]:min-h-[620px]
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
      {/* Date Box */}
      <div
        className="
          w-[60px]
          h-[90px]

          max-[670px]:w-[58px]
          max-[670px]:h-[84px]

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
        <CalendarDays size={22} />

        <span className="text-[14px] max-[670px]:text-[13px] leading-none mt-1">
          15-17
        </span>

        <span className="text-[13px] max-[670px]:text-[12px] mt-1">
          JUL
        </span>

        <span className="text-[14px] max-[670px]:text-[13px]">
          2025
        </span>
      </div>

      {/* Content */}
      <div className="w-full max-w-[680px]">

        <p
          className="
            text-white
            text-[12px]
            max-[670px]:text-[11px]

            font-medium
            uppercase

            flex items-center gap-2

            mb-1
          "
        >
          <CalendarDays size={15} />
          International Conference
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
          International Conference on
          <br />
          Engineering & Technology (ICET 2025)
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
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Global Event
          </span>

          <span className="flex items-center gap-2">
            <Users size={18} />
            In-Person Event
          </span>
        </div>

        <p
          className="
            text-white/90

            text-[13px]
            max-[670px]:text-[12px]

            leading-[1.7]

            mt-3

            max-w-[420px]
            max-[670px]:max-w-full
          "
        >
          Bringing together global researchers, industry experts, and innovators
          to explore the latest advancements and future directions in engineering
          and applied technologies.
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
            <Download
              size={16}
              className="transition-all duration-300 group-hover:translate-y-[2px]"
            />

            DOWNLOAD BROCHURE
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
              <div key={i} className="p-5 flex gap-3 border-r last:border-r-0 border-[#dce3ee]">
                <Icon className="text-[#0d6efd] shrink-0" size={28} />
                <div>
                  <p className="text-[11px] font-bold text-[#071d4f] uppercase">{title}</p>
                  <p className="text-[13px] font-bold text-[#071d4f] mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full max-w-[1240px] mx-auto px-6 py-7 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <BlockTitle title="About The Event" />
          <p className="text-[#071d4f] text-[14px] leading-[1.65] mb-4">
            The International Conference on Engineering & Technology (ICET 2025)
            aims to provide a premier platform for researchers, academicians,
            industry professionals, and students to share their knowledge,
            innovations, and experiences in all areas of engineering and technology.
          </p>
          <p className="text-[#071d4f] text-[14px] leading-[1.65]">
            The conference will feature keynote speeches, technical sessions,
            panel discussions, workshops, and networking opportunities designed
            to foster collaboration and drive technological advancement for a
            sustainable future.
          </p>

          <BlockTitle title="Conference Themes" className="mt-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["Mechanical Engineering", "Design, manufacturing, materials, and thermodynamics.", Settings, "text-[#0d6efd]"],
              ["Civil & Structural Engineering", "Sustainable infrastructure, construction, and structural systems.", Building2, "text-[#43aa37]"],
              ["Electrical & Electronics Engineering", "Power systems, circuits, communication, and electronics.", Cpu, "text-[#7c3aed]"],
              ["Computer Science & IT", "AI, machine learning, software systems, and cybersecurity.", Laptop, "text-[#ff7a1a]"],
              ["Engineering Management", "Project management, operations, and engineering economics.", TrendingUp, "text-[#ff7a1a]"],
              ["Biomedical Engineering", "Medical devices, biomaterials, and health technologies.", HeartPulse, "text-[#ff2e2e]"],
              ["Environmental Engineering", "Clean energy, climate change, and sustainable environment.", Leaf, "text-[#22a447]"],
              ["Emerging Technologies", "IoT, robotics, blockchain, and innovative technologies.", MoreHorizontal, "text-[#0d6efd]"],
            ].map(([t, d, Icon, color], i) => (
              <div key={i} className="border border-[#dce3ee] rounded-[8px] p-4 text-center hover:-translate-y-1 hover:shadow-lg transition bg-white">
                <Icon size={36} className={`${color} mx-auto mb-3`} />
                <h4 className="text-[#071d4f] text-[13px] font-bold leading-tight">{t}</h4>
                <p className="text-[#334968] text-[11px] leading-[1.5] mt-2">{d}</p>
              </div>
            ))}
          </div>

          <BlockTitle title="Keynote Speakers" className="mt-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Dr. Robert Anderson", "Dr. Ananya Sharma", "Dr. Kenji Tanaka", "Dr. Maria Gonzalez"].map((n, i) => (
              <div key={i} className="border border-[#dce3ee] rounded-[8px] overflow-hidden bg-white text-center">
                <img src={`https://randomuser.me/api/portraits/${i === 1 || i === 3 ? "women" : "men"}/${30 + i}.jpg`} className="w-full h-[120px] object-cover" />
                <div className="p-3">
                  <h4 className="text-[#071d4f] text-[12px] font-bold">{n}</h4>
                  <p className="text-[#334968] text-[10px] mt-1">University Expert</p>
                  <p className="text-[#071d4f] text-[10px] mt-2">Topic: Innovation Trends</p>
                </div>
              </div>
            ))}
          </div>

          <BlockTitle title="Venue Information" className="mt-8" />
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800" className="rounded-[8px] h-[190px] w-full object-cover" />
            <div>
              <h4 className="text-[#071d4f] font-bold text-[15px] mb-2">Global Convention Centre</h4>
              <p className="text-[#334968] text-[13px] mb-3">A world-class venue with modern facilities and excellent connectivity.</p>
              {["State-of-the-art conference facilities", "High-speed internet connectivity", "Accessible location with transport links", "Nearby accommodation and dining options"].map((x, i) => (
                <p key={i} className="text-[#071d4f] text-[12px] mb-1 flex gap-2"><CheckCircle size={14} className="text-[#43aa37]" /> {x}</p>
              ))}
              <button className="mt-3 h-[38px] px-5 border border-[#0d6efd] text-[#0d6efd] rounded-[6px] text-[12px] font-bold flex items-center gap-2">
                VIEW VENUE DETAILS <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-5">
          <SideCard title="Registration Details">
            {["Early Bird Registration|Until 15 May, 2025", "Standard Registration|16 May - 30 Jun, 2025", "Late Registration|01 Jul - 10 Jul, 2025"].map((x, i) => {
              const [a, b] = x.split("|");
              return (
                <div key={i} className="border border-[#dce3ee] rounded-[8px] p-4 flex gap-3 mb-3">
                  <CalendarDays className={i === 0 ? "text-[#43aa37]" : i === 1 ? "text-[#0d6efd]" : "text-[#ff7a1a]"} />
                  <div>
                    <h4 className="text-[#071d4f] font-bold text-[13px]">{a}</h4>
                    <p className="text-[#334968] text-[12px]">{b}</p>
                  </div>
                </div>
              );
            })}
            <button className="w-full h-[42px] bg-[#43aa37] text-white rounded-[6px] font-bold text-[13px] flex justify-center items-center gap-2">
              REGISTER NOW <ArrowRight size={16} />
            </button>
          </SideCard>

          <SideCard title="Conference Highlights">
            {["Keynote & Plenary Sessions", "Technical Paper Presentations", "Workshops & Tutorials", "Panel Discussions", "Exhibition & Networking", "Best Paper Awards", "Publication Opportunities"].map((x, i) => (
              <p key={i} className="text-[#071d4f] text-[12px] flex gap-2 mb-2">
                <CheckCircle size={14} className="text-[#43aa37]" /> {x}
              </p>
            ))}
          </SideCard>

          <SideCard title="Important Dates">
            {["15 May, 2025 - Early Bird Registration Ends", "30 Jun, 2025 - Standard Registration Ends", "10 Jul, 2025 - Late Registration Ends", "01 Jul, 2025 - Paper Submission Deadline", "15 Jul, 2025 - Conference Begins"].map((x, i) => (
              <p key={i} className="text-[#071d4f] text-[12px] flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full border-2 border-[#43aa37] mt-1 shrink-0" /> {x}
              </p>
            ))}
          </SideCard>

          <SideCard title="Contact Organizer">
            <p className="flex gap-3 text-[12px] text-[#071d4f] mb-3"><Mail size={16} className="text-[#0d6efd]" /> info@icet2025.com</p>
            <p className="flex gap-3 text-[12px] text-[#071d4f] mb-3"><Phone size={16} className="text-[#0d6efd]" /> +1 123 456 7890</p>
            <p className="flex gap-3 text-[12px] text-[#071d4f]"><Globe size={16} className="text-[#0d6efd]" /> www.icet2025.com</p>
          </SideCard>
        </aside>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1240px] mx-auto px-6 pb-8">
        <div className="bg-[#071d4f] rounded-[10px] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <p className="font-bold text-[16px]">Be part of ICET 2025 and contribute to shaping the future of engineering and technology.</p>
          <button className="h-[44px] px-8 rounded-[6px] bg-[#43aa37] font-bold flex items-center gap-2">
            REGISTER NOW <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

function BlockTitle({ title, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="text-[#071d4f] font-extrabold uppercase text-[20px]">{title}</h2>
      <div className="w-[42px] h-[3px] bg-[#43aa37] mt-2" />
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