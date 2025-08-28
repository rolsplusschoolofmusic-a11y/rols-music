export const metadata = {
  title: "ROL's School of Music",
  description: "Learn Music. Anytime. Anywhere."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", background: "#004080", color: "white" }}>
          <h1>ROL's School of Music</h1>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
        <footer style={{ padding: "20px", background: "#f0f0f0", marginTop: "40px" }}>
          © 2025 ROL’s School of Music
        </footer>
      </body>
    </html>
  );
}
