import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

 
export const runtime = 'edge';
const fontDataRegular = fetch(
  new URL('../../../../public/Inter-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());
const fontDataBolder = fetch(
  new URL('../../../../public/Inter-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());
export async function GET(request) {
  
 
  try {
    const [regularfont,bolderfont] = await Promise.all([fontDataRegular,fontDataBolder]);
    

    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.get('title');
    const hasDesc = searchParams.get('description');
    const hasWidth = searchParams.get('width');
    const hasHeight = searchParams.get('height');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

      const description = hasDesc ? searchParams.get('description')?.slice(0,100) : 'Sabudana Khichdi, Upwas thali & More';
      const width = hasWidth ? searchParams.get('width')?.slice(0,100) : 1080;
      const height = hasHeight ? searchParams.get('height')?.slice(0,100) : 1035;
 

    return new ImageResponse(
      (
        <div style={{display:'flex',flexWrap:"wrap",
        background:"url(https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg)",width:"100%",height:"100%"}}>


          <div style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",width:"70%",margin:"auto",marginTop:"150px"}}>
            <p style={{
              fontSize: 80,
              fontFamily:"Inter",
              letterSpacing: '-0.025em',
              color:"rgb(123,64,8)",
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',

            }}>

              Navratri Vrat Special
            
            </p>

           
          </div>

          <div style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",width:"80%",margin:"auto"}}>

          <p
            style={{
              fontSize: 45,
              fontWeight:200,
              letterSpacing: '-0.025em',
              marginTop: 30,
              color:"rgb(123,64,8)",
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              
            }}
          >
            {description}
          </p>
          </div>
          
            <div
          style={{
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
        
            <img src="https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png" alt="dd" width={"100%"} style={{marginTop:"350px"}}/>
    
          
          

            <div style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",width:"100%",margin:"auto",border:"1px solid black",marginTop:"200px"}}>

              <img src="https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png" alt="" width={"30%"}/>
        
        <p
            style={{
              fontSize: 30,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color:"black",
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              fontWeight:800
            }}
          >
            {title}
          </p>
        </div>
          
        </div>

        </div>
        
      ),
      {
        width: width,
        height: height,
        fonts:[
          {
            name:"Inter",
            data:regularfont,
            style:"normal",
            weight:400,
          },
          {
            name:"Inter",
            data:bolderfont,
            style:"normal",
            weight:800,
          }
        ]
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}