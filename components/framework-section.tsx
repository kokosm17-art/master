"use client"

import { Zap, Flame, Lightbulb, Users, ShieldCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const frameworkSteps = [
  {
    step: 1,
    title: "Hook",
    titleKo: "주목 끌기",
    description: "3초 안에 스크롤을 멈추게 하는 강력한 첫 문장. 고객의 핵심 Pain Point를 정확히 짚어냅니다.",
    icon: Zap,
  },
  {
    step: 2,
    title: "Agitate",
    titleKo: "문제 심화",
    description: "문제를 방치하면 어떤 결과가 생기는지 보여줍니다. 고객이 '이건 나 이야기'라고 느끼게 만듭니다.",
    icon: Flame,
  },
  {
    step: 3,
    title: "Solution",
    titleKo: "해결책 제시",
    description: "우리 제품이 어떻게 문제를 해결하는지 명확하게 설명합니다. 핵심 혜택 3가지로 압축합니다.",
    icon: Lightbulb,
  },
  {
    step: 4,
    title: "Social Proof",
    titleKo: "사회적 증거",
    description: "실제 사용자의 리뷰, 수치 데이터, 인증 마크로 신뢰를 구축합니다.",
    icon: Users,
  },
  {
    step: 5,
    title: "Trust & CTA",
    titleKo: "신뢰 & 행동 유도",
    description: "보증, 환불 정책, 한정 혜택을 통해 마지막 망설임을 제거하고 결제로 이어지게 합니다.",
    icon: ShieldCheck,
  },
]

export function FrameworkSection() {
  return (
    <section id="framework" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            {"PD's Secret Framework"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            {"1,000개 프로젝트에서 검증된"}
            <br />
            {"5단계 성공 공식"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            {"이 프레임워크 하나로 전환율이 평균 3.2배 상승했습니다"}
          </p>
        </div>

        {/* Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {frameworkSteps.map((item, index) => (
            <div key={item.step} className="relative group">
              <div
                className={cn(
                  "rounded-2xl border border-border bg-card p-6 shadow-sm h-full flex flex-col transition-all hover:shadow-md hover:border-primary/30",
                )}
              >
                {/* Step number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    {"STEP "}
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  {item.titleKo}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>

              {/* Arrow connector (visible on md+) */}
              {index < frameworkSteps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-4 w-4 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
