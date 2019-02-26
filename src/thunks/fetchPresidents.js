import { isLoading, hasErrored, setPresidents } from '../actions'

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json();
      dispatch(setPresidents(data))
    } catch (error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error.message))
    }
  }
}