import type { Config } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export default async (req: Request) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { next_run } = await req.json();

  const host = Netlify.env.get('HOST') || '';
  const key = Netlify.env.get('API_KEY') || '';

  if (!host) {
    console.log('Error, supabase is not initialized', next_run);
    return;
  }

  const supabase = createClient(host, key);

  await supabase.from('ttl').insert({});

  console.log('Received event! Next invocation at:', next_run);
};

export const config: Config = {
  schedule: '@daily',
};
