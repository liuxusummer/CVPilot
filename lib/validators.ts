export function isNonEmptyText(value: string) {
  return value.trim().length > 0;
}

export function isWithinLength(value: string, maxLength: number) {
  return value.length <= maxLength;
}
