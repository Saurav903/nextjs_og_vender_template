import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.
import { whatsappImage, categoryImage } from "@/app/utils/data";
export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.get("title");
    const hasDesc = searchParams.get("description");
    const hasSpecial = searchParams.get("special");
    const hasWidth = searchParams.get("width");
    const hasHeight = searchParams.get("height");
    const hasBackground = searchParams.get("background");
    const hasCategory = searchParams.get("category");
    let hasvendorLogo = searchParams.get("vendorlogo");

    const title = hasTitle
      ? searchParams.get("title")
      : " Navratri Vrat Special";

    const description = hasDesc
      ? searchParams.get("description")
      : "Sabudana Khichdi, Upwas thali & More";
    const special = hasSpecial
      ? searchParams.get("special")
      : "Order Navratri specials from our restaurants now!";
    const width = hasWidth ? searchParams.get("width") : 1080;
    const height = hasHeight ? searchParams.get("height") : 1920;

    // background image data
    let backgroundId = Number(hasBackground) || 1;
    let backgroundData = whatsappImage.filter((el) => el.id === backgroundId);
    const background =
      backgroundData.length > 0
        ? backgroundData[0].src
        : "https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg";

    // category image data

    let categoryId = Number(hasCategory);
    let categoryData = categoryImage.filter((el) => el.id === categoryId);
    const category =
      categoryData.length > 0
        ? categoryData[0].src
        : "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png";

    // vendor logo
    let vendorlogo = hasvendorLogo
      ? searchParams.get("vendorlogo")
      : "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png";

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
              width: "70%",
              margin: "auto",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "150px",
            }}
          >
            <p
              style={{
                fontSize: 80,

                // fontFamily: "Inter",
                letterSpacing: "-0.025em",
                color: `${
                  backgroundId === 1 || backgroundId === 6
                    ? "rgb(123,64,8)"
                    : "white"
                }`,
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1.2,
                whiteSpace: "pre-wrap",
                minHeight: "200px",
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
                fontSize: 45,
                fontWeight: 200,
                letterSpacing: "-0.025em",
                marginTop: 30,
                color: `${
                  backgroundId === 1 || backgroundId === 6
                    ? "rgb(123,64,8)"
                    : "white"
                }`,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                minHeight: "150px",
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
                marginTop: "300px",
                height: "500px",
              }}
            />

            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "320px",
                margin: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.1)",

                marginTop: "200px",
              }}
            >
              <img
                src={vendorlogo}
                alt=""
                width={"25%"}
                height="80%"
                style={{ padding: "10px" }}
              />

              <p
                style={{
                  fontSize: 30,
                  fontStyle: "normal",
                  letterSpacing: "-0.025em",
                  color: `${
                    backgroundId === 1 || backgroundId === 6
                      ? "rgb(123,64,8)"
                      : "white"
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
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}