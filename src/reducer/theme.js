export default function theme(state = 'darkblue', { type, payload }) {
  if (type == 'CHANGE_THEME') {
    return payload;
  } else {
    return state;
  }
}
