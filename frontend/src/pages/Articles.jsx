import React, { useEffect, useState } from "react";
import {
  getArticles,
  getAvailableArticles,
  getArticleStatus,
} from "../api/articles";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [available, setAvailable] = useState([]);
  const [status, setStatus] = useState({
    onWork: 0,
    available: 0,
    onLeave: 0,
  });

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    const articlesData = await getArticles();
    const availableData = await getAvailableArticles();
    const statusData = await getArticleStatus();

    setArticleList(articlesData);
    setAvailable(availableData);
    setStatus(statusData);
  };

  return (
    <>
      {/* FILTER BAR */}
      <div className="card">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <input placeholder="Name" />
          <select>
            <option>Experience All</option>
          </select>
          <select>
            <option>Tasks All</option>
          </select>
          <input type="date" />
        </div>
      </div>

      {/* MAIN TABLE */}
      <div className="card" style={{ marginTop: 20 }}>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Tasks assigned</th>
              <th>Deadline date</th>
              <th>Past Tasks</th>
            </tr>
          </thead>
          <tbody>
            {articleList.map((a, i) => (
              <tr key={a._id}>
                <td>{i + 1}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <img
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                    {a.name}
                  </div>
                </td>
                <td>{a.task}</td>
                <td>
                  {a.deadline
                    ? new Date(a.deadline).toLocaleDateString()
                    : "--"}
                </td>
                <td>{a.past || "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid-2">
        {/* AVAILABLE ARTICLES */}
        <div className="card">
          <h3>Available Articles</h3>
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {available.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 30}`}
                        alt=""
                        style={{ borderRadius: "50%" }}
                      />
                      {u.name}
                    </div>
                  </td>
                  <td>{u.email || "--"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* STATUS PIE */}
        <div className="card">
          <h3>Status</h3>

          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: `conic-gradient(
                #2563eb 0% ${status.onWork}%,
                #c7d2fe ${status.onWork}% ${
                status.onWork + status.available
              }%,
                #eef2ff ${
                  status.onWork + status.available
                }% 100%
              )`,
              margin: "20px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            {status.onWork}% On work
          </div>

          <p style={{ textAlign: "center" }}>
            {status.available}% Available <br />
            {status.onLeave}% On leave
          </p>
        </div>
      </div>
    </>
  );
}
