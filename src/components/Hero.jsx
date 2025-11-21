import React, { useMemo } from 'react'

const Hero = () => {
  // Allow drop-in Spline scene via environment variable without adding dependencies
  const splineUrl = import.meta.env.VITE_SPLINE_SCENE_URL || ''
  const hasSpline = useMemo(() => typeof splineUrl === 'string' && splineUrl.trim().length > 0, [splineUrl])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Deep red base */}
      <div className="absolute inset-0 bg-[#7e0e14]" />

      {/* Optional Spline layer (desktop only by default for performance) */}
      {hasSpline && (
        <div className="absolute inset-0 hidden md:block" aria-hidden>
          <iframe
            title="Spline scene"
            src={splineUrl}
            className="h-full w-full"
            style={{
              border: 'none',
              filter: 'saturate(0.9) brightness(0.85)',
              transform: 'scale(1.02)',
            }}
          />
          {/* subtle overlay to preserve brand tone over Spline */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(126,14,20,0.40),rgba(126,14,20,0.65))]" />
        </div>
      )}

      {/* Golden glow and grain texture overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_70%_-10%,rgba(241,209,122,0.25),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27 opacity=%270.2%27/%3E%3C/svg%3E')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex min-h-[92vh] flex-col items-center justify-center text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/alhosam-logo.svg"
            alt="الحسام ALHOSAM"
            className="w-44 sm:w-52 h-auto mx-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight">
          الحسام للمنتجات الزراعية
        </h1>
        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-[#f6e7cc]">
          نقدّم لكم أجود أنواع الحبوب والبقوليات من قلب الأرض السورية
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm sm:text-base font-semibold text-[#7e0e14] transition-all duration-300"
            style={{
              background:
                'linear-gradient(135deg, #f1d17a 0%, #d4af37 40%, #b88900 100%)',
              boxShadow:
                '0 8px 24px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            استكشف المنتجات
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#f1d17a]/70 px-7 py-3 text-sm sm:text-base font-semibold text-white/90 hover:bg-white/10 transition-colors"
          >
            تواصل معنا
          </a>
        </div>

        {/* Decorative wheat silhouette */}
        <div className="pointer-events-none absolute -bottom-20 sm:-bottom-24 md:-bottom-28 left-1/2 -translate-x-1/2 opacity-20">
          <svg
            width="820"
            height="220"
            viewBox="0 0 820 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              d="M5 210C100 130 200 170 300 120C400 70 520 60 640 110C740 150 800 120 815 105"
              stroke="#f6e7cc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Hint for Spline availability (invisible, for accessibility only) */}
        <span className="sr-only">{hasSpline ? 'Animated background enabled' : 'Static background'}</span>
      </div>
    </section>
  )
}

export default Hero
