import { useState, useEffect } from "react";
import "./animeForm.css";

export default function animeForm({
  genres,
  onAddAnime,
  selectedGenre,
  onGenreChange,
}) {
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
    localStorage.setItem("Movie_info", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAnime = {
      cover: formData.cover,
      titre: formData.titre,
      genre: formData.genre,
      episodes: Number(formData.episode),
      statut: formData.statut,
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
    <div className="fonctionalite">
      <p>filtrer par genre</p>
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">---</option>
        {genre.map((gnr, i) => (
          <option key={i} value={gnr}>
            {gnr}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <h3>Want to add a new anime ? </h3>
        <div className="inputs">
          <label htmlFor="">TITRE</label>
          <input
            type="text"
            placeholder="Son titre..."
            name="titre"
            onChange={handleChange}
            value={formData.titre}
            required
          />
          <br />
          <label htmlFor="">GENRE</label>
          <input
            type="text"
            placeholder="Son genre..."
            name="genre"
            onChange={handleChange}
            value={formData.genre}
            required
          />
          <br />
          <label htmlFor="">EPISODE</label>
          <input
            type="text"
            placeholder="Son nombre d'episode..."
            name="episode"
            onChange={handleChange}
            value={formData.episode}
            required
          />
          <br />
          <label htmlFor="">STATUT</label>
          <input
            type="text"
            placeholder="Son statut..."
            name="statut"
            onChange={handleChange}
            value={formData.statut}
            required
          />
          <Import />
          <br />
        </div>
        <button type="submit">Ajoutez</button>
      </form>
    </div>
  );
}

function Import() {
  return (
    <>
      <input id="inputfile" type="file" accept="image/*" />
      <label className="import" htmlFor="inputfile">
        Importer l'image
      </label>
    </>
  );
}
