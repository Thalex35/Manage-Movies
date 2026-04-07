export default function Import() {
  return (
    <>
      <input id="inputfile" type="file" accept="image/*" />
      <label className="import" htmlFor="inputfile">
        Importer l'image
      </label>
    </>
  );
}
