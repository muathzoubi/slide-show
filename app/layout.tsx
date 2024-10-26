import './globals.css';
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'منظومة تقدير  ',
  description:
    'تقدير هي منظومة متكاملة لإدارة وتشغيل وتنظيم عمليات تقييم أضرار المركبات بشكل الكتروني وبمهنية واحترافية عالية، وفق افضل المعايير والمقاييس العالمية ، وتعمل منظومة تقدير على حكومة الإجراءات والارتباط التقني مع كافة الاطراف المعنية بتقييم أضرار المركبات'
};
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={`flex min-h-screen w-full flex-col font ${inter.className}`}>{children}</body>
    </html>
  );
}
