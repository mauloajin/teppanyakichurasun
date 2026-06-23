import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://teppanyakichurasun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "鉄板焼きダイニング 美らSUN｜Teppanyaki steak Restaurant | 沖縄県本部町の鉄板焼き・BBQ",
  description:
    "沖縄県国頭郡本部町浜元の鉄板焼きダイニング 美らSUN｜Teppanyaki steak Restaurant。国産牛ステーキ、沖縄県産車エビ、予約制BBQ、English Guide、住所・電話・営業時間・公式サイト情報を掲載。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "鉄板焼きダイニング 美らSUN｜Teppanyaki steak Restaurant | 沖縄県本部町の鉄板焼き・BBQ",
    description:
      "本部町浜元の鉄板焼き・BBQレストラン。公式情報をもとに店舗情報、メニュー、アクセス、FAQ、English Guideをまとめています。",
    url: siteUrl,
    siteName: "鉄板焼きダイニング 美らSUN｜Teppanyaki steak Restaurant",
    locale: "ja_JP",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
