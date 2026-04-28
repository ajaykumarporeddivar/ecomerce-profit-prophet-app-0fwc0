import { Response } from 'next';
import { PRODUCTS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        products: PRODUCTS,
        stats: STATS,
      },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

export async function POST({ request }: any): Promise<Response> {
  const jsonBody = await request.json();
  console.log(jsonBody);
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Demo mode — data not persisted',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}