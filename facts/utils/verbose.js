const VERBOSE = 'true' || Deno.env.get('VERBOSE');

/**
 * log to console, just like console.log(), unless env var "VERBOSE" is set to "false".
 * @param {*} args
 */
export function verbose(...args) {
  if (VERBOSE === 'false') return;
  console.info('\n', ...args);
}
