import { useState } from "react";
import { X } from "lucide-react";

const previousSpeakers = [
  // Previous TEDxMEC Speakers from past events
  {
    name: "Deepak Dev",
    designation: "Music Composer and Producer",
    image: "/PrevSpeakers/Deepak.webp",
    description:
      "Deepak Dev, a renowned composer in Malayalam and South Indian cinema, is celebrated for blending Indian traditions with modern sounds - a fusion that has earned him multiple awards, including the Kerala State Film Award for Best Background Score.",
  },
  {
    name: "Alphons Joseph",
    designation: "Music Director",
    image: "/PrevSpeakers/Alphons.webp",
    description:
      "Alphons Joseph, a versatile music director in Malayalam cinema, is redefining playback music through his expertise in Carnatic and Western styles. As a guitarist, singer, and composer, his innovative and soulful works have carved out a unique niche in the industry.",
  },
  {
    name: "Advin Roy Netto",
    designation: "UI/UX Designer, Google",
    image: "/PrevSpeakers/Advin.webp",
    description:
      `Advin Roy Netto, a UI/UX designer at Google, an educator, and a social media influencer, inspires many with his resilience and determination. His "Fixing the Broken" series reflects his dedication to social change through creative solutions.`,
  },
  {
    name: "Jilu Joseph",
    designation: "CEO, Webandcrafts",
    image: "/PrevSpeakers/Jilu.webp",
    description:
      "Jilu Joseph, CEO of Webandcrafts, has revolutionized digital marketing for global brands like Lulu, IKEA, and VStar. Her leadership has reshaped industries, driving transformation with vision and impact.",
  },
  {
    name: "Manas Madhu",
    designation: "Entrepreneur, Co-founder of Beyond Snack",
    image: "/PrevSpeakers/Manas.webp",
    description:
      "Manas Madhu, co-founder of Beyond Snack, was the first to secure a deal with two sharks on Shark Tank India. He promotes healthy eating, sustainability, and entrepreneurship.",
  },
  {
    name: "Siddhi Mahajankatti",
    designation: "Actor and Data Scientist",
    image: "/PrevSpeakers/Siddhi.webp",
    description:
      "Siddhi Mahajankatti, an actor, dancer, anchor and data scientist, debuted in 2015 with the play 'Charandas Chor' and gained fame with the 2016 Malayalam film 'Aanandham.'",
  },
  {
    name: "Chitra Iyer",
    designation: "Singer",
    image: "/PrevSpeakers/Chitra.webp",
    description:
      "Chitra Iyer, a renowned playback singer in the Malayalam film industry, trained in Carnatic and Hindustani music, is known for her work with the duo Bernie and Ignatius and for her songs in Swapnakoodu and Chronic Bachelor.",
  },
  {
    name: "Nikhil Gopalakrishnan",
    designation: "CEO of Pentad Securities",
    image: "/PrevSpeakers/Nikhil.webp",
    description:
      "Nikhil Gopalakrishnan, the visionary behind Money Talks with over three lakh subscribers, is also the CEO of Pentad Securities and a respected speaker known for promoting financial literacy among Malayalis globally.",
  },
  {
    name: "Sachin Warrier",
    designation: "Playback Singer and Composer",
    image: "/PrevSpeakers/Sachin.webp",
    description:
      "Sachin Warrier is a popular playback singer and composer in Malayalam cinema, known for hits such as 'Muthuchippi Poloru' from Thattathin Marayathu. He also leads his own band, SWAY.",
  },
  {
    name: "Khyrunnisa A",
    designation: "Writer",
    image: "/PrevSpeakers/Khyrunnisa.webp",
    description:
      "Khyrunnisa A, a full-time writer based in Thiruvananthapuram, is an award-winning author of children's and adult fiction, best known for creating the comic character Butterfingers in Tinkle.",
  },
  {
    name: "Vishak Nair",
    designation: "Actor",
    image: "/PrevSpeakers/Vishak.webp",
    description:
      "Vishak Nair, one of Kerala's most charismatic young actors, gained recognition with his debut performance in the 2016 film Aanandam. He also stars in the title role in the series Kili.",
  },
  {
    name: "Nisthar Sait",
    designation: "Actor",
    image: "/PrevSpeakers/Nisthar.webp",
    description:
      "Nisthar Sait, an acclaimed Indian actor, is known for his roles in Naranathu Bhranthan, the award-winning Ozhivudivasathe Kali (2015), Varathan, and Bheeshma Parvam.",
  },
  {
    name: "Janaki Easwar",
    designation: "Singer and Songwriter",
    image: "/PrevSpeakers/Janaki.webp",
    description:
      "Thirteen-year-old Janaki Easwar made history in August 2021 as the youngest Indian contestant on The Voice Australia. A talented singer and songwriter, her debut single, Clown, was featured in the 2021 International Songwriting Competition, while I've Been Waiting was highlighted in Rolling Stone India.",
  },
  {
    name: "Naveen Richard",
    designation: "Comedian and Actor",
    image: "/PrevSpeakers/Naveen.webp",
    description:
      "Naveen Richard, one of India's most versatile comedians, web series writers, and actors, is known for his web series Star Boyz, Better Life Foundation (BLF), Pushpavalli (2017), Die Trying (2018), and Don't Make That Face.",
  },
  {
    name: "Soorya Krishnamoorthy",
    designation: "Founder-Director of SOORYA Stage and Film Society",
    image: "/PrevSpeakers/Soorya.webp",
    description:
      "Soorya Krishnamoorthy is the founder-director of the SOORYA Stage and Film Society who organizes India's longest and one of its most prestigious cultural events, The Soorya Festival.",
  },
  // Current list speakers
  {
    name: "MUFEED V H",
    designation: "AI Engineer & Cybersecurity Specialist",
    image: "/PrevSpeakers/mufeed_vh.jpg.jpeg",
    description:
      "Mufeed V H is the creator of Devika and CEO and Co-founder of Winfunc (YC S24), where he brings AI and cybersecurity together. A WorldSkills representative and BRICS medallist, he has reviewed over 300 CVEs and built a strong track record in responsible disclosure.",
  },
  {
    name: "DR. V PILLAY",
    designation: "Medical Toxicologist & Forensic Medicine Specialist",
    image: "/PrevSpeakers/v_v_pillay.jpg.jpeg",
    description:
      "Dr. V. V. Pillay is a distinguished medical toxicologist and forensic expert, and author of Modern Medical Toxicology. Known for his work on major poisoning cases, including those featured in Curry and Cyanide, he has also led the Indian Society of Toxicology.",
  },
  {
    name: "NAYANA SHYAM",
    designation: "Director, Actor & Writer",
    image: "/PrevSpeakers/nayana_shyam.jpg.jpeg",
    description:
      "Nayana Shyam is a director, actor, and writer shaping digital storytelling. From the widely viewed Fashion Conversations With Mom to series like Firsts and Adulting (Season 2), she has built a dynamic portfolio, later creating Sisterhood with TVF after her time at Netflix.",
  },
  {
    name: "GOKUL GOPALAKRISHNAN",
    designation: "Comic Artist & Motor Vehicles Inspector",
    image: "/PrevSpeakers/gokul_gopalakrishnan.png",
    description:
      "Gokul Gopalakrishnan is a comic artist and motor vehicles inspector best known for his long-running strip Small Talk in The New Indian Express. His work spans leading national publications and India’s alternative comics scene.",
  },
  {
    name: "ANAND MADHUSOODANAN",
    designation: "Musician & Film Composer",
    image: "/PrevSpeakers/anand_madhu.jpg.jpeg",
    description:
      "Anand Madhusoodanan is a Malayalam film composer who debuted with Molly Aunty Rocks (2012) and has since scored over a dozen films, including popular collaborations with Ranjith Sankar such as Pretham and Njan Marykutty.",
  },
];

