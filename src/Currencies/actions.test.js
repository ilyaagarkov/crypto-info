import * as actions from './actions'

describe('actions', () => {
  it('should create an action to getting currencies list', () => {
    const list = [
      {
        id: 'bitcoin',
      }
    ];
    const expectedAction = {
      type: actions.GET_CURRENCY_LIST,
      meta: {},
      payload: list,
    }
    expect(actions.getCurrencyListActionCreator(list)).toEqual(expectedAction)
  });
});