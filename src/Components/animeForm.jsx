import { useState, useEffect } from "react";

export default function Form({ genres }) {
  const [formData, setFormData] = useState({ titre: "", genre: "" });

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem("User_info", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ titre: "", genre: "" });
    alert("your data has been submitted successfully");
  };

 const genre = genres.reduce((acc, item) => {
  if (!acc.includes(item.genre)) {
    acc.push(item.genre);
  }
  return acc;
}, []);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Want to add a new anime ? </h3>
      <input
        type="text"
        placeholder="Son titre..."
        name="titre"
        onChange={handleChange}
        value={formData.titre}
      />
      <br />
      <input
        type="text"
        placeholder="Son genre..."
        name="genre"
        onChange={handleChange}
        value={formData.genre}
      />
      <button type="submit">Ajoutez</button>
      <select>
        <option>---</option>
        {genre.map((gnr, i) => (
          <option key={i}>{gnr}</option>
        ))}
      </select>
    </form>
  );
}
