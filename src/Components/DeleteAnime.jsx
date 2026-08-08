import { Trash } from "lucide-react";

export default function DeleteAnime({ id, onDelete }) {
  function handleDelete() {
    if (window.confirm("Voulez-vous vraiment supprimer cet anime ?")) {
      onDelete(id);
    }
  }

  return (
    <button className="action-button delete-button" type="button" aria-label="Supprimer cet anime" onClick={handleDelete}>
      <Trash size={20} />
    </button>
  );
}
