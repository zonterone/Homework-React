export default function getTime() {
  let date = new Date();
  return`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}