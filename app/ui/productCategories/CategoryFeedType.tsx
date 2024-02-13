
export function CategoryFeedType() {

  return (
    <>
      <option value={""}>Please Select Feed Type</option>
      <option value="Grain">Grain Finished</option>
      <option value="Grass">Grass Finished</option>
      <option value="Grain/Grass">Grain & Grass Finished</option>
    </>
  );
}
