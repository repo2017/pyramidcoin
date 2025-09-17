function App() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      fontFamily: "Arial, sans-serif" 
    }}>
      {/* Logo */}
      <div style={{ 
        width: "100px", 
        height: "100px", 
        background: "linear-gradient(to top, #facc15, #f59e0b)", 
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", 
        marginBottom: "20px" 
      }} />

      {/* Title */}
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Pyramid
      </h1>

      {/* Slogan */}
      <h2 style={{ fontWeight: "normal", fontSize: "1.2rem", marginBottom: "20px", textAlign: "center" }}>
        Community-Driven Money Making
      </h2>

      {/* Description */}
      <p style={{ maxWidth: "400px", textAlign: "center", lineHeight: "1.5" }}>
        We flip the meaning of <b>Pyramid</b> upside down.  
        Instead of a scheme, it’s a community challenge:  
        let’s see how big the pyramid can grow when driven by people,  
        not by rules.  
      </p>
    </div>
  );
}

export default App;
