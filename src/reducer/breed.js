export default function breed(state = 'havanese', { type, payload }) {
  if (type == 'CHANGE_BREED') {
    return payload;
  } else {
    return state;
  }
}
