export default function theme(state = '', { type, payload }) {
  if (type == 'CHANGE_BREED') {
    return payload;
  } else {
    return state;
  }
}
