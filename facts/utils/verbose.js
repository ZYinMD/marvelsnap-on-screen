const VERBOSE = 'true' || Deno.env.get('VERBOSE');

/**
 * log to console, just like console.log(), unless env var "VERBOSE" is set to "false".
 * @param {*} args
 */
export function verbose(...args) {
  if (VERBOSE === 'false') return;
  if (typeof args[0] === 'string') console.info('\n\x1b[34m%s\x1b[0m', ...args);
  else console.info('\n', ...args);
}
