
export const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    payload: theme
  }
}

export const changeAnimal = (animal) => {
  return {
    type: 'CHANGE_ANIMAL',
    payload: animal
  }
}

export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    payload: location
  }
}


export const changeBreed = (breed) => {
  return {
    type: 'CHANGE_BREED',
    payload: breed
  }
}
