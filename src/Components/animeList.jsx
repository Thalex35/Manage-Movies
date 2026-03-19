import "./animeList.css";

export default function AnimeList({ titre, statut, genre, episodes, cover }) {
  return (
    <section className="card">
      <h1>{titre}</h1>
      <div>
        <img src={cover}></img>
        <p>Genre : {genre}</p>
        <span>Nombre d'episode : {episodes}</span>
        <p>Statut : {statut}</p>
      </div>
    </section>
  );
}
