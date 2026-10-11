import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnquiryProvider } from '@/contexts/EnquiryContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Crops from '@/pages/Crops';
import CropDetail from '@/pages/CropDetail';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <EnquiryProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/crops/:slug" element={<CropDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </EnquiryProvider>
  );
}
