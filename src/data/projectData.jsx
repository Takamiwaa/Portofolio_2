const projectData = {
  title: "Projects",
  subtitle:
    "Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps connected with real-time databases.",

  projects: [
    {
      icon: "bx bx-wallet",
      title: "Money Tracker",
      type: "Fullstack",
      features: [
        "Supabase Auth + Database",
        "CRUD transaksi harian",
        "Statistik pengeluaran",
        "Dark mode UI"
      ],
      tech: ["React", "Supabase", "Tailwind"],
      year: 2025,
      status: "Completed",
      demo: "https://money-tracker.vercel.app",
      github: "https://github.com/Hizkia178/money-tracker"
    },
    {
      icon: "bx bx-id-card",
      title: "Personal Portfolio",
      type: "Frontend",
      features: [
        "Tailwind CSS",
        "Dark/light mode",
        "Animated tabs",
        "Project & skill showcase"
      ],
      tech: ["React", "Tailwind"],
      year: 2025,
      status: "Completed",
      demo: "https://hizkia.vercel.app",
      github: "https://github.com/Hizkia178/project-portofolio"
    },
    {
      icon: "bx bx-bot",
      title: "AI Chatbot JSON",
      type: "Fullstack",
      features: [
        "React + Express backend",
        "Input belajar dari user",
        "Simpan ke JSON",
        "Logic respons otomatis"
      ],
      tech: ["React", "Express", "Node.js"],
      year: 2025,
      status: "Completed",
      demo: "https://chatbot-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/chatbot-json"
    },
    {
      icon: "bx bx-server",
      title: "RESTful API Service",
      type: "Backend",
      features: [
        "Express.js + MongoDB",
        "JWT Auth",
        "CRUD user & posts",
        "Swagger API docs"
      ],
      tech: ["Node.js", "Express", "MongoDB"],
      year: 2024,
      status: "Completed",
      demo: null,
      github: "https://github.com/Hizkia178/rest-api-template"
    },
    {
      icon: "bx bx-cloud-lightning",
      title: "Weather App",
      type: "Frontend",
      features: [
        "Fetch API OpenWeather",
        "Search by city",
        "Responsive UI",
        "Dark mode"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      year: 2024,
      status: "Completed",
      demo: "https://weather-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/weather-app"
    },
    {
      icon: "bx bx-link-alt",
      title: "Link Collector",
      type: "Fullstack",
      features: [
        "User auth (Supabase)",
        "Simpan link pribadi",
        "Search + filter",
        "Responsive design"
      ],
      tech: ["React", "Supabase"],
      year: 2025,
      status: "In Progress",
      demo: null,
      github: "https://github.com/Hizkia178/link-collector"
    },
    {
      icon: "bx bx-notepad",
      title: "Simple Note App",
      type: "Frontend",
      features: [
        "LocalStorage persistence",
        "Add/edit/delete note",
        "Minimalist UI",
        "No backend needed"
      ],
      tech: ["React"],
      year: 2023,
      status: "Completed",
      demo: "https://note-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/note-app"
    },
    {
      icon: "bx bx-message-detail",
      title: "QnA Forum",
      type: "Fullstack",
      features: [
        "Ask & reply system",
        "Vote & comment",
        "Supabase realtime",
        "Auth & user threads"
      ],
      tech: ["React", "Supabase"],
      year: 2025,
      status: "In Progress",
      demo: null,
      github: "https://github.com/Hizkia178/qna-forum"
    },
    {
      icon: "bx bx-calendar-check",
      title: "Habit Tracker",
      type: "Frontend",
      features: [
        "Track daily habits",
        "Calendar view",
        "Custom habit types",
        "Save via LocalStorage"
      ],
      tech: ["React", "Tailwind"],
      year: 2024,
      status: "Completed",
      demo: "https://habit-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/habit-tracker"
    },
    {
      icon: "bx bx-bulb",
      title: "Feedback Board",
      type: "Backend",
      features: [
        "Post feedback",
        "Voting system",
        "Node.js API",
        "MongoDB backend"
      ],
      tech: ["Node.js", "MongoDB"],
      year: 2024,
      status: "Completed",
      demo: null,
      github: "https://github.com/Hizkia178/feedback-board"
    },
    {
      icon: "bx bx-image",
      title: "Image Gallery",
      type: "Frontend",
      features: [
        "Grid layout",
        "Modal zoom",
        "Search filter",
        "Responsive design"
      ],
      tech: ["React", "Tailwind"],
      year: 2023,
      status: "Completed",
      demo: "https://gallery-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/image-gallery"
    },
    {
      icon: "bx bx-code-block",
      title: "Markdown Editor",
      type: "Frontend",
      features: [
        "Live preview",
        "Dark mode toggle",
        "Export to .md",
        "Clean UI"
      ],
      tech: ["React", "Tailwind"],
      year: 2024,
      status: "Completed",
      demo: "https://markdown-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/markdown-editor"
    },
    {
      icon: "bx bx-chat",
      title: "Realtime Chat",
      type: "Fullstack",
      features: [
        "Supabase realtime",
        "User auth",
        "Room system",
        "Message timestamp"
      ],
      tech: ["React", "Supabase"],
      year: 2025,
      status: "In Progress",
      demo: null,
      github: "https://github.com/Hizkia178/realtime-chat"
    },
    {
      icon: "bx bx-money",
      title: "Currency Converter",
      type: "Frontend",
      features: [
        "Exchange rate API",
        "Real-time currency change",
        "Simple UX",
        "Mobile responsive"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      year: 2024,
      status: "Completed",
      demo: "https://currency-hizkia.vercel.app",
      github: "https://github.com/Hizkia178/currency-converter"
    },
    {
      icon: "bx bx-task",
      title: "Todo API Server",
      type: "Backend",
      features: [
        "RESTful CRUD routes",
        "Express.js + PostgreSQL",
        "Rate limit middleware",
        "JSON response format"
      ],
      tech: ["Node.js", "PostgreSQL"],
      year: 2025,
      status: "Completed",
      demo: null,
      github: "https://github.com/Hizkia178/todo-api-server"
    }
  ]
};

export default projectData;
