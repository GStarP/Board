export function buildWSConnection(userId) {
  return new WebSocket(`ws://localhost:8089/ws/${userId}`);
}
