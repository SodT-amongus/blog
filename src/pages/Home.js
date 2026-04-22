import { useUserContext } from "../context/UserContext";
import { Button } from "../components/Button";
import { signOutFunction } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  const { currentUser } = useUserContext();

  return (
    <div>
      <Header></Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          padding: "0 40px",
          minWidth: 800,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            margin: "50px 0",
          }}
        >
          <div style={{ position: "relative", cursor: "pointer" }}>
            <div
              style={{
                width: 1200,
                height: 600,
                borderRadius: 12,
                backgroundImage:
                  "url(https://res.cloudinary.com/db4h6fyq3/image/upload/v1734971148/leap/brqpnc7xhso0yf8htrlm.png)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "white",
                position: "absolute",
                padding: 40,
                borderRadius: 12,
                left: 25,
                bottom: 25,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                height: 170,
                width: 520,
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: "rgb(75, 107, 251)",
                    borderRadius: 6,
                    padding: "4px 10px",
                    color: "white",
                  }}
                >
                  Technology
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <h2
                  style={{
                    fontSize: 36,
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h2>
              </div>
              December 23, 2024
            </div>
          </div>
          <div>
            <button></button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            margin: "50px 0",
            padding: "0 280px",
          }}
        >
          <h2 style={{ margin: 0 }}>Trending</h2>
          <div style={{ display: "flex", gap: 20 }}>
            <div>
              <div style={{ position: "relative", cursor: "pointer" }}>
                <div
                  style={{
                    position: "relative",
                    width: 280,
                    height: 320,
                    borderRadius: 12,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    filter: "brightness(60%)",
                    backgroundImage:
                      "url(https://res.cloudinary.com/db4h6fyq3/image/upload/v1734971148/leap/brqpnc7xhso0yf8htrlm.png)",
                  }}
                ></div>
                <div
                  style={{
                    color: "white",
                    position: "absolute",
                    left: 25,
                    top: 200,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    width: 230,
                  }}
                >
                  <div>
                    <span
                      style={{
                        backgroundColor: "rgb(75, 107, 251)",
                        borderRadius: 6,
                        padding: "4px 10px",
                      }}
                    >
                      Technology
                    </span>
                  </div>
                  <div style={{ height: 70, overflow: "hidden" }}>
                    <h2
                      style={{
                        fontSize: 18,
                        overflow: "hidden",
                        display: "-webkit-box",
                        MozBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
