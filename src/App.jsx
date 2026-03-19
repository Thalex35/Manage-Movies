import AnimeCard from "./Components/animeCard";
import AnimeForm from "./Components/animeForm";
import { animesData } from "./Data/animesData";
import "./App.css";

export default function App() {
  return (
    <div>
      <AnimeCard animes={animesData} />
      <AnimeForm genres={animesData} />
    </div>
  );
}
