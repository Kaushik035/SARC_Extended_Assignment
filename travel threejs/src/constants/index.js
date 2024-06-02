import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Travel Agents ",
    },
    {
      id: "work",
      title: "Feedbacks",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
  ];
  
  const services = [
    {
      title: "Assam Travels",
      icon: web,
    },
    {
      title: "Brahmaputra Cruise",
      icon: mobile,
    },
    {
      title: "Koyeli Tours & Travels",
      icon: backend,
    },
    {
      title: "Kaziranga Holidays",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Assam Travels",
      company_name: "",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Verified",
      points: [
        "Assam Travels did a fantastic job of organizing our cultural tour of Assam. ",
        "The conduct of tour was very smooth, flexible and organized.",
        "Our guide, Priya, was passionate about Assamese culture and shared her knowledge in a very engaging way.",
        "The only minor suggestion would be to offer a few more options for meals, as some of the restaurants included were a bit vegetarian-heavy.",
      ],
    },
    {
      title: "Brahmaputra Cruise",
      company_name: "",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "Verified",
      points: [
        "Brahmaputra River cruise was the highlight of our trip to Assam!",
        "The scenery along the river was breathtaking, and we saw some amazing wildlife, including dolphins and birds.",
        "The staff on board were friendly and attentive, and the food was excellent.",
        "The included excursions to villages and historical sites were also very interesting.",
      ],
    },
    {
      title: "Koyeli Tours & Travels",
      company_name: "",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Verified",
      points: [
        "While the scenery on the trek with Koyeli Tours & Travels was stunning, the organization could have been better.",
        "The communication before the trip was a bit unclear, and there were a few hiccups with transportation and accommodation.",
        "The guide, although knowledgeable, wasn't very attentive to the needs of the group.",
        "Overall, the experience was okay, but with some improvements, it could be much better.",
      ],
    },
    {
      title: "Kaziranga Holidays",
      company_name: "",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "Verified",
      points: [
        "We had an incredible experience with Kaziranga Holidays on our recent wildlife tour to Assam.",
        " Our guide, Ravi, was incredibly knowledgeable about the Kaziranga National Park and its animals.",
        "The jeep safaris were thrilling, and the elephant rides were a unique experience.",
        "The accommodations were comfortable and clean, and the food was delicious.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };