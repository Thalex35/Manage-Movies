import { Trash } from "lucide-react";

export default function DeleteAnime({ id, onDelete }) {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <div>
      <button>
        <Trash size={20} color="#3a3a3a" onClick={handleDelete} />
      </button>
    </div>
  );
}
