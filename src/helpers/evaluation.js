/* eslint-disable */

export default function evaluate(js, context) {
  function foo() {
    console.log(this);
  }
  foo();

  let output = '';

  const log = console.log;
  console.log = (text) => {
    output += `${text}\n`;
  };

  function scopedEval(expr) {
    const evaluator = Function.apply(null, [
      ...Object.keys(context),
      'expr',
      'return eval(expr)',
    ]);
    return evaluator.apply(null, [...Object.values(context), expr]);
  }

  try {
    scopedEval(js);
  } catch (e) {
    console.log = log;
    return e;
  }

  console.log = log;
  return output;
}
