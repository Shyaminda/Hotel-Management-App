import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <Footer />
    </div>
  )
}

export default layout;