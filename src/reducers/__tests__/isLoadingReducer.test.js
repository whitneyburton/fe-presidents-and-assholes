import { isLoadingReducer } from '../isLoadingReducer';
import { isLoading } from '../../actions';

describe('isLoadingReducer', () => {
  it('should return the default state', () => {
    const expected = false
    const result = isLoadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the action bool', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, isLoading(true))
    expect(result).toEqual(expected)
  })
})