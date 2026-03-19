import { useState, useEffect } from "react";

export default function Form({ genres, onAddAnime }) {
  const [formData, setFormData] = useState({
    titre: "",
    genre: "",
    episode: "",
    statut: "",
    cover: "",
  });

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem("Film_info", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAnime = {
      titre: formData.titre,
      genre: formData.genre,
      episodes: Number(formData.episode),
      statut: formData.statut,
      cover: formData.cover,
    };

    onAddAnime(newAnime);

    console.log(formData);
    setFormData({ titre: "", genre: "", episode: "", statut: "", cover: "" });
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
        required
      />
      <br />
      <input
        type="text"
        placeholder="Son genre..."
        name="genre"
        onChange={handleChange}
        value={formData.genre}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Son nombre d'episode..."
        name="episode"
        onChange={handleChange}
        value={formData.episode}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Son statut..."
        name="statut"
        onChange={handleChange}
        value={formData.statut}
        required
      />

      <button name="import" value={formData.cover}>
        Importer
      </button>
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
