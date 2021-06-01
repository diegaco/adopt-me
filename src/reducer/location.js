export default function location(state = '', { type, payload }) {
  if (type == 'CHANGE_LOCATION') {
    return payload
  } else {
    return state;
  }
}
