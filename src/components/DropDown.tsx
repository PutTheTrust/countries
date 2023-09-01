import { useDispatch } from "react-redux";
import "./DropDown.scss";
import { searchByRegion } from "../store/slice/countrySlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(searchByRegion(e.target.value));
  };
  return (
    <select
      className="dropdown"
      name="countries"
      id="countries"
      onChange={(e) => handleChange(e)}
      role="dropdown"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default DropDown;
