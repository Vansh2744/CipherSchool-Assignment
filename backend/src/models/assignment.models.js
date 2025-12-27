import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  title: String,
  difficulty: String,
  description: String,
  question: String,
  sampleTables: Array,
});

export default mongoose.model("Assignment", AssignmentSchema)