import React from 'react'
import { ShieldCheck, PackageCheck, Globe2, Award } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'جودة ممتازة' },
  { icon: PackageCheck, title: 'تعبئة حديثة ومعايير عالمية' },
  { icon: Award, title: 'خبرة طويلة في السوق' },
  { icon: Globe2, title: 'تصدير إلى عدة دول' },
]

const Quality = () => {
  return (
    <section className="py-20 bg-[#faf7f0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7e0e14]">لماذا الحسام؟</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white border border-amber-200 p-6 text-center shadow-[0_10px_35px_-20px_rgba(125,15,20,0.35)]">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full flex items-center justify-center"
                   style={{ background: 'linear-gradient(135deg, #f1d17a, #d4af37)' }}>
                <f.icon className="text-[#7e0e14]" />
              </div>
              <h3 className="font-semibold text-[#7e0e14]">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quality
