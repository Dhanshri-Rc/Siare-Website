import {
  CalendarDays, MapPin, Users, Target, CheckCircle, Download,
  Share2, ArrowRight, Settings, Building2, Cpu, Laptop,
  TrendingUp, HeartPulse, Leaf, MoreHorizontal, Mail, Phone, Globe ,   CalendarCheck,
  ClipboardCheck,
} from "lucide-react";
import conferenceImg from "../assets/conferencebg.png";
import { Link } from "react-router-dom";
import conf from "../assets/conf.png"

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
    max-[670px]:min-h-[400px]
    max-[480px]:min-h-[470px]
    max-[344px]:min-h-[505px]
    max-[320px]:min-h-[540px]
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
      py-8 max-[670px]:py-6
    "
  >
    {/* Breadcrumbs */}
    <div
      className="
        text-white/80
        text-[12px] max-[670px]:text-[11px]
        mb-8 max-[670px]:mb-5
        flex flex-wrap items-center gap-2
      "
    >
      <Link to="/" className="hover:text-[#e2ac39] transition-colors duration-300">
        Home
      </Link>

      <span>›</span>

      <Link to="/events" className="hover:text-[#e2ac39] transition-colors duration-300">
        Events
      </Link>

      <span>›</span>
      
            <span>International Conference on Engineering & Technology </span>
    </div>

    <div
      className="
        flex flex-row
        gap-5
        max-[670px]:gap-3
        max-[670px]:items-start
      "
    >
      {/* Date Box */}
      <div
        className="
          w-[60px] h-[90px]
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
      <div className="w-full max-w-[680px] min-w-0">

        <p
          className="
            text-white
            text-[12px] max-[670px]:text-[11px]
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
            max-[670px]:text-[1.28rem]
            max-[420px]:text-[1.08rem]
            font-bold
            leading-[1.15]
            w-full max-w-[550px]
          "
        >
          International Conference on
       
          Engineering & Technology (ICET 2025)
        </h1>

        <div
          className="
            flex flex-wrap
            gap-6 max-[670px]:gap-4
            mt-5 max-[670px]:mt-4
            text-white
            text-[14px] max-[670px]:text-[12px]
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
            text-[13px] max-[670px]:text-[12px]
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
          "
        >
          {/* REGISTER */}
          <button
            className="
              group

              h-[44px]
              px-6 max-[670px]:px-4

              rounded-[8px]

              bg-[linear-gradient(180deg,#eebb48_0%,#d3aa51_55%,#b88922_100%)]

              text-[#eff1f6]

              font-bold
              text-[13px] max-[670px]:text-[11px]

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
              px-6 max-[670px]:px-4

              rounded-[8px]

              border border-white/70

              bg-white/8
              backdrop-blur-sm

              text-white
              font-bold
              text-[13px] max-[670px]:text-[11px]

              flex items-center justify-center gap-2

              transition-all duration-500

              hover:bg-[#d8a73b]
              hover:text-white
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

              max-[670px]:w-[44px]
              max-[670px]:h-[44px]

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
  <div className="w-full xl:max-w-[1150px] lg:max-w-[950px] mx-auto px-5">

    <div
      className="
        bg-white
        rounded-[10px]

        shadow-[0_8px_24px_rgba(0,0,0,.12)]

        border border-[#e5e7eb]

        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6

        overflow-hidden
      "
    >
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
          className="
            group

            relative

            p-5

            flex gap-3

            border-r
            border-b

            lg:border-b-0

            last:border-r-0

            border-[#dce3ee]

            transition-all
            duration-400

            hover:bg-[linear-gradient(180deg,#ffffff_0%,#fffaf0_100%)]

            hover:-translate-y-[3px]

            hover:shadow-[0_14px_28px_rgba(216,167,59,0.12)]

            hover:z-10
          "
        >
          {/* Hover Gold Line */}
          {/* <span
            className="
              absolute
              left-0
              top-0

              h-full
              w-[3px]

              bg-[#d8a73b]

              scale-y-0
              origin-top

              transition-all
              duration-300

              group-hover:scale-y-100
            "
          /> */}

          {/* Icon */}
          <Icon
            size={28}
            className="
              text-[#0d6efd]

              shrink-0

              transition-all
              duration-300

              group-hover:text-[#d8a73b]

              group-hover:scale-110

              group-hover:-rotate-6
            "
          />

          {/* Text */}
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase

                text-[#071d4f]

                transition-all
                duration-300

                group-hover:text-[#b88922]
              "
            >
              {title}
            </p>

            <p
              className="
                text-[13px]
                font-bold

                text-[#071d4f]

                mt-1

                transition-all
                duration-300

                group-hover:translate-x-[2px]
              "
            >
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* CONTENT */}
      <section className="w-full max-w-[1320px] mx-auto
      px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-9 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
      <div>
  <BlockTitle title="About The Event" />

  <div
    className="
      transition-all duration-300
      hover:translate-x-1
    "
  >
    <p className="text-[#041743] text-[14px] leading-[1.65] mb-4 w-full max-w-[610px]">
      The International Conference on Engineering & Technology (ICET 2025)
      aims to provide a premier platform for researchers, academicians,
      industry professionals, and students to share their knowledge,
      innovations, and experiences in all areas of engineering and technology.
    </p>

    <p className="text-[#041743] text-[14px] leading-[1.65] w-full max-w-[610px]">
      The conference will feature keynote speeches, technical sessions,
      panel discussions, workshops, and networking opportunities designed
      to foster collaboration and drive technological advancement for a
      sustainable future.
    </p>
  </div>

  <BlockTitle title="Conference Themes" className="mt-6" />

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      ["Mechanical Engineering", "Design, manufacturing, materials, and thermodynamics.", Settings, "text-[#0d6efd]"],
      ["Civil & Structural Engineering", "Sustainable infrastructure, construction, and structural systems.", Building2, "text-[#d8a73b]"],
      ["Electrical & Electronics Engineering", "Power systems, circuits, communication, and electronics.", Cpu, "text-[#7c3aed]"],
      ["Computer Science & IT", "AI, machine learning, software systems, and cybersecurity.", Laptop, "text-[#ff7a1a]"],
      ["Engineering Management", "Project management, operations, and engineering economics.", TrendingUp, "text-[#ff7a1a]"],
      ["Biomedical Engineering", "Medical devices, biomaterials, and health technologies.", HeartPulse, "text-[#ff2e2e]"],
      ["Environmental Engineering", "Clean energy, climate change, and sustainable environment.", Leaf, "text-[#d8a73b]"],
      ["Emerging Technologies", "IoT, robotics, blockchain, and innovative technologies.", MoreHorizontal, "text-[#0d6efd]"],
    ].map(([t, d, Icon, color], i) => (
      <div
        key={i}
        className="
          group
          border border-[#dce3ee]
          rounded-[8px]
          p-4
          text-center
          bg-white

          transition-all duration-300

          hover:-translate-y-1
          hover:shadow-[0_12px_28px_rgba(216,167,59,0.16)]
          hover:border-[#d8a73b]/70
          hover:bg-[#fffaf0]
        "
      >
        <Icon
          size={36}
          className={`
            ${color}
            mx-auto mb-3

            transition-all duration-300
            group-hover:scale-110
            group-hover:rotate-3
          `}
        />

        <h4 className="text-[#071d4f] text-[13px] font-bold leading-tight transition-all duration-300 group-hover:text-[#b88922]">
          {t}
        </h4>

        <p className="text-[#334968] text-[11px] leading-[1.5] mt-2">
          {d}
        </p>
      </div>
    ))}
  </div>

  <BlockTitle title="Keynote Speakers" className="mt-6" />

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {["Dr. Robert Anderson", "Dr. Ananya Sharma", "Dr. Kenji Tanaka", "Dr. Maria Gonzalez"].map((n, i) => (
      <div
        key={i}
        className="
          group
          border border-[#dce3ee]
          rounded-[8px]
          overflow-hidden
          bg-white
          text-center

          transition-all duration-300

          hover:-translate-y-1
          hover:border-[#d8a73b]/70
          hover:shadow-[0_12px_28px_rgba(216,167,59,0.16)]
        "
      >
        <div className="overflow-hidden">
          <img
            src={`https://randomuser.me/api/portraits/${i === 1 || i === 3 ? "women" : "men"}/${30 + i}.jpg`}
            className="
              w-full h-[120px] object-cover

              transition-all duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-3">
          <h4 className="text-[#071d4f] text-[12px] font-bold transition-all duration-300 group-hover:text-[#b88922]">
            {n}
          </h4>

          <p className="text-[#334968] text-[10px] mt-1">
            University Expert
          </p>

          <p className="text-[#071d4f] text-[10px] mt-2">
            Topic: Innovation Trends
          </p>
        </div>
      </div>
    ))}
  </div>

  <BlockTitle title="Venue Information" className="mt-6" />

  <div className="grid md:grid-cols-2 gap-5 items-center">
    <div className="overflow-hidden rounded-[8px]">
      <img
        src={conf}
        className="
          rounded-[8px]
          h-[200px]
          w-full
          object-cover

          transition-all duration-500
          hover:scale-105
        "
      />
    </div>

    <div>
      <h4 className="text-[#071d4f] font-bold text-[15px] mb-1">
        Global Convention Centre
      </h4>

      <p className="text-[#334968] text-[13px] mb-2">
        A world-class venue with modern facilities and excellent connectivity.
      </p>

      {[
        "State-of-the-art conference facilities",
        "High-speed internet connectivity",
        "Accessible location with transport links",
        "Nearby accommodation and dining options",
      ].map((x, i) => (
        <p
          key={i}
          className="
            group
            text-[#071d4f]
            text-[12px]
            mb-1
            flex gap-2
            transition-all duration-300
            hover:translate-x-1
            hover:text-[#b88922]
          "
        >
          <CheckCircle
            size={14}
            className="
              text-[#d8a73b]
              shrink-0
              transition-all duration-300
              group-hover:scale-125
            "
          />
          {x}
        </p>
      ))}

      <button
        className="
          group
          mt-3
          h-[32px]
          px-6

          border border-[#d8a73b]

          text-[#d8a73b]

          rounded-[6px]

          text-[12px]
          font-medium

          flex items-center gap-2

          transition-all duration-300

          hover:-translate-y-1
          hover:bg-[#d8a73b]
          hover:text-white
          hover:shadow-[0_10px_22px_rgba(216,167,59,0.28)]
        "
      >
        VIEW VENUE DETAILS

        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  </div>
</div>

        {/* SIDEBAR */}
       <aside className="space-y-5">

  {/* Registration Details */}
  <SideCard title="Registration Details">
    {[
      ["Early Bird Registration", "Until 15 May, 2025", CalendarCheck],
      ["Standard Registration", "16 May - 30 Jun, 2025", CalendarDays],
      ["Late Registration", "01 Jul - 10 Jul, 2025", ClipboardCheck],
    ].map(([a, b, Icon], i) => (
      <div
        key={i}
        className="
          group
          border border-[#dce3ee]
          rounded-[8px]
          p-4
          flex gap-3
          mb-3
          bg-white
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#d8a73b]
          hover:bg-[#fffaf0]
          hover:shadow-[0_10px_24px_rgba(216,167,59,0.18)]
        "
      >
        <div
          className="
            w-[38px] h-[38px]
            rounded-full
            bg-[#fff6dc]
            text-[#d8a73b]
            flex items-center justify-center
            shrink-0
            transition-all duration-300
            group-hover:bg-[#d8a73b]
            group-hover:text-white
            group-hover:scale-110
          "
        >
          <Icon size={18} />
        </div>

        <div>
          <h4 className="text-[#071d4f] font-bold text-[13px]">
            {a}
          </h4>
          <p className="text-[#334968] text-[12px] mt-1">
            {b}
          </p>
        </div>
      </div>
    ))}

    <button
      className="
        group
        w-full h-[42px]
        bg-[linear-gradient(180deg,#eebb48_0%,#d8a73b_55%,#b88922_100%)]
        text-white
        rounded-[6px]
        font-bold
        text-[13px]
        flex justify-center items-center gap-2
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_26px_rgba(216,167,59,0.38)]
        hover:bg-[linear-gradient(180deg,#ffd56a_0%,#eebb48_50%,#b88922_100%)]
        active:scale-[0.97]
      "
    >
      REGISTER NOW
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>

    <button
      className="
        group
        w-full h-[42px]
        bg-[#f2f0ec]
        mt-3
        text-[#b88922]
        border border-[#d8a73b]/40
        rounded-[6px]
        font-bold
        text-[13px]
        flex justify-center items-center gap-2
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#d8a73b]
        hover:text-white
        hover:border-[#e5e7eb]
        hover:shadow-[0_10px_22px_rgba(7,29,79,0.22)]
        active:scale-[0.97]
      "
    >
        <Users size={16} />
      GROUP REGISTRATION
      
    </button>
  </SideCard>

  {/* Conference Highlights */}
  <SideCard title="Conference Highlights">
    {[
      "Keynote & Plenary Sessions",
      "Technical Paper Presentations",
      "Workshops & Tutorials",
      "Panel Discussions",
      "Exhibition & Networking",
      "Best Paper Awards",
      "Publication Opportunities",
    ].map((x, i) => (
      <p
        key={i}
        className="
          group
          text-[#071d4f]
          text-[12px]
          flex items-center gap-2
          mb-2
          transition-all duration-300
          hover:translate-x-1
          hover:text-[#b88922]
        "
      >
        <CheckCircle
          size={14}
          className="
            text-[#d8a73b]
            shrink-0
            transition-all duration-300
            group-hover:scale-125
          "
        />
        {x}
      </p>
    ))}
  </SideCard>

  {/* Important Dates */}
  <SideCard title="Important Dates">
    {[
      "15 May, 2025 - Early Bird Registration Ends",
      "30 Jun, 2025 - Standard Registration Ends",
      "10 Jul, 2025 - Late Registration Ends",
      "01 Jul, 2025 - Paper Submission Deadline",
      "15 Jul, 2025 - Conference Begins",
    ].map((x, i) => (
      <p
        key={i}
        className="
          group
          text-[#071d4f]
          text-[12px]
          flex gap-2
          mb-3
          leading-[1.45]
          transition-all duration-300
          hover:translate-x-1
          hover:text-[#b88922]
        "
      >
        <span
          className="
            w-3 h-3
            rounded-full
            border-2 border-[#d8a73b]
            mt-1
            shrink-0
            transition-all duration-300
            group-hover:bg-[#d8a73b]
            group-hover:scale-125
          "
        />
        {x}
      </p>
    ))}
  </SideCard>

  {/* Contact Organizer */}
  <SideCard title="Contact Organizer">
    {[
      [Mail, "info@icet2025.com"],
      [Phone, "+1 123 456 7890"],
      [Globe, "www.icet2025.com"],
    ].map(([Icon, text], i) => (
      <p
        key={i}
        className="
          group
          flex items-center gap-3
          text-[12px]
          text-[#071d4f]
          mb-3 last:mb-0
          transition-all duration-300
          hover:translate-x-1
          hover:text-[#b88922]
        "
      >
        <span
          className="
            w-[30px] h-[30px]
            rounded-full
            bg-[#fff6dc]
            text-[#d8a73b]
            flex items-center justify-center
            shrink-0
            transition-all duration-300
            group-hover:bg-[#d8a73b]
            group-hover:text-white
            group-hover:scale-110
          "
        >
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
  <div
    className="
      w-full
      max-w-[1320px]
      mx-auto
      px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
    "
  >
    <div
      className="
        group

        relative
        overflow-hidden

        rounded-[10px]

        px-5
        sm:px-7

        py-4

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        gap-5

        text-white

        bg-[linear-gradient(90deg,#071d4f_0%,#082965_45%,#061b45_100%)]

        border border-[#143a77]

        shadow-[0_14px_32px_rgba(7,29,79,0.22)]

        transition-all duration-500

        hover:shadow-[0_18px_42px_rgba(7,29,79,0.34)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.08]

          bg-[radial-gradient(circle_at_right,#eeba47_0%,transparent_45%)]

          group-hover:opacity-[0.18]

          transition-all duration-700
        "
      />

      {/* Left */}
      <div className="relative z-10 flex items-center gap-4">

        {/* Icon */}
        <div
          className="
            w-[52px]
            h-[52px]

            rounded-full

            border-2 border-[#eeba47]

            bg-[#082965]

            flex items-center justify-center

            text-[#eeba47]

            shadow-[0_0_22px_rgba(238,186,71,.18)]

            transition-all duration-500

            
          "
        >
          <Users size={24} strokeWidth={2.3} />
        </div>

        {/* Text */}
        <p
          className="
            font-semibold

            text-[14px]
            sm:text-[16px]

            leading-[1.55]

            max-w-[360px]

            transition-all duration-500

            group-hover:translate-x-[2px]
          "
        >
          Be part of ICET 2025 and contribute to shaping
          the future of engineering and technology.
        </p>
      </div>

      {/* Button */}
      <button
        className="
          group/btn

          relative

          h-[46px]

          px-8

          rounded-[26px]

          bg-[linear-gradient(180deg,#ffe29a_0%,#eeba47_50%,#c8932a_100%)]

          border border-[#d8a73b]

          text-[#071d4f]

          font-bold

          text-[13px]
hover:text-white
          uppercase

          flex items-center gap-3

          shadow-[0_10px_24px_rgba(238,186,71,0.28)]

          transition-all duration-500

          hover:-translate-y-1
          hover:scale-[1.03]

          hover:shadow-[0_16px_34px_rgba(238,186,71,0.42)]

          hover:bg-[linear-gradient(180deg,#fff0c0_0%,#eeba47_50%,#b9851e_100%)]

          w-full
          sm:w-auto
        "
      >
         REGISTER NOW
        <ArrowRight
          size={18}
          className="
            transition-all duration-300
            group-hover/btn:translate-x-1
          "
        />

       
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
      <div className="w-[52px] h-[3px] rounded-sm bg-[#d8a73b] mt-2" />
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