import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { api } from "./AssignmentList";

export default function Attempt() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openHintPanel, setOpenHintPanel] = useState(false);
  const [hint, setHint] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${api}/api/v1/assignments/${id}`)
      .then((res) => setAssignment(res.data.assignment));
  }, [id]);

  const runQuery = async () => {
    try {
      setError("");
      setResult([]);
      setLoading(true);
      const res = await axios.post(`${api}/api/v1/execute`, {
        query,
      });
      setResult(res.data);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const getHint = async () => {
    setLoading(true);
    const res = await axios.post(`${api}/api/v1/hint`, {
      query: assignment.question,
    });
    setHint(res.data.hint);
    setLoading(false);
    setOpenHintPanel(true);
  };

  return (
    assignment && (
      <div className="editor-container">
        <h2>{assignment.question}</h2>

        <div className="editor-wrapper">
          <Editor
            className="editor"
            height="200px"
            language="sql"
            value={query}
            onChange={setQuery}
            defaultValue={`-- Remove the below comment to see the sample table\n\n-- SELECT * FROM ${assignment.sampleTables[0].tableName}\n`}
          />
        </div>

        <div className="button-container">
          <button className="execute-btn" onClick={runQuery}>
            Execute
          </button>
          <button
            className="hint-btn"
            disabled={openHintPanel}
            onClick={getHint}
          >
            Get Hint
          </button>
          <a href="/">
            <button className="back-btn">Go Back to Questions</button>
          </a>
        </div>

        {result.length > 0 && (
          <div>
            <table border="1" cellPadding="8" className="table-display">
              <thead>
                <tr>
                  {Object.keys(result[0]).map((key) => (
                    <th key={key}>{key.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {loading && <h1>Loading....</h1>}

        {openHintPanel && (
          <div className="hint-panel">
            <h2>Hint</h2>
            <p>{hint}</p>

            <button
              className="close-panel-btn"
              onClick={() => setOpenHintPanel(false)}
            >
              close
            </button>
          </div>
        )}

        {error && <h1>{error}</h1>}
      </div>
    )
  );
}
