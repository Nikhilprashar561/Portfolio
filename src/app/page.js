import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-fit h-full shrink-0 border-r border-white/10">
          <Sidebar />
        </aside>

        {/* Right Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Navbar */}
          <header className="h-16 shrink-0">
            <Header />
          </header>

          {/* Main Content */}
          <main className="flex-1 mt-6 px-4 overflow-hidden">Main Content</main>

          {/* Footer */}
          <footer className="h-12 shrink-0">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

{/* <ChevronRight /> */}