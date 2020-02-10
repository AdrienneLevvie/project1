export const FIELDS = [
  ["Patient's Name", "Gender"],
  ["Birthday","Age","Height", "Weight"],
  ["House No.", "Street", "City"],
  ["Mother's Name", "Mother's Occupation"],
  ["Father's Name", "Father's Occupation"]
];

export const FIELDS2 = [
  ["Blood Type"]
]
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
