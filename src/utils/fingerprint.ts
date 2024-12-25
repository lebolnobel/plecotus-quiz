export function generateFingerprint() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const language = navigator.language;
  const screenResolution = `${screen.width}x${screen.height}`;
  const colorDepth = screen.colorDepth;
  const timezoneOffset = new Date().getTimezoneOffset();
  const plugins = Array.from(navigator.plugins)
    .map((plugin) => plugin.name)
    .join(',');

  const hasTouchSupport = 'ontouchstart' in window;
  const hardwareConcurrency = navigator.hardwareConcurrency || 'unknown';
  const maxTouchPoints = navigator.maxTouchPoints || 0;

  const fingerprintString = `${userAgent}|${platform}|${language}|${screenResolution}|${colorDepth}|${timezoneOffset}|${plugins}|${hasTouchSupport}|${hardwareConcurrency}|${maxTouchPoints}`;
  const fingerprint = hashString(fingerprintString);

  return fingerprint;
}

export function hashString(str: string) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
