import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";
const fontDataRegular = fetch(
  new URL("../../../../public/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontDataBolder = fetch(
  new URL("../../../../public/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
export async function GET(request) {
  try {
    const [regularfont, bolderfont] = await Promise.all([
      fontDataRegular,
      fontDataBolder,
    ]);

    const { searchParams } = new URL(request.url);


    // ?title=<title>
    const hasTitle = searchParams.get("title");
    const hasDesc = searchParams.get("description");
    const hasSpecial = searchParams.get("special");
    const hasWidth = searchParams.get("width");
    const hasHeight = searchParams.get("height");
    const hasBackground = searchParams.get("baground");
    const hasCategory = searchParams.get("category");
    let hasvendorLogo = searchParams.get("vendorlogo");
    let hasimageId = searchParams.get("imageid");
    let hasSocialMedia = searchParams.get("socialMedia");
    let SocialMedia = hasSocialMedia ? searchParams.get("socialMedia")?.slice(0, 100) : "Whatsapp";
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : " Navratri Vrat Special";

    const description = hasDesc
      ? searchParams.get("description")?.slice(0, 100)
      : "Sabudana Khichdi, Upwas thali & More";
    const special = hasSpecial
      ? searchParams.get("special")?.slice(0, 100)
      : "Order Navratri specials from our restaurants now!";
    const width = hasWidth ? searchParams.get("width")?.slice(0, 100) : 1080;
    const height = hasHeight ? searchParams.get("height")?.slice(0, 100) : 1035;

    const SocialMedBgImage=SocialMedia=="Whatsapp" ? "https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg" : "https://neon.ipsator.com/c/image/upload/v1697725263/irctc/post/bg/post-post-bg-1.jpg"

    const background = hasBackground
      ? searchParams.get("baground")?.slice(0, 500)
      : SocialMedBgImage;
    const category = hasCategory
      ? searchParams.get("category")?.slice(0, 500)
      : "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png";
    let vendorlogo = hasvendorLogo
      ? searchParams.get("vendorlogo")?.slice(0, 100)
      : "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png";
    let imageId = hasimageId ? searchParams.get("imageid")?.slice(0, 100) : "1";

    console.log('SocialMedia',imageId);

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: `url(${background})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              margin: "auto",
              marginTop: `${SocialMedia=="Whatsapp" ? '150px':'130px'}`,
            }}
          >
            <p
              style={{
                fontSize: `${SocialMedia=="Whatsapp"? 80 : '50px'}`,
                fontFamily: "Inter",
                letterSpacing: "-0.025em",
                color: `${
                  (Number(imageId) === 1 || Number(imageId) === 6) ? "rgb(123,64,8)" : "white"
                }`,
                marginTop: `${SocialMedia=="Whatsapp"? 30 : 15}`,
                padding: "0 120px",
                lineHeight: 1.2,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              margin: "auto",
            }}
          >
            <p
              style={{
                fontSize: `${SocialMedia=="Whatsapp"? 45 : 35}`,
                fontWeight: 200,
                letterSpacing: "-0.025em",
                marginTop: `${SocialMedia=="Whatsapp"? 30:15}`,
                color: `${
                  (Number(imageId) === 1 || Number(imageId) === 6) ? "rgb(123,64,8)" : "white" 
                }`,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </p>
          </div>

          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={category}
              alt="dd"
              style={{
                marginTop: `${SocialMedia=="Whatsapp"? "400px":"160px"}`,
                width: `${SocialMedia=="Whatsapp"? "600px":"450px"}`,
                height: `${SocialMedia=="Whatsapp"? "400px":"350px"}`,
              }}
            />

            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: `${SocialMedia=="Whatsapp"? "300px":"200px"}`,
                margin: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.1)",

                marginTop: `${SocialMedia=="Whatsapp"? "255px":"20px"}` ,
              }}
            >
              <img src={vendorlogo} alt="" width={"25%"} height={`${SocialMedia=="Whatsapp"? "80%":"100%"}`} style={{padding:'10px'}}/>

              <p
                style={{
                  fontSize: 30,
                  fontStyle: "normal",
                  letterSpacing: "-0.025em",
                  color: `${
                    (Number(imageId) === 1 || Number(imageId) === 6) ? "rgb(123,64,8)" : "white"
                  }`,
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                  fontWeight: 800,
                  width: "70%",
                }}
              >
                {special}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: width,
        height: height,
        fonts: [
          {
            name: "Inter",
            data: regularfont,
            style: "normal",
            weight: 400,
          },
          {
            name: "Inter",
            data: bolderfont,
            style: "normal",
            weight: 800,
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
