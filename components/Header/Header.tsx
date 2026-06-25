import Image from "next/image";

const divImage = {
  width: 27,
  height: 27,
  backgroundColor: "#F9F9F71F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
};
const buttonStyle = {
  outline: "none",
  border: "none",
  lineHeight: "24px",
  width: 77,
  padding: "4px 16px",
  backgroundColor: "#DBDFD0",
  borderRadius: 34,
};

export default function Header() {
  return (
    <>
      <div className="all_app" style={{ width: "100%" }}>
        <header style={{ width: "100%" }}>
          <div
            className="black"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#474747",
              paddingLeft: 150,
              paddingRight: 150,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Image src="/phone.svg" alt="phone" width={18} height={18} />
                <p style={{ color: "#F9F9F7" }}>(414) 857 - 0107</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Image src="/mail.svg" alt="phone" width={18} height={18} />
                <p style={{ color: "#F9F9F7" }}>yummy@bistrobliss</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <div style={divImage}>
                <Image
                  src="/Twitter.svg"
                  alt="Twitter"
                  width={10.84}
                  height={8.76}
                />
              </div>
              <div style={divImage}>
                <Image
                  src="/facebook.svg"
                  alt="Twitter"
                  width={6.15}
                  height={11.81}
                />
              </div>
              <div style={divImage}>
                <Image
                  src="/inst.svg"
                  alt="Twitter"
                  width={13.15}
                  height={13.15}
                />
              </div>
              <div style={divImage}>
                <Image
                  src="/github.svg"
                  alt="Twitter"
                  width={12.58}
                  height={12.27}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 150,
              paddingRight: 150,
              backgroundColor: "#F9F9F7",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Image
                src="/japanese-food.svg"
                alt="logo"
                width={55}
                height={56}
              />
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: 42.67,
                  color: "#474747",
                }}
              >
                Bistro Bliss
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <button style={buttonStyle}>Home</button>
              <button style={buttonStyle}>About</button>
              <button style={buttonStyle}>Menu</button>
            </div>
            <button
              style={{
                border: "none",
                outline: "none",
                width: 147,
                height: 48,
                padding: "12px 24px",
                background: "none",
                borderStyle: "solid",
                borderWidth: 1.5,
                borderRadius: 118,
                borderColor: "#2C2F24",
                fontFamily: "sans-serif",
                fontWeight: 700,
                color: "#182226",
                fontStyle: "Bold",
              }}
            >
              Book A Table
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
