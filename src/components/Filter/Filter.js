import { Label, P, Input } from '../FormContacts/FormContacts-styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <Label>
      <P>Find contacts by name</P>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
