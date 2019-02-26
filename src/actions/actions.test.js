import { isLoading, hasErrored, setPresidents } from './index'

describe('actions', () => {
  describe('isLoading', () => {
    it('should return an object with the type IS_LOADING and a bool', () => {
      const expected = {
        type: 'IS_LOADING',
        bool: false
      }
      const result = isLoading(false)
      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
    it('should return an object with the type HAS_ERRORED and a bool', () => {
      const expected = {
        type: 'HAS_ERRORED',
        message: 'Error fetching data'
      }
      const result = hasErrored('Error fetching data')
      expect(result).toEqual(expected)
    })
  })

  describe('setPresidents', () => {
    it('should return an object with the type SET_PRESIDENTS and a bool', () => {
      const expected = {
        type: 'SET_PRESIDENTS',
        presidents: [{ president: 'Obama' }]
      }
      const result = setPresidents([{ president: 'Obama' }])
      expect(result).toEqual(expected)
    })
  })
})