import React from 'react'

const products = [
  { name: 'العدس الأحمر', img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop' },
  { name: 'الحمص', img: 'https://images.unsplash.com/photo-1604335399104-86e8b3f6baa1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'الفاصولياء', img: 'https://images.unsplash.com/photo-1603048490118-c65b23930662?q=80&w=1200&auto=format&fit=crop' },
  { name: 'البرغل', img: 'https://images.unsplash.com/photo-1600627225432-82de83df0d8b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'الأرز', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'الفريكة', img: 'https://images.unsplash.com/photo-1459278558918-f94278c0f815?q=80&w=1200&auto=format&fit=crop' },
  { name: 'العدس الأخضر', img: 'https://images.unsplash.com/photo-1586201375771-cdb99f2f7fdb?q=80&w=1200&auto=format&fit=crop' },
  { name: 'الفول', img: 'https://images.unsplash.com/photo-1546549039-49c62fb72ec6?q=80&w=1200&auto=format&fit=crop' },
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7e0e14]">منتجاتنا</h2>
          <p className="mt-3 text-[#6b4f2d]">مجموعة مختارة بعناية من أجود الحبوب والبقوليات</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-amber-300/60 shadow-[0_10px_35px_-15px_rgba(125,15,20,0.25)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#7e0e14]">{p.name}</h3>
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 shadow-[0_0_0_2px_#fef3c7]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
