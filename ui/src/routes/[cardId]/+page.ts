export function load({ params }) {
  console.log('params:', params);
  return { cardId: params.cardId };
}
export const prerender = false;
