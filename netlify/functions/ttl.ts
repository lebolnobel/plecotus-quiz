import type { Config } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST' },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { next_run } = await req.json();

  const host = Netlify.env.get('HOST') || '';
  const key = Netlify.env.get('API_KEY') || '';

  if (!host || !key) {
    console.log('Error, supabase is not initialized', next_run);

    return new Response('Server configuration error', {
      status: 500,
    });
  }

  const supabase = createClient(host, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { error } = await supabase.from('ttl').insert({});

  if (error) {
    console.error('Supabase error:', error);

    return new Response('Database error', {
      status: 500,
    });
  }

  console.log('Received event! Next invocation at:', next_run);

  return new Response(null, { status: 204 });
};

export const config: Config = {
  schedule: '@daily',
};
