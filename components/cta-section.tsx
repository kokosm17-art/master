import { ArrowRight, ShieldCheck, Clock, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const guarantees = [
  {
    icon: ShieldCheck,
    text: "전문가 검수 포함",
  },
  {
    icon: Clock,
    text: "24시간 내 콘티 완성",
  },
  {
    icon: Headphones,
    text: "1:1 컨설팅 지원",
  },
]

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-14 text-center">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight text-balance leading-snug">
            {"전문가의 검수를 거친"}
            <br />
            {"완벽한 콘티로 펀딩을 시작하세요"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            {"지금 시작하면 첫 콘티 제작비 30% 할인 혜택을 드립니다"}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold cursor-pointer"
            >
              {"콘티 제작 시작하기"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-semibold border-border text-foreground hover:bg-secondary cursor-pointer"
            >
              {"무료 상담 예약"}
            </Button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2">
                <g.icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
