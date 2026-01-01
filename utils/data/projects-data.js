export const projectsData = [
    {
        id: 1,
        name: 'IEEE Publication 2026',
        //description:"Developed an AI-powered IT support assistant that enables teams to quickly retrieve accurate answers from internal manuals and SOPs. Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain and ChromaDB, integrating LLaMA 3 / OpenAI models to deliver context-aware, grounded responses and reduce manual document search time",
        description: "Designed a Search based algorithm to Increase Factuality of LLMs in Medical Domain",
        tools: ["Knowledge Graphs","RAG","PyTorch","Transformers","Python"],
        role: 'AI Researcher',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'AI Powered IT Support Assistant',
        //description:"Developed an AI-powered IT support assistant that enables teams to quickly retrieve accurate answers from internal manuals and SOPs. Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain and ChromaDB, integrating LLaMA 3 / OpenAI models to deliver context-aware, grounded responses and reduce manual document search time",
        description: "Designed an AI-driven IT support assistant where each user query is automatically classified into one of five categories (Firewall, VPN, Network Issues, System Access, and Hardware/Software Errors). Based on the category, the system searches relevant online sources, retrieves the top three matching documents, and generates accurate answers by comparing vector embeddings to ensure contextually grounded responses.",
        tools: ['RAG', 'LangChain', 'OpenAI models','chromaDB', 'Vector Embeddings','pyTorch'],
        role: 'AI Engineer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'GDP Vs Population',
        //description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        description: "Developed an interactive data visualization dashboard to analyze the relationship between GDP growth, CO₂ emissions, and population trends across multiple countries. The application enables dynamic exploration through scatterplots, zooming, animations, and time-based comparisons, helping identify patterns, correlations, and trade-offs between economic development and environmental impact. Designed to support data-driven insights for policymakers and researchers.",
        tools: ['React.js','NextJS', 'Tailwind CSS',  "MySQL",'Node.js'],
        role: 'Full Stack Developer',
        code: 'https://github.com/dhruvLearner8/CS-837-Visualization',
        demo: 'https://cs-837-visualization.vercel.app/',
    },
    {
        id: 4,
        name: 'News Blog WebApp',
        description: 'Made a News Blog Webapp, where user can read news from top News channel, search news, filter by category. Users can also post Their Blogs and view blogs of other people as well.',
        tools: ['Django','Python','REST Framework', 'Serializers', 'Cronjob', 'JWT'],
        code: 'https://github.com/dhruvLearner8/News-and-Personal-Blog-Django-REST-Framework?tab=readme-ov-file',
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 5,
        name: 'E-commerce WebApp',
        //description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        description: "Designed and developed a full-featured e-commerce platform with secure user authentication and role-based access control. Implemented middleware-driven request handling and JWT-based authorization to manage different user roles such as customers, sellers, and administrators. The system supports protected routes, secure transactions, and scalable business workflows, ensuring both data security and a smooth user experience.",

        tools: ["Node.js","React.js","JS","Express","JWT","Google-Auth","Role-management"],
        code: 'https://github.com/dhruvLearner8/RapidOps/tree/master/ecommerce-task',
        demo: '',
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Pollution Forecasting with AWS',
      
        description: "Developed an end-to-end pollution forecasting system to predict PM2.5 levels and analyze air quality trends over time. The project focused on feature engineering, model comparison, and automated retraining workflows to improve prediction accuracy and reliability. Results were visualized through interactive dashboards, enabling data-driven insights for environmental monitoring and policy planning.",

        tools: ["AWS","XGBoost","Random Forest"],
        code: 'https://github.com/dhruvLearner8/Pollution-Analysis-Using-AWS/tree/main',
        demo: '',
        role: 'AWS',
    }

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },