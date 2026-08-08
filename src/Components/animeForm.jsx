import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./animeForm.css";

export default function AnimeForm({ data, onAddAnime, editId, tempData, onSavedEdit, onCancelEdit, selectedGenre, onGenreChange, selectedStatut, onStatutChange }) {
  const empty = { id: "", titre: "", genre: "", episode: "", statut: "", cover: "" };
  const [formData, setFormData] = useState(empty);

  useEffect(() => { setFormData(editId ? tempData : empty); }, [editId, tempData]);
  const values = (key) => [...new Set(data.map((item) => item[key]))];
  const change = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  const coverChange = (event) => { const file = event.target.files?.[0]; if (file) setFormData((current) => ({ ...current, cover: URL.createObjectURL(file) })); };
  const submit = (event) => {
    event.preventDefault();
    const anime = { id: editId || nanoid(), titre: formData.titre, genre: formData.genre, episodes: Number(formData.episode), statut: formData.statut, cover: formData.cover };
    editId ? onSavedEdit(anime) : onAddAnime(anime);
    setFormData(empty);
  };

  return <div className="fonctionalite">
    <div className="mesSelect">
      <h2>Filtrer la collection</h2>
      <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}><option value="">Tous les genres</option>{values("genre").map((genre) => <option key={genre} value={genre}>{genre}</option>)}</select>
      <select value={selectedStatut} onChange={(e) => onStatutChange(e.target.value)}><option value="">Tous les statuts</option>{["terminé", "en cours", "à voir"].map((status) => <option key={status} value={status}>{status}</option>)}</select>
    </div>
    <form onSubmit={submit}>
      <h2>{editId ? "Modifier un anime" : "Ajouter un anime"}</h2>
      <div className="inputs">
        <label>TITRE</label><input name="titre" placeholder="Son titre..." value={formData.titre} onChange={change} required />
        <label>GENRE</label><input name="genre" placeholder="Son genre..." value={formData.genre} onChange={change} required />
        <label>EPISODES</label><input name="episode" type="number" min="1" placeholder="Son nombre d'épisodes..." value={formData.episode} onChange={change} required />
        <label>STATUT</label><select className="selectStatut" name="statut" value={formData.statut} onChange={change} required><option value="">Statut de l'anime</option><option value="terminé">Terminé</option><option value="en cours">En cours</option><option value="à voir">À voir</option></select>
        <input id="inputfile" type="file" accept="image/*" hidden onChange={coverChange} /><label className="import" htmlFor="inputfile">Importer l'image</label>
      </div>
      <div className="myButton"><button className="btnAdd" type="submit">{editId ? "Modifier" : "Ajouter"}</button>{editId && <button className="btnCancel" type="button" onClick={onCancelEdit}>Annuler</button>}</div>
    </form>
  </div>;
}
