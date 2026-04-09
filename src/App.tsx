import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from '@/components/Layout';
import { Calendar } from 'lucide-react';
import { BOOKING_URL } from '@/constants';
import Home from '@/pages/Home';
import Therapy from '@/pages/Therapy';
import Podcast from '@/pages/Podcast';
import Resources from '@/pages/Resources';
import Blog, { BlogPost } from '@/pages/Blog';
import Conferences from '@/pages/Conferences';
import Shop from '@/pages/Shop';
import About from '@/pages/About';
import Booking from '@/pages/Booking';
import RelationshipTest from '@/pages/RelationshipTest';
import FemaleWellbeingTest from '@/pages/FemaleWellbeingTest';
import MaleWellbeingTest from '@/pages/MaleWellbeingTest';
import TestsLanding from '@/pages/TestsLanding';
import BioPage from '@/pages/BioPage';
import CoupleLanding from '@/pages/CoupleLanding';
import DecisionLanding from '@/pages/DecisionLanding';
import GriefLanding from '@/pages/GriefLanding';
import SexualWellbeingLanding from '@/pages/SexualWellbeingLanding';
import Consent from '@/pages/Consent';
import PremiumAgreement from '@/pages/PremiumAgreement';
import IntermediateAgreement from '@/pages/IntermediateAgreement';
import BasicAgreement from '@/pages/BasicAgreement';
import LoveLanguagesTest from '@/pages/LoveLanguagesTest';
import FAQ from '@/pages/FAQ';
import Legal from '@/pages/Legal';
import Contact from '@/pages/Contact';
import ThankYou from '@/pages/ThankYou';
import PaymentMethods from '@/pages/PaymentMethods';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Bio page without standard layout */}
            <Route path="/bio" element={<BioPage />} />
            <Route path="/link" element={<BioPage />} />
            <Route path="/enlace" element={<BioPage />} />
            <Route path="/pareja" element={<CoupleLanding />} />
            <Route path="/crisis" element={<CoupleLanding />} />
            <Route path="/crisis-pareja" element={<CoupleLanding />} />
            <Route path="/terapia-pareja" element={<CoupleLanding />} />
            <Route path="/decidir" element={<DecisionLanding />} />
            <Route path="/quiero-irme" element={<DecisionLanding />} />
            <Route path="/dudas" element={<DecisionLanding />} />
            <Route path="/duelo" element={<GriefLanding />} />
            <Route path="/separacion" element={<GriefLanding />} />
            <Route path="/ruptura" element={<GriefLanding />} />
            <Route path="/duelo-ruptura" element={<GriefLanding />} />
            <Route path="/bienestar-sexual" element={<SexualWellbeingLanding />} />
            <Route path="/sexualidad" element={<SexualWellbeingLanding />} />
            <Route path="/problemas-sexuales" element={<SexualWellbeingLanding />} />
            
            {/* Standard layout routes */}
            <Route path="*" element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<TestsLanding />} />
                    <Route path="/test/relacion" element={<RelationshipTest />} />
                    <Route path="/test/femenino" element={<FemaleWellbeingTest />} />
                    <Route path="/test/masculino" element={<MaleWellbeingTest />} />
                    <Route path="/terapia" element={<Therapy />} />
                    <Route path="/podcast" element={<Podcast />} />
                    <Route path="/recursos" element={<Resources />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/conferencias" element={<Conferences />} />
                    <Route path="/tienda" element={<Shop />} />
                    <Route path="/sobre-vanesa" element={<About />} />
                    <Route path="/agendar" element={<Booking />} />
                    <Route path="/consentimiento" element={<Consent />} />
                    <Route path="/acuerdo-plan-premium-pareja" element={<PremiumAgreement />} />
                    <Route path="/acuerdo-plan-intermedio-pareja" element={<IntermediateAgreement />} />
                    <Route path="/acuerdo-plan-basico-pareja" element={<BasicAgreement />} />
                    <Route path="/test-lenguajes-amor" element={<LoveLanguagesTest />} />
                    <Route path="/preguntas-frecuentes" element={<FAQ />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/gracias" element={<ThankYou />} />
                    <Route path="/formas-de-pago" element={<PaymentMethods />} />
                  </Routes>
                </main>
                <Footer />
                
                {/* Floating CTA for Mobile */}
                <div className="lg:hidden fixed bottom-6 left-6 z-40">
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-wine text-white p-4 rounded-full shadow-2xl animate-bounce"
                  >
                    <Calendar size={24} />
                    <span className="font-bold text-sm pr-2">Agendar</span>
                  </a>
                </div>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}
