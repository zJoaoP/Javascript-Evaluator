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

    eval(func);

    console.log = oldLog;
    console.log(output);

    return output === desiredOutput;
  }
  return wrapper();
}
