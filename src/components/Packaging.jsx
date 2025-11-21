import React from 'react'

const Packaging = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7e0e14]">التغليف والتعبئة</h2>
          <p className="mt-3 text-[#6b4f2d]">نقدم حلول تعبئة متنوعة تناسب الأسواق المحلية والعالمية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1604908177453-746295fe7d1b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607619056574-7b8d7fa3b0f7?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden border border-amber-200 shadow-[0_10px_35px_-20px_rgba(125,15,20,0.35)]">
              <img src={src} alt="packaging" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <img src="/alhosam-logo.png" alt="logo" className="absolute bottom-4 right-4 w-20 opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packaging
