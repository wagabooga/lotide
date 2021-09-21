function tail(words) {
  let array = [];
  for (let i = 1; i < words.length; i++) {
    array.push(words[i]);
  }
  return array
}

module.exports = tail