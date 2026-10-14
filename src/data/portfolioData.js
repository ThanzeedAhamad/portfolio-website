const portfolioData = {
  personal: {
    name: "Thanzeed Ahamad",
    firstName: "Thanzeed",
    lastName: "Ahamad",

    title: "Artificial Intelligence & Machine Learning Engineer",

    shortIntro:
      "I build intelligent solutions using artificial intelligence, machine learning, computer vision and modern software technologies.",

    about:
      "Final-year Artificial Intelligence and Machine Learning engineering student with hands-on experience in Machine Learning, Deep Learning, Python, Data Analysis, Computer Vision, and AI model development. Experienced in developing regression, classification, recommendation, and object-detection solutions using Python-based machine learning libraries and computer vision frameworks. Strong foundation in Python, NumPy, Pandas, Scikit-learn, TensorFlow, OpenCV, SQL, data structures, and databases, supported by academic projects in AI-driven computer vision and Quantum-AI. Seeking an entry-level AI/ML Engineer, Machine Learning Engineer, or Data Science role focused on developing practical, real-world AI solutions",

    location: "Mangalore, Karnataka, India",

    email: "thanzeedahmad4@gmail.com",
    phone: "+91 7483597569",

    github: "https://github.com/ThanzeedAhamad",
    linkedin: "https://linkedin.com/in/thanzeedahamad",

    resume: "/resume.pdf",
    profileImage: "/profile.jpg",
  },

  education: [
    {
      degree: "B.E. Artificial Intelligence & Machine Learning",
      college: "Srinivas Institute of Technology",
      location: "Valachil, Mangalore",
      period: "Final Year",
      cgpa: "7.49",
    },
    {
      degree: "12th",
      college: "St. Philomena PU College",
      location: "Puttur",
      period: "2023",
    },
    {
      degree: "10th",
      college: "Balavikas English Medium School",
      location: "Mani",
      period: "2021",
    },
  ],

SKILLS: {
    Aiml: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Quantum Machine Learning",
      "CNN",
      "U-Net",
    ],

    programming: [
      "Python",
      "JavaScript",
      "SQL",
    ],

    frameworks: [
      "React",
      "Django",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "PennyLane",
    ],

    tools: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "OpenCV",
    ],
  },

  experience: [
    {
      company: "Cognifyz Technologies",
      role: "Machine Learning Intern",
      period: "December 2025 – January 2026",
      description:
        "Applied Python, Pandas, NumPy, and Scikit-learn to build and evaluate machine learning solutions. Prepared and analyzed datasets, then developed regression, recommendation, and classification models using restaurant-related data. Worked across the machine learning workflow, from model development and prediction to performance evaluation.",
    },
  ],

  projects: [
    {
      title: "Hybrid Quantum-AI for Brain Tumor Analysis",
      type: "AI / Medical Imaging",

      description:
        "Developing a hybrid AI framework for brain tumor analysis using MRI images from the BraTS2020 dataset. The workflow combines U-Net with ResNet for tumor segmentation, EfficientNet-B0 for feature extraction, and a PennyLane QCNN to classify glioma, meningioma, and pituitary tumors. It brings preprocessing, segmentation, classification, and result visualization into one end-to-end research project for AI-assisted medical image analysis.",

      technologies: [
        "Python",
        "QCNN",
        "U-Net",
        "CNN",
        "BraTS2020",
      ],
    },

    {
      title: "Ship & Boat Detection in Coastal Areas",
      type: "Computer Vision",

      description:
        "Built a real-time ship and boat detection system for ground-level coastal camera feeds using YOLOv8 and OpenCV. Created and annotated a custom dataset, then applied computer vision techniques to identify vessels in coastal environments, with potential use in AI-based coastal surveillance.",

      technologies: [
        "Python",
        "YOLO",
        "Computer Vision",
        "OpenCV",
      ],

      github: "",
    },
  ],

  certifications: [
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      year: "2025",
    },
    {
      name: "Advanced Python",
      issuer: "Ethnotech Academic Solutions",
      year: "2024",
    },
  ],

  achievements: [
    {
      name: "2nd Place",
      event: "Startup Sparks Innovation Event, AISE & ACODE",
      year: "2025",
    },
    {
      name: "Prototype Refinement Phase",
      event: "Google Cloud Gen AI Exchange Hackathon",
      year: "2025",
    },
  ],

  leadership: [
    {
      role: "Event Coordinator",
      group: "AIML Department",
      description: [
        "Coordinated and managed departmental technical and academic events.",
        "Successfully conducted Code Clash, a technical event involving 50+ participating teams in 2025.",
        "Supported event planning, coordination, execution, and departmental workshops.",
        "Assisted with event and workshop photography and documentation.",
      ],
    },
  ],
};

export default portfolioData;