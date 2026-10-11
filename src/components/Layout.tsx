import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RequestModal from './RequestModal';
import { PageWrapper, ScrollToTop } from './PageWrapper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PageWrapper>
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </PageWrapper>
      <RequestModal />
    </>
  );
}
