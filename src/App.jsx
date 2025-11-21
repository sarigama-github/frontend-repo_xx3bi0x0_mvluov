import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Quality from './components/Quality'
import Packaging from './components/Packaging'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Top subtle announcement / brand strip */}
      <header className="relative z-20">
        <div className="w-full bg-[#7e0e14] text-[#f6e7cc] text-sm sm:text-base">
          <div className="container mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/alhosam-logo.svg" alt="الحسام" className="h-8 w-auto"/>
            </div>
            <nav className="hidden sm:flex items-center gap-6 opacity-90">
              <a href="#about" className="hover:text-white">من نحن</a>
              <a href="#products" className="hover:text-white">المنتجات</a>
              <a href="#contact" className="hover:text-white">تواصل</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Packaging />
        <Contact />
      </main>

      <footer className="bg-[#7e0e14] text-[#f6e7cc]">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} الحسام ALHOSAM — جميع الحقوق محفوظة</p>
          <div className="text-xs opacity-80">علامة تجارية سورية للمنتجات الزراعية</div>
        </div>
      </footer>
    </div>
  )
}

export default App
