function* count(start, step = 1) {
  let value = start;
  while (true) {
    value += step;
    yield value;
  }
}

function* cycle(iter, nTimes = Infinity) {
  let numberOfRepetition = nTimes;
  while (numberOfRepetition) {
    for (const el of iter) {
      yield el;
    }
    numberOfRepetition -= 1;
  }
}

function* repeat(value, nTimes = Infinity) {
  let numberOfRepetition = nTimes;
  while (numberOfRepetition) {
    yield value;
    numberOfRepetition -= 1;
  }
}

export { count, cycle, repeat };
