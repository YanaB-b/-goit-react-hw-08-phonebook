import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filterInput">
        Filter contacts by name:{' '}
      </label>
      <input
        type="text"
        id="filterInput"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;