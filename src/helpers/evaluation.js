/* eslint-disable */

export default function evaluate(func, input, desiredOutput) {
  let output = '';

  function log(text) {
    output += `${text}\n`;
  }

  function readline() {
    return input.shift();
  }

  function wrapper() {
    const oldLog = console.log;
    console.log = log;

    try {
      eval(func);
    } catch (e) {
      console.log = oldLog;
      return e;
    }
    console.log = oldLog;
    return output === desiredOutput;
  }
  return wrapper();
}
