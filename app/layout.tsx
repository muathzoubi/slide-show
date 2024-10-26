import './globals.css';


export const metadata = {
  title: 'منظومة تقدير  ',
  description:
    'تقدير هي منظومة متكاملة لإدارة وتشغيل وتنظيم عمليات تقييم أضرار المركبات بشكل الكتروني وبمهنية واحترافية عالية، وفق افضل المعايير والمقاييس العالمية ، وتعمل منظومة تقدير على حكومة الإجراءات والارتباط التقني مع كافة الاطراف المعنية بتقييم أضرار المركبات'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col font">{children}</body>
    </html>
  );
}
