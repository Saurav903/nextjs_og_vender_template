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
      : " Diwali Delights";

    const description = hasDesc
      ? searchParams.get("description")
      : "Kaju Barfi,Moong Dal Halwa and a lot more";
    const special = hasSpecial
      ? searchParams.get("special")
      : "Order Diwali specials food from our restaurants now!";
    const width = hasWidth ? searchParams.get("width") : 1080;
    const height = hasHeight ? searchParams.get("height") : 1920;

    // background image data
    let backgroundId = Number(hasBackground) || 17;
    let backgroundData = whatsappImage.filter((el) => el.id === backgroundId);
    const background =
      backgroundData.length > 0
        ? backgroundData[0].src
        : "https://neon.ipsator.com/c/image/upload/v1698930095/irctc/post/bg/instagram-story/post-instagram-story-bg-5.jpg";

    // category image data

    let categoryId = Number(hasCategory);
    let categoryData = categoryImage.filter((el) => el.id === categoryId);
    const category =
      categoryData.length > 0
        ? categoryData[0].src
        : "https://neon.ipsator.com/c/image/upload/v1698930176/irctc/post/elements/food/post-food-8.png";

    // vendor logo
    let vendorlogo = hasvendorLogo
      ? searchParams.get("vendorlogo")
      : "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png";

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
              marginTop: "110px",
            }}
          >
            <p
              style={{
                width: "100%",
                fontSize: `${title.length < 15 ? 100 : 80}`,
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
              // textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={category}
              alt="dd"
              style={{
                marginTop: "350px",
                height: "500px",
              }}
            />

            <div
              style={{
                display: "flex",
                // textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                minHeight: "370px",
                margin: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.3)",

                marginTop: "150px",
              }}
            >
              <img
                src={vendorlogo}
                alt=""
                width={"30%"}
                height="100%"
                style={{ padding: "15px" }}
              />

              <p
                style={{
                  width: "70%",
                  fontSize: "40px",
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
