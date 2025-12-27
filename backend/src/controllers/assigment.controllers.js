import assignmentModels from "../models/assignment.models.js";

export const findAllAssignments = async (req, res) => {
    try {
        const assignments = await assignmentModels.find()
        return res.status(200).json({ message: "Assignments found successfully", "assignments": assignments })
    } catch (error) {
        return res.status(500).json({ message: error?.message || "Internal Server Error" })
    }
}

export const findAssignmentById = async (req, res) => {
    try {
        const { id } = req.params
        const assignment = await assignmentModels.findById(id)
        return res.status(200).json({ message: "Assignment found successfully", "assignment": assignment })
    } catch (error) {
        return res.status(500).json({ message: error?.message || "Internal Server Error" })
    }
}
