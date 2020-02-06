export const FIELDS = [
  ["Patient's Name"],
  ["Sex", "Age", "Birthday"],
  ["House No.", "Street", "City"],
  ["Mother's Name", "Mother's Occupation"],
  ["Father's Name", "Father's Occupation"]
];

export function Reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return action.data !== ""
        ? (state = { ...state, [action.label]: false })
        : (state = { ...state, [action.label]: true });
    default:
      return state;
  }
}
