import React from "react";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = React.useState();
  const data = [
    { id: 0, name: "Women", color: "red" },
    { id: 1, name: "Women", color: "green" },
    { id: 2, name: "Women", color: "blue" },
    { id: 3, name: "Women", color: "yellow" },
    { id: 4, name: "Women", color: "orange" }
  ];

  return (
    <div className="nav-elements">
      {data.map((el, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex()}
          style={
            hoveredIndex === el.id
              ? { borderBottom: `4px solid ${el.color}`, marginBottom: "-4px" }
              : null
          }
        >
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
}
