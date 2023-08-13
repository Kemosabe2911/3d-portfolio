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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    keyvalue,
    revertech,
    go,
    c,
    python,
    postgres,
    nestjs,
    qrcodegenerator,
    imgai,
    sumz,
    github,
    linkedin
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management",
      icon: mobile,
    },
    {
      title: "Content Creator",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "Golang",
      icon: go,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Intern",
      company_name: "REVERTECH IT SOLUTIONS PVT LTD",
      icon: revertech,
      iconBg: "#FFFFFF",
      date: "July 2021 - February 2022",
      points: [
        "Developing and maintaining a web chat applications using Python Flask and other related technologies.",
        "Handled the intern team's leadership role. And during that period collaborated the various other teams inorder to deliver high quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Handled the lead position of the intern team. ",
        "Tech stacks in use at the time: Python Flask, MongoDB"
      ],
    },
    {
      title: "Associate Software Developer",
      company_name: "KeyValue Software Systems",
      icon: keyvalue,
      iconBg: "#FFFFFF",
      date: "July 2022 - Present",
      points: [
        "I currently work as a backend developer who has expertise in Golang",
        "Developing and maintaining web applications using Golang and other related technologies.",
        "Collaborating to produce high-quality products with cross-functional teams that include designers, product managers, and other developers.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Tech stacks in use at the time: Golang, Postgres",
        "Integrated numerous third parties to the active projects",
        "Had become knowledgeable with technologies like AWS, Docker, etc."
      ],
    }
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
      name: "SumZ",
      description:
        "An open source article summarizer that transforms lengthy articles into clear and concise summaries. Browse history is implemented using local storge.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/Kemosabe2911/SumZ",
      demo_link: "https://644556c5bf985c5b042abe15--beautiful-strudel-ac5f3e.netlify.app/",
    },
    {
      name: "IMG.AI",
      description:
        "An AI based image generation website. This website is a DALL-E clone. Make use of the MERN stack to store and display the images generated using OpenAI. ",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        }
      ],
      image: imgai,
      source_code_link: "https://github.com/Kemosabe2911/Img.ai",
      demo_link: "",
    },
    {
      name: "QRCode Generator",
      description:
        "Using this website, you can create and download QR Codes for many purposes. This project makes use of thirdparty qrcode.js to generate qrcodes.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: qrcodegenerator,
      source_code_link: "https://github.com/Kemosabe2911/QRCode-Generator",
      demo_link: "https://kemosabe2911.github.io/QRCode-Generator/",
    },
  ];
  
  const social = [
    {
      name: "Github",
      link: "https://github.com/Kemosabe2911",
      icon: github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/stevin-prince-b07092183/",
      icon: linkedin,
    },
  ];

  export { services, technologies, experiences, testimonials, projects, social };