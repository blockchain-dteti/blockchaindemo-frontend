export default function uppercaseFirstCharOfEachWord(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((substr) => substr[0].toUpperCase() + substr.slice(1))
    .join(" ");
}
