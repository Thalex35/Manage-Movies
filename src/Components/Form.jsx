import { useState, useEffect } from "react";

export default function AnimeForm() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("State");
    return saved ? JSON.parse(saved) : { nom: "", email: "" };
  });

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem("State", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ nom: "", email: "" });
    alert("your data has been submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name..."
        name="nom"
        onChange={handleChange}
        value={formData.nom}
      />
      <br />
      <input
        type="email"
        placeholder="Your email..."
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
