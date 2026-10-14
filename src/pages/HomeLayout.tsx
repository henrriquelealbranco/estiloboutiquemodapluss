import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppFloating from '../components/WhatsAppFloating';

export const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA]">
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default HomeLayout;
