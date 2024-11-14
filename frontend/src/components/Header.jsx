"use client";
import paparaLogo from "/papara.dfce43bb.svg";
import * as React from "react";
import { Menu, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-44">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary">
                <img src={paparaLogo} alt="Papara Logo" className="h-9" />
              </a>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a
                href="https://www.papara.com/fees-and-limits"
                className="text-lg text-zinc-500 font-normal hover:text-primary"
              >
                Ücretler & Limitler
              </a>
              <a
                href="https://www.papara.com/security"
                className="text-lg text-zinc-500 font-normal hover:text-primary"
              >
                Güvenlik
              </a>
              
              <div className="flex items-center px-8">
                <a
                  href="https://www.papara.com/personal/auth"
                  className="text-lg first-line:font-normal hover:text-primary flex items-center"
                >
                  Giriş Yap
                  <LogIn className="ml-2" />
                </a>
              </div>
            </nav>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="lg"
                onClick={toggleMobileMenu}
                aria-label="Menüyü aç/kapat"
                className="p-2 text-primary hover:bg-primary-foreground"
              >
                <Menu className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="sm:px-3 h-full bg-white z-50 text-xl">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-balg text-zinc-500 font-normal hover:text-primary hover:bg-accent"
              >
                Ana Sayfa
              </a>
              <a
                href="https://www.shopier.com/ShowProductNew/products.php?id=30725531"
                className="w-full flex items-center justify-between block px-3 py-2 rounded-md text-balg text-white bg-black font-normal hover:text-primary hover:bg-accent"
              >
                Hemen Satın Al
                <LogIn className="ml-2" />
              </a>
            </div>
          </div>
        )}
        <nav className="hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-44">
          <div className="flex space-x-4 py-2">
            <a href="https://www.papara.com/money-transfer" className="text-lg text-zinc-500 font-normal hover:text-primary">
             Para Transferi
            </a>
            <a href="https://www.papara.com/payments" className="text-lg text-zinc-500 font-normal hover:text-primary">
              Ödeme İşlemleri
            </a>
            <a href="https://www.papara.com/card" className="text-lg text-zinc-500 font-normal hover:text-primary">
              Papara Card
            </a>
            <a href="https://www.papara.com/precious-metals" className="text-lg text-zinc-500 font-normal hover:text-primary">
              Kıymetli Madenler
            </a>
            <a href="https://www.papara.com/savings" className="text-lg text-zinc-500 font-normal hover:text-primary">
              Birikim
            </a>
            <a href="https://www.papara.com/edu-card" className="text-lg text-zinc-500 font-normal hover:text-primary">
              Papara Edu
            </a>
            <a href="https://www.papara.com/receive-payment" className="text-lg text-zinc-500 font-normal hover:text-primary">
             Ödeme Al
            </a>
            <a href="https://www.papara.com/chat" className="text-lg text-zinc-500 font-normal hover:text-primary">
             Sohbet
            </a>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
};

export default Header;
