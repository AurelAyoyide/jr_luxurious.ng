import React, { useState, useEffect } from 'react';
import { VaultIntro } from './components/VaultIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionGrid } from './components/CollectionGrid';
import { FeaturedSection } from './components/FeaturedSection';
import { AuthenticationTimeline } from './components/AuthenticationTimeline';
import { InvestmentChart } from './components/InvestmentChart';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { SellerDashboard } from './components/SellerDashboard';
import { LoginModal } from './components/LoginModal';
import { OrderSummary } from './components/OrderSummary';
import { Watch, CartItem } from './types';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState<'client' | 'seller' | 'summary'>('client');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Scroll to top when a product is selected
  useEffect(() => {
    if (selectedWatch) {
      window.scrollTo(0, 0);
    }
  }, [selectedWatch]);

  const handleWatchSelect = (watch: Watch) => {
    setSelectedWatch(watch);
  };

  const handleBackToHome = () => {
    setSelectedWatch(null);
    window.scrollTo(0, 0);
  };

  const addToCart = (watch: Watch) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === watch.id);
      if (existing) {
        return prev.map(item =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...watch, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleOpenSeller = () => {
    if (isAuthenticated) {
      setView('seller');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginModalOpen(false);
    setView('seller');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('client');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('summary');
    window.scrollTo(0, 0);
  };

  const handleFinalizeOrder = () => {
    setCartItems([]);
    setView('client');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!introComplete && (
        <VaultIntro onComplete={() => setIntroComplete(true)} />
      )}

      {introComplete && (
        <div className="min-h-screen bg-luxury-black text-white selection:bg-luxury-gold selection:text-black">
          {view === 'client' ? (
            <>
              <Navbar
                onLogoClick={handleBackToHome}
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onOpenCart={() => setIsCartOpen(true)}
                onOpenSeller={handleOpenSeller}
              />

              <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
              />

              <AnimatePresence mode="wait">
                {!selectedWatch ? (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Hero />
                    <FeaturedSection />
                    <CollectionGrid
                      onWatchClick={handleWatchSelect}
                      onAddToCart={addToCart}
                    />
                    <AuthenticationTimeline />
                    <InvestmentChart />
                    <ContactSection />
                  </motion.div>
                ) : (
                  <motion.div
                    key="product"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <ProductDetail
                      watch={selectedWatch}
                      onClose={handleBackToHome}
                      onWatchClick={handleWatchSelect}
                      onAddToCart={addToCart}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <Footer onOpenSeller={handleOpenSeller} />
            </>
          ) : view === 'seller' ? (
            <SellerDashboard
              onBackToStore={() => setView('client')}
              onLogout={handleLogout}
            />
          ) : (
            <OrderSummary
              items={cartItems}
              onBack={() => setView('client')}
              onFinalize={handleFinalizeOrder}
            />
          )}

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
            onLogin={handleLoginSuccess}
          />
        </div>
      )}
    </>
  );
}

export default App;
