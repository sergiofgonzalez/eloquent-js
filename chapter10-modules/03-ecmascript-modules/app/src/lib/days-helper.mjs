

const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function name(number) {
  return names[number];
}

export function number(name) {
  return names.indexOf(name);
}

const weekDay = {
  name,
  number
};

export default weekDay;
