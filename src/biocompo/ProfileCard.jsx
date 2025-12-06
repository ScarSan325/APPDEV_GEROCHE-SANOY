import React from "react";

export default function ProfileCard({ title, content }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Title */}
      <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", fontWeight: "bold" }}>
        {title}
      </h3>

      {/* Content */}
      <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.4" }}>
        {content}
      </p>
    </div>
  );
}
