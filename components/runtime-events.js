// React handlers preserve the original handler's native event and DOM element.
export function dispatch(id, event) {
  const handler = window.kuduprayHandlers?.[id];
  if (!handler) return;
  const result = handler.call(event.currentTarget, event);
  if (result === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  return result;
}
