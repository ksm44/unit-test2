export default function sum(items) {
  let result = 0;
  items.forEach((item) => {
    result += item;
  });
  return result;
}
