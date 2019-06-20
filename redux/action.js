export const CHANGE_RADIUS = 'changeRadius'

export function changeRange(radius) {
  return {
    type: CHANGE_RADIUS,
    payload: radius,
  };
}