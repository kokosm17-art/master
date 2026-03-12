"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="px-5 py-2 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <span className="text-base font-bold text-primary-foreground tracking-tight whitespace-nowrap">
              상세페이지의 정석
              <span className="text-[10px] ml-1 align-top uppercase">®</span>
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#builder" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {"콘티 빌더"}
          </a>
          <a href="#framework" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {"성공 프레임워크"}
          </a>
          <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {"실적"}
          </a>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
            {"시작하기"}
          </Button>
        </div>

        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-4">
          <a href="#builder" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
            {"콘티 빌더"}
          </a>
          <a href="#framework" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
            {"성공 프레임워크"}
          </a>
          <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
            {"실적"}
          </a>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer">
            {"시작하기"}
          </Button>
        </div>
      )}
    </header>
  )
}
