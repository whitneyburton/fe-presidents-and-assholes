import { isLoading, hasErrored, setPresidents } from '../actions'
import { fetchData } from '../api/fetchData';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetchData(url);
      if (!response.ok) throw new Error(response.statusText)
      dispatch(isLoading(false))
      const data = await response.json();
      dispatch(setPresidents(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}