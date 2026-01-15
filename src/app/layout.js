import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
// import "favicon.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nikhil Prashar",
  description: "NIkhil Prashar Portfolio",
  icons: {
    icon: "/favicon.png", // or /icon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="root"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen w-screen flex overflow-hidden">
            <aside className="w-fit h-full shrink-0 border-r border-white/10">
              <Sidebar />
            </aside>

            <div className="flex flex-col flex-1 overflow-hidden">
              <header className="h-16 shrink-0">
                <Header />
              </header>

              <main className="flex-1 mt-6 px-4 overflow-hidden">
                <ScrollArea className="h-[98%] w-[100%] rounded-md border my-1">
                  {children}
                </ScrollArea>
              </main>

              <footer className="h-12 shrink-0">
                <Footer />
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
