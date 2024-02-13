
export function Categories() {

  const farmToTable = (
    <>
      <option value="Grain Finished Beef">Meat Grain Finished Beef</option>
      <option value="Grass Finished Beef">Meat Grass Finished Beef</option>
      <option value="Grain & Grass Finished Beef">Meat Grain & Grass Finished Beef</option>

      <option value="Bison/Yak">Meat Bison/Yak</option>
      <option value="Chicken">Meat Chicken</option>
      <option value="Goat">Meat Goat</option>
      <option value="Pork">Meat Pork</option>
      <option value="Sheep">Meat Sheep</option>
      <option value="Turkey">Meat Turkey</option>
      <option value="Other Meat">Meat Other</option>

      <option value="Chicken Eggs">Eggs Chicken</option>
      <option value="Duck Eggs">Eggs Duck</option>
      <option value="Quail Eggs">Eggs Quail</option>
      <option value="Other Eggs">Eggs Other</option>

      <option value="Kitchen Goods">Kitchen Goods</option>
      <option value="Honey">Honey</option>
      <option value="Milk/Dairy">Milk/Dairy</option>

      <option value="Hops">Hops</option>
      <option value="Winery">Winery</option>

      <option value="Vegetables/CSA">Vegetables/CSA</option>

      <option value="Other Farm To Table">Farm To Table Other</option>
    </>
  );

  const farmServices = (
    <>
      <option value="Horse Boarding">Services Horse Boarding</option>
      <option value="Pasture For Rent">Services Pasture For Rent</option>
      <option value="Farmland/Pasture Needed">Services Farmland/Pasture Needed</option>
      <option value="Building/Welding">Services Building/Welding</option>
      <option value="Exempt Butchering">Services Exempt Butchering</option>
      <option value="Mobile Butchering">Services Mobile Butchering</option>
      <option value="State Inspected Butchering">Services State Inspected Butchering</option>
      <option value="USDA Inspected Butchering">Services USDA Inspected Butchering</option>
      <option value="Farrier">Services Farrier</option>
      <option value="Seed/Fertilizer">Services Seed/Fertilizer</option>
      <option value="Hauling">Services Hauling</option>
      <option value="Vet/Medicine">Services Vet/Medicine</option>
      <option value="Sales Repair">Services Sales Repair</option>
      <option value="Training">Services Training</option>
      <option value="Custom Farming">Services Custom Farming</option>
      <option value="Other Services">Services Other</option>
    </>
  );

  const feedBedding = (
    <>
      <option value="Alfalfa/Grass Hay">Feed/Bedding Alfalfa/Grass</option>
      <option value="Alfalfa Hay">Feed/Bedding Alfalfa</option>
      <option value="Grass Hay">Feed/Bedding Grass</option>
      <option value="Other Hay">Feed/Bedding Other</option>

      <option value="Pellets/Cubes">Feed/Bedding Pellets/Cubes</option>

      <option value="Barley Straw">Feed/Bedding Barley</option>
      <option value="Wheat Straw">Feed/Bedding Wheat</option>
      <option value="Other Straw">Feed/Bedding Other</option>
    </>
  )

  const liveAnimals = (
    <>
      <option value="Laying Chickens">Live Animals Laying Chickens</option>
      <option value="Meat Chickens">Live Animals Meat Chickens</option>
      <option value="Live Ducks">Live Animals Ducks</option>
      <option value="Live Geese">Live Animals Geese</option>
      <option value="Live Turkeys">Live Animals Turkeys</option>
      <option value="Live Equine/Mules/Donkeys">Live Animals Equine/Mules/Donkeys</option>
      <option value="Live Goat/Sheep/Ruminants">Live Animals Goat/Sheep/Ruminants</option>
      <option value="Live Livestock/Cattle">Live Animals Livestock/Cattle</option>
      <option value="Live Llama/Alpaca">Live Animals Llama/Alpaca</option>
      <option value="Live Pigs/Hogs/Piglets">Live Animals Pigs/Hogs/Piglets</option>
      <option value="Other Live Animals">Live Animals Other</option>
    </>
  );

  const agritourism = (
    <>
      <option value="You Pick">Agritourism You Pick</option>
      <option value="Farm Events">Agritourism Farm Events</option>
      <option value="Flowers">Agritourism Flowers</option>
      <option value="Tasting Rooms">Agritourism Tasting Rooms</option>
      <option value="Farm Venues For Rent">Agritourism Farm Venues For Rent</option>
    </>
  );

  const stores = (
    <>
      <option value="Farm Stands">Stores Farm Stands</option>
      <option value="Farm Stores">Stores Farm Stores</option>
      <option value="Farmers Markets">Stores Farmers Markets</option>
    </>
  );

  return (
    <>
      <option value={""}>Please Select Product</option>
      {liveAnimals}
      {farmToTable}
      {farmServices}
      {feedBedding}
      {agritourism}
      {stores}
    </>
  );
}
