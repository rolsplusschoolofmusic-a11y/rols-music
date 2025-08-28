export const metadata = {
  title: "ROL's School of Music",
  description: "Learn Music. Anytime. Anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
