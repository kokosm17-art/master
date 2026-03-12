"use client"

import { ArrowDown, TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Users, value: "1,000+", label: "프로젝트 디렉팅" },
  { icon: TrendingUp, value: "400억+", label: "누적 매출 (KRW)" },
  { icon: Award, value: "98%", label: "성공률" },
]

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">


          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight text-balance">
            {"누적 "}
            <span className="text-primary">{"400억"}</span>
            {" 매출의 법칙,"}
            <br />
            {"당신의 상세페이지에"}
            <br className="hidden md:block" />
            {" 이식하세요."}
          </h1>

          {/* Subheadline */}
          <div className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            <p>
              {"1,000개 프로젝트를 성공시킨 와디즈 PD 출신"}
              <br />
              {"독보적인 ‘성공 DNA’를 이 도구에 모두 담았습니다."}
            </p>
          </div>

          {/* Badge (Moved) */}
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 mt-10">
            <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm md:text-base font-bold text-foreground">
              {"클릭 한 번으로 ‘팔리는 콘티’를 만들어보세요."}
            </span>
          </div>

          {/* Definition Note (Moved) */}
          <p className="mt-4 text-[11px] text-muted-foreground/60">
            {"* 콘티란? 상세페이지의 뼈대가 되는 기획안입니다"}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold cursor-pointer"
              asChild
            >
              <a href="#builder">{"지금 콘티 만들기"}</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-semibold border-border text-foreground hover:bg-secondary cursor-pointer"
              asChild
            >
              <a href="#framework">{"성공 프레임워크 보기"}</a>
            </Button>
          </div>


        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-black text-foreground tracking-tight">{"1,000+"}</span>
            <span className="text-sm text-muted-foreground font-medium">{"프로젝트 디렉팅"}</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-black text-foreground tracking-tight">{"400억+"}</span>
            <span className="text-sm text-muted-foreground font-medium">{"누적 매출 (KRW)"}</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-black text-foreground tracking-tight">{"성과 1위"}</span>
            <span className="text-sm text-muted-foreground font-medium">{"3년 연속 기록"}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#builder"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to storyboard builder"
          >
            <span className="text-xs font-medium">{"콘티 빌더 체험하기"}</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
