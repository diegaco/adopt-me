export default function animal(state = 'dog', { type, payload }) {
  if (type == 'CHANGE_ANIMAL') {
    return payload;
  } else {
    return state;
  }
}
