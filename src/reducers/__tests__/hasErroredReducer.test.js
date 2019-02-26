import { hasErroredReducer } from '../hasErroredReducer';
import { hasErrored } from '../../actions';

describe('hasErroredReducer', () => {
  it('should return the default state', () => {
    const expected = ''
    const result = hasErroredReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the action message', () => {
    const expected = 'Error fetching data';
    const result = hasErroredReducer(undefined, hasErrored('Error fetching data'))
    expect(result).toEqual(expected)
  })
})