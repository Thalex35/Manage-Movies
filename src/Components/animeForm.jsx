import { useState, useEffect } from "react";
import "./animeForm.css";
import { nanoid } from "nanoid";

export default function animeForm({
  data,
  onAddAnime,
  selectedGenre,
  onGenreChange,
  selectedStatut,
  onStatutChange,
}) {
  const [formData, setFormData] = useState({
    id: "",
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
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setFormData((prev) => ({ ...prev, cover: imageUrl }));

    console.log(formData.cover);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAnime = {
      id: nanoid(),
      cover: formData.cover,
      titre: formData.titre,
      genre: formData.genre,
      episodes: Number(formData.episode),
      statut: formData.statut,
    };

    onAddAnime(newAnime);

    console.log(formData);
    setFormData({
      id: "",
      titre: "",
      genre: "",
      episode: "",
      statut: "",
      cover: "",
    });
    alert("your data has been submitted successfully");
  };

  function toFilter(myData, characteristic) {
    const data = myData.reduce((acc, item) => {
      if (!acc.includes(item[characteristic])) {
        acc.push(item[characteristic]);
      }
      return acc;
    }, []);
    return data;
  }

  return (
    <div className="fonctionalite">
      <div className="mesSelect">
        <h2>Filtrer par genre et statut</h2>
        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="">Tous les genres</option>
          {toFilter(data, "genre").map((gen, i) => (
            <option key={i} value={gen}>
              {gen}
            </option>
          ))}
        </select>
        <select
          value={selectedStatut}
          onChange={(e) => onStatutChange(e.target.value)}
        >
          <option value="">Tous les statuts</option>
          {toFilter(data, "statut").map((stat, i) => (
            <option key={i} value={stat}>
              {stat}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Ajouter un nouveau anime </h2>
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
          <select
            className="selectStatut"
            name="statut"
            onChange={handleChange}
            value={formData.statut}
            required
          >
            <option value="">Statut de l'anime</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
            <option value="Abandonné">A voir</option>
          </select>
          <div>
            <input
              id="inputfile"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              required
              onChange={handleCoverChange}
            />
            <label className="import" htmlFor="inputfile">
              Importer l'image
            </label>
          </div>
          <br />
        </div>
        <button className="btnAdd" type="submit">
          + Ajoutez
        </button>
      </form>
    </div>
  );
}
