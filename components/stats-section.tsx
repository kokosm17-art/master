"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.round(eased * target)
            setValue(start)
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            {"숫자가 증명하는 성과"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            {"7년간 쌓아온 실적, 데이터로 확인하세요"}
          </p>
        </div>

        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm">
            <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              <AnimatedNumber target={400} suffix="억" />
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">{"누적 매출 (KRW)"}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm">
            <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              <AnimatedNumber target={1000} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">{"프로젝트"}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm">
            <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              <AnimatedNumber target={15} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">{"멀티 카테고리"}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm">
            <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              <AnimatedNumber target={7} suffix="년" />
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">{"업계 경력"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
