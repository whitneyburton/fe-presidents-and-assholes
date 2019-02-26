import { setPresidentsReducer } from '../setPresidentsReducer';
import { setPresidents } from '../../actions';

describe('setPresidentsReducer', () => {
  const mockPresidents = [{ president: 'Obama' }]

  it('should return the default state', () => {
    const expected = []
    const result = setPresidentsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the action bool', () => {
    const expected = mockPresidents;
    const result = setPresidentsReducer(undefined, setPresidents(mockPresidents))
    expect(result).toEqual(expected)
  })
})