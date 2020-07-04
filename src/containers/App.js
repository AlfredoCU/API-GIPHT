import React, { useState } from "react";
import Header from "../components/Header";
import FormCategory from "../components/FormCategory";
import GifGrid from "../components/GifGrid";

const App = () => {
  const [categories, setCategories] = useState(["Mr.Robot"]);

  return (
    <div>
      <Header />
      <FormCategory setCategories={setCategories} />
      {categories.map((category, key) => (
        <GifGrid key={`${key}-Category`} category={category} />
      ))}
    </div>
  );
};

export default App;
