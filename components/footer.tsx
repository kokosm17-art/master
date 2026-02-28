export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">W</span>
          </div>
          <span className="text-sm font-bold text-foreground">Success PD</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {"Copyright 2024 Wadiz Project Success PD. All rights reserved."}
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
