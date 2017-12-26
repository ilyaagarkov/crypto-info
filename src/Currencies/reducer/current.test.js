import { GET_CURRENCY_INFO, CLEAR_CURRENT_CURRENCY } from '../actions'
import reducer from './current';


describe('current currency reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  });

  it('should handle GET_CURRENCY_INFO', () => {

    const payload = {
      id: 'bitcoin',
      rate: 1
    };

    expect(reducer(undefined, {
      type: GET_CURRENCY_INFO,
      payload
    })).toEqual(payload)
  });


  it('should handle CLEAR_CURRENT_CURRENCY', () => {

    const state = {
      id: 'bitcoin',
      rate: 1
    };

    expect(reducer(state, {
      type: CLEAR_CURRENT_CURRENCY,
    })).toEqual(null)
  });

});