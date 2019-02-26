import { mapStateToProps, mapDispatchToProps } from './App'

jest.mock('../../thunks/fetchPresidents')

describe('App', () => {
  const mockProps = {
    isLoading: false,
    hasErrored: '',
    presidents: [{ president: 'Obama' }]
  }
  
  describe('mapStateToProps', () => {
    it('should return a props object with isLoading, hasErrored, and the presidents array', () => {
      const mockState = {
        ...mockProps,
        assholes: []
      }
      const expected = mockProps
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should dispatch fetchPresidents thunk', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPresidents()
      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})