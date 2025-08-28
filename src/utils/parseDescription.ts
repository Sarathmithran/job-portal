export function extractResponsibilities(description?: string): string[] {
  if (!description) return [];

  return description
    .split(/\n|\.|;/) // split by line breaks, dot, or semicolon
    .map(line => line.trim())
    .filter(line => line.length > 10); // filter out empty or very short lines
}