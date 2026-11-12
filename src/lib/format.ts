/** Deterministic number formatting, shared by server markup and count-ups. */
export function formatNumber(value: number, decimals: number): string {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }