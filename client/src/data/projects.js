const sourceProjects = [
  {
    _id: "0",
    name: "Internship @MyHomeworkRewards",
    description: "Concept -> Research -> Design -> Launch! Collaborated directly with the founder to modernize a personalized homework help platform. I was responsible for the end-to-end process of course digitization, which included updating the existing homepage, designing lesson layouts, and implementing responsive web pages using HTML, CSS, and Square. Beyond development, I executed a comprehensive SEO strategy to ensure the site was accessible, and user-friendly.",
    shortDescription: "Transformed static educational content into an interactive web experience by designing and developing grade 8 to University math courses and optimizing the platform's overall SEO.",
    challenge: "The platform needed to convert complex multiple Grade Mathematics curriculum into digestible, web-based lessons while maintaining a consistent visual style and improving stagnant search engine rankings.",
    solution: 
    [
      "UI/UX Refinement: Redesigned the homepage and blog story templates, adding interactive elements like customized buttons and video embeds to increase student engagement",
      "Course Architecture: Organized and summarized math content into small, interactive lessons and built custom course pages using HTML, CSS, and Square embed codes.", 
      "SEO Strategy: Researched high-impact keywords using MOZ and performed on-page SEO edits on images, titles, and in-line links to boost organic visibility."
    ],
    tech: ["Square", "MOZ", "CSS", "HTML", "Canva", "Slack"],
    year: 2024,
    status: "Maintained",
    url: "https://www.myhomeworkrewards.com/",
    order: 0,
    imageUrl: "https://i.postimg.cc/Dzz5XyVK/MHR1.png",
    images: ["https://i.postimg.cc/3Njw7hx4/www-myhomeworkrewards-com-mathematics.png", "https://i.postimg.cc/cCGJVC0w/www-myhomeworkrewards-com-grade8-math.png", "https://i.postimg.cc/SsMsTCFy/www-myhomeworkrewards-com-grade9-math.png", "https://i.postimg.cc/XqKv3WYw/www-myhomeworkrewards-com-grade10-math.png", "https://i.postimg.cc/yxhNBK8W/www-myhomeworkrewards-com-grade11-math.png", "https://i.postimg.cc/wMYBSMgJ/www-myhomeworkrewards-com-grade12-math.png", "https://i.postimg.cc/sXhX67FN/www-myhomeworkrewards-com-university-math.png"],
    figmaUrl: "",
    outcomes: ["UI/UX Design", "Front-end Development", "Content Management", "SEO (Search Engine Optimization)"],
    team: ["Kexin"],
    nextProject: { order: 1, name: "Internship @GM Digital Inc." }
  },
  {
    _id: "1",
    name: "Internship @GM Digital Inc.",
    description: "Concept -> Research -> Design -> Launch! Worked as a Web Developer Intern at a specialized digital marketing agency, focusing on bridging the gap between design trends and functional development. I performed deep-dive competitive analyses to identify modern UI/UX patterns, which informed my redesign of the agency's primary service and case study sections. Utilizing WordPress and Elementor, I built custom, accessible components that ensured a seamless brand experience across all device types.",
    shortDescription: "Revitalized a digital marketing agency’s web presence by conducting competitive UI/UX research and developing fully responsive, high-converting case study and service pages.",
    challenge: "The agency required re-designing the case study pages and making sure it has a modern, responsive layout that could effectively showcase client successes to potential leads.",
    solution: 
    [
      "Competitive Analysis: Conducted research on industry websites to identify design trends and presented recommendations for website updates.", 
      "WordPress Development: Redesigned and developed several responsive pages and components using WordPress and the Elementor plugin.", 
      "Case Study Launch: Successfully designed and launched new Case Studies pages that were visually consistent and fully responsive across mobile, tablet, and desktop."
    ],
    tech: ["WordPress", "Canva", "CSS", "HTML", "Slack"],
    year: 2025,
    status: "Maintained",
    url: "https://gargimodi.ca/resource/case-studies/",
    order: 1,
    imageUrl: "https://i.postimg.cc/kgyq5w92/GM1.png",
    images: ["https://i.postimg.cc/RCnmtv9R/gargimodi-ca-resource-case-studies.png", "https://i.postimg.cc/s2Xdgrw5/gargimodi-ca-case-study-icaresocialmediagrowth.png", "https://i.postimg.cc/fLG6C0Z7/gargimodi-ca-case-study-foodbarseogrowth.png"],
    figmaUrl: "",
    outcomes: ["UI/UX Design", "Front-end Development", "Content Management"],
    team: ["Kexin"],
    nextProject: { order: 2, name: "ClimaTrack Canada" }
  },
  {
    _id: "2",
    name: "ClimaTrack Canada",
    description: "Built on a full-stack framework, the application integrates real-time official data with community-generated reports to raise awareness, promote preparedness and visualize environmental change. \n Goals: \n● Provide real-time access to official and community-reported weather events. \n● Allow users to submit hazard/good and real-time reports with location tags and severity levels. \n● Encourage localized discussions to increase the interest and appeal of outdoor activities. \n● Visualize data trends and incorporate local user reports submission to increase data accuracy. \n● Highlight both extreme events (e.g. storms) and community-observed natural phenomena (e.g. cherry blossoms blooming).",
    shortDescription: "ClimaTrack Canada is a weather observation-based website designed to empower Canadian residents, community organizers and environmental researchers to monitor and respond to climate change.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB", "Clerk"],
    year: 2025,
    status: "Maintained",
    url: "https://climatrack-ivory.vercel.app",
    order: 2,
    imageUrl: "https://i.postimg.cc/SKFd5ZP5/climatrack.png",
    images: ["https://i.postimg.cc/SKFd5ZP5/climatrack.png", "https://i.postimg.cc/7YRm1PnH/clim1.png", "https://i.postimg.cc/4N0Bv4bM/clim2.png", "https://i.postimg.cc/02jVJKm4/clim3.png", "https://i.postimg.cc/tCc2dRtK/clim4.png", "https://i.postimg.cc/fbnCFHP6/clim5.png", "https://i.postimg.cc/7L89cBR9/clim6.png"],
    figmaUrl: "https://www.figma.com/design/mAXDpcHR6niXVmmW2Wncwu/ClimaTrack-Capstone-Project?node-id=47-1359&t=SXvouIpCMYHm7ga1-1",
    outcomes: ["UI/UX Design", "Web Developemnt", "Full-Stack Development"],
    team: ["Kexin"],
    nextProject: { order: 3, name: "Pet Artwork Platform" }
  },
  {
    _id: "3",
    name: "Pet Artwork Platform",
    description: "Pet Artworks Platform is a creative collaboration web application that bridges the ArtGallery and PawPals projects. Built with ASP.NET Core, the platform provides comprehensive management tools for different domains. ArtGallery allows guests to explore artworks, artists, and exhibitions, while registered users can manage gallery content. PawPals enables admins to oversee members and their pets, facilitating connections and CRUD operations. Both applications utilize Entity Framework and MVC architecture for a seamless and user-friendly experience. The core connection between ArtGallery and PawPals is pet-related artwork. Users can explore artworks featuring pets and access detailed pet information associated with each piece. Registered users can also add or remove artworks directly from a pet's detail page, enhancing the interactive experience between art and pet communities.",
    shortDescription: "Pet Artworks Platform is a creative collaboration web application that bridges the ArtGallery and PawPals projects.",
    tech: ["ASP.NET Core MVC", "Entity Framework Core with SQL Server", "C#", "Blazor", "ASP.NET Core Identity", "Ganss.XSS library", "Bootstrap"],
    year: 2025,
    status: "Completed",
    url: "https://github.com/TommieTKY/pet_artworks_platform",
    order: 3,
    imageUrl: "https://i.postimg.cc/g0dNS5hf/petartwork.png",
    images: ["https://i.postimg.cc/g0dNS5hf/petartwork.png", "https://i.postimg.cc/0Qpy7WsV/pe1.jpg", "https://i.postimg.cc/KjxvfPcx/pe2.jpg", "https://i.postimg.cc/jS52B4Hj/pe3.jpg", "https://i.postimg.cc/SxvR4Ydf/pe4.jpg", "https://i.postimg.cc/Dz4ZwfYk/pe5.jpg", "https://i.postimg.cc/1txznxLg/pe6.jpg"],
    figmaUrl: "",
    outcomes: ["Member Management", "Pet Management", "Connection Management", "Image Management", "Authentication-Role-based access: Admin, MemberUser, and Guest"],
    team: ["Kelly, Tommie"],
    nextProject: { order: 4, name: "SkyCatch" }
  },
  {
    _id: "4",
    name: "SkyCatch",
    description: "Set in the year 2050, this app mixes the weather conditions on Earth and Planet Utopia, and is dedicated to providing users with the latest weather forecasts from around the world. I focus on a simple and intuitive interface design that ensures users have easy and quick access to the weather information they need, and offers personalized setting options to meet users' needs and preferences, helping them to better adapt and plan for various weather conditions.",
    shortDescription: "Set in the year 2050, this app mixes the weather conditions on Earth and Planet Utopia, and is dedicated to providing users with the latest weather forecasts from around the world.",
    tech: ["Figma"],
    year: 2024,
    status: "Completed",
    url: "https://www.figma.com/proto/13vKKI4aHOds8bcfv0BPx7/Weather-Project?type=design&node-id=169-5457&t=YQFnPkIJ5DI1dwzH-1&scaling=scale-down&page-id=169%3A2900&starting-point-node-id=169%3A5457",
    order: 4,
    imageUrl: "https://i.postimg.cc/vTS4pvyd/skycatch.png",
    images: ["https://i.postimg.cc/vTS4pvyd/skycatch.png", "https://i.postimg.cc/bJdKhd6k/sky1.png", "https://i.postimg.cc/0jwFzF1N/sky2.png", "https://i.postimg.cc/853xPD33/sky3.png", "https://i.postimg.cc/G38Zg8T1/sky4.png", "https://i.postimg.cc/LsxrwjVm/sky5.png", "https://i.postimg.cc/KYG600B9/sky6.png", "https://i.postimg.cc/vZtR7Jgg/sky7.png"],
    figmaUrl: "https://www.figma.com/design/8MAY2MmZXSDlLxsq4aW0XZ/SkyCatch-Climate-App?node-id=0-1&t=uJ2WXuPcc2zWR3jn-1",
    outcomes: ["UI/UX Design", "Personas & Use Flow", "Low-Fidelity Wireframes", "High-Fidelity Mockups", "Prototype"],
    team: ["Kexin"],
    nextProject: { order: 5, name: "ByteCheck" }
  },
  {
    _id: "5",
    name: "ByteCheck",
    description: "A smart nutrition companion designed to simplify healthy eating. This mobile and Apple Watch app uses AI to instantly recognize food products, scan barcodes, and detect unhealthy ingredients like excess sugar or allergens. Users receive clear insights on nutritional benefits, personalized recommendations based on dietary preferences (vegan, gluten-free, low-carb), and can set health goals to track their progress, making better eating effortless and informed.",
    shortDescription: "An AI-powered nutrition assistant that recognizes food, analyzes ingredients, and provides personalized health insights—available on mobile and Apple Watch.",
    tech: ["Figma"],
    year: 2024,
    status: "Completed",
    url: "https://www.figma.com/proto/0NUGdAINfvZMCKB6HDNWuh/Nutrition-App?node-id=593-1312&p=f&t=0bAFlqEo06ScsgzU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=593%3A1312&show-proto-sidebar=1",
    order: 5,
    imageUrl: "https://i.postimg.cc/mZ6pLmxH/bytecheck.png",
    images: ["https://i.postimg.cc/mZ6pLmxH/bytecheck.png", "https://i.postimg.cc/cLxWz1NM/by1.png", "https://i.postimg.cc/VLB14r2k/by2.png", "https://i.postimg.cc/8PVNhBKY/by3.png", "https://i.postimg.cc/QN7j9nb5/by4.png", "https://i.postimg.cc/rs5TBKmg/by5.png", "https://i.postimg.cc/rpp8DVnF/by6.png", "https://i.postimg.cc/nLwn7ygK/by7.png", "https://i.postimg.cc/1tkP7p9f/by8.png", "https://i.postimg.cc/ZRB4LfzG/by9.png"],
    figmaUrl: "https://www.figma.com/design/UBXEajGTQ6b5F8vl3o46Na/Nutrition-App?node-id=0-1&t=V3Q5KxISyQZviloa-1",
    outcomes: ["UI/UX Design", "User Reaserch", "Low-Fidelity Wireframes", "High-Fidelity Mockups", "Prototype"],
    team: ["Alaa", "Surabiha", "Alina", "Miguel", "Paolo", "Kexin"],
    nextProject: { order: 0, name: "Internship @MyHomeworkRewards" }
  }
];

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const projects = sourceProjects.map(p => ({ ...p, slug: slugify(p.name) }));

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getProjectByName(name) {
  return projects.find(p => p.name === name);
}
