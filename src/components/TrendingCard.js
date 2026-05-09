import { useNavigate } from "react-router-dom";

export const TrendingCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          margin: "50px 0",
          paddingRight: 35,
        }}
      >
        <h2 style={{ margin: 0 }}></h2>
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
                  backgroundImage: `url(${
                    blog.imageURL || "https://picsum.photos/seed/picsum/536/354"
                  })`,
                }}
              >
                {/* {blog.title} */}
              </div>
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
                    {blog.tag}
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
                    {blog.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
