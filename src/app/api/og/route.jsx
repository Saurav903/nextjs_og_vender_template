import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        👋 Hello
      </div>
    ),
    {
      width: 1080,
      height: 1920,
    },
  );
}