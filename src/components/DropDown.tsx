import "./DropDown.scss";

const DropDown = () => {
  return (
    <select className="dropdown" name="countries" id="countries">
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default DropDown;
