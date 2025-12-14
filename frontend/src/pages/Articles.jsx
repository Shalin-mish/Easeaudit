import React, { useState } from "react";

export default function Articles() {
  const [showAdd, setShowAdd] = useState(false);
  const [articleList, setArticleList] = useState(articles);

  const [form, setForm] = useState({
    name: "",
    task: "",
    deadline: "",
    past: "",
  });

  const handleAdd = () => {
    if (!form.name || !form.task) {
      alert("Please fill required fields");
      return;
    }

    setArticleList([...articleList, form]);
    setForm({ name: "", task: "", deadline: "", past: "" });
    setShowAdd(false);
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

          {/* ➕ BUTTON */}
          <button className="btn" onClick={() => setShowAdd(true)}>
            +
          </button>
        </div>
      </div>

      {/* ADD ARTICLE FORM */}
      {showAdd && (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Add Article</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 16,
            }}
          >
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <input
              placeholder="Task assigned"
              value={form.task}
              onChange={(e) =>
                setForm({ ...form, task: e.target.value })
              }
            />
            <input
              type="date"
              value={form.deadline}
              onChange={(e) =>
                setForm({ ...form, deadline: e.target.value })
              }
            />
            <input
              placeholder="Past task"
              value={form.past}
              onChange={(e) =>
                setForm({ ...form, past: e.target.value })
              }
            />
          </div>

          <div style={{ marginTop: 20, textAlign: "right" }}>
            <button className="btn" onClick={handleAdd}>
              Save
            </button>
          </div>
        </div>
      )}

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
              <tr key={i}>
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
                <td>{a.deadline || "--"}</td>
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
                <tr key={i}>
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
                  <td>{u.email}</td>
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
              background:
                "conic-gradient(#2563eb 0% 70%, #c7d2fe 70% 90%, #eef2ff 90% 100%)",
              margin: "20px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            70% On work
          </div>

          <p style={{ textAlign: "center" }}>
            20% Available <br /> 10% On leave
          </p>
        </div>
      </div>
    </>
  );
}

/* ================= DATA ================= */

const articles = [
  {
    name: "Emily B",
    task: "Prepare and organize documents",
    deadline: "2024-06-16",
    past: "Reviewed financial documentation",
  },
  {
    name: "John S",
    task: "Compile data",
    deadline: "2024-05-26",
    past: "Internal controls testing",
  },
];

const available = [
  { name: "Sophia.L", email: "matthewdavis123@gmail.com" },
  { name: "Noah.K", email: "jessicawhite456@gmail.com" },
  { name: "Olivia.M", email: "andrewjackson789@gmail.com" },
];
