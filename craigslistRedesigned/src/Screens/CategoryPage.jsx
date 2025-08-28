import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ color: "#fff", textAlign: "center", padding: "50px" }}>
        <h2>{name} Page</h2>
        <p>This is a placeholder for the {name} category.</p>
      </div>
    </>
  );
};

export default CategoryPage;
