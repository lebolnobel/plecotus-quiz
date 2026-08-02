import { createClient } from '@supabase/supabase-js';
import { generateFingerprint } from '../utils/fingerprint';

const host = (import.meta.env.VITE_SUPABASE_DATABASE_URL as string) || '';
const key = (import.meta.env.VITE_API_KEY as string) || '';

const botUserAgents = [
  /Googlebot/,
  /Bingbot/,
  /Slurp/, // Yahoo
  /DuckDuckBot/,
  /Baiduspider/,
  /YandexBot/,
  /Sogou/,
  /Exabot/,
  /facebot/, // Facebook
  /ia_archiver/, // Archive.org
];

export async function writeData(data: object) {
  if (!host || !key) {
    console.error('Error, Supabase is not initialized');
    return;
  }

  if (isBot(navigator.userAgent || '')) {
    console.warn('Robot (crawler) detected, avoid stats usage.');
    return;
  }

  try {
    const supabase = createClient(host, key);

    const fingerprint = generateFingerprint();
    const { error } = await supabase
      .from('usage')
      .insert({ ...data, fingerprint });

    if (error) {
      console.error('Unable to record usage data', error);
    }
  } catch (err) {
    if (err instanceof Error) console.error('Error:', err.message);

    return [];
  }
}

function isBot(userAgent: string): boolean {
  return botUserAgents.some((bot) => bot.test(userAgent));
}
