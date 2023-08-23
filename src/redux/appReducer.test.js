import appReducer, { setAppAC } from './appReducer';

const initialState = {
  isInitialized: false
}

test('isInitialized should be true', () => {
  let action = setAppAC()
  let newState = appReducer(initialState, action)
  expect(newState.isInitialized).toBe(true);
});
