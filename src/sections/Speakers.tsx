import { useState } from "react";
import { X } from "lucide-react";

// Current speakers for 2025
const currentSpeakers = [
  {
    name: "Sreekanth K G",
    topic: "English Pronunciation Coach",
    bio: `Sreekanth KG, a Communication and Accent Specialist, is the architect of "Voice of Sreek". Through his "Broken English" initiative, he provides a structured, practice-driven curriculum to a global community of over one million followers, integrating core linguistic principles with real-world application.`,
    image: "/speakers/sreekanth.jpeg",
  },
  {
    name: "Akhil R",
    topic: "Science Educator & Content Creator",
    bio: `Akhil R is the creative force behind "Scientific Thinking 2357," a thriving science-focused digital platform based in Ernakulam, India. He is known for translating intricate theories into relatable insights for learners of all ages, using short-form content to demystify science through logic and evidence.`,
    image: "/speakers/akhil.jpeg",
  },
  {
    name: "Chai Couple",
    topic: "Entrepreneurs",
    bio: "From corporate careers abroad to a shared dream brewed over tea, Sreelakshmi and Saran are the hearts behind The Chai Couple. Through their signature bun maska and a community of over 159K, they prove that entrepreneurship is rooted in courage and connection.",
    image: "/speakers/chai_couple.jpeg",
  },
  {
    name: "Christo Xavier",
    topic: "Music Composer",
    bio: "Christo Xavier is an Indian music composer and singer best known for his atmospheric scores in Malayalam cinema. He gained widespread acclaim and a Kerala State Film Award for his innovative work on the 2024 film Bramayugam.",
    image: "/speakers/christo.jpeg",
  },
  {
    name: "Coming Soon",
    topic: "Speaker Announcement",
    bio: "Stay tuned as we reveal more inspiring voices who will share transformative ideas worth spreading.",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Coming Soon",
    topic: "Speaker Announcement",
    bio: "Stay tuned as we reveal more inspiring voices who will share transformative ideas worth spreading.",
    image: "/speakers/placeholder.jpg",
  },
];

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof currentSpeakers)[0] | null
  >(null);

  const openModal = (speaker: (typeof currentSpeakers)[0]) => {
    if (speaker.name !== "Coming Soon") {
      setSelectedSpeaker(speaker);
    }
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section
      className="relative z-[70] w-screen py-10 flex flex-col justify-center px-[6vw]"
      id="speakers"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src="/speakers_corridor.jpg"
          alt="Lineup"
          className="w-full h-full object-cover object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className="headline-lg text-tedx-white mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            THE <span className="text-tedx-red">LINEUP</span>
          </h2>
          <p
            className="body-text max-w-xl mx-auto text-tedx-white/80"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Visionaries, innovators, and changemakers ready to share ideas that
            transform.
            <span className="text-tedx-red font-semibold">
              {" "}
              Stay tuned as we reveal each extraordinary voice.
            </span>
          </p>
        </div>
        {/* Speakers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {currentSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className={`speaker-card group ${
                speaker.name !== "Coming Soon"
                  ? "cursor-pointer"
                  : "cursor-default"
              }`}
              onClick={() => openModal(speaker)}
              data-aos="zoom-in"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 aspect-square bg-gray-900">
                {speaker.name === "Coming Soon" ? (
                  <div className="w-full h-full flex items-center justify-center bg-tedx-black/50 border border-tedx-white/20">
                    <div className="text-center">
                      <span className="text-tedx-white/30 text-3xl sm:text-4xl mb-2 block">
                        ?
                      </span>
                      <div className="flex justify-center gap-1">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tedx-red rounded-full animate-pulse"></span>
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tedx-red/60 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tedx-red/40 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-tedx-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
                        Click to Read More
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-sora font-semibold text-tedx-white mb-1 sm:mb-2 text-sm sm:text-base">
                  {speaker.name}
                </h3>
                <p className="text-tedx-red text-xs sm:text-sm font-medium mb-1">
                  {speaker.topic}
                </p>
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
            className="bg-tedx-charcoal border border-tedx-white/20 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-sora font-bold text-2xl text-tedx-white mb-1">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-tedx-red font-medium">
                    {selectedSpeaker.topic}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-tedx-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-tedx-white" />
                </button>
              </div>
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-900">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-tedx-gray leading-relaxed">
                {selectedSpeaker.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
