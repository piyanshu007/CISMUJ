export interface EventItem {
  id: string;
  code: string;
  year: string;
  date: string;
  title: string;
  category: 'HACKATHON' | 'WORKSHOP' | 'FLAGSHIP' | 'COMPETITION';
  description: string;
  location: string;
  status: 'UPCOMING' | 'ARCHIVED';
  attendees: string;
  image: string;
  highlights: string[];
  registrationUrl: string;
}

export const EVENTS: EventItem[] = [
  {
    "id": "event-01b3b635-8e9c-444d-a48e-98cad057a07e",
    "code": "FLAGSHIP_01",
    "year": "2024",
    "date": "JAN 01",
    "title": "Fostering The Future 7.0",
    "category": "FLAGSHIP",
    "description": "Fostering The Future was the annual flagship talk hosted by IEEE CS, MUJ, where accomplished alumni shared their journey to their current roles in the industry. The event aimed to provide MUJ students with insights into the paths taken by successful alumni and the challenges they overcame to reach their goals. Tanuj Sahal, a software engineer at Microsoft and an alumnus of Manipal University, spoke about his transition from college to working at a global MNC. He shared valuable advice on approaching internships, exploring technical domains, and preparing for career growth. The seminar was conducted online, offering students a unique opportunity to learn from someone who had been through the journey they are about to begin.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "500+ Participants",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/adc972816f458f81e629ed7363265cd87d113d85-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-02c24b30-40c7-4ea3-8e0f-f7ba99f16733",
    "code": "WORKSHOP_02",
    "year": "2024",
    "date": "FEB 02",
    "title": "Vision IAS Workshop",
    "category": "WORKSHOP",
    "description": "The Vision IAS Workshop was a transformative and insightful event designed to guide aspiring candidates in their pursuit of success in competitive government examinations. It served as a comprehensive platform to address the multifaceted challenges of exam preparation while equipping participants with the tools and techniques necessary to navigate this demanding journey.\nThe workshop placed significant emphasis on essential strategies, starting with the importance of mastering time management. Participants were introduced to practical approaches for effectively allocating their study hours, prioritizing key subjects, and maintaining a consistent routine. This focus on time management underscored its role as a cornerstone for balancing the extensive syllabus and maintaining a healthy study-life equilibrium. Alongside this, the session highlighted the art of creating and adhering to effective study plans, helping aspirants craft personalized schedules that aligned with their unique learning styles and goals.\nOne of the most valuable aspects of the workshop was its focus on overcoming challenges commonly encountered during preparation. Topics such as dealing with stress, staying motivated during long preparation periods, and managing distractions were addressed with actionable advice. The session encouraged participants to view setbacks as stepping stones and equipped them with the mental tools to persevere, even under pressure.\nLed by an experienced mentor, the workshop provided attendees with unparalleled access to firsthand insights. The mentor, drawing from years of expertise and personal success stories, shared anecdotes and lessons that resonated deeply with the participants. These stories were not just motivational but served as practical examples of how challenges could be transformed into opportunities with the right mindset and approach.\nThe interactive Q&A segment emerged as one of the workshop's most engaging elements. This open forum allowed attendees to directly interact with the mentor, raising their queries and receiving tailored advice on their specific concerns. The discussions were rich and dynamic, covering a wide range of topics such as subject-specific preparation tips, exam-day strategies, and ways to maintain mental clarity and focus. The personalized nature of the guidance ensured that participants left with clarity and actionable next steps for their preparation.\nInclusivity and confidence-building were at the heart of the workshop's philosophy. By creating a welcoming and supportive environment, the event ensured that aspirants from diverse educational and social backgrounds felt empowered to participate fully. This focus on inclusivity encouraged peer-to-peer learning, fostering a sense of community among participants. Many attendees found inspiration in the shared experiences of others, realizing that they were not alone in their struggles and aspirations.\nMoreover, the workshop delved into the often-overlooked emotional aspects of preparation. It emphasized the significance of self-belief and mental resilience, reminding participants that success is as much about inner strength as it is about academic rigor. Through interactive exercises, motivational speeches, and the mentor’s compassionate guidance, the event instilled a sense of confidence and optimism in every participant.\nBy addressing both the technical and emotional dimensions of exam preparation, the Vision IAS Workshop became more than just an instructional session—it was a catalyst for personal and academic growth. Participants left the event with renewed determination, a clearer sense of direction, and a strengthened belief in their ability to achieve their goals. The workshop’s impact was not only immediate but also long-lasting, providing a solid foundation for continued success in their preparation journey.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "/events/vision_ias.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Live Interactive Coding",
      "Real-world Applied Use Cases"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-03061ff1-f7ec-4cd0-8873-3e9e9b6da371",
    "code": "COMPETITION_03",
    "year": "2024",
    "date": "MAR 03",
    "title": "INTERN FAIR",
    "category": "COMPETITION",
    "description": "INTERN FAIR was an event that provided Internships across different technical and non-technical roles. Over 513 participants registered for the Intern Fair. The beneficiaries were given the choice to choose from the following domains :  1.) Technical Domains – Machine Learning, Full Stack Development, Front End Development.  2.) Non-technical domains – Business Development The company that we partnered with, was Immovidu Technologies, and they provided the above listed Internship roles with a generous stipend that went upto 30,000 Rs, and the students who had applied were also given the choice of working either through the online mode, or remotely at their Head Office, situated in Bangalore. The partner company had their own criteria that they were using to shortlist and test the technical and inter-personal skills of the students that had applied for the INTERN FAIR, to select the candidates with the most relevant skillsets that suited their respective roles.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/8cb53cae277eeeeb47a9297d83fc63b0722499f7-320x320.png",
    "highlights": [
      "Certified Participation & Opportunities",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-03513dfd-97f7-4f82-bc06-b61e69ab5674",
    "code": "COMPETITION_04",
    "year": "2024",
    "date": "APR 04",
    "title": "21 Days Of Code",
    "category": "COMPETITION",
    "description": "Coders of MUJ!👩🏻‍💻✨ Tired of vacation turning you into a couch potato?🫣 Time to swap those chips for code snippetts! 🤓 IEEE SB in partnership with Coding Ninjas brings you 🥁 🎯 21 DAYS OF CODE 🎯 Event starts with the exclusive WEBINAR by Coding Ninjas on June 7th !🎙🌟 🗓 Timeline :9th to 30th June 🚨 Event details : 👉Code in any language of your choice 👉Recap quizzes 👉Mentoring and doubt clearing sessions 👉Project at the end Mode :💻Online IDE of Coding Ninjas Certificates and exciting goodies from Coding Ninjas upon completion!🎉🎁 Register now: https://tinyurl.com/z39w9yps Mark your calendars, and buckle up for 21 days of intensive coding brilliance!🤩🚀 IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/f8dc5a053b6a05665cb042f3245af1ba91855dfe-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-036707f8-40bf-49ab-b85b-328a3f10b901",
    "code": "COMPETITION_05",
    "year": "2024",
    "date": "MAY 05",
    "title": "Cosmic Canvas",
    "category": "COMPETITION",
    "description": "Cosmic Canvas featured a captivating poster-making competition centered around the theme of a sci-fi movie. Participants were encouraged to unleash their creativity and explore sub-themes like space, time, robots, artificial intelligence, aliens, and alternate reality.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/dbd713fc4cf8acd9c55cf25ec47e83fe1427f004-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-07f161b3-ed40-4666-8ad1-7724e471e0f7",
    "code": "COMPETITION_06",
    "year": "2024",
    "date": "JUN 06",
    "title": "Snatch",
    "category": "COMPETITION",
    "description": "Snatch👾 is a fast-paced coding battle where participants solve Data Structures and Algorithms challenges to capture flags and climb the leaderboard. 🚀 But there’s a twist—special power-ups are hidden along the way, giving players extra time, hints, or bonus points to outsmart their rivals. Each problem you crack not only tests your logic and coding skills but also brings you closer to victory. ⚡ It’s not just about speed, but strategy—knowing when to use your power-ups and how to outwit the competition. Only the smartest coders will snatch the prize! 🏆",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/37d2f7dd127780bba57e4350364ab2f5610223e9-904x1280.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-0957c635-d508-4d7a-bdf3-4d57021359f6",
    "code": "FLAGSHIP_07",
    "year": "2024",
    "date": "JUL 07",
    "title": "The Confluence",
    "category": "FLAGSHIP",
    "description": "The Confluence at Elysium 2.0 brought together a diverse lineup of speakers who delivered powerful, honest, and engaging sessions focused on technology, communication, identity, and impact. From industry insights and startup realities to discussions on self-awareness and influence, each speaker created an atmosphere of open dialogue rather than formal lecturing. The audience actively participated, asked questions, and engaged in discussions that went beyond the surface level. The session successfully bridged the gap between classroom learning and real-world application, leaving attendees with clarity, motivation, and actionable insights. The event witnessed strong participation and enthusiastic interaction, making it one of the most impactful segments of Elysium 2.0.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e36dc1f479cc3dcac074b0ed9323ca0386492dd1-1080x1350.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-0bb9583c-05c7-47bb-8b3a-5f34482cdf1b",
    "code": "COMPETITION_08",
    "year": "2024",
    "date": "AUG 08",
    "title": "QUIZSCAPE",
    "category": "COMPETITION",
    "description": "QUIZSCAPE was a fun plus brainteasing event. They participated in  teams of two-three people.  The event was divided in three rounds. The first round is a Trivia Round in which participants were asked tricky and confusing tech and non-tech questions, and then were shortlisted. Second round was a Rebus round- which means not by words but by things. Again, the elimination will occur for next round. Final round was a crossword between the two final teams",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/bf26159c0c7c048cce1f5e3e7d3bdd0a6d8d3243-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-0c77cb33-8fc1-470b-be3c-7ce995142319",
    "code": "COMPETITION_09",
    "year": "2024",
    "date": "SEP 09",
    "title": "FAIL.exe",
    "category": "COMPETITION",
    "description": "FAIL.exe – Startup Revival Hackathon is an overnight innovation challenge where teams analyze failed or struggling startups and rebuild them into scalable, market-ready solutions. The event unfolds across three rounds: Round 1 focuses on research, failure analysis, and strategy formulation through a PPT submission; Round 2 involves developing a functional, deployable prototype and submitting it via GitHub, and Round 3 features a live pitch and demo in front of judges, followed by Q&A. Participants are evaluated on technical implementation, UI/UX improvements, business model viability, market relevance, and the practicality of their revival strategy. The goal isn’t just to build something new but to rethink, redesign, and relaunch ideas stronger than before",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/4f55061e657f404d80b66d748e13001fc5efb5b0-1414x2000.png",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-11ea09e4-e80d-4518-8ea5-eb4be61a2e94",
    "code": "COMPETITION_10",
    "year": "2024",
    "date": "OCT 10",
    "title": "BREACHED 2.0 - ONLINE CRYPTIC HUNT",
    "category": "COMPETITION",
    "description": "Breached 2.0 was a cryptic hunt which is a virtual treasure hunt in which some questions and possibly a few hints are given, and participants must figure out the answers. You can expect to search the internet for clues, use cyphers, extract metadata, or simply figure out the pop culture reference. The Tech Hunt is an online technical hunt based on various aspects of programming, crypts, technology, logic, pattern finding, and hunting for clues. The event will be a multi-stage event, with successful completion of a stage leading to the next, with answers in the form of any technical glitch, error, anomaly, logic, hidden secrets, and even CTF-type flags!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/da4103cc5472fd4c949cb31564c177458f5cc705-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-13d6715d-2aaf-4439-85fe-c8dcd9c158c1",
    "code": "COMPETITION_11",
    "year": "2024",
    "date": "NOV 11",
    "title": "Programmer's Chatroom '22",
    "category": "COMPETITION",
    "description": "The speaker, Mr. Sarthak Arora, shared his journey as a programmer and the obstacles he faced while programming. Students were made aware about the mistakes newcomers make when entering the world of computers, and how to avoid them. He discussed about the various domains in computing such as AI ML, Blockchain, Web development and App Development. Doubts pertaining to the same were also entertained and students learned a lot from the same. As a 3 time International Hackathon winner, he also shared his experiences in hackathons and tips and tricks to help students participate and win in them.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/1d40102816a86ac0b79052f13ac156c4a9878de3-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-157cc387-421d-4ff5-a378-4b02eb2d240b",
    "code": "COMPETITION_12",
    "year": "2024",
    "date": "DEC 12",
    "title": "Code Carnival",
    "category": "COMPETITION",
    "description": "Code Carnival was where the excitement of a carnival met the challenge of coding. Participants dived into fast-paced logic duels and quirky puzzle games that tested their wit, reflexes, and creativity. They earned points with every win, traded them for exciting rewards, and experienced coding in a way that was fun, unpredictable, and unforgettable.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/edaf75c00e5ebf8e423db27e34c719af26924224-1131x1600.heif",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-175fdbc9-e7a9-491d-b308-714ba35e742c",
    "code": "COMPETITION_13",
    "year": "2024",
    "date": "JAN 13",
    "title": "MixTape",
    "category": "COMPETITION",
    "description": "Mixtape, in collaboration with The Music Club, presented the ultimate college concert experience.🌟🎹 This event was set to be a highlight, bringing together the best musical talent from across the campus for a night of unforgettable performances.🎶 It was not just a concert—it was a celebration of creativity, passion, and the power of music to unite everyone.🥁✨The event featured a diverse lineup of performances ranging from bands to solo performances. Each performance brought their unique style and energy to the stage, ensuring there was something for everyone to enjoy. 🔥 It delivered a extensive mix of genres and performances that kept the audience entertained all night long.🎙🎸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/1060b458ab8162345f11b79bd06e8c713e21166c-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-18128774-d5e5-4255-b475-e4597ea964f9",
    "code": "COMPETITION_14",
    "year": "2024",
    "date": "FEB 14",
    "title": "ReBranded 2.0",
    "category": "COMPETITION",
    "description": "🎨 Ready to show-off your Design Skills? 🚀 🥁 Presenting 🥁 🌟 ReBranded 2.0 🌟 Do you think you can create a website or app experience for a company, that is better than their own? 🧐 Then join us for a two-day online designathon where you can showcase your Creativity and UI/UX skills to ReBrand a company’s digital presence. 👨‍💻 🤩 📅 Event Dates: 8th - 9th July 2023 ⏱ Deadline: 7th July 2023 Learn More and Register Now! 👇🏻 https://forms.gle/oAQfDHXqo5oAwUpn7 For queries contact:- Karan Kapoor: +91 70112 52409 Tanish Kesarwani: +91 63865 27962 IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/321eb0e96293fd8a181cecc5c52113e6a77f03a0-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-197cd909-0737-4e2a-b304-209a4e2e119c",
    "code": "COMPETITION_15",
    "year": "2024",
    "date": "MAR 15",
    "title": "Epitech",
    "category": "COMPETITION",
    "description": "Epitech was an inspiring talk where Harsh Anand, the Director of EBA Operations, Growth (M&A) & Modernization at Providence Health & Services, shared his personal journey and insights into his domain. Harsh is a business transformation leader with extensive experience in managing complex transformations, specializing in operations, growth, and stabilization of applications across HCM, Payroll, Finance, and Supply Chain. The event provided students at MUJ a unique opportunity to learn about real-world experiences in these areas. Students gained valuable knowledge in operations management, organizational leadership, cross-functional team leadership, and project portfolio management. Epitech aimed to inspire students and equip them with essential entrepreneurship skills and leadership strategies, helping them navigate their own career paths in today’s fast-evolving business world.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/0d78a4170bf887596b0e151acc2517f05bf0f3f2-320x320.png",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-1aa2a625-13e4-42d3-a980-38f64ed44991",
    "code": "COMPETITION_16",
    "year": "2024",
    "date": "APR 16",
    "title": "Clone the app by GENESIS 2.0",
    "category": "COMPETITION",
    "description": "App Cloning competition, each team will be given an app(10 apps in total some will get the same app) and minimum functionalities (3) prior to the event. The teams have to make the app clones With the functionalities. On the day of the event the teams have to launch the app in front of a panel of judges. The best clone fulfilling the functionalities wins.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9716562275c41bfe35a7ba966e10f5f07149aa0a-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-1dd6730a-8e98-410f-87bf-d7899787cd28",
    "code": "COMPETITION_17",
    "year": "2024",
    "date": "MAY 17",
    "title": "BREA[COUT] 2.0: VIRTUAL ESCAPE ROOM",
    "category": "COMPETITION",
    "description": "Brea[cout] 2.0 was a virtual code-based escape room event conducted by IEEE WIE MUJ on 19th March from 5:30 pm onwards at Discord. The purpose of this event was to test and enhance analytical and problem solving skills necessary for solving real world problems in the form of an exhilarating competitive code based challenge. It had different levels in which the participants were to solve the clues as quickly as possible to move up the scoreboard. The top performing teams at the end of the event were awarded goodies, coupons and prizes worth a total of Rs. 75,000. The list of the top performing 7 teams’ leaders and their ranks are displayed below.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a3e1edee09bb334a0316360f51714d9b5730788f-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-2077e9a1-2aa2-4c6e-bc1a-1224eff9c1bd",
    "code": "COMPETITION_18",
    "year": "2024",
    "date": "JUN 18",
    "title": "BitBlitz",
    "category": "COMPETITION",
    "description": "In this contest, the coders compete while also improving their overall algorithmic knowledge. The coding contest helps students and professionals to tackle a problem by reading the concepts one doesn't know, and also gain practical experience by coding the solution to the problem, thus improving their skills significantly. This coding competition packs the excitement of programming with the fun of learning into one compelling challenge.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a4ce12c0d7e26d0a62ca65eca79e2564dbf64ca0-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-262ce7d2-8302-4eca-863d-c458eac71b8b",
    "code": "COMPETITION_19",
    "year": "2024",
    "date": "JUL 19",
    "title": "Crypto Crunch 3.0",
    "category": "COMPETITION",
    "description": "What can you🫵🏻 do with a bag full of money? 💰 A grand total of $3,000 to be exact? 😏💭🤑 Show off your prowess 💪🏼 as a Crypto Tycoon 😎 in 🧑‍💻 Crypto Crunch 3.0 📈 Make 💸 or break 📉 a fortune 💸 in this Mock Crypto Trading Competition. Test your knowledge 🧠 on market strategies in real-time conditions, and get on top of the leaderboards 📈 to gain a chance to win from a prize pool of _₹28,000_! 🤑 📅 Dates: 4th -10th September 💻 Platform: Bitget Find out if you’re capable of basically printing money 🧑‍💻 -> 🖨 -> 💵💵💵… Register NOW 👇🏻👇🏻👇🏻 https://forms.gle/Cxmr4sipjfsGu9Tw7 IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/427045cbd2c1d3837126ade33b5314172abf4dde-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-27ab7f49-0f58-4b49-a165-bd525f34e6ce",
    "code": "COMPETITION_20",
    "year": "2024",
    "date": "AUG 20",
    "title": "• NeXTech",
    "category": "COMPETITION",
    "description": "•\tNeXTech: Engaging sessions introduced students to cutting-edge technologies like quantum computing and photonics, sparking curiosity and awareness of the future tech landscape.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/6541a081831d637d785fadd61ab1ae8297d300c5-602x851.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-27b4aeae-4c07-404d-8b65-88a26209ddbf",
    "code": "FLAGSHIP_21",
    "year": "2024",
    "date": "SEP 21",
    "title": "Tech Summit by Genesis 2.0",
    "category": "FLAGSHIP",
    "description": "YouTubers, CEO and CTO of Web3.0(Blockchain, ML, Cybersecurity and Space exploration) based companies and scientists are gonna have a discussion of how is todays technology affect the future and talk about what the future holds in their respective domains.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "/events/techsummit_genesis.png",
    "highlights": [
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-297cb420-c901-47e8-ba74-d42881c6d199",
    "code": "COMPETITION_22",
    "year": "2024",
    "date": "OCT 22",
    "title": "MLTIVERSE",
    "category": "COMPETITION",
    "description": "MLtiVerse was an exciting 36-hour challenge where participants showcased their data analysis and machine learning skills. The event brought together students from MUJ, IEEE members, and participants from across India to solve practical problems using data science tools and techniques.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/6cb2e357f23b014fbc369009b5a6e5fcf3c60883-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-2bf2a194-308b-4994-a5f0-e725fad8a780",
    "code": "COMPETITION_23",
    "year": "2024",
    "date": "NOV 23",
    "title": "Ballistic 5.0",
    "category": "COMPETITION",
    "description": "Ballistic 5.0 was where the thrill of esports met the spirit of Genesis 2025, transforming the campus into a high-voltage gaming battlefield. From intense BGMI squads to nail-biting FIFA clashes and Tekken face-offs, the event kept audiences on the edge of their seats as players fought for glory and dominance. With roaring cheers, fierce rivalries, and an atmosphere buzzing with adrenaline, Ballistic was the ultimate celebration of gaming passion and competitive spirit.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/ballistic.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-2fd79761-3c95-481d-9482-42a661f1bc80",
    "code": "COMPETITION_24",
    "year": "2024",
    "date": "DEC 24",
    "title": "Mockup 4.0",
    "category": "COMPETITION",
    "description": "Mockup 4.0 🎨 is a UI/UX Designathon where participants take on the challenge of turning poor or outdated interfaces into stunning, functional, and user-friendly designs. Given a problem statement or a badly designed screen, designers must analyze the flaws, brainstorm solutions, and redesign the interface using tools like Figma or Adobe XD. The event focuses on balancing creativity with usability, where participants showcase their before-and-after designs and explain their choices. With judging based on aesthetics, functionality, and innovation, Mockup 4.0 is the perfect stage for designers to prove that great design isn’t just about looks—it’s about solving real problems and creating impactful digital experiences. 🚀✨",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/bcd129d2b7e30568a843dfa638455acfea9b19aa-2939x4160.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-325952d2-3ddf-4cdb-8a19-19791cde779f",
    "code": "COMPETITION_25",
    "year": "2024",
    "date": "JAN 25",
    "title": "Breacout 6.0",
    "category": "COMPETITION",
    "description": "The forbidden tunnel had cracked open after the quake, and with it came the undead. Teams of 2-4 stepped into a collapsing world where every clue held the key to survival. From hidden maps to secret storylines, they raced through danger, piecing together the final antidote. In the end, only the sharpest minds and bravest hearts managed to outwit the outbreak and claim victory over the horde.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/f47a37a75b9bea453c2e8c091ec03fb08ba0d17c-5792x8192.heif",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-34470e0a-8696-4393-8588-176a9e191d89",
    "code": "COMPETITION_26",
    "year": "2024",
    "date": "JUL 01-21",
    "title": "21 Days of ML",
    "category": "COMPETITION",
    "description": "21 Days of ML hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/21days_ml.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-3a623e1e-a235-43ff-914d-32d2bb351abd",
    "code": "COMPETITION_27",
    "year": "2024",
    "date": "MAR 02",
    "title": "Know Your Domain",
    "category": "COMPETITION",
    "description": "Know Your Domain was a 5-day event designed to help students explore various tech domains and find the one that aligned with their passion and future aspirations. Aimed at those new to the tech world, the event provided an interactive platform to dive into areas like UI/UX, Web Development, App Development, Data Science, and AI/ML. Participants engaged in live Q&A sessions with industry experts, gaining valuable insights into these fields. The goal was to guide students in kickstarting their tech journey and help them identify the perfect domain to pursue. Whether they were exploring new interests or planning their career path, Know Your Domain offered the guidance to take the next step.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/730d9d209515261861982d5943c99f3594dcffcc-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-3b665d3f-9463-45df-a0c4-20a11bd6839a",
    "code": "COMPETITION_28",
    "year": "2024",
    "date": "APR 03",
    "title": "Call2Code",
    "category": "COMPETITION",
    "description": "Call2Code is a 24-hour virtual event with 3 rounds and the problem statements are designed to revolve around API usage. In Round 1, teams submit a PPT and early prototype via GitHub. In Round 2, selected teams enhance their project by adding features of varying difficulty and submit a final version with a demo video. In Round 3, teams will present their prototype live in front of judges, where teams will be cross-questioned and evaluated based on judging criteria",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3d8f9986890cd50275506d9c015c429ca62974ce-1131x1600.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-3c0e1ae2-f265-40e9-afac-2099f1d47611",
    "code": "COMPETITION_29",
    "year": "2024",
    "date": "MAY 04",
    "title": "CyberArena",
    "category": "COMPETITION",
    "description": "CyberArena hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/09c83c73699116e88d3f538bb2cd9b6e7922fb06-794x1123.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-3dcea0ab-6b13-4ee0-8a28-cb63472c21e5",
    "code": "COMPETITION_30",
    "year": "2024",
    "date": "JUN 05",
    "title": "Coder's Crusade",
    "category": "COMPETITION",
    "description": "On 27th November 2024, IEEE WIE MUJ hosted Coders Crusade, an engaging and educational event designed to introduce budding programmers to the exciting world of C programming and the foundations of competitive coding.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/bea6e67fcea5a7d02712994e99888b6e92ba8118-1131x1600.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-3e6ad0b6-3f4c-46f6-b638-bd1d68afe8f6",
    "code": "COMPETITION_31",
    "year": "2024",
    "date": "JUL 06",
    "title": "VENOM",
    "category": "COMPETITION",
    "description": "VENOM turned out to be an engaging and energetic tech event that combined fun with problem-solving. A total of 35 teams participated, navigating the Snakes and Ladders–style board by solving technical questions and tackling logical challenges. The competition was filled with excitement as teams climbed ahead with correct solutions while unexpected setbacks kept the race unpredictable. With teamwork, creativity, and critical thinking on display, the event created a lively competitive atmosphere. In the end, the teams that demonstrated the best strategy and problem-solving skills successfully overcame all hurdles and reached the top.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/fb6d3c5c53903a4e17d65868a2a07bcd44f2e375-1080x1560.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-3f0e25e5-504b-44ed-b9d8-5875a5e53855",
    "code": "COMPETITION_32",
    "year": "2024",
    "date": "AUG 07",
    "title": "Campus Coders",
    "category": "COMPETITION",
    "description": "Ever wonder how Siri understands you?🤔 Let's Unravel the Mystery of NLP! 🤖 📢 Get Ready to level up your skills as IEEE SB presents to you : ✨ Campus Coders: Create Your AI-NLP Sidekick✨ 🚀 Why You Should Join?? 🏅 Certificates to all participants 🦾 Build a Chat Bot in 2 hours with no prior coding experience 🔥 Hands-On Experience : Reference material before the workshop for practical learning! 📝 Project for resume 🎤 Q&A and Fun Quizzes 🗓 Date: 10th July 🕒 Time: 2:00 pm 💻 Mode: Online 🎤 Speaker: Mr. Sakharam Gawade (Samsung) IEEE SB MUJ🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/0d5f3509087d18440f20a609fd99b1c62e98e55f-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-43191564-828c-45f5-af74-e8bfbbdca78e",
    "code": "FLAGSHIP_33",
    "year": "2024",
    "date": "SEP 08",
    "title": "Townhall",
    "category": "FLAGSHIP",
    "description": "The IEEE TOWNHALL held on 29th November 2024 at the Vasanti Pai Auditorium was a remarkable success. The event, which began at 5 PM, witnessed an impressive turnout of IEEE members eager to learn more about the organization's benefits. Attendees discovered the various advantages of being an IEEE member, including access to global resources and opportunities such as hackathons, research teams, and innovative projects. The networking session provided a valuable platform for students to connect with seniors, faculty, and peers, fostering a strong sense of community. The highlight of the event was a lively quiz that saw participants competing enthusiastically for exciting prizes. Overall, the event was an excellent blend of learning, networking, and engagement, leaving attendees motivated and excited about the opportunities IEEE has to offer.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/fb960b851f75c255d29c4d8258935318e91d3a57-1132x1600.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4540490a-d742-4386-8192-ddc282b45fd5",
    "code": "COMPETITION_34",
    "year": "2024",
    "date": "OCT 09",
    "title": "TechClash",
    "category": "COMPETITION",
    "description": "TechClash, organized by IEEE WIE MUJ for IEEE WIE Day, was a dynamic debating event featuring quizzes and debates on AI and some domains of 4IR (cybersecurity, biotechnology, and cloud computing). Held over a span of 3 days, the event began with a session on \"Mastering Research Papers\". In the following sessions, participants showcased their critical thinking and debating skills, culminating in a grand finale on \"Should consumers have the right to repair their own electronic devices or should manufacturers retain control over repairs",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/1369fe0fbb0301bc17b88c6e2ffa03f563f54688-1080x1080.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-45673141-cf43-4db8-b0c6-f77bd1f7b9f6",
    "code": "COMPETITION_35",
    "year": "2024",
    "date": "NOV 10",
    "title": "Wienter of Code",
    "category": "COMPETITION",
    "description": "Wienter of Code was a six-day online coding event focused on strengthening problem-solving and analytical thinking. Participants engaged in daily challenges, progressing from basic concepts to advanced problem-solving tasks. The event included hands-on coding in languages like C, C++, Python, and Java, along with peer discussions and guided learning sessions. Midway, participants tackled increasingly complex problems, improving optimization and logical reasoning. The event concluded with a quiz to assess understanding and reinforce learning. It successfully built a collaborative coding environment and aligned with SDG 4 (Quality Education), empowering participants with essential technical skills.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/dd7287d80f01a897b9d5205b17cd3f312a880ffd-518x706.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4746fd03-3f0d-4596-a7ac-14591cdc025b",
    "code": "COMPETITION_36",
    "year": "2023",
    "date": "DEC 11",
    "title": "ErrorTerror by GENESIS 2.0",
    "category": "COMPETITION",
    "description": "Participants will be given a set of codes and they will have to Identify the errors in the code and rectify it to successfully run the code. It is time based so the fastest to debug wins.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/8b5c498dcae650f264b99a5d72d928ef617a4326-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-47bc4a35-5aee-4bcf-a03a-4227d09e0366",
    "code": "COMPETITION_37",
    "year": "2023",
    "date": "JAN 12",
    "title": "Breaking Bug",
    "category": "COMPETITION",
    "description": "Breaking Bug hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/ba8674848f9e4d2571a8a16225b0472466a6f618-495x700.webp",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4971d5fc-296b-46c7-a70f-28c17e4da148",
    "code": "COMPETITION_38",
    "year": "2023",
    "date": "FEB 13",
    "title": "NIMBUS",
    "category": "COMPETITION",
    "description": "NIMBUS hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9a71b92730bb617c57a611af27be1eb669e9e462-904x1280.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4a8ae582-58db-42f8-8803-3e6476e5e7c9",
    "code": "COMPETITION_39",
    "year": "2023",
    "date": "MAR 14",
    "title": "Pandora",
    "category": "COMPETITION",
    "description": "Immersive simulations allowed students to dive into the world of AR and VR, offering a practical experience of how these technologies are reshaping user interaction and design.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/d851a8808e62bec537f6cb19b116c8c45bf284d4-602x850.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4b44434f-4fdd-4190-82f4-dd9b6f42340f",
    "code": "COMPETITION_40",
    "year": "2023",
    "date": "APR 15",
    "title": "Mayday",
    "category": "COMPETITION",
    "description": "Mayday is an immersive, aviation-themed escape room that places teams inside a mid-air aircraft facing a critical emergency. With just 20 minutes per team, participants must work together to solve clues, decode systems, and make strategic decisions to stabilize the flight before time runs out. The experience progresses through a series of rooms, beginning with a clue-discovery stage where hidden hints must be reconstructed to unlock the first code, followed by a logic-based puzzle room that tests analytical thinking. Teams then tackle a coordination challenge in which they guide a blindfolded teammate through a maze to retrieve a crucial digit before reaching the final vault, where all collected clues are combined to crack the last code and secure the aircraft. Every correct solution moves the team closer to safety, while every delay increases the pressure, demanding sharp observation, teamwork, and calm thinking until the very last second.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/f0c72794c3a9bafb70596bf69747570dc5687d6e-1131x1599.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-4dbd294e-683a-4b2a-bdbb-108d4dce4f86",
    "code": "COMPETITION_41",
    "year": "2023",
    "date": "MAY 16",
    "title": "Swara",
    "category": "COMPETITION",
    "description": "Swara at Elysium 2.0 was a mesmerizing celebration of Indian classical heritage and feminine expression. Mrs. Prerana Shrimali captivated the audience with a powerful Kathak performance rooted in the Jaipur Gharana tradition. Each sequence reflected grace, strength, and emotional depth, portraying the evolving journey of womanhood through rhythm and storytelling. The evening was further elevated by a special performance from Cinefilia, adding cinematic drama and artistic flair to the cultural narrative. The auditorium resonated with applause and admiration as the audience experienced a seamless blend of tradition, storytelling, and artistic excellence. Swara stood out as one of the most culturally enriching segments of Elysium 2.0.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/db99f58512e8f3daec7296e3945398fba183901d-1131x1600.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-505aa2a3-af22-4a6e-9410-7385b4231020",
    "code": "COMPETITION_42",
    "year": "2023",
    "date": "JUN 17",
    "title": "Binary Bloom",
    "category": "COMPETITION",
    "description": "Aimed at exploring the decentralized web, these workshops offered foundational knowledge on Web3, blockchain technologies, and the evolving digital asset ecosystem.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a4229a2bda8806736bb651d5744f9505d429afda-602x851.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-5e02e4fc-be76-4f4f-872d-7f455f5f830b",
    "code": "WORKSHOP_43",
    "year": "2023",
    "date": "JUL 18",
    "title": "College Starter Pack'23",
    "category": "WORKSHOP",
    "description": "In our webinar, \"College guide for freshers\" , our guest speaker, Varun Kohli, the CEO of Coding Blocks shared insider tips on effective study habits, time management strategies, and how to strike a healthy balance between your academic and social life.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9f601764db5b66bb777b0762f269366491ecd892-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Live Interactive Coding",
      "Real-world Applied Use Cases"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-611d441b-1bbf-4b4b-9630-490f21a2e4f4",
    "code": "COMPETITION_44",
    "year": "2023",
    "date": "AUG 19",
    "title": "Pixel Forge",
    "category": "COMPETITION",
    "description": "Called all aspiring game developers! Whether they were just starting out or already dominating the Battle Royale scene, this workshop was their opportunity to level up. In collaboration with IGDC, we brought a game dev masterclass where participants learned everything from concept to creation, with insider tips from industry pros. Were they ready to move from playing games to creating them? They joined us and proved they had what it took to build the next big hit! 💥",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/2ecac3f5c774a6e789a7d339bbbc61fa227d8775-3695x5286.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-63e4cc53-1f25-49b8-bc3b-ad0ed57f72e1",
    "code": "COMPETITION_45",
    "year": "2023",
    "date": "SEP 20",
    "title": "Tech Flix",
    "category": "COMPETITION",
    "description": "Tech Flix was an event that allowed participants to explore the fascinating realm where technology and movies intertwine, and fuel their passion for learning and entertainment. We were elated to witness the outstanding knowledge and quick thinking displayed by all the participants. Their enthusiasm and passion for technology and movies were truly commendable!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/4c24c902f804b10a5e01528dc5f405c5958e6c7f-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-66af7086-d7e7-47a7-baaf-5a2a848c760f",
    "code": "COMPETITION_46",
    "year": "2023",
    "date": "OCT 21",
    "title": "THE BIG SHOT",
    "category": "COMPETITION",
    "description": "The BIG SHOT was an influencer talk series conducted by IEEE SB MUJ which can be defined as virtual broadcasts centered primarily on conversational speech. This talk series encompassed numerous discourse genres and formats, ranging from one’s success tale to highly interactive exchanges with members of the listening audience.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9480ecb444511472b37a6fe19e39eb006c7d66e8-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-67113d42-9ad2-42b7-a944-395f2c3a2377",
    "code": "COMPETITION_47",
    "year": "2023",
    "date": "NOV 22",
    "title": "prompt 401",
    "category": "COMPETITION",
    "description": "Day 1 ��� Prompt Engineering Workshop (Learning + Practice)\n• Welcome and icebreaker\n• Introduction to prompt crafting and categories (zero-shot, few-shot, role-based)\n• Interactive demo using ChatGPT/DALL·E\n• Mini challenge and Q&A\nDay 2 – The Prompt Arena (Prompt-a-thon Competition)\n• Round 1: Speed Prompt – Create an artwork in 10 mins\n• Round 2: 1v1 Prompt Battles – Head-to-head topic-based challenge\n• Final Round: Prompt Roulette – Random creative prompt face-offs\n• Results, winners, and prize distribution",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/90da4da9683a46d18660007a97faf007cb11d405-1131x1600.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-680e551d-b7fa-48a3-8ce2-fc2763df3cd4",
    "code": "COMPETITION_48",
    "year": "2023",
    "date": "DEC 23",
    "title": "Ballistic 2.0 by Genesis 2.0",
    "category": "COMPETITION",
    "description": "Gaming competition between 2 teams. Games- Fifa 21 and Mortal Kombat",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/ballistic.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-69a0bced-545c-4d88-8f51-d56f4c85f172",
    "code": "COMPETITION_49",
    "year": "2023",
    "date": "JAN 24",
    "title": "Promptopia 2.0",
    "category": "COMPETITION",
    "description": "Promptopia 2.0, organized by IEEE WIE MUJ, was an immersive AI-based competition designed to test creativity, prompt engineering, and technical skills. The event consisted of three rounds: The Spark Round (pop culture remix using AI), AI Remix Challenge (combining unrelated concepts creatively), and Prompt to Reality (API Edition), where participants used Gemini API to generate outputs. Evaluation was based on creativity, originality, prompt structure, technical execution, and presentation. The event encouraged collaboration, innovation, and hands-on exposure to AI tools, concluding with winner announcements and recognition of exceptional participants.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a4815f2dbaaa2f50bb44a7455f0b16422d0b06a3-951x1345.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-6bade443-1e13-4a58-978d-1f42c99e19af",
    "code": "HACKATHON_50",
    "year": "2023",
    "date": "FEB 25",
    "title": "HACKERZSTREET",
    "category": "HACKATHON",
    "description": "It is a 24-hour long hackathon commencing from 10 am, 9th July 2022. The team size allowed will be a minimum of 2 and a maximum of 4 people. There will be 2 rounds in the Hackathon where after the first round there will be a filtration process at the 8-hour mark judged by seniors of MUJ. After completion of development time, the remaining teams will be judged by the main judges. Round 2 will commence on the 10th of July and the winners will be provided with cash prizes and goodies.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "500+ Participants",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/efd89356c0652f6608646009a6e0a88a8e400b5b-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-6c22acc1-75c7-4279-8710-b26f8dac1170",
    "code": "COMPETITION_51",
    "year": "2023",
    "date": "MAR 01",
    "title": "BITS N BREWS",
    "category": "COMPETITION",
    "description": "“Connecting with our alumni, those who've walked the walk, is a fantastic way to map out your career and seek valuable guidance.” Keeping this in mind, IEEE WIE MUJ conducted \"BITS N' BREWS\", an alumni talk with Ms. Shiksha Jaiswal (Class of 2021), who is currently working as a modern work consultant at Microsoft IGD, Hyderabad.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/6b177b713b1a323e448e9d9e66951bae9e014ce7-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-6d05b97f-1f45-4f29-af82-ad58887a5204",
    "code": "WORKSHOP_52",
    "year": "2023",
    "date": "APR 02",
    "title": "Roadmap to Engineering",
    "category": "WORKSHOP",
    "description": "The \"Roadmap to Engineering\" webinar organized by IEEE SB MUJ on 2nd July was an insightful and inspiring session for aspiring engineers. The online event, which began at 2 PM, featured distinguished speakers including Mr. Vaibhav Khandelwal from Dell Technologies, Ms. Aarohi Manchanda from Google, and Ms. Rhythm Bindal from JP Morgan. Attendees gained valuable insights into various engineering career prospects and received practical advice on navigating their professional paths. The speakers shared their experiences and expertise, leaving participants motivated to chart their own paths to success. Overall, the webinar was an excellent blend of knowledge sharing and career guidance, making it a highly beneficial experience for all who attended.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3476189f98fa62bfeb75a11695fe6ac5567b962a-1131x1599.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Live Interactive Coding",
      "Real-world Applied Use Cases"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-6e31098d-c9bf-4935-824c-1d0548ea4041",
    "code": "COMPETITION_53",
    "year": "2023",
    "date": "MAY 03",
    "title": "HardWired",
    "category": "COMPETITION",
    "description": "An Arduino-based innovation challenge that emphasized creativity and technical skills in embedded systems, fostering innovation in hardware development.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/590d1f1498bf6cf0371a8e784f8e495e8cb789ab-602x851.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-70390ec6-7b2e-48e8-bcf4-bc958b9d761c",
    "code": "COMPETITION_54",
    "year": "2023",
    "date": "JUN 04",
    "title": "Code Relay",
    "category": "COMPETITION",
    "description": "Code Relay turned out to be an energetic and fast-paced event where participants truly experienced coding as a team sport. Teams of 2–4 members passed on their codes, each member getting 7 minutes to contribute before handing it over. The room was filled with a mix of chaos and excitement as everyone tackled interesting DSA problems under time pressure, communicating only through comments in the code. The short yet intense format tested clarity, speed and teamwork, while also giving participants a chance to learn from one another’s approaches. With multiple teams competing in real time, the atmosphere was competitive yet fun and winners walked away with goodies while everyone left with sharper collaboration and problem-solving skills.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a61e93bea9f85da7fdbd7491e850f910d2456711-1147x1600.heif",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-7153eddb-3269-4133-a5c6-8fb13e98fd86",
    "code": "COMPETITION_55",
    "year": "2023",
    "date": "JUL 05",
    "title": "The Deal Room",
    "category": "COMPETITION",
    "description": "The Deal Room at Elysium 2.0 transformed the auditorium into a dynamic startup battlefield. Teams pitched their ideas in a high-energy, rapid-fire format before an expert panel that challenged assumptions and tested feasibility. Participants presented innovative solutions across diverse domains, showcasing creativity, technical depth, and entrepreneurial thinking. The panel provided constructive feedback, mentorship insights, and strategic suggestions to refine business models and execution strategies. Selected standout teams received incubation certificates, patent guidance support, and potential funding consideration. The event successfully created a professional pitching environment that simulated real-world startup evaluation, making it one of the most impactful technical highlights of Elysium 2.0.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3be5d2cfa9fc600dd12d2a2d04c2fd0b2b27ac24-1131x1600.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-727558ef-7e8f-4947-b96d-986cbb1dd420",
    "code": "COMPETITION_56",
    "year": "2023",
    "date": "AUG 06",
    "title": "Write It Right",
    "category": "COMPETITION",
    "description": "The \"Write It Right\" workshop held on 26th September at AB-1, 307 was an engaging and insightful session focused on mastering the art of research writing. Running from 1:00 pm to 4:00 pm, the workshop offered participants practical guidance on crafting clear, compelling, and well-structured academic papers. With a focus on simplifying complex concepts and enhancing writing skills, the session provided valuable tips and strategies for students aiming to improve their paper-writing capabilities. The participants left with a stronger understanding of effective research writing techniques, making the workshop a highly productive and beneficial experience.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a89c54cadee6e1cd753d3c874edd1edfd9c1794c-640x640.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-74c73e88-82cb-4b4f-94a1-38e7a78bc51f",
    "code": "COMPETITION_57",
    "year": "2023",
    "date": "SEP 07",
    "title": "Ballistic 4.0",
    "category": "COMPETITION",
    "description": "Gamers geared up for Ballistic at Genesis 4.0—the ultimate cross-platform gaming event where they showcased their skills and emerged victorious! ⚡ Whether they dived into Battle Royale with BGMI, battled it out in Tekken, or dominated the field in FIFA, the event had it all across mobile, console, and PC platforms.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/ballistic.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-7624370e-c36d-46e2-8be4-7be40575e170",
    "code": "COMPETITION_58",
    "year": "2023",
    "date": "OCT 08",
    "title": "GIT IT DONE",
    "category": "COMPETITION",
    "description": "GIT IT DONE hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/93230df779387193a20d2eab164c900ae9696880-2939x4160.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-76c1696f-6428-4cad-9610-17d3ef9d1e99",
    "code": "COMPETITION_59",
    "year": "2023",
    "date": "NOV 09",
    "title": "Bits n’ Brews 7.0",
    "category": "COMPETITION",
    "description": "Bits n’ Brews 7.0, conducted on 24th October 2025, was an engaging alumni talk session organized by IEEE WIE MUJ featuring Khushi Garg, a Software Developer at JPMorgan Chase & Co. The session provided students with valuable insights into her journey from a student at MUJ to working in top tech organizations. She shared her experiences as a Software Developer Intern at JPMorgan Chase & Co. and A.P. Moller – Maersk, highlighting real-world problem-solving, teamwork, and industry practices. She emphasized: Importance of continuous upskilling and curiosity Building strong fundamentals in computer science Actively participating in internships and projects Developing essential skills like problem-solving, communication, and time management She also addressed common student challenges such as self-doubt, rejection, and career uncertainty, encouraging a growth mindset and resilience. The session included an interactive Q&A where students clarified doubts related to placements, internships, and higher studies. Aligned with SDG 4: Quality Education, the event promoted continuous learning and career awareness. It concluded with an inspiring message encouraging students to step out of their comfort zones and seize opportunities with confidence.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/f3ec4b3ddd9708ba6254f396d83bf9d52f1a950c-1131x1600.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-77b6a0d1-6094-447d-a0ae-8de68220ad88",
    "code": "COMPETITION_60",
    "year": "2023",
    "date": "DEC 10",
    "title": "Breacout 5.0",
    "category": "COMPETITION",
    "description": "The Harry Potter-themed treasure hunt, Breacout, was an exhilarating experience that successfully transported participants into the magical world of Hogwarts. Featuring four teams representing Gryffindor, Hufflepuff, Ravenclaw, and Slytherin, the event challenged participants to solve a series of clues and tasks spread across the campus. Powered by a custom-built website, teams received digital clues, hints, and interactive elements that added depth to the adventure. The hunt was designed to test problem-solving skills, teamwork, speed, and agility, keeping participants on their toes as they raced to uncover hidden artifacts. In the end, the team that uncovered all the artifacts first was crowned the ultimate Triwizard Champion, making the event a thrilling and memorable success.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/fa2a4119cb020f2abf3617e5fb53afc29fbe675d-3710x5251.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-780c0506-9f2e-48c1-85e7-41ed63a17499",
    "code": "COMPETITION_61",
    "year": "2023",
    "date": "JAN 11",
    "title": "Topper’s Talk",
    "category": "COMPETITION",
    "description": "The Topper’s Talk session at Elysium 2.0 provided students with first-hand insights into the journey of clearing UPSC CSE and training at LBSNAA. Ms. Kajal Mothiya shared her preparation strategy, challenges faced during the process, and key lessons from her training and transition into public service. Her experience-based advice offered clarity to aspirants navigating competitive exams and career uncertainties. VisionIAS experts further conducted personalized guidance interactions, helping students understand preparation pathways, government career opportunities, and structured study approaches. The session successfully blended inspiration with practical strategy, empowering attendees with direction and motivation for long-term career planning.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/7dadac5defc0b91d752c228251bc211e82da19f4-1208x1210.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-7b4dbe1a-99b1-4b36-8e40-145c8c7464db",
    "code": "COMPETITION_62",
    "year": "2023",
    "date": "FEB 12",
    "title": "Blogverse by GENESIS 2.0",
    "category": "COMPETITION",
    "description": "A contest to write a blog on provided specific core tech domains in a limited time and team/pair which completes in the shortest time will be awarded. After provision of clues regarding the topic, team will be provided with time slots for research, typing and presentation. Winners will be declared considering their performance in various domains.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/34a6af3c78b73768a8826d065d2dcb11dc3515e7-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-7cab6d7d-eefa-4c49-8bb3-1652ad2a9788",
    "code": "WORKSHOP_63",
    "year": "2023",
    "date": "MAR 13",
    "title": "The Productive Engineer's Summer Playbook",
    "category": "WORKSHOP",
    "description": "Ahh, yes! It's The Summer Vacations! ☀ It's a perfect time to be a couch potato a productive member of the society! 🔥 Trying to find how to make the surplus of time you have fruitful? 🤔 Presenting 🥁 The Productive Engineer's Summer Playbook 📚🌟 A delightful webinar that aims to help you for career growth, securing internships, and lots more! 🚀🎯 Presented by Anshika Gupta, Ex-Software Engineer at Amazon, YouTuber, and an excellent Social Media Marketer! Designed to help you become a better you! ✨ 📅 Saturday, 17th June ⏰ 03:00 PM Register Now! 👇 https://forms.gle/1bEUfFmodZRgDBkj9 For further details, contact: Kashish Bhasin- 9811149303 Aarya Pareek- 6376109567 Follow us on Instagram for the latest updates ✨ https://instagram.com/ieeemuj Regards, IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/c2c9a1519796e0f92e3e0a8ece33caf744cb3f04-320x320.png",
    "highlights": [
      "Certified Participation & Opportunities",
      "Live Interactive Coding",
      "Real-world Applied Use Cases"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-810fc4f2-76ea-486e-bf04-0b9dd8405cf1",
    "code": "WORKSHOP_64",
    "year": "2023",
    "date": "APR 14",
    "title": "Flutter Workshop: Understanding App Development",
    "category": "WORKSHOP",
    "description": "The workshop started with the speaker explaining the basics of App Development. The participants were also very interactive and had all of their doubts cleared by the speaker. It covered the complete roadmap on how to get started with Flutter, its uses and applications in the industry. The speaker also helped the students in getting started with hands-on basic projects like Calculator, Tic Tac Toe, etc. All the topics from basic to an intermediate level were included and explained by the speaker. By the end of it, the participants learnt a lot and this workshop will surely help them get started with Flutter development.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "/events/flutter_workshop.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-848ae338-13fd-4985-8785-c5ae5076daf1",
    "code": "HACKATHON_65",
    "year": "2023",
    "date": "MAY 15",
    "title": "Hack Jack",
    "category": "HACKATHON",
    "description": "Hosted by IEEE SB MUJ, HackJack invited teams of 2-3 to test their mental limits with a dynamic mix of challenges. The heart of the event lay in its custom currency system, teams earned coins by cracking mini-games and logic puzzles. But that was just the beginning. These coins became their ammunition in the Auction Round, a thrilling session where teams bid, bluffed, and strategized to “buy” the coding questions they believed they could conquer.\nEvery round in it was designed to be unique, interactive, and engaging. From the suspense of coin trading to the final coding relay that kept everyone on edge, participants had full control over their journey. They chose which questions to attempt, planned which rounds to prioritize, and decided how to outplay their opponents.\nWith a ₹10,000 prize pool, the stakes were high, but the playing field was fair. Whether a team was full of seasoned coders or puzzle-loving strategists, everyone had a shot at winning if they could think fast, act smart, and stay sharp.\nHackJack wasn’t just a game. It was a battle of wits and the ultimate test of strategy, speed, and smarts.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/6c86dc06e3d717019173163c1d9f45a1c20576c0-640x640.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8944edb7-ce54-4e9a-91da-6b06d85dd84e",
    "code": "COMPETITION_66",
    "year": "2023",
    "date": "JUN 16",
    "title": "PROMPTOPIA",
    "category": "COMPETITION",
    "description": "The competition unfolded in three phases. The Qualifying Round tested participants’ ability to craft precise and structured prompts to recreate AI-generated outputs. The AI Challenge Phase introduced diverse creative tasks, including AI-generated music, storytelling, and digital art, each with unique constraints to enhance adaptability. The Final Round focused on AI API integration, where participants applied programming skills to modify their AI-generated work in real-time.\nThe event concluded with live presentations and evaluations based on creativity, technical execution, and innovation. Promptopia 2025 successfully combined learning with competition, offering an engaging experience that highlighted the transformative potential of Generative AI.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/d9902404c62c2fa880d4b1fd62193695c543b449-626x887.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8ac000cd-88cb-4e46-9cdf-ebfda98a2c4c",
    "code": "COMPETITION_67",
    "year": "2023",
    "date": "JUL 17",
    "title": "Cyber Odyssey",
    "category": "COMPETITION",
    "description": "Cyber Odyssey is a 3-day international online event designed to promote responsible technology, ethical decision-making, and cybersecurity awareness.\nDay 1 – International Webinar\nExpert sessions by international speakers in English and Spanish.\nDiscussions on responsible technology, AI ethics, cybersecurity, and innovation.\nDay 2 – Operation Echo\nParticipants investigate a fictional digital ethics case involving misinformation, governance failures, and algorithmic bias.\nTeams analyze evidence, prepare a Tech Report (PPT), and submit their investigation through a Google Form.\nDay 3 – Squid Game: The Final Challenge\nA fast-paced cybersecurity competition consisting of five interactive rounds:\nRed Light, Green Light\nGlass Bridge\nTug of War\nDalgona Challenge\nFinal Cyber Survival\nWinners are determined based on accuracy and completion time.\nEvent Highlights\nInternational collaboration with 7 universities\nIndividual and Team (2–4 members) participation\nFree registration\nE-certificates for all participants\nOnline mode (Google Meet, Google Forms, Google Drive & WhatsApp)",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/d876030449d43ccdd6466bd54e325a86d2263849-1130x1600.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8bf686ff-2b2f-40d7-ad32-025e57de6440",
    "code": "COMPETITION_68",
    "year": "2023",
    "date": "AUG 18",
    "title": "Tech Trends",
    "category": "COMPETITION",
    "description": "IEEE WIE MUJ was the proud host of Tech Trends where we were graced by the virtual presence of Ms Purnima Kochikar, vice president of Google play partnerships, an inspiration and an active promoter of women in engineering. The event was a tremendous success with all of our audience walking away with stirring takeaways.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/6d7c303777a81e35df5182c86649577f7d5fdc60-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8f27bba2-cd5e-45fe-9585-42ea53542b7f",
    "code": "COMPETITION_69",
    "year": "2024",
    "date": "JUN 10",
    "title": "AI Model Quest 2.0",
    "category": "COMPETITION",
    "description": "AI Model Quest is an exciting competition that challenges participants to design and develop\na custom Large Language Model (LLM) tailored to enhance the Manipal University Jaipur\nexperience. Organized by IEEE CIS MUJ, this event provides a platform for students, AI\nenthusiasts, and developers to explore the power of AI in education, student assistance, and\ncampus management, pushing the boundaries of innovation through state-of-the-art tools and\ntechniques.\nParticipants will engage in prompt engineering, model fine-tuning, dataset curation, and AI\ndeployment, creating an intelligent system capable of addressing student queries, academic\nsupport, event management, and more. They will have the flexibility to work with opensource LLMs, cloud-based AI platforms, and coding frameworks to build an AI model that\ntransforms campus interactions.\nBeyond the competition, AI Model Quest is an opportunity to collaborate, learn, and innovate\nin the field of AI-driven applications. The event will include mentorship sessions, interactive\ndiscussions, and insights from AI professionals, offering participants a deeper understanding\nof LLM development, ethical AI implementation, and real-world applications in university\necosystems.With a focus on technical innovation and practical impact, the competition will conclude with\nparticipants presenting their models to a panel of judges. Winners will be recognized for their accuracy, efficiency, usability, and real-world application, making AI Model Quest a unique\nplatform to showcase AI talent and shape the future of MUJ's digital transformation. Winner\nwill be offered the project manager position in CIS, Chapter.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/aimodelquest.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-8f520bda-e7bb-4f45-ac69-6d75b8a9cc45",
    "code": "COMPETITION_70",
    "year": "2024",
    "date": "DEC 05",
    "title": "Cyber Mafia",
    "category": "COMPETITION",
    "description": "Cyber Mafia 2.0 is an interactive, strategy-driven event designed to test participants' analytical\nskills and psychological instincts. Moving away from traditional team setups, this edition\nchallenges individuals to compete solo through four unique, fast-paced mini-games. The event\ncombines elements of social deduction, tactical decision-making, and critical thinking, requiring\nplayers to navigate an environment of shifting trust and clever strategies. Ultimately, it provides\nan engaging and intellectually stimulating platform where students must outmaneuver their peers\nto succeed.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/cybermafia.jpg",
    "highlights": [
      "High-impact Peer Networking",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8f9f5db4-622d-4d5d-9055-311cefea5c41",
    "code": "COMPETITION_71",
    "year": "2022",
    "date": "NOV 21",
    "title": "Code Turf",
    "category": "COMPETITION",
    "description": "Language Wars (Build • Compete • Dominate)\n• Welcome and event briefing\n• Team formation based on preferred programming languages\n• Announcement of the common problem statement and rules\nBuild Phase\n• Teams design and develop a solution using their chosen programming language\n• Focus on showcasing language strengths, creativity, and real-world applicability\n• Mentors and coordinators provide guidance during the build phase\nCompetition Rounds\n• Round 1: Ideation & Approach – Teams explain their problem, their problem-solving\nstrategy why their language is best suited.\n• Round 2: Build Showcase – Live demonstration of the working solution\n• Final Round: Language Face-Off – Teams defend their language through\nperformance, features, and innovation\n• Results announcement, winners, and prize distribution",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/bd16d0034c4ac709a84027752368d20ea33ab78a-960x1345.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Expert Mentorship & Guidance"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8fa1629d-1282-4141-b56a-084300f45300",
    "code": "COMPETITION_72",
    "year": "2022",
    "date": "DEC 22",
    "title": "Frag Fiesta",
    "category": "COMPETITION",
    "description": "What's up Reyna instalockers and Team flashers 😎 Greetings IEEE Members 💫 IEEE brings its community an amazing valo event of intense competition and camaraderie 💪 🎮 Frag Fiesta 🎮 📣Day 1 : Team Elimination Rounds 🧑‍💻 Day 2 : Team Qualification Battles 🌟 Day 3 : Semi - finals & Finals Join us for this exhilarating event and showcase your gaming skills! 🥷👾 📅 Dates : 14th July - 16th July 📍 Mode : Online 💰 Prize Pool : Rs. 7,000🤑 🔗 Register Here : https://forms.gle/gRYLam63rKPtuaan7 Exclusively for IEEE community members If any one team member is an IEEE member, the rest of team can participate! Playing solo ? Worry not we got a team for you😎 Team IEEE SB 🌸 For any queries, contact : Atharv Thakle : +91 75808 37176 Shehul Singh : +91 84477 47554",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/65bcb9cca9585555aa4f576807a977f918987792-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8fba48ce-54e8-471b-adc9-504c1ccadf12",
    "code": "COMPETITION_73",
    "year": "2022",
    "date": "JAN 23",
    "title": "BLOGBUSTER",
    "category": "COMPETITION",
    "description": "Blog Buster was a fast-paced competition where participants were challenged to write a blog on a core tech domain within a limited time. After receiving picture-based clues related to the topic, competitors were given specific time slots for research, writing, and presentation. The event encouraged participants to think outside traditional technical domains, allowing them to explore their creative side while staying within the tech space. Winners were chosen based on their closeness to the topic, creativity, format, and other criteria. Participants had access to necessary tools and the internet. The best blogs were featured on IEEE CS MUJ's official Medium page for wider recognition.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/01d256d64b377054343c9fc87d7a7efd7e88b5df-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-8ff14a90-0589-44a8-835b-ae3800ea61a8",
    "code": "COMPETITION_74",
    "year": "2022",
    "date": "FEB 24",
    "title": "Bits and brews 6.0",
    "category": "COMPETITION",
    "description": "Ms. Aishwarya Shree delivered an honest and enriching session, taking participants through the highs and hurdles of her academic and professional life. She began by reflecting on her college journey, sharing how uncertainty and self-exploration shaped her goals over time.\nHer experience of securing an internship at ISRO SAC, a coveted opportunity, shed light on the power of research, persistence, and standing out during the application process. She shared valuable insights into the nature of work at ISRO, and how it sharpened her technical skills and professional confidence.\nTransitioning into her corporate stint, Aishwarya spoke about her roles at EY and PwC, offering a comparative view of working in analytics and consulting. She emphasized the importance of continuous learning and adaptability when navigating career shifts.\nHer decision to pursue a Master of IT at the University of Melbourne sparked conversations around preparation for higher studies, including tips on GRE/IELTS, writing strong SOPs, and securing impactful LORs. She advised students to be clear about their “why” and to begin preparations early with a focused approach.\nAishwarya also spoke about handling rejection, self-doubt, and uncertainty, sharing how she navigated challenging phases with introspection, patience, and support. In response to student queries, she discussed essential skills like communication, time management, and problem-solving — all crucial for standing out in both industry and academia.\nThe session directly aligned with Sustainable Development Goal 4: Quality Education, by promoting inclusive, lifelong learning and empowering students with the knowledge, tools, and motivation to make informed academic and career choices. Through relatable experiences and actionable guidance, the event fostered an environment of mentorship and clarity for students preparing for global opportunities.\nThe session concluded with a powerful message: career journeys aren’t linear — and that’s what makes them transformative. Her story resonated deeply with participants, leaving them motivated to embrace their paths with confidence, curiosity, and courage.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/0d27e68235f901803fb90345ece0f39e107be071-970x1372.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-91f3bae6-d6a2-4979-81fa-c3f8ac3d17b9",
    "code": "COMPETITION_75",
    "year": "2022",
    "date": "MAR 25",
    "title": "CRYPTO CRUNCH-2.0: Virtual Trading Competition",
    "category": "COMPETITION",
    "description": "Crypto Crunch 2.0 was a mock trading competition. Over 970 participants registered on the partner platform, Roostoo, where they were given 50,000 virtual US dollars to trade for various cryptocurrencies, whose values reflected real-world cryptocurrency trends and prices. The participants made many investments and actively indulged in and learnt about various tokens, investment techniques, portfolio and risk management as well as the merits and demerits of an unregulated, digital and ever-changing market. The market for cryptocurrencies rose and fell during the course of the competition, and participants could enter/exit the competition anytime within the 7 day duration",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3befa6619e6e2832afb93eb3d7a1879cce4f6cec-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-94130d91-81ed-4204-8483-5d5e087f2482",
    "code": "COMPETITION_76",
    "year": "2022",
    "date": "APR 01",
    "title": "Cyber Grid",
    "category": "COMPETITION",
    "description": "Cyber Grid, held from August 28th to 30th,2024 in collaboration with IEEE WIE ISTIC Tunisia, was a premier international cybersecurity event dedicated to global collaboration, knowledge sharing, and empowering the future leaders of cybersecurity through expert-led sessions and insightful discussions.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/fe4b48903e19bc45598270682f8ce3f185c1cce8-900x1280.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-960fc953-1709-4dda-8c97-097e3293e22b",
    "code": "COMPETITION_77",
    "year": "2022",
    "date": "MAY 02",
    "title": "Artemis",
    "category": "COMPETITION",
    "description": "A well-being initiative focused on student mental health, providing practical strategies to manage academic stress and encouraging emotional resilience.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/57115ed7496423d04d87483aa7083218dfa27fec-602x851.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-9853101a-b075-4b39-8e17-db9a533b11cf",
    "code": "COMPETITION_78",
    "year": "2022",
    "date": "JUN 03",
    "title": "TRAIL OF TRADES",
    "category": "COMPETITION",
    "description": "Firstly, out of 400+ participants, the top 100 contestants were shortlisted on the basis of an online quiz held on the 2nd of may.  After that, they were given time to interact amongst themselves and create teams of 4 each. The teams were instructed to find classrooms that had surprise tasks moderated by IEEE volunteers. The tasks included dumb charades, tug of war, Pictionary and many more exciting games. After the completion of the tasks, the team was given trading cards (i.e. grass, cement, etc.) which they had to collect and arrange in a certain order to submit to the main desk and collect resources (i.e. hotels, cities, etc.) which were worth points.  The first three teams to reach the winning benchmark was declared as the winners of the Trail of Trades event.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/1a94c4223fd9ccf1dde0c6e9612a867de7f337f5-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-9ae913e4-f58b-427e-9776-bd6df715dbf4",
    "code": "HACKATHON_79",
    "year": "2022",
    "date": "JUL 04",
    "title": "HACKED",
    "category": "HACKATHON",
    "description": "The workshop started off with the speaker explaining about security on the internet. The participants were also very interactive and had all of their doubts cleared with the speaker. It also covered a roadmap to cyber security certifications and how to build a career in cybersecurity. All the topics from basic to an intermediate level were included and explained by the speaker. By the end of it, the participants learnt a lot and this workshop will surely help them get started with cybersecurity",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a609f35c643904f9565a8e056e93b614aeded0af-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-9bb1a988-5439-4683-8b39-92bf2d44f92f",
    "code": "HACKATHON_80",
    "year": "2024",
    "date": "OCT 18-20",
    "title": "WebForge - A Smart Campus Webathon",
    "category": "HACKATHON",
    "description": "WebForge was a two-day online web development competition organized by the IEEE Computational\nIntelligence Society (CIS) Student Chapter, Manipal University Jaipur, on 13th–14th June 2026. The\nevent aimed to provide participants with hands-on experience in designing and developing a web-based\nsolution for a real-world problem.\nThe competition was conducted in two rounds. In Round 1, participants submitted a UI/UX\nprototype or wireframe of a Hostel Management Website and Portal, showcasing the planned\nfeatures, user flow, and overall design. Based on innovation, usability, and technical feasibility,\nshortlisted teams advanced to Round 2, where they developed and presented a fully functional\nwebsite before the judging panel.\nThe final solutions included modules such as student registration, login authentication, student\nand admin dashboards, hostel room management, event notifications, complaint management,\npayment tracking, and other essential hostel services. Participants were evaluated on criteria\nincluding functionality, user interface, innovation, technical implementation, presentation, and\noverall user experience.\nThe event successfully encouraged students to apply their technical knowledge in a practical\nsetting while fostering creativity, collaboration, and problem-solving skills. It also provided participants with valuable exposure to real-world web development practices and industry-\noriented project execution.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "/events/webforge.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-9d8a1129-973d-4d7f-b4a0-6908a6ad3b4d",
    "code": "COMPETITION_81",
    "year": "2022",
    "date": "SEP 06",
    "title": "21 Days Of Code",
    "category": "COMPETITION",
    "description": "21 Days of Code is a coding challenge organized by IEEE SB MUJ to help students strengthen their Data Structures and Algorithms (DSA) skills through consistent daily practice. Starting from 30th June, participants will receive daily DSA problems, weekly quizzes, and guided support to build strong problem-solving abilities. Participants also stand a chance to earn certificates, exciting goodies, and be featured on our social media pages. Quizzes will be conducted every Wednesday and Saturday. Before each quiz, learning resources will be shared with participants, followed by the quiz link once the contest goes live. After the quiz, an answer key will be provided for self-evaluation.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3c9ce7e177bf580a40d088e8b2f1adeb9905e5f7-904x1280.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-a2f02c01-0774-4c44-8112-4ef1883a1e5c",
    "code": "COMPETITION_82",
    "year": "2022",
    "date": "OCT 07",
    "title": "BrandIT",
    "category": "COMPETITION",
    "description": "BrandIt was a dynamic and engaging event from August 3rd to 5th, 2024. Participants developed unique brand ideas into real-life products or services. They crafted presentations, designed websites, and showcased their skills. The event concluded with pitches to a panel of three expert judges: Bibhu Kalyan Nayak, Kartik Singh, and Priya Bhola. The creativity and innovation displayed were truly inspiring.\nBits N Brews : IEEE WIE MUJ is excited to present Bits N’ Brews episodes—an inspiring alumni talk.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/5a49131978c71a9731f3d32cc281fd29c5a37716-1132x1600.jpg",
    "highlights": [
      "High-impact Peer Networking",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-a56ae905-f5fa-4639-bea1-27d70b806862",
    "code": "COMPETITION_83",
    "year": "2022",
    "date": "NOV 08",
    "title": "Crown Conquest",
    "category": "COMPETITION",
    "description": "rown Conquest was an engaging and strategy-driven event that combined technical problem-solving with gamified competition. Teams participated in multiple rounds including coding challenges, logic puzzles, and rapid-fire tasks. Each team started with a base HP and earned jewels through performance. The crown acted as the central objective, where teams could capture and defend it based on their performance in each round. Real-time leaderboard updates ranked teams based on jewels and HP. In cases of tie, HP was used as the deciding factor. The event also featured interactive elements like live battle states, crown capture animations, and dynamic team rankings. Participants demonstrated strong teamwork, problem-solving skills, and strategic thinking throughout the event.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a0e2e339b71de441fb11cf77d2e6ef62a5936611-1131x1600.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-a5c4394f-7438-4283-993b-80978a2ae38f",
    "code": "COMPETITION_84",
    "year": "2022",
    "date": "DEC 09",
    "title": "HUMBLE AND HUMANE",
    "category": "COMPETITION",
    "description": "Humble and Humane was a normal donation drive where in the students donated basically anything they want. From old clothes to used up hardware like water bottles, shoes etc. The donation drive was conducted in offline mode. IEEE SB MUJ  also partnered up with an NGO called “All About Happiness” to make the drive successful. The NGO made sure that the donations reach the people who actually need it. All About Happiness Foundation (Non-government organization) Email: happiness1995allabout@gmail.com Tel no: +91 90797 91206",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/d16bd877e5b487cb9e4032de40dc823c0069a74e-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-a932784c-f989-4b16-a8a0-d5c496ee6740",
    "code": "FLAGSHIP_85",
    "year": "2022",
    "date": "JAN 10",
    "title": "Tech Summit",
    "category": "FLAGSHIP",
    "description": "The Tech Summit at Genesis 5.0 was a powerful confluence of ideas, insights, and inspiration. Featuring an impressive lineup of speakers: Nitesh Prasad (Corporate Wala YouTuber), Nandini Sharma (ThisIsAlaska), Gaurav Ghai (LinkedIn Top Voice), and Ashutosh Pratap Singh. The session gave students a chance to hear real stories and perspectives from leaders across diverse fields. Far from being a formal lecture, the summit felt like a conversation, sparking curiosity and motivation among the audience. It offered guidance on navigating technology, careers, and innovation, leaving participants energized and encouraged to chase their ambitions with confidence.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9aa686c3fbac6b6286e5a9f8afc21b490929b0b1-904x1280.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-a952967f-a6a0-44be-9d9f-bd1835ab3293",
    "code": "FLAGSHIP_86",
    "year": "2025",
    "date": "APR 08-10",
    "title": "Fostering the Future 8.0",
    "category": "FLAGSHIP",
    "description": "Fostering the Future 8.0 hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "UPCOMING",
    "attendees": "500+ Participants",
    "image": "/events/fostering_future.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-ac8b2e9d-83dc-45ba-9a7f-1f82378bdd68",
    "code": "COMPETITION_87",
    "year": "2022",
    "date": "MAR 12",
    "title": "Network with Wie",
    "category": "COMPETITION",
    "description": "NWWIE is an overnight women only event ,filled with technical and non-technical programs to engage the participants with fellow women",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/85bdd2cb05a45903c459cf5e7da21f9f03fae80c-917x1280.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-accb0ecb-8d8d-43b0-b274-e1a2276cd18f",
    "code": "COMPETITION_88",
    "year": "2022",
    "date": "APR 13",
    "title": "Bit2byte",
    "category": "COMPETITION",
    "description": "Participants got ready to put their coding skills to the test! Bit2Byte was there to push their creativity and challenge their limits, whether they were beginners or pros. 💡",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/608e42642aa2cd7ab34d4f0f945f9d5d1dd22aa6-3712x5251.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-b1772422-5b4c-4a4b-aa75-6e6cf60bb6df",
    "code": "COMPETITION_89",
    "year": "2022",
    "date": "MAY 14",
    "title": "TECHGYAAN",
    "category": "COMPETITION",
    "description": "As the name suggests, the online workshop series will focus on connecting the attendees to the basic ideas of different relevant topics such as IoT, Artificial Intelligence, NFT, Blockchain",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/8840b9ad59587c72d4265e0b080c98e13a4fc77c-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-b3f27f24-63c5-41cd-b4d1-7f3116794b0c",
    "code": "COMPETITION_90",
    "year": "2022",
    "date": "JUN 15",
    "title": "SPIN A WEB: WEB DEVELOPMENT COMPETITION",
    "category": "COMPETITION",
    "description": "Spin a Web was a Web Development Competition which tested the designing as well as development skills of the participants. The participants designed a static website based on a theme given to them. It consisted of 2 rounds, the 1st round tested the designing skills of all the participants. The top designs advanced to round 2 where each team developed a website based on their design.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/7144c26d8acb12ee8ded907647da356b1049347a-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-b535fd4c-7b7a-4d42-92f9-f2d28cb863ea",
    "code": "COMPETITION_91",
    "year": "2022",
    "date": "JUL 16",
    "title": "FutureSync",
    "category": "COMPETITION",
    "description": "•\tFutureSync: Focused on hands-on prototyping and design thinking, this event utilized tools like 3D printing and robotics to help students convert abstract ideas into functional models",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a9680c20dbf1f3d543e3bdae5f34d095787b5199-602x851.png",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-b56bba95-3755-4274-842f-3072429141c2",
    "code": "HACKATHON_92",
    "year": "2022",
    "date": "AUG 17",
    "title": "Hack To The Future",
    "category": "HACKATHON",
    "description": "✨ Unleash Your Genius at Hack to the Future! ✨ Hack to the Future, organised by IEEE SB in collaboration with Devfolio, Polygon, and ETHIndia, is a 36-hour online traditional hackathon focused on sustainability. 🗓 Date and Time: July 20th, 12 AM - July 21st, 12 PM 💰 Prize Pool: ₹35k 🧑‍💻 Domain: Open Innovation (Open For All) 🎁 Additional Rewards: Schwags and internship opportunity at Fold (if tech uses data provided in the CSVs given by Fold) Warm Regards, IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/09a360ef6f4433f2c220fd13b2bbb85a8a0bce64-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-b836f69f-2e12-4d3d-906c-7a288e09a48a",
    "code": "COMPETITION_93",
    "year": "2022",
    "date": "SEP 18",
    "title": "Matrix Conundrum",
    "category": "COMPETITION",
    "description": "DSA is scary! \nNot at Matrix conundrum where the participants received 16 mind boggling DSA related problems in the form of a matrix across different social media platforms like Instagram, Whatsapp, LinkedIn and many others. Challenging the participants, helping them evolve their problem solving and coding abilities.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e49fc5244a39025b7ae20697e3d35b11680db09a-1020x1378.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-bda63ca3-6126-4bdf-a1b9-492b558784f8",
    "code": "COMPETITION_94",
    "year": "2022",
    "date": "OCT 19",
    "title": "TechEden",
    "category": "COMPETITION",
    "description": "•\tTechEden: A speaker series that brought together professionals from industry and academia to share valuable insights on innovation, current research trends, and career opportunities in emerging tech fields.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/408d9edf7f7bf6f8d382849ffee63b887204b4c5-602x752.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-bec4d1c1-25f4-4408-8ae9-2931eea306eb",
    "code": "HACKATHON_95",
    "year": "2022",
    "date": "NOV 20",
    "title": "Hackerzstreet 3.0",
    "category": "HACKATHON",
    "description": "Hackerzstreet 3.0 💻 is the ultimate hackathon where creativity, chaos, and code collide. ⚡ Over an intense sprint of innovation, participants will team up to brainstorm, build, and deploy solutions that push the limits of technology. From late-night debugging marathons to last-minute breakthroughs, expect a rollercoaster of coding, collaboration, and caffeine. 🚀 Whether you’re a backend wizard, a frontend artist, or the one who thrives under deadline pressure, this is your arena to turn wild ideas into real-world impact. Hackerzstreet 3.0 isn’t just about winning—it’s about building, breaking, bonding, and proving that the best code often comes alive under fire. 🔥👾",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "500+ Participants",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e705d6f743fe17f5cb55f5b5190d756dffc91fe3-927x1312.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c10fab98-c6ea-41c8-b9f2-49e977dfff7a",
    "code": "COMPETITION_96",
    "year": "2022",
    "date": "DEC 21",
    "title": "Hands On Hustle",
    "category": "COMPETITION",
    "description": "Participants had the opportunity to explore the exciting realm of creating a personal tutoring bot for placements. The main focus of the session was on developing an LLM-powered chatbot, providing attendees with valuable insights and practical skills, all at no cost.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3e93f70566573ed2ed5622fa39431241ef1cb0ca-320x320.png",
    "highlights": [
      "Certified Participation & Opportunities",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c185fd5c-b3b0-4259-9b40-bf9fc1fabc9a",
    "code": "COMPETITION_97",
    "year": "2022",
    "date": "JAN 22",
    "title": "T - MINUS",
    "category": "COMPETITION",
    "description": "You just stepped into chaos! Filled with tech related problems laced with mystery and suspense, and a bit of horror. Can you escape?\nWell, the participants had a total of 20 minutes to escape from 5 levels of hurdles. With hints spread all over, one simply needed to connect the dots and solve the hurdle, challenging one’s technical, problem solving, creative thinking, coordination abilities and of course sanity!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/737cd309b996317b350b0446db6f1dd431607877-735x1040.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c1d86031-2b7c-4fad-ba75-532f8b1bd612",
    "code": "COMPETITION_98",
    "year": "2022",
    "date": "FEB 23",
    "title": "Throttle",
    "category": "COMPETITION",
    "description": "In this thrilling robotics challenge, teams built and controlled bots to navigate a dynamic obstacle course with varied terrains. Speed alone wasn’t enough, teams had to strategize around obstacles, checkpoints, and limited repositioning to avoid penalties. With 2 attempts to refine their performance and flexibility in bot design, participants balanced speed, precision, and adaptability to claim victory, showcasing their engineering prowess.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/c1f5f0d156dfef7215fae8ccc114032069bbc2c1-2941x4160.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c2ab7099-62fd-4583-9273-efbc0e574e23",
    "code": "COMPETITION_99",
    "year": "2022",
    "date": "MAR 24",
    "title": "Network With WIE by GENESIS 2.0",
    "category": "COMPETITION",
    "description": "A fun filled interaction session, to break the ice with fellow female engineers. The event will span throughout the nights, with games and interaction session with seniors.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/ec36f286f3a043857dc9629f323fd1026d2d21d4-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c2f75d49-7b9a-4c6f-ad3e-28b669b632ea",
    "code": "COMPETITION_100",
    "year": "2022",
    "date": "APR 25",
    "title": "BuildFolio",
    "category": "COMPETITION",
    "description": "🌐 BUILDFOLIO - Design Your Digital Identity!  Buildfolio is your chance to create an interactive & dynamic portfolio website that screams YOU! 🎨🖥\n \n✨ Who you are & what fuels your fire \n💪🏻 Your superskills & hidden talents \n🏆 Project you're proud to flaunt \n💡 Quirky facts, bold designs, go wild!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/884b18d4f3fad728b2b763bb20e28957a3f681c1-1131x1600.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-c96e97a9-c193-4b37-b8a3-cee64a35656d",
    "code": "COMPETITION_101",
    "year": "2022",
    "date": "MAY 01",
    "title": "Elohim 2.0",
    "category": "COMPETITION",
    "description": "Before Genesis 4.0 is over, we had a surprise, ELOHIM 2.0\nOne of the best experiences one can have, packed with comedy, dance, music and a lot of fun, the closing act of Genesis 4.0. Had a massive talent showdown in collaboration with TMC, COREOGRAFIA AND CINEFILIA lighting up the stage with some moves and groves. We also had a stand up comedy show that made sure to crack everyone up.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/f8e1fec4d851c81a19384199cb5d7a55ff63b6bb-1278x1280.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-cfdf1e0c-8a32-4df3-ba23-2441b4b0ef60",
    "code": "WORKSHOP_102",
    "year": "2022",
    "date": "JUN 02",
    "title": "IOT Demystified: A Complete Direct",
    "category": "WORKSHOP",
    "description": "IOT Demystified: A Complete Direct is an upcoming workshop organized by IEEE CS MUJ. The mentor will focus on the basics of the field and teach it to the participants in a project-based environment. This workshop will focus on setting the stage for every individual curious to know more about IOT and is packed with all the information relating to introduction to IOT, microprocessor, practical insights and projects",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "/events/iot_demystified.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-d13151c7-101d-44d7-b160-2983f7dff319",
    "code": "COMPETITION_103",
    "year": "2022",
    "date": "JUL 03",
    "title": "BREACH POINT",
    "category": "COMPETITION",
    "description": "The event successfully introduced participants to the dynamic field of cybersecurity through expert insights and interactive discussions. Attendees explored global study opportunities, industry career paths, and emerging research trends. A highlight of the session was the exposure to the Cyberange Lab, where participants gained hands-on understanding of cybersecurity environments. The event proved to be informative, engaging, and valuable for students interested in pursuing cybersecurity careers.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e9c51f744bed186ac782f33a9850a6526b7d2da5-1064x1600.jpg",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-d62bf161-2e72-4cc3-b1e1-abe451760204",
    "code": "HACKATHON_104",
    "year": "2025",
    "date": "MAR 14-15",
    "title": "HackerzStreet 4.0",
    "category": "HACKATHON",
    "description": "HackerzStreet 4.0, organized by the IEEE Computer Society, was a 24-hour hackathon conducted on 21st–22nd March 2026 at Manipal University Jaipur. The event saw active participation from engineering and management students in teams of 2–4 members.\nThe hackathon consisted of two rounds. Round 1 began on 21st March at 4:00 PM, where participants worked on problem statements in both offline (MUJ students) and online (external participants) modes, supported by mentorship sessions. Round 2 was held on 22nd March from 12:00 PM to 4:00 PM, where shortlisted teams presented their projects to a panel of judges based on innovation, functionality, and impact.\nThe event concluded with prize distribution worth ₹60,000 and participation certificates for all, successfully providing a platform for innovation, collaboration, and technical skill development.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "500+ Participants",
    "image": "/events/hackerzstreet.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-d882b84e-96b2-4b9c-9620-87d8980bedf5",
    "code": "COMPETITION_105",
    "year": "2022",
    "date": "SEP 05",
    "title": "21 Days Of Code 2.0",
    "category": "COMPETITION",
    "description": "A 21 day long😋 event presented to you by IEEE SB MUJ, in collaboration with Coding Blocks!💪🏻 This year with Dual Domain (DSA👾& Web Dev💻) 3-5 questions everyday with a platform leaderboard 🔥 That's not all, we also provide ~ * Networking events💭 * Goodies 🎁 * Certificates😩 * ⁠Questions to practice �� * ⁠Weekly quizzes⁉️ * A project for your CVs✨ Webinar : 21st June 🗯️ Event Date : 24 June-14 July Mark your calendars 🗓️ And prepare for this exciting event⚡️ Stay tuned for further details. IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/407a32538e72e9ad5e55cf6cf0c64f1ef6f3a0cc-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Hands-on Project Development",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-da52e802-800e-40fb-988d-4149fb991861",
    "code": "COMPETITION_106",
    "year": "2021",
    "date": "OCT 06",
    "title": "F1NALYZE",
    "category": "COMPETITION",
    "description": "F1NALYZE hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/fa67d4fd0643661e92f141b218742e920fd4b905-375x531.webp",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-da895359-ae70-413d-9b24-170a67355e1e",
    "code": "FLAGSHIP_107",
    "year": "2021",
    "date": "NOV 07",
    "title": "Tech Summit",
    "category": "FLAGSHIP",
    "description": "IEEE GENESIS was back with the most awaited event – The Tech Summit 🚀 ✨ The voltage was turned up as we presented the most Electrifying Panel ever!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/b6ae9a79e8e2424f9042c452605d3053dc4ae559-3710x5251.png",
    "highlights": [
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-dacd0b4b-f66d-4a61-a6a7-9bdf5b0e08b2",
    "code": "COMPETITION_108",
    "year": "2021",
    "date": "DEC 08",
    "title": "Breached",
    "category": "COMPETITION",
    "description": "Breached hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3e1ce8fd1e626cba5d91b2700de6358820c7eed2-927x1312.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-dbcfdcf8-7559-4d34-ad20-61f890ffb32d",
    "code": "COMPETITION_109",
    "year": "2021",
    "date": "JAN 09",
    "title": "Trail Of Trades",
    "category": "COMPETITION",
    "description": "Trail Of Trades  hosted by IEEE Student Branch at Manipal University Jaipur, providing high-impact technical learning, hands-on development, and collaborative peer networking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/a1c3d34effa557317f00162c538c79007a88bf49-904x1280.jpg",
    "highlights": [
      "Hands-on Project Development",
      "High-impact Peer Networking"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-df06394d-b7d5-4bb4-940d-590f3b79edf5",
    "code": "COMPETITION_110",
    "year": "2021",
    "date": "FEB 10",
    "title": "CODEPHRENIA",
    "category": "COMPETITION",
    "description": "Codephrenia was an online codeathon event in which all participants were given questions related to data structures and algorithms on the Codechef platform which had to be completed in a given time limit. There are 3 questions which must be completed within a span of 1.5 hours. Each question has a specific number of points which one gets on attempting each question. The top rankers with minimum time required to complete as many questions as possible are given prizes and goodies respective to their rank.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3d9c6ad8828bbe15198c1e287b6f121b4d16da81-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-dff485fd-a70d-4dd1-bc30-bbd3f8927139",
    "code": "HACKATHON_111",
    "year": "2021",
    "date": "MAR 11",
    "title": "SCAM-A-THON",
    "category": "HACKATHON",
    "description": "In today's world, where scamming and phishing are on the rise, it is very important to put yourself in a scammer’s shoes. At SCAM-A-THON, participants created fake websites and then contacted the judges on the spot through calls, emails, and other means. Their goal was to lure the judges onto their websites and convince them they were real, testing their web development, spontaneity, communication, and various other skills",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/3d8fa1736261f19d7124407ec0d6d7b60a760dbe-900x1600.jpg",
    "highlights": [
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-e091a17f-5eee-46d6-96b3-9c6b2ef189b2",
    "code": "COMPETITION_112",
    "year": "2021",
    "date": "APR 12",
    "title": "Mukti",
    "category": "COMPETITION",
    "description": "Mukti served as the concluding ceremony of Elysium 2.0 held at Manipal University Jaipur. The event brought together participants, faculty, organizers, and collaborators to reflect on the journey of the fest. It highlighted key segments such as Confluence, Swara, The Deal Room, HerVerdict, and the Vision IAS Open Session. The ceremony included prize distribution, recognizing outstanding performances across events. Gratitude was expressed to faculty mentors, sponsors, and partners for their support. The session fostered a sense of community and concluded with appreciation and anticipation for future editions.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/725228023afae64c5cabbb835d72facf36ada8ab-334x474.jpg",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Expert Mentorship & Guidance"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-e66e82f0-263e-4a7b-b343-9acafb3923a0",
    "code": "WORKSHOP_113",
    "year": "2021",
    "date": "MAY 13",
    "title": "CODE CONQUEST: A GUIDE TO WEBDEV",
    "category": "WORKSHOP",
    "description": "Code Conquest: A guide to web development” was a 2-day webinar to learn the basics of HTML and CSS, along with a hands-on project\nconducted by IEEE WIE MUJ from 20th - 21st January 2022. The speaker of the session was Mr Deepak Verma, a Full-Stack developer at\nFly0kart as well as a Web Development mentor at GirlScript Foundation. It was an interactive hands-on workshop wherein the participants were\ngiven a basic introduction to Web Dev along with live implementation.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/37f3d0922f14fc985112a2ab54096db849794c5c-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-e7bee595-86bb-4293-a50f-a89627639965",
    "code": "FLAGSHIP_114",
    "year": "2021",
    "date": "JUN 14",
    "title": "JC Summit",
    "category": "FLAGSHIP",
    "description": "The IEEE Bollywood-themed summit held on Sunday, 2nd February, was a vibrant and unforgettable experience. Starting at 11 AM, the event embraced atraditional Bollywoodl dress code, encouraging attendees to channel their favorite characters with flair. The gathering was filled with music, lively interactions, and an air of excitement as students met their seniors and uncovered the inside stories behind IEEE’s most memorable events. From engaging conversations to the latest updates, the summit provided a perfect blend of fun and insight. The enthusiasm and Bollywood-inspired energy made it a truly unique and memorable afternoon for everyone present.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "350+ Attendees",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/c51f134352827dc565445e64b06a3e11981cb8b3-1080x1350.jpg",
    "highlights": [
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-ea8eec2f-7cab-4a91-889c-9676868f1e74",
    "code": "COMPETITION_115",
    "year": "2024",
    "date": "SEP 15",
    "title": "DataPulse",
    "category": "COMPETITION",
    "description": "•\tDataPulse: A competitive datathon challenging participants to perform financial data analysis and derive actionable insights from complex, real-world datasets",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "/events/datapulse.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-eb8802be-c2d4-49a9-be1b-0969b3ed7513",
    "code": "COMPETITION_116",
    "year": "2021",
    "date": "AUG 16",
    "title": "CYBERIFT",
    "category": "COMPETITION",
    "description": "The event was a two hour-long seminar wherein our speaker, Mr. Mukesh Choudhary, talked about the importance of digital security, its basic principles and his own experiences in the field. More than 150 students listened with great enthusiasm as he stressed on the importance of foresight and caution in our online habits. The session was interactive too, with students asking questions regarding career paths in the field, the ideal learning journey and more",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/c20b7950bb5032abd168bca02648d4f15ab4c8a6-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-ed822fc1-06f0-47bb-b8ef-a7aceeb5e785",
    "code": "COMPETITION_117",
    "year": "2021",
    "date": "SEP 17",
    "title": "Checkmate",
    "category": "COMPETITION",
    "description": "CHECKMATE is a live team strategy tournament where teams of 3–4 players take on the roles of King, Rook, Bishop, and Knight to compete in a tactical battle to capture the opponent’s Crown. The event begins with a Zone Phase, where each role completes specialized challenges testing deduction, memory, logic, and coordination to earn shields and points. In the Chess Phase, teams enter a 7×7 live chessboard where players physically move as their pieces, following chess-inspired rules. Progressing across the board involves quick micro-challenges, strategic duels, and careful shield management. Teams win by capturing the opponent’s Crown, eliminating their King, or achieving checkmate, making every move a test of strategy, teamwork, and quick thinking.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e1c254f508619b4b3fad8551475ceba5f5e01149-1414x2000.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-ed870489-d761-4acd-be73-fb9af8f79191",
    "code": "COMPETITION_118",
    "year": "2021",
    "date": "OCT 18",
    "title": "Snatch",
    "category": "COMPETITION",
    "description": "Snatch turned out to be a thrilling codeathon packed with strategy, speed, and surprises. A total of 36 teams competed fiercely, using creative tactics and power-ups like Reverse, Time Freeze, and Attack to gain the upper hand. The event showcased impressive coding skills, teamwork, and quick thinking as teams battled their way through the challenges. It was an intense and memorable competition that highlighted the spirit of innovation and collaboration.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/181d38ffa00d7852bb1e4e3e3f5f52e9a5c11a64-2939x4160.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f0c6f9e8-246f-4a7a-9404-7026cff071c8",
    "code": "COMPETITION_119",
    "year": "2021",
    "date": "NOV 19",
    "title": "BURNOUT",
    "category": "COMPETITION",
    "description": "The Burnout MotoGP Datathon is a high-speed data science challenge where participants analyze real MotoGP datasets. Over a span of 12 hours, teams will work intensively to extract insights, identify patterns, and build machine learning models to make accurate predictions or reveal hidden trends in racing data. Designed to mirror the fast-paced world of MotoGP, the event pushes participants to apply analytical thinking and technical skills under time pressure. Using tools like Python, machine learning frameworks, and data visualization techniques, teams will compete for innovation, precision, and impact in their final solutions.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/07a21facca7fe9d7c19209445c9dfd9d99968aa6-3710x5251.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f12440e8-a01e-4adc-b0ca-b5f3a9552611",
    "code": "COMPETITION_120",
    "year": "2021",
    "date": "DEC 20",
    "title": "Breacout 3.0 by GENESIS 2.0",
    "category": "COMPETITION",
    "description": "This is a offline treasure hunt competition based on the theme of your two most beloved shows, friends and Brooklyn nine nine. With a common theme, participants will have a chance to choose which theme to go with. The first round will be an online quiz with not just questions from the show, but also dialogues, word searches etc. The qualified will have to team up with other contestants and form teams of 4 and will contest to become the champion in the treasure hunt which will happen in the campus",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/9d1f6223b3f045d8211fd7a6f5e5496c56cc0787-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f18fd264-ace9-425e-9a1e-e5c07da7fb96",
    "code": "HACKATHON_121",
    "year": "2021",
    "date": "JAN 21",
    "title": "CODEPHRENIA JR: CODEATHON",
    "category": "HACKATHON",
    "description": "Codephrenia Jr was a competitive coding competition that provided students the opportunity to improve their problem solving capabilities and find solutions go real world work situations.  Students were provided with a problem set and were expected to solve them within a given time frame and the participants who came up with the most accurate solutions got a chance to win exciting prizes and goodies.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/961297745c7df2d7ff2404511611b73dce906ee2-320x320.png",
    "highlights": [
      "Exciting Cash Prizes & Goodies",
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f25e7b37-5936-47ae-89a0-ada152a6aaab",
    "code": "COMPETITION_122",
    "year": "2021",
    "date": "FEB 22",
    "title": "Tech Expo",
    "category": "COMPETITION",
    "description": "Stepped into the spotlight and showcased your projects 🔥! Whether you were a software 💻 mastermind or a hardware hero, Tech Expo was your stage!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/def6066a5f8d3943756f50281a3904c25d0dbe0f-3710x5251.png",
    "highlights": [
      "Hands-on Project Development",
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f3cf2468-35ab-48da-b433-e62e3e53d48a",
    "code": "FLAGSHIP_123",
    "year": "2023",
    "date": "AUG 23",
    "title": "Chandrayaan-3 Live Screening Event",
    "category": "FLAGSHIP",
    "description": "🌌 Witness History Unfold: Chandrayaan-3 Live Screening Event! 🚀 💙IEEE SB MUJ invites you to the screening of Chandrayaan-3's landing✨🎉 Chandrayaan-3, the latest lunar mission by ISRO, is set to land on the lunar surface on *August 23rd.*🌕 Join us for a rememberable evening with a thrilling Game Night ⚽and *Open Mic!!*🎤 📅 Date: 23rd August 2023 🕒 Time: 5:00Pm onwards 📍 Venue: Genesis Chowk Experience the thrill, the anticipation, and the historic achievement together with proud fellow Indians🇮🇳🥳 TEAM IEEE SB MUJ",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "2500+ Attendees",
    "image": "/events/chandrayaan.png",
    "highlights": [
      "Keynote Sessions & Tech Talks",
      "Campus-wide Student Participation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f477bae4-71e4-4f5a-bcc4-32832d082ebb",
    "code": "HACKATHON_124",
    "year": "2021",
    "date": "APR 24",
    "title": "IC HACK",
    "category": "HACKATHON",
    "description": "•Phase 1: Hybrid mode on 7th and 8th October \n•Phase 2: Offline at MUJ on 21st to 22nd October This competitive event took place over two stages; The first stage was held online in order to prepare participants with knowledge required for the much-awaited second phase of this contest: An exciting 36-hour overnight Hackathon which tested the mettle of our contestants and pushed their skills, creativity and ability to innovate to the absolute limit!",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "200+ Hackers",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/b7df285fbb851d691cf65f9a7abf5029027e9345-320x320.png",
    "highlights": [
      "Intensive Coding & Problem Solving",
      "Live Demo & Evaluation"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f62da6dc-3a7a-42bf-98d4-62b31c62818f",
    "code": "COMPETITION_125",
    "year": "2021",
    "date": "MAY 25",
    "title": "The Circle Of Deception",
    "category": "COMPETITION",
    "description": "“The Circle of Deception” was an offline event conducted on 9th October 2025 at AB1. It revolved around teamwork, observation, and strategic deception. Participants competed in multiple rounds including riddles, logical deduction, ASCII quizzes, and interactive elimination games. A unique element involved identifying hidden “Deceptors” through voting rounds. Key rounds included: Code or Decode (cipher solving) Truth or Trash (logic-based reasoning) ASCII Quiz Chit Happens (deception-based hints) Grand Finale (Wheel of Deception) The event emphasized teamwork, communication, and quick thinking. It concluded with the crowning of the “Master of Deception.” It also aligned with SDG 4 by promoting cognitive skill development and interactive learning.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/ca1b56b7d46c7b6d2ef770efa816224ab382f691-756x1070.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f6d5f33c-85f3-4e8e-82a6-376c34cf8007",
    "code": "COMPETITION_126",
    "year": "2021",
    "date": "JUN 01",
    "title": "Bits & Brews 8.0",
    "category": "COMPETITION",
    "description": "Bits n Brews 8.0 featured Ms. Kshiti Malla (SDE-1 at Cadence, Ex-Goldman Sachs Summer Analyst, B.Tech CSE, MUJ '25), who shared her journey from Manipal University Jaipur to the tech industry.\nKey highlights of the session included:\nCareer journey from college to industry\nExperience at Goldman Sachs and Cadence\nIntroduction to Agentic AI and emerging technologies\nImportance of consistency, curiosity, and continuous learning\nResume building, internships, and placement preparation\nInteractive Q&A session addressing student queries regarding careers, interviews, and technical skills\nThe session concluded with an engaging discussion where participants gained practical insights into navigating their careers in technology.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/32d737e1adfbc0cfa6fd6769be5e2b2dc39a08d9-1080x1350.webp",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-f9cb7825-bfec-44be-8a67-e3f51df958b1",
    "code": "WORKSHOP_127",
    "year": "2025",
    "date": "JAN 22",
    "title": "GENIFY - Generative AI Workshop",
    "category": "WORKSHOP",
    "description": "The two-hour Generative AI workshop was conducted to provide participants with an in-depth understanding of how artificial intelligence can generate human-like content such as text, images, and more. The session covered the fundamentals of generative models and included hands-on demonstrations using tools like ChatGPT and DALL·E.\nThe workshop also introduced the concept of Agentic AI, focusing on systems capable of autonomous decision-making and goal-driven behavior. Participants gained valuable insights into current AI capabilities, explored practical applications, and discussed the ethical considerations surrounding this transformative technology. Schedule of the event\nDate & Time: 23rd July 2025\n12pm-2pm",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "150+ Students",
    "image": "/events/genify_ai.jpg",
    "highlights": [
      "Hands-on Project Development",
      "Live Interactive Coding",
      "Real-world Applied Use Cases"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-f9fb089c-36ae-4f15-bfab-aa53c4f17c57",
    "code": "COMPETITION_128",
    "year": "2021",
    "date": "AUG 03",
    "title": "Bits N Brews Ep. 4",
    "category": "COMPETITION",
    "description": "On January 11th, 2025, the fourth episode of Bits N’ Brews, an interactive virtual speaker series organized by IEEE WIE MUJ, was held with the esteemed Ms. Kritika Rag as the featured speaker. A proud alumna of Manipal University Jaipur and currently working as a Software Engineer at Google, Ms. Rag shared her inspiring journey from MUJ to one of the world’s top tech companies. She completed her B.Tech in Computer Science and Engineering from MUJ, where she developed a strong technical base and discovered a deep interest in design and user experience. Her internship as a Product Design Intern at Fractal Analytics further strengthened her skills in product thinking and interface design, paving the way for a smooth transition into the corporate world.\nThe session began with a warm welcome and an introduction to Ms. Rag’s academic and professional background. Delivered in a conversational format, the session offered valuable insights into how students can make the most of their undergraduate years. Ms. Rag emphasized the importance of working on personal projects, maintaining consistency in learning new technologies, and using platforms like LinkedIn to build a strong professional presence. She also shared practical advice on resume building, interview preparation, and how to stand out in competitive placement seasons—all rooted in her own real-world experiences.\nThe event concluded with an engaging Q&A session, during which Ms. Rag addressed audience questions on time management, portfolio creation, building a tech career as a fresh graduate, and overcoming early challenges. Her composed and thoughtful responses resonated deeply with the attendees. The session ended with a sincere vote of thanks, expressing heartfelt appreciation to Ms. Kritika Rag for her invaluable time, guidance, and inspirational presence",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/8e9405d380b430f67dfeda2248ec09ab05945e7e-330x466.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Hands-on Project Development",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-fa298844-82db-47b4-9186-63e18b16873d",
    "code": "COMPETITION_129",
    "year": "2021",
    "date": "SEP 04",
    "title": "HerVerdict",
    "category": "COMPETITION",
    "description": "HerVerdict at Elysium 2.0 transformed the venue into a dynamic courtroom filled with sharp arguments and powerful counterpoints. Teams debated thought-provoking topics ranging from campus culture to broader societal discussions. The format encouraged structured reasoning, quick rebuttals, and impactful delivery. The unique highlight of the event was the women-led bench that evaluated arguments based on logic, clarity, and persuasion, delivering final verdicts after intense rounds of debate. The audience remained highly engaged, reacting to bold statements and strong rebuttals, making HerVerdict one of the most interactive and high-energy segments of Elysium 2.0.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/e59ae1cf7bb18c2d76e0bde2d98fd2ee0e08bcbe-1131x1600.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-fb49fdf3-9edf-4dd1-9f2b-d164ea6d1660",
    "code": "COMPETITION_130",
    "year": "2021",
    "date": "OCT 05",
    "title": "LeetFleet",
    "category": "COMPETITION",
    "description": "LeetFleet, hosted on July 20, 2024, was a dynamic DSA learning event led by Mr. Gaurish Baliga, Master at Codeforces and SWE intern at Google. Streamed live on Discord and YouTube, participants engaged in live problem-solving, gained expert insights, and learned strategies to enhance their coding efficiency. The event fostered a collaborative community, bridging knowledge gaps and showcasing how coding skills translate to real-world challenges.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/7f7a1a4fc8abc92d883d10a537333737e2c3cc2d-960x1280.jpg",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-fc71160e-ab5c-4e51-b40a-0f71ae5fa39a",
    "code": "FLAGSHIP_131",
    "year": "2021",
    "date": "NOV 06",
    "title": "FOSTERING THE FUTURE 6.0",
    "category": "FLAGSHIP",
    "description": "The workshop started off with the speaker explaining about the importance of career choices and the paths that can be chosen. The participants were also very interactive and had all their doubts cleared with the speaker. It also covered a roadmap to higher studies, on grabbing internship opportunities, prepping for post-graduation exams. All the topics from basic to a demonstrative level were included and explained by the speaker. By the end of it, the participants learnt a lot and this workshop will surely help them get started with charting out their future career plans and opportunities",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "500+ Participants",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/1d6b0aadf7cedeef94da4ad53388bb5e77f67bbd-320x320.png",
    "highlights": [
      "Expert Mentorship & Guidance",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-fd7b7220-7159-4c92-9c0d-343453497685",
    "code": "COMPETITION_132",
    "year": "2021",
    "date": "DEC 07",
    "title": "MOCKUP 3.0",
    "category": "COMPETITION",
    "description": "The Mockup 3.0 Designathon provided students with an engaging opportunity to explore UI/UX design through an interactive session, followed by a 24-hour designathon. The event aimed to inspire creativity and showcase talent in the UI/UX field, encouraging participants to generate innovative ideas for future projects, hackathons, and placements. Participants selected a theme, presented their design ideas, and submitted a wireframe, final screen pages, and a write-up explaining their vision. Throughout the event, they received valuable tips and feedback to refine their ideas. The winners were selected based on the creativity, functionality, and overall impact of their designs, offering them a chance to gain recognition and build their portfolios in the competitive UI/UX space.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/bb377856b324b4b87a56bc2bb453a7bf571e052c-320x320.png",
    "highlights": [
      "Hands-on Project Development",
      "Certified Participation & Opportunities"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-fe9de14d-7516-4f1b-9d73-c18edb12859a",
    "code": "COMPETITION_133",
    "year": "2021",
    "date": "JAN 08",
    "title": "CORPORATE CHANAKYA: ONLINE CASE STUDY COMPETITION",
    "category": "COMPETITION",
    "description": "Corporate Chanakya is your door to new opportunities, new experiences, and a lot of fun. It is one of the most effective teaching tools for improving and testing students' practical knowledge. It allows students to put their case study skills to the test and discover their hidden management potential. The competition is divided into two rounds: In Round 1, teams are expected to work on the case and deliverables and come up with solutions to help and contribute to the solution of the problem that we have created, whereas in Round 2, teams are expected to create a detailed presentation based on the case study document to pitch their findings and recommendations.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/8ede2832bd9534c89c9aed6883095030beb45c1a-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  },
  {
    "id": "event-feb64724-c915-42ce-b723-a73d5b412b58",
    "code": "COMPETITION_134",
    "year": "2021",
    "date": "FEB 09",
    "title": "AI Unleashed",
    "category": "COMPETITION",
    "description": "Curious about the incredible potential of Artificial intelligence ?👾🤖 Brace yourself for an enlightening webinar by Dr. Parthiban Vijayaraghavan 🦾 as we take on a journey to the realm of Artificial Intelligence with 💫 AI UNLEASHED 💫 🗓 Date: July 15, 2023 ⏱ Time: 03 : 00 PM 🧑‍💻 Platform: MS Teams Join us for this interactive session and prepare to be awestruck by the remarkable world of AI.🥰🥳 Register now!! https://forms.gle/u4BpA6puJigXEswq5 For further queries, contact: Naysa Saini : +91 7973912033 Himalaya Sharma : +91 6263869986 Team IEEE SB MUJ 🌸",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/c9c7be4bf900e2e540750ad12bd52d156151ee10-320x320.png",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieee.cismuj/"
  },
  {
    "id": "event-ff1c8e23-3c75-48a7-a6e0-3891e16135ad",
    "code": "COMPETITION_135",
    "year": "2021",
    "date": "MAR 10",
    "title": "Xypher",
    "category": "COMPETITION",
    "description": "Xypher, the flagship hackathon of Genesis 2025, held at Manipal University Jaipur, where innovation met determination in an electrifying 10+ hour coding marathon. Participants from diverse domains came together to brainstorm, build, and battle against time, transforming bold ideas into impactful solutions. With sleepless energy, teamwork, and creativity at its peak. Xypher wasn’t just a competition but an unforgettable journey of passion, problem-solving, and technological brilliance.",
    "location": "Manipal University Jaipur",
    "status": "ARCHIVED",
    "attendees": "120+ Competitors",
    "image": "https://cdn.sanity.io/images/gcb0j4e6/production/204d5a421f19cd0a3e1913da16131177281ac90e-5872x8192.heif",
    "highlights": [
      "Competitive Leaderboards",
      "Strategic Problem Solving"
    ],
    "registrationUrl": "https://www.instagram.com/ieeemuj/"
  }
];
