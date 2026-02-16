const teamMembers = [
  {
    name: "Sahiba",
    role: "Licensee",
    dept: "Leadership",
    image: "/team/Sahiba.png",
  },
  {
    name: "Mary",
    role: "Co-organizer",
    dept: "Leadership",
    image: "/team/Mary John.jpg",
  },
  {
    name: "Sara",
    role: "Head of Operations",
    dept: "Operations",
    image: "/team/Sara.jpg",
  },
  {
    name: "Sheez",
    role: "Events Lead",
    dept: "Events",
    image: "/team/Sheez.jpg",
  },
  {
    name: "Aisha",
    role: "Outreach Head",
    dept: "Outreach",
    image: "/team/Aisha.jpg",
  },
  {
    name: "Theertha",
    role: "Head of Speaker Relations",
    dept: "Speaker",
    image: "/team/Theertha.jpg",
  },
  {
    name: "Liyan",
    role: "Production Head",
    dept: "Production",
    image: "/team/Liyan.jpg",
  },
  {
    name: "Kamala",
    role: "Marketing Head",
    dept: "Marketing",
    image: "/team/Kamala.jpg",
  },
  {
    name: "Jahfar",
    role: "Program Director",
    dept: "Programs",
    image: "/team/jeppu.jpeg",
  },
  {
    name: "Joanna",
    role: "Head of Curation",
    dept: "Curation",
    image: "/team/Joanna.jpg",
  },
  {
    name: "Aaditya",
    role: "Production Head",
    dept: "Production",
    image: "/team/aadithya.jpeg",
  },
  {
    name: "Ijlal",
    role: "Design Head",
    dept: "Design",
    image: "/team/Ijlal.jpg",
  },
  {
    name: "Aibel",
    role: "Head of Creatives",
    dept: "Creatives",
    image: "/team/aibel.jpeg",
  },
  {
    name: "Aaron",
    role: "Tech Lead",
    dept: "Tech",
    image: "/team/AaronGeorgeAbraham.jpg",
  },
  {
    name: "Anagha",
    role: "Content Head",
    dept: "Content",
    image: "/team/Anagha D.jpg",
  },
  {
    name: "Antony",
    role: "Volunteers Lead",
    dept: "Volunteers",
    image: "/team/Antony_.jpg",
  },
  {
    name: "Aadil",
    role: "Speaker Head",
    dept: "Speakers",
    image: "/team/aadil.jpeg",
  },
  {
    name: "Anjali",
    role: "Hospitality Manager",
    dept: "Hospitality",
    image: "/team/Anjali.jpg",
  },
  {
    name: "Nimah",
    role: "Ambience Head",
    dept: "Ambience",
    image: "/team/Nimah.jpg",
  },
];

export default function Team() {
  return (
    <section
      className="relative z-[90] bg-tedx-charcoal py-24 px-[6vw]"
      id="team"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="headline-lg text-tedx-white mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          THE <span className="text-tedx-red">TEAM</span>
        </h2>
        <p
          className="body-text max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Organized by students. Supported by the community. Meet the minds
          behind TEDxMEC 2025.
        </p>
      </div>

      {/* Department Filter */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-12"
        data-aos="fade-up"
        data-aos-delay="300"
      ></div>

      {/* Team Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-card group"
            data-aos="zoom-in"
            data-aos-delay={500 + idx * 50}
          >
            <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="font-sora font-semibold text-tedx-white mb-1 text-sm sm:text-base">
              {member.name}
            </h3>
            <p className="font-mono text-xs text-tedx-red uppercase tracking-wider leading-tight">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
