import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-center">
          <Header />
        </header>

        {/* Main (Hero Section) */}
        <main className="flex-1 flex items-center justify-center">
          Main Content
        </main>

        {/* Footer */}
        <footer className="h-16 flex items-center justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
}