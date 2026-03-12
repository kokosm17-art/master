"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
    {
        category: "기획의 깊이",
        others: "단순 정보 나열형 텍스트 생성",
        ours: "400억 매출 DNA 기반 후킹 기획",
        isWin: true,
    },
    {
        category: "제작 방식",
        others: "일관된 톤의 기계적 생성",
        ours: "제품별 맞춤형 기획",
        isWin: true,
    },
    {
        category: "비용 효율",
        others: "수백만 원대의 높은 외주비",
        ours: "외주 대비 1/10 수준의 합리적 가격",
        isWin: true,
    },
    {
        category: "수정 범위",
        others: "수정 횟수 제한 및 추가 비용",
        ours: "만족하는 기획안이 나올 때까지 무제한",
        isWin: true,
    },
]

export function ComparisonSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16 px-4">
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Hero Section
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-[1.2] mb-6 text-balance">
                        {"설명만 하는 상세페이지는 이제 그만."}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                        {"좋은 제품인데 왜 안 팔릴까? 핵심은 나열이 아니라 "}
                        <span className="text-primary font-bold">{"‘후킹’"}</span>
                        {"입니다."}
                        <br />
                        {"매출을 만드는 상세페이지의 정석"}
                    </p>
                </div>

                <div className="relative mt-8 max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border bg-slate-950 shadow-2xl w-fit">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-10 py-10 bg-slate-950"></th>
                                    <th className="px-10 py-12 text-2xl md:text-3xl font-black text-black uppercase tracking-tight bg-white">타 AI 서비스 / 일반 외주</th>
                                    <th className="px-10 py-12 text-2xl md:text-3xl font-black text-white uppercase tracking-tight bg-primary whitespace-nowrap">상세페이지의 정석</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisonData.map((item, idx) => (
                                    <tr key={idx} className="group transition-colors">
                                        <td className="px-8 py-10 text-xl font-bold text-white/90 bg-slate-950">{item.category}</td>
                                        <td className="px-8 py-10 text-xl text-slate-900 bg-white/90">
                                            <div className="flex items-center gap-3">
                                                <X className="h-6 w-6 text-slate-400 shrink-0" />
                                                <span>{item.others}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-10 text-xl font-bold text-white bg-primary">
                                            <div className="flex items-center gap-3">
                                                <Check className="h-7 w-7 text-white shrink-0" />
                                                <span>{item.ours}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute top-0 right-0 -mr-32 -mt-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
