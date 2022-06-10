module.exports = (app, cors, express) => {
  const corsOptions = {
    origin: ["http://localhost:3000"],
    exposedHeaders: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  };
  app.use(cors(corsOptions));
  app.use(express.json({ limit: "50mb" }));
};
