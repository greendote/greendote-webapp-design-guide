export function isBlank(value: string): boolean {
  return !value || value.trim() === '';
}

export function toNumberComma(value: number | string) {
  if (!value) return typeof value === 'string' ? '' : 0;
  const num = typeof value === 'string' ? parserNumberComma(value) : value;
  return new Intl.NumberFormat('ko-KR', {
    currency: 'KRW',
  }).format(num);
}

export function parserNumberComma(number: string): number {
  return Number(number.replace(/,/g, ''));
}
