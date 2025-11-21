import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[#faf7f0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7e0e14]">من نحن؟</h2>
          <p className="mt-4 text-[#7a5f38] max-w-3xl mx-auto leading-relaxed">
            نحن شركة الحسام المتخصصة في إنتاج وتعبئة وتصدير أفضل المحاصيل الزراعية السورية. نلتزم بالجودة العالية والمعايير الاحترافية لنقدم منتجات طبيعية، صحية، وموثوقة.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop', // fields
            'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop', // grains closeup
            'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop', // silos
            'https://images.unsplash.com/photo-1607619056574-7b8d7fa3b0f7?q=80&w=1200&auto=format&fit=crop', // packaging/warehouse
            'https://images.unsplash.com/photo-1607328874071-45a9cd567a18?q=80&w=1200&auto=format&fit=crop', // lentils beans
            'https://images.unsplash.com/photo-1604908554020-034c5cb13612?q=80&w=1200&auto=format&fit=crop', // sacks top view
            'https://images.unsplash.com/photo-1604335399104-86e8b3f6baa1?q=80&w=1200&auto=format&fit=crop', // spices
            'https://images.unsplash.com/photo-1556912993-2ec92a46b055?q=80&w=1200&auto=format&fit=crop', // quality control
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl bg-white shadow-sm border border-amber-200">
              <img src={src} alt="Alhosam collage" className="w-full h-32 sm:h-40 md:h-44 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
