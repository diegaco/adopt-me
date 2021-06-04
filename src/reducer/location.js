export default function location(state = 'Seattle, WA', { type, payload }) {
  if (type == 'CHANGE_LOCATION') {
    return payload
  } else {
    return state;
  }
}
