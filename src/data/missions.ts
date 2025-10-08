export interface Mission {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  videoUrl?: string;
  date: string;
  status: "completed" | "upcoming" | "in-progress";
  timeline: {
    phase: string;
    description: string;
    date: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  relatedMissions: string[];
}

export const missions: Mission[] = [
  {
    id: "mars-mission",
    title: "MARS MISSION",
    subtitle: "Making Life Multiplanetary",
    description: "Establishing a self-sustaining city on Mars through advanced rocket technology and spacecraft design.",
    longDescription: "SpaceX believes humanity should become a multiplanetary species by establishing a self-sustaining city on Mars. This ambitious goal drives our innovations in rocket technology and spacecraft design. We're developing the technology and infrastructure needed to transport humans and cargo to Mars, ultimately creating a backup of Earth civilization. The Mars mission represents the culmination of decades of innovation in reusable rocket technology, life support systems, and deep space navigation.",
    image: "/src/assets/planet.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2026-2030",
    status: "in-progress",
    timeline: [
      { phase: "Phase 1", description: "Starship orbital tests", date: "2024-2025" },
      { phase: "Phase 2", description: "Cargo missions to Mars", date: "2026" },
      { phase: "Phase 3", description: "First crewed mission", date: "2028" },
      { phase: "Phase 4", description: "Permanent base establishment", date: "2030+" }
    ],
    specs: [
      { label: "Distance", value: "225M km" },
      { label: "Mission Duration", value: "6-9 months" },
      { label: "Crew Capacity", value: "100 people" },
      { label: "Payload", value: "100+ tons" }
    ],
    relatedMissions: ["starship-test", "dragon-crew"]
  },
  {
    id: "starship-test",
    title: "STARSHIP FLIGHT TEST",
    subtitle: "Next Generation Launch System",
    description: "Revolutionary fully reusable spacecraft designed for missions to Earth orbit, Moon, Mars and beyond.",
    longDescription: "Starship is the world's most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit. Drawing on an extensive history of launch vehicle and engine development programs, SpaceX has been rapidly iterating on the design of Starship with orbital flight tests. The rocket consists of two stages: Super Heavy booster and Starship spacecraft. Both stages are designed to be fully and rapidly reusable.",
    image: "/src/assets/launch.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025",
    status: "upcoming",
    timeline: [
      { phase: "Flight 11", description: "Orbital demonstration", date: "Q1 2025" },
      { phase: "Flight 12", description: "Rapid reusability test", date: "Q2 2025" },
      { phase: "Flight 13", description: "Moon orbit insertion", date: "Q3 2025" }
    ],
    specs: [
      { label: "Height", value: "120 m" },
      { label: "Payload to LEO", value: "100-150 tons" },
      { label: "Engines", value: "33 Raptor (booster)" },
      { label: "Reusability", value: "Fully reusable" }
    ],
    relatedMissions: ["mars-mission", "falcon-heavy"]
  },
  {
    id: "falcon-heavy",
    title: "FALCON HEAVY",
    subtitle: "World's Most Powerful Operational Rocket",
    description: "Dual booster landing capability showcasing precision and reliability in commercial spaceflight.",
    longDescription: "With proven reliability and the world's only reusable orbital class rockets, we provide cost-effective access to space for commercial and government customers worldwide. Our dual booster landing capability showcases the precision and reliability that has made SpaceX the most trusted name in commercial spaceflight. Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, at one-third the cost.",
    image: "/src/assets/dual-landing.jpg",
    date: "2018-Present",
    status: "completed",
    timeline: [
      { phase: "Maiden Flight", description: "First Falcon Heavy launch", date: "Feb 2018" },
      { phase: "First Commercial", description: "Arabsat-6A mission", date: "Apr 2019" },
      { phase: "STP-2", description: "Complex multi-orbit mission", date: "Jun 2019" },
      { phase: "Ongoing", description: "Regular commercial launches", date: "2020-Present" }
    ],
    specs: [
      { label: "Payload to LEO", value: "63.8 tons" },
      { label: "Payload to GTO", value: "26.7 tons" },
      { label: "Payload to Mars", value: "16.8 tons" },
      { label: "Total Thrust", value: "5.1M lbf" }
    ],
    relatedMissions: ["starship-test", "dragon-crew"]
  },
  {
    id: "dragon-crew",
    title: "CREW DRAGON",
    subtitle: "Advancing Human Spaceflight",
    description: "The first private spacecraft to take humans to the International Space Station.",
    longDescription: "Dragon is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the International Space Station. Dragon has completed dozens of missions to the ISS, carrying both cargo and crew safely to orbit and back. The spacecraft features modern touchscreen controls, environmental control and life support systems, and the ability to autonomously dock with the ISS.",
    image: "/src/assets/astronaut.jpg",
    date: "2020-Present",
    status: "completed",
    timeline: [
      { phase: "Demo-1", description: "Uncrewed test flight", date: "Mar 2019" },
      { phase: "Demo-2", description: "First crewed test", date: "May 2020" },
      { phase: "Crew-1", description: "First operational mission", date: "Nov 2020" },
      { phase: "Ongoing", description: "Regular crew rotations", date: "2020-Present" }
    ],
    specs: [
      { label: "Crew Capacity", value: "7 people" },
      { label: "Cargo Capacity", value: "6,000 kg" },
      { label: "Pressurized Volume", value: "9.3 m³" },
      { label: "Launch Escape", value: "SuperDraco engines" }
    ],
    relatedMissions: ["falcon-heavy", "mars-mission"]
  },
  {
    id: "starlink",
    title: "STARLINK",
    subtitle: "High-Speed Internet from Space",
    description: "World's first and largest satellite constellation delivering broadband internet globally.",
    longDescription: "Starlink is the world's first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more. With thousands of satellites in orbit and growing, Starlink provides high-speed internet to underserved areas around the globe. The constellation operates at much lower altitudes than traditional satellites, reducing latency and providing a better user experience.",
    image: "/src/assets/starlink.jpg",
    date: "2019-Present",
    status: "in-progress",
    timeline: [
      { phase: "Phase 1", description: "Initial constellation", date: "2019-2021" },
      { phase: "Phase 2", description: "Global coverage", date: "2022-2023" },
      { phase: "Phase 3", description: "Gen2 satellites", date: "2024" },
      { phase: "Phase 4", description: "Mars connectivity", date: "2026+" }
    ],
    specs: [
      { label: "Satellites", value: "5,000+" },
      { label: "Altitude", value: "340-550 km" },
      { label: "Speed", value: "50-200 Mbps" },
      { label: "Latency", value: "20-40 ms" }
    ],
    relatedMissions: ["starship-test", "falcon-heavy"]
  }
];

export const getMissionById = (id: string): Mission | undefined => {
  return missions.find(mission => mission.id === id);
};

export const getRelatedMissions = (missionId: string): Mission[] => {
  const mission = getMissionById(missionId);
  if (!mission) return [];
  
  return mission.relatedMissions
    .map(id => getMissionById(id))
    .filter((m): m is Mission => m !== undefined)
    .slice(0, 3);
};
