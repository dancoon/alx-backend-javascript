export default function appendToEachArrayValue(array, appendString) {
  const a = [];
  for (const value in array) {
    a.push(appendString + value);
  }
  return array;
}
