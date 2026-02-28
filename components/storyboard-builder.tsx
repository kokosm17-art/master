"use client"

import { useState } from "react"
import {
  Lightbulb,
  Target,
  ShieldCheck,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormData {
  brandName: string
  mainProblem: string
  solution: string
  targetAudience: string
  benefit1: string
  benefit2: string
  benefit3: string
  certifications: string
  reviews: string
  socialProof: string
}

const defaultForm: FormData = {
  brandName: "",
  mainProblem: "",
  solution: "",
  targetAudience: "",
  benefit1: "",
  benefit2: "",
  benefit3: "",
  certifications: "",
  reviews: "",
  socialProof: "",
}

const steps = [
  {
    id: 0,
    title: "제품 본질",
    subtitle: "Product Essence",
    icon: Lightbulb,
    description: "브랜드와 핵심 가치를 정의하세요",
  },
  {
    id: 1,
    title: "후킹 포인트",
    subtitle: "Hooking",
    icon: Target,
    description: "타겟과 핵심 혜택을 설정하세요",
  },
  {
    id: 2,
    title: "신뢰 구축",
    subtitle: "Proof",
    icon: ShieldCheck,
    description: "인증과 사회적 증거를 추가하세요",
  },
]

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((step, i) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-full text-sm font-semibold transition-all",
              i < currentStep
                ? "bg-primary text-primary-foreground"
                : i === currentStep
                ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                : "bg-muted text-muted-foreground"
            )}
          >
            {i < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              <span>{i + 1}</span>
            )}
          </div>
          <span
            className={cn(
              "text-sm font-medium hidden sm:inline",
              i === currentStep ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {step.title}
          </span>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "h-px w-6 md:w-10",
                i < currentStep ? "bg-primary" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function StoryboardPreview({ data }: { data: FormData }) {
  const hasAnyData = Object.values(data).some((v) => v.trim() !== "")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">
          {"콘티 미리보기"}
        </h3>
      </div>

      {!hasAnyData ? (
        <div className="flex-1 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-8">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            {"왼쪽 폼에 정보를 입력하면"}
            <br />
            {"실시간으로 콘티가 생성됩니다"}
          </p>
        </div>
      ) : (
        <div className="flex-1 space-y-4 overflow-y-auto">
          {/* Hook Section */}
          {(data.brandName || data.mainProblem) && (
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">H</span>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Hook</span>
              </div>
              {data.brandName && (
                <h4 className="text-base font-bold text-foreground mb-1">{data.brandName}</h4>
              )}
              {data.mainProblem && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'"'}
                  {data.mainProblem}
                  {'" — 이 문제, 공감되시나요?'}
                </p>
              )}
            </div>
          )}

          {/* Solution Section */}
          {data.solution && (
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">S</span>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Solution</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{data.solution}</p>
            </div>
          )}

          {/* Benefits Section */}
          {(data.benefit1 || data.benefit2 || data.benefit3) && (
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">B</span>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Benefits</span>
              </div>
              {data.targetAudience && (
                <p className="text-xs text-muted-foreground mb-3">
                  {"타겟: "}{data.targetAudience}
                </p>
              )}
              <div className="space-y-2">
                {[data.benefit1, data.benefit2, data.benefit3]
                  .filter(Boolean)
                  .map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{b}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Proof Section */}
          {(data.certifications || data.reviews || data.socialProof) && (
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">P</span>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Social Proof</span>
              </div>
              <div className="space-y-3">
                {data.certifications && (
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground">{"인증/수상"}</span>
                    <p className="text-sm text-foreground mt-0.5">{data.certifications}</p>
                  </div>
                )}
                {data.reviews && (
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground">{"리뷰"}</span>
                    <p className="text-sm text-foreground mt-0.5 italic">
                      {'"'}{data.reviews}{'"'}
                    </p>
                  </div>
                )}
                {data.socialProof && (
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground">{"사회적 증거"}</span>
                    <p className="text-sm text-foreground mt-0.5">{data.socialProof}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function StoryboardBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(defaultForm)

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canGoNext = () => {
    if (currentStep === 0)
      return formData.brandName.trim() !== "" || formData.mainProblem.trim() !== ""
    if (currentStep === 1) return formData.benefit1.trim() !== ""
    return true
  }

  return (
    <section id="builder" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Interactive Storyboard Builder
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            {"팔리는 상세페이지 콘티,"}
            <br />
            {"지금 바로 만들어보세요"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            {"3단계 입력만으로 전문가 수준의 콘티가 자동 생성됩니다"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <StepIndicator currentStep={currentStep} />

            {/* Step Content */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                {(() => {
                  const StepIcon = steps[currentStep].icon
                  return <StepIcon className="h-5 w-5 text-primary" />
                })()}
                <h3 className="text-xl font-bold text-foreground">
                  {steps[currentStep].title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                {steps[currentStep].description}
              </p>
            </div>

            {/* Step 1: Product Essence */}
            {currentStep === 0 && (
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"브랜드/제품명"}
                  </label>
                  <Input
                    placeholder="예: 에어클린 프로"
                    value={formData.brandName}
                    onChange={(e) => update("brandName", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"고객의 핵심 문제"}
                  </label>
                  <Textarea
                    placeholder="예: 미세먼지로 인한 실내 공기질 저하로 가족 건강이 걱정됩니다"
                    value={formData.mainProblem}
                    onChange={(e) => update("mainProblem", e.target.value)}
                    rows={3}
                    className="bg-background resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"우리의 솔루션"}
                  </label>
                  <Textarea
                    placeholder="예: NASA 기술 기반 3단계 필터링으로 99.9% 미세먼지 제거"
                    value={formData.solution}
                    onChange={(e) => update("solution", e.target.value)}
                    rows={3}
                    className="bg-background resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Hooking */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"타겟 고객"}
                  </label>
                  <Input
                    placeholder="예: 영유아 자녀를 둔 30~40대 부모"
                    value={formData.targetAudience}
                    onChange={(e) => update("targetAudience", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"핵심 혜택 1"}
                  </label>
                  <Input
                    placeholder="예: 소음 없는 수면 모드로 아이 숙면 보장"
                    value={formData.benefit1}
                    onChange={(e) => update("benefit1", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"핵심 혜택 2"}
                  </label>
                  <Input
                    placeholder="예: 월 전기료 1,000원 미만의 초절전 설계"
                    value={formData.benefit2}
                    onChange={(e) => update("benefit2", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"핵심 혜택 3"}
                  </label>
                  <Input
                    placeholder="예: 필터 교체 없이 1년 사용 가능"
                    value={formData.benefit3}
                    onChange={(e) => update("benefit3", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Proof */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"인증/수상 내역"}
                  </label>
                  <Input
                    placeholder="예: KC 인증, CES 2025 혁신상 수상"
                    value={formData.certifications}
                    onChange={(e) => update("certifications", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"대표 리뷰"}
                  </label>
                  <Textarea
                    placeholder='예: "아이 비염이 좋아졌어요. 이제 창문 안 열어도 됩니다." — 서울 김OO님'
                    value={formData.reviews}
                    onChange={(e) => update("reviews", e.target.value)}
                    rows={3}
                    className="bg-background resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    {"사회적 증거"}
                  </label>
                  <Input
                    placeholder="예: 와디즈 공기청정기 카테고리 1위, 10,000명+ 서포터"
                    value={formData.socialProof}
                    onChange={(e) => update("socialProof", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                disabled={currentStep === 0}
                className="cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                {"이전"}
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button
                  onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
                  disabled={!canGoNext()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                >
                  {"다음"}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                  onClick={() => {
                    // scroll to CTA
                    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  {"콘티 완성하기"}
                </Button>
              )}
            </div>
          </div>

          {/* Preview Column */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <StoryboardPreview data={formData} />
          </div>
        </div>
      </div>
    </section>
  )
}
