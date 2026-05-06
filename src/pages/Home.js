import { useUserContext } from "../context/UserContext";
import { Button } from "../components/Button";
import { signOutFunction } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { useBlogContext } from "../context/BlogContext";
import ArrowBackIosNewIcon from "@mui/material";
import ArrowForwardIosIcon from "@mui/material";
import { SlideCard } from "../components/SlideCard";
import { TrendingCard } from "../components/TrendingCard";
import { TrendingSection } from "../components/TrendingSection";
import { AllBlogPosts } from "../components/AllBlogPosts";

export const Home = () => {
  const { currentUser } = useUserContext();
  const { blogs } = useBlogContext();

  const [slideCount, setSlideCount] = useState(0);

  return (
    <div>
      <Header />
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
            <SlideCard />
          </div>
        </div>
        <TrendingSection />
        <AllBlogPosts />
      </div>
      <Footer></Footer>
    </div>
  );
};
