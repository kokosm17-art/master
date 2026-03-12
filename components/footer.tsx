export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="px-4 py-1.5 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground tracking-tight whitespace-nowrap">
              상세페이지의 정석
              <span className="text-[8px] ml-0.5 align-top uppercase">®</span>
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {"Copyright 2024 상세페이지의 정석. All rights reserved."}
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {"이용약관"}
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {"개인정보처리방침"}
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {"문의하기"}
          </a>
        </div>
      </div>
    </footer>
  )
}
