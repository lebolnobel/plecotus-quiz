import { createClient } from '@supabase/supabase-js';
import { generateFingerprint } from './fingerprint';

const host = (import.meta.env.VITE_HOST as string) || '';
const key = (import.meta.env.VITE_API_KEY as string) || '';

const supabase = (!!host && createClient(host, key)) || undefined;

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

export default supabase;

export async function writeData(data: object) {
  if (!supabase) return;

  const userAgent = navigator.userAgent || '';
  if (isBot(userAgent)) {
    console.warn('Robot (crawler) detected, avoid stats usage.');
    return;
  }

  try {
    const fingerprint = generateFingerprint();
    const { error } = await supabase
      .from('usage')
      .insert({ fingerprint, ...data });

    if (error) {
      console.error(error);
    }
  } catch (err) {
    if (err instanceof Error) console.error('Error:', err.message);

    return [];
  }
}

function isBot(userAgent: string): boolean {
  return botUserAgents.some((bot) => bot.test(userAgent));
}
