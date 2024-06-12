import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.inputBox}
        value={filter}
        onChange={handleFilter}
      ></input>
    </div>
  );
}
