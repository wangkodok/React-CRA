export default function resultToString(count) {
  const result = count * 5000;
  return result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
