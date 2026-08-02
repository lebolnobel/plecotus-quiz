import type { Config } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST' },
    });
  }

  const host = Netlify.env.get('SUPABASE_DATABASE_URL') || '';
  const key = Netlify.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

  if (!host || !key) {
    console.error('Error, Supabase is not initialized');

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
    console.error('Supabase error, TTL insert failed:', error);

    return new Response('Database error', {
      status: 500,
    });
  }

  console.log('Received event!');

  return new Response(null, { status: 204 });
};

export const config: Config = {
  schedule: '@daily',
};
