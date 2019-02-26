import { fetchPresidents } from '../fetchPresidents'
import { isLoading, hasErrored, setPresidents } from '../../actions'

describe('fetchPresidents thunk', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        presidents: [{ president: 'Obama' }]
      })
    }))
  })

  it('dispatches the isLoading action with true', () => {
    const thunk = fetchPresidents()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('dispatches the isLoading action with true', () => {
    const thunk = fetchPresidents()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
})