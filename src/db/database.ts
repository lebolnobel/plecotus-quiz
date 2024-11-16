import { createClient } from '@supabase/supabase-js';
import { generateFingerprint } from './fingerprint';

const host = (import.meta.env.VITE_HOST as string) || '';
const key = (import.meta.env.VITE_API_KEY as string) || '';

const supabase = (!!host && createClient(host, key)) || undefined;

export default supabase;

export async function writeData(type: 'SCORE' | 'ANSWER', data: object) {
  if (!supabase) return;

  try {
    const fingerprint = generateFingerprint();
    const { error } = await supabase.from('usage').insert({
      type,
      data: {
        created_on: new Date().toString(),
        type,
        data: {
          fingerprint,
          ...data,
        },
      },
    });

    if (error) {
      console.error(error);
    }
  } catch (err) {
    if (err instanceof Error) console.error('Error:', err.message);

    return [];
  }
}
