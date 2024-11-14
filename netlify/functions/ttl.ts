import type { Config } from '@netlify/functions';
import supabase from '../../src/db/database';

export default async (req: Request) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { next_run } = await req.json();

  await supabase.from('ttl').insert({});

  console.log('Received event! Next invocation at:', next_run);
};

export const config: Config = {
  schedule: '@daily',
};
