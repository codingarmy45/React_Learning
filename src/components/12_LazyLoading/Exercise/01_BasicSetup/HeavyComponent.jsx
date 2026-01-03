import React, { useState } from "react";

const HeavyComponent = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [theme, setTheme] = useState("dark");

  // Heavy static data (created once)
  const [items] = useState(
    Array.from({ length: 150 }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
      description: `This is a heavy description for item ${i + 1}.`,
      value: Math.floor(Math.random() * 1000),
    }))
  );

  // Derived state (filter + sort)
  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.value - b.value : b.value - a.value
    );

  const styles = {
    container: {
      minHeight: "100vh",
      padding: "20px",
      background:
        theme === "dark"
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #fdfbfb, #ebedee)",
      color: theme === "dark" ? "#fff" : "#111",
      fontFamily: "Arial, sans-serif",
      transition: "all 0.4s ease",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      flexWrap: "wrap",
      gap: "10px",
    },
    input: {
      padding: "10px",
      width: "240px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      padding: "10px 14px",
      marginLeft: "10px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      background: "#ff9800",
      color: "#000",
      fontWeight: "bold",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "16px",
    },
    card: (active) => ({
      padding: "16px",
      borderRadius: "12px",
      background: active
        ? "linear-gradient(135deg, #ff512f, #dd2476)"
        : "rgba(255,255,255,0.08)",
      boxShadow: active
        ? "0 0 20px rgba(255,0,100,0.6)"
        : "0 8px 20px rgba(0,0,0,0.3)",
      cursor: "pointer",
      transform: active ? "scale(1.05)" : "scale(1)",
      transition: "all 0.3s ease",
    }),
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "6px",
    },
    desc: {
      fontSize: "14px",
      opacity: 0.85,
      marginBottom: "10px",
    },
    value: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>⚡ Heavy React Component</h1>
        <div>
          <input
            style={styles.input}
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={styles.button}
            onClick={() => setSortAsc(!sortAsc)}
          >
            Sort {sortAsc ? "↓" : "↑"}
          </button>
          <button
            style={styles.button}
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            Theme
          </button>
        </div>
      </div>

      <div style={styles.grid}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={styles.card(item.id === selectedId)}
            onClick={() => setSelectedId(item.id)}
          >
            <div style={styles.title}>{item.title}</div>
            <div style={styles.desc}>{item.description}</div>
            <div style={styles.value}>Value: {item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeavyComponent;
