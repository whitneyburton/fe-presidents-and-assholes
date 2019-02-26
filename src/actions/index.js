export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})
 
export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
})