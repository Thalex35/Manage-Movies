export default function Import() {
  return (
    <>
      <input
        id="inputfile"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label className="import" htmlFor="inputfile">
        Importer l'image
      </label>
    </>
  );
}
