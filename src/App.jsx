function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #1a1a1a, #333333)",
        color: "#facc15",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <img
        src="/600x600.avif"
        alt="Pyramid Logo"
        style={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />

      {/* Title */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Pyramid
      </h1>

      {/* Slogan */}
      <h2
        style={{
          fontWeight: "300",
          fontSize: "1.4rem",
          marginBottom: "20px",
        }}
      >
        Community-Driven Money Making
      </h2>

      {/* Description */}
      <p style={{ maxWidth: "500px", lineHeight: "1.6", fontSize: "1.1rem" }}>
        We flip the meaning of <b>Pyramid</b> upside down.  
        Instead of a scheme, it’s a community challenge:  
        let’s see how big the pyramid can grow when driven by people,  
        not by rules.  
      </p>
    </div>
  );
}

export default App;
