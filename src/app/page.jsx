import Header from './components/Header';
import Hero from './components/Hero';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <EmailForm />
      </main>
      <Footer />
      <ImageSlider />
    </div>
  );
}
