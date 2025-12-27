import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const api = import.meta.env.VITE_BACKEND_URL;

export default function AssignmentList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${api}/api/v1/assignments/`)
      .then((res) => setData(res.data.assignments));
  }, []);

  return (
    <div className="container">
      <h1>Assignment List</h1>
      <div className="question-list">
        {data.map((a) => (
          <div
            className="question"
            key={a._id}
            onClick={() => navigate(`/attempt/${a._id}`)}
          >
            <div>
              <h2 className="title" style={{ color: "orangered" }}>
                {a.title}
              </h2>
              <h3 className="description">{a.description}</h3>
            </div>
            <span
              className="difficulty"
              style={
                a.difficulty === "Easy"
                  ? { color: "green" }
                  : a.difficulty === "Medium"
                  ? { color: "yellow" }
                  : { color: "darkred" }
              }
            >
              {a.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
