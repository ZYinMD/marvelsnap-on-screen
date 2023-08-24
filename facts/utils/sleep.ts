export function sleep(milliseconds: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(milliseconds); // return the milliseconds passed in, e.g. 2000. Usually it's not useful, but occasionally it can be used to determine who won a Promise.race()
    }, milliseconds);
  });
}
