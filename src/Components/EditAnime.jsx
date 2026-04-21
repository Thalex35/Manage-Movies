import { Edit } from "lucide-react";

export default function EditAnime({ anime, onEdit }) {
  return (
    <div>
      <button>
        <Edit size={20} color="#3a3a3a" onClick={() => onEdit(anime)} />
      </button>
    </div>
  );
}
