import {useSelector, useDispatch} from 'react-redux';

import {SET_DATE, SET_SEARCH_MODE, SET_PAGE} from '~/store/DateSlice';

const useDate = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date.date);
  const searchMode = useSelector(state => state.date.searchMode);
  const page = useSelector(state => state.date.page);

  const setDate = date => dispatch(SET_DATE(date));

  const setSearchMode = searchMode => dispatch(SET_SEARCH_MODE(searchMode));

  const setPage = page => dispatch(SET_PAGE(page));

  return {date, page, searchMode, setDate, setSearchMode, setPage};
};

export default useDate;
