import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server is ready at http://localhost:${process.env.PORT}`)
);
