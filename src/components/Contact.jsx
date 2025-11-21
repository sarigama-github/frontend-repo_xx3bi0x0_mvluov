import React from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[#7e0e14]/5"></div>
      <div className="relative container mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-amber-300/60 bg-gradient-to-br from-[#fff8e8] to-[#f8efe0] shadow-[0_30px_60px_-20px_rgba(125,15,20,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7e0e14] mb-6">تواصل معنا</h2>
              <ul className="space-y-4 text-[#6b4f2d]">
                <li className="flex items-center gap-3"><MessageCircle className="text-amber-600"/><a href="https://wa.me/" className="hover:underline">واتساب</a></li>
                <li className="flex items-center gap-3"><Phone className="text-amber-600"/><span>هاتف: +963 000 000 000</span></li>
                <li className="flex items-center gap-3"><MapPin className="text-amber-600"/><span>الموقع: سوريا</span></li>
                <li className="flex items-center gap-3"><Mail className="text-amber-600"/><a href="mailto:info@alhosam.com" className="hover:underline">info@alhosam.com</a></li>
              </ul>
            </div>
            <div className="relative min-h-[260px] md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1595588643297-7f3ca2e79334?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzeXJpYSUyMGZpZWxkc3xlbnwwfDB8fHwxNzYzNzQ2NTcyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="syria fields" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#7e0e14]/20 mix-blend-multiply" />
              <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 30%, rgba(241,209,122,0.35), transparent 60%)'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