export default function PreviousSpeakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof previousSpeakers)[0] | null
  >(null);

  const openModal = (speaker: (typeof previousSpeakers)[0]) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section
      className="relative z-[70] w-screen py-10 flex flex-col justify-center px-[6vw]"
      id="previous-speakers"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <img
          src="/experience_stairwell.jpg"
          alt="Previous Speakers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/90 via-tedx-black/50 to-tedx-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2
            className="headline-lg text-tedx-white mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            PREVIOUS <span className="text-tedx-red">SPEAKERS</span>
          </h2>
          <p
            className="body-text max-w-xl mx-auto text-tedx-white/80"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Meet the inspiring voices who have graced our stage and continue to
            spread ideas worth sharing—from past TEDxMEC events to upcoming
            talks.
          </p>
        </div>
        {/* Speakers Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {previousSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="speaker-card group cursor-pointer"
              onClick={() => openModal(speaker)}
              data-aos="zoom-in"
              data-aos-delay={(idx % 5) * 100}
            >
              <div className="relative overflow-hidden rounded-lg mb-2 aspect-square bg-gray-900">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-tedx-red text-white px-4 py-2 rounded-md text-sm font-medium">
                    Click to Read More
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sora font-semibold text-tedx-white text-sm mb-1">
                  {speaker.name}
                </h3>
                {speaker.designation && (
                  <p className="text-tedx-red text-xs font-medium">
                    {speaker.designation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
      {/* Modal */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-sora font-bold text-2xl text-tedx-black">
                    {selectedSpeaker.name}
                  </h3>
                  {selectedSpeaker.designation && (
                    <p className="text-tedx-red font-medium mt-1">
                      {selectedSpeaker.designation}
                    </p>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-tedx-charcoal" />
                </button>
              </div>
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {selectedSpeaker.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
