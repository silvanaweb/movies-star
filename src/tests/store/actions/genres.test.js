import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setGenres, startSetGenres } from "../../../store/actions/genres";
import { genres } from "../../fixtures/genres";
const createMockStore = configureMockStore([thunk]);

// ideally we should a test DB to which we are connecting for testing purposes

test("should generate set s genres correctly", () => {
  const action = setGenres(genres);
  expect(action).toEqual({
    type: "SET_GENRES",
    genres: genres
  });
});

// test("should fetch the expenses from firebase", done => {
//   const store = createMockStore();
//   store.dispatch(startSetGenres()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "SET_GENRES",
//       expenses
//     });
//     done();
//   });
// });
