import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TicketFormPage() {
  const ticketCategories = [
    {
      id: "mecians",
      name: "MECians",
      price: 899,
      description: "Current MEC students",
    },
    {
      id: "student",
      name: "Students",
      price: 1099,
      description: "students",
    },
    {
      id: "ex-mecians",
      name: "Ex-MECians",
      price: 1299,
      description: "MEC alumni",
    },
    {
      id: "others",
      name: "Others",
      price: 1599,
      description: "General public",
    },
  ];
  useEffect(() => {
    // Load Fillout script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://server.fillout.com/embed/v1/"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tedx-charcoal via-black to-tedx-charcoal">
      {/* Navigation */}
      <div className="relative z-20 w-screen">
        <div className="flex w-screen fixed top-0 left-0 z-[200]">
          <nav className="transition-all flex-grow duration-500 m-5 rounded-[14px] bg-tedx-charcoal/90 backdrop-blur-md border-b border-tedx-white/10">
            <div className="flex items-center justify-center px-10 py-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/tedxmec white.svg"
                  alt="TEDxMEC"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main
        className="container mx-auto px-6 py-12"
        style={{ paddingTop: "120px" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-tedx-white mb-2">
              TEDxMEC <span className="text-tedx-red">2026</span>
            </h2>
            {/* <p className="text-tedx-gray">Select Ticket Category</p> */}
          </div>

          {/* Ticket Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {ticketCategories.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-tedx-darkgray/50 border border-tedx-white/10 rounded-lg p-4 shadow-md hover:border-tedx-white/30 transition-all duration-200"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-tedx-white mb-1">
                    {ticket.name}
                  </h3>
                  <div className="text-2xl font-bold text-tedx-red mb-1">
                    ₹{ticket.price}
                  </div>
                  <p className="text-xs text-tedx-gray">{ticket.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <div className="bg-tedx-white rounded-lg shadow-2xl overflow-hidden">
            <div className="p-4 bg-tedx-charcoal text-center">
              <h3 className="text-lg font-bold text-tedx-white">
                Registration Form
              </h3>
            </div>
            <div
              style={{ width: "100%", height: "500px" }}
              data-fillout-id="3t4aEpUmpYus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
