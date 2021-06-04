export default function animal(state = 'dog', { type, payload }) {
  console.log('change animal');
  if (type == 'CHANGE_ANIMAL') {
    return payload;
  } else {
    return state;
  }
}
