import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-kr" });

export const metadata: Metadata = {
  title: '와디즈 프로젝트 성공 PD | 콘티 자동 생성 도구',
  description: '누적 400억 매출, 1,000개 프로젝트를 성공시킨 PD의 팔리는 로직이 담긴 와디즈 상세페이지 콘티 자동 생성 도구',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#00c4c4',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${_notoSansKR.variable} ${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
