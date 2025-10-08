import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb://admin:admin@127.0.0.1:27017/TodoApp?authSource=admin"
  );
  console.log("Database connected");
} catch (err) {
  console.log(err.message);
  process.exit(1);
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Client Disconnected!");
  process.exit(0);
});
