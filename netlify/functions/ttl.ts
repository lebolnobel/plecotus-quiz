import type { Config } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export default async (req: Request) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { next_run } = await req.json();

  const host = (process.env.HOST as string) || '';
  const key = (process.env.API_KEY as string) || '';

  const supabase = createClient(host, key);

  await supabase.from('ttl').insert({});

  console.log('Received event! Next invocation at:', next_run);
};

export const config: Config = {
  schedule: '@daily',
};
