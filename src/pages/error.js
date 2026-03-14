export const Error = () => {
  const errorButton = () => {};

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        minHeight: "100vh",
        width: "100%",
        gap: "50px",
      }}
    >
      <h1 style={{ fontSize: 80 }}>404</h1>
      <div
        style={{
          borderLeft: "2px dotted lightgrey",
          height: 200,
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Page Not Found</h2>
        <p>
          We're sorry. This page is unkown or does not exist the page you are
          looking for
        </p>
        <button
          style={{
            backgroundColor: "#4b6bfb",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
            height: "36px",
            padding: "10px 16px",
            width: "30%",
          }}
          onClick={errorButton}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};
