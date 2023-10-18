import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.get('title');
    const hasDesc = searchParams.get('description');
    const hasWidth = searchParams.get('width');
    const hasHeight = searchParams.get('height');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

      const description = hasDesc ? searchParams.get('description')?.slice(0,100) : 'My default description';
      const width = hasWidth ? searchParams.get('width')?.slice(0,100) : 1080;
      const height = hasHeight ? searchParams.get('height')?.slice(0,100) : 1035;
 

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {description}
          </div>
          
        </div>
      ),
      {
        width: width,
        height: height,
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}