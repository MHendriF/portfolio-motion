export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building some cool frontend projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VerzuMeet",
    des: "The cutting-edge platform designed to transform your virtual meeting experience. Whether you're connecting with colleagues, friends, or clients, VerzuMeet offers an intuitive, reliable, and feature-rich environment for seamless communication.",
    img: "/apps/verzumeet.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://verzumeet.vercel.app",
  },
  {
    id: 2,
    title: "WhatzApp",
    des: "WhatzApp is a dynamic messaging application that brings you the familiar, seamless communication experience you love. Designed as a WhatsApp clone, WhatzApp offers real-time messaging, voice and video calls, and multimedia sharing, all within a sleek and intuitive interface. Stay connected with friends, family, and colleagues effortlessly, enjoying robust features and end-to-end encryption to keep your conversations private and secure. Experience the future of communication with WhatzApp!",
    img: "/apps/whatzapp.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/icons/gemini.svg", "/c.svg"],
    link: "https://whatzapp-mhf.vercel.app",
  },
  {
    id: 3,
    title: "Imaginify - AI Image SaaS ",
    des: "Imaginify is a cutting-edge Software-as-a-Service (SaaS) application that integrates advanced AI features with a seamless payments and credits system. Utilizing the latest tech stack, Imaginify delivers powerful tools and functionalities designed to enhance productivity and streamline workflows. Experience the future of software with Imaginify, where innovation meets efficiency in a user-friendly platform tailored to meet your needs.",
    img: "/apps/imaginify.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/icons/cloudinary.svg", "/icons/stripe.svg"],
    link: "https://mhf-imaginify.vercel.app",
  },
  {
    id: 4,
    title: "Interview Ease",
    des: "An advanced online platform designed to simplify and enhance the job interview process with the help of AI technology.",
    img: "/apps/interview-ease.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://interview-ease.vercel.app",
  },
  {
    id: 5,
    title: "Social Space",
    des: "Social Space is not just another social media platform; it's your digital universe where connections flourish, creativity thrives, and communities come alive. Powered by Laravel and Vue.js, Social Space is designed to elevate your social experience with a plethora of innovative features and seamless functionalities.",
    img: "/apps/social-space.png",
    iconLists: ["/icons/laravel.svg", "/tail.svg", "/icons/vue.svg", "/icons/gemini.svg", "/icons/chatgpt.svg"],
    link: "#",
  },
  {
    id: 6,
    title: "ePAK Widyaprada",
    des: "ePAK Widyaprada is a cutting-edge electronic system designed to revolutionize the proposal and evaluation process for Credit Score Determination. Streamline your employee promotion applications with ease and efficiency. Built on the robust Laravel framework, ePAK Widyaprada offers a user-friendly interface and powerful features to ensure a smooth and seamless credit score management experience. Empower your organization with the ability to make informed promotion decisions quickly and accurately.",
    img: "/apps/epak.png",
    iconLists: ["/icons/laravel.svg", "/icons/bootstrap.svg", "/icons/javascript.svg"],
    link: "https://epakwp.pauddikdasmen.kemdikbud.go.id",
  },
  {
    id: 7,
    title: "Helpdesk Support",
    des: "Helpdesk Management Application is a powerful tool designed to streamline your ticketing process. With our application, reporting issues becomes effortless, allowing you to quickly address disruptions. Easily track the status of your tickets and access detailed information based on your selected status and time. Stay on top of your helpdesk operations and ensure timely resolutions with our intuitive and user-friendly interface.",
    img: "/apps/helpdesk.png",
    iconLists: ["/icons/laravel.svg", "/tail.svg", "/icons/javascript.svg"],
    link: "#",
  },
  {
    id: 8,
    title: "Aku Pintar Siswa",
    des: "Aku Pintar Siswa is an application from the Aku Pintar platform, specifically designed to support students' learning processes. This app offers a variety of features that help students with learning, exam preparation, and choosing the right major based on their interests and talents.",
    img: "/apps/ap-siswa.png",
    iconLists: ["/icons/android.svg", "/icons/kotlin.svg", "/icons/firebase.svg"],
    link: "https://akupintar.id",
  },
  {
    id: 9,
    title: "Samurai Point",
    des: "Samurai Point is your ultimate solution for product, sales, and point management. This versatile application empowers you to efficiently manage your product inventory, streamline sales processes, and track customer loyalty points seamlessly.",
    img: "/apps/samurai-point.png",
    iconLists: ["/icons/laravel.svg", "/icons/bootstrap.svg", "/icons/javascript.svg"],
    link: "#",
  },

  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "https://github.com/adrianhajdin?tab=repositories",
  // },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "https://github.com/adrianhajdin/zoom-clone",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "https://github.com/adrianhajdin/ai_saas_app",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Hendri was an outstanding experience. His attention to detail, efficiency, and ability to deliver high-quality results were evident in every aspect of the project. Hendri's passion for web and mobile development is truly inspiring. If you want to take your digital presence to the next level, Hendri is the developer you need.",
    name: "Ferryanto",
    title: "Owner of Lapantiga Solusi Algoritma",
    img: "/clients/default-avatar.svg",
  },
  {
    quote:
      "Hendri's expertise in both web and mobile development made our collaboration seamless. His professionalism and commitment to excellence were key to the success of our project. Hendri is an invaluable asset to any team looking to enhance their technological capabilities.",
    name: "Gilang Megantara",
    title: "Chief Operating Officer of Qira Teknologi Indonesia",
    img: "/clients/default-avatar.svg",
  },
  {
    quote:
      "Hendri consistently demonstrated a high level of competence and dedication throughout our project. His skills in Laravel, PHP, and Java, along with his enthusiasm for innovation, made a significant impact on our development process. Hendri is a top-tier developer.",
    name: "Bayu Hariyono",
    title: "CFO of Qira Teknologi Indonesia",
    img: "/clients/bayu.jpg",
  },
  {
    quote:
      "Collaborating with Hendri was a delight. His thorough understanding of both frontend and backend technologies, coupled with his proactive approach, ensured our project was a success. Hendri's ability to solve complex problems efficiently is remarkable.",
    name: "Lutvianto Pebri Handoko",
    title: "Chief Technology Officer of PLP Mari Berproses",
    img: "/clients/pebri.jpeg",
  },
  {
    quote:
      "Hendri's work ethic and technical expertise are unmatched. His proficiency in Android development significantly improved our project's user experience. Hendri's ability to meet tight deadlines without compromising on quality is truly commendable.",
    name: "Prasetya Gilang",
    title: "Chief Executive Officer of Aku Pintar Indonesia",
    img: "/clients/gilang-prasetya.jpeg",
  },
  {
    quote:
      "Hendri's comprehensive knowledge in Android development using Java and Kotlin was crucial for our project's success. His dedication and problem-solving skills were evident throughout our collaboration. Hendri is a developer you can rely on for outstanding results.",
    name: "Divi Jaya",
    title: "Team Lead of Aku Pintar Indonesia",
    img: "/clients/divi-jaya.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "Assisted in the development of a web-based platform using Laravel, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for Android platforms using Java and Kotlin.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MHendriF",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/hendrifbs",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/m-hendri-febriansyah",
  },
];
