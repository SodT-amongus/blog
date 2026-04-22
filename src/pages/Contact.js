import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <div id="root">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header></Header>
        <div style={{ display: "flex", flexDirection: "columnn", gap: "30px" }}>
          <div
            style={{
              width: 624,
              margin: "0 auto",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <h1 style={{ color: "black", fontSize: 36, fontWeight: 600 }}>
              Contact Us
            </h1>
            <p style={{ color: "#696a75", fontSize: 16, fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 40,
              }}
            >
              <div
                style={{
                  border: "1px solid #e8e8ea",
                  borderRadius: 12,
                  gap: 10,
                  padding: 16,
                  width: 260,
                }}
              >
                <h2>Address</h2>
                <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
              <div
                style={{
                  border: "1px solid #e8e8ea",
                  borderRadius: 12,
                  gap: 10,
                  padding: 16,
                  width: 260,
                }}
              >
                <h2>Contact</h2>
                <p>
                  313-332-8662
                  <br />
                  info@gmail.com
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f6f6f7",
                borderRadius: 10,
                gap: 20,
                padding: 40,
                width: 526,
                display: "flex",
                flexDirection: "column",
                border: "medium",
              }}
            >
              <h2 style={{ margin: 0 }}>Leave a message</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  placeholder="Your name"
                  style={{
                    width: 230,
                    padding: 10,
                    fontSize: 13,
                    borderRadius: 10,
                    border: "1px solid gray",
                  }}
                ></input>
                <input
                  placeholder="Your email"
                  style={{
                    width: 230,
                    padding: 10,
                    fontSize: 13,
                    border: "1px solid gray",
                    borderRadius: 13,
                  }}
                ></input>
              </div>
              <input
                placeholder="Subject"
                style={{
                  padding: 8,
                  border: "1px solid gray",
                  borderRadius: 10,
                }}
              ></input>
              <textarea
                placeholder="Write a message"
                rows={6}
                style={{ borderRadius: 10, padding: 16 }}
              ></textarea>
              <button
                style={{
                  height: 36,
                  width: 140,
                  color: "white",
                  backgroundColor: "rgb(75, 107, 251)",
                  border: "medium",
                  borderRadius: 8,
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
