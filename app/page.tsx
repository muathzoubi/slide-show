import * as React from "react"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FullPageSlideshow } from "@/components/ui/full-page-slideshow"
const data=[
  {
    title:"افتتاح أول مركز تقدير أضرار المركبات في مكة المكرمة",
    des:"    تعلن الهيئة السعودية للمقيّمين المعتمدين “تقييم” تشغيل أولى مراكز تقدير أضرا…",
    image:"/11.png"
  },
  {
    title:"حجز المواعيد إلكترونياً من خلال موقع تقدير    ",
    des:"هي الجهة الوحيدة المعتمدة في مدينة الرياض لتقدير أضرار حوادث ال…اقرأ المزيد",
    image:"/22.jpeg"
  },
  {
    title:"“إطلاق المرحلة الأولى من تقدير الأضرار الطفيفة الكترونيًا في ٤٠ مدينة بالمملكة",
    des:"  أطلقت الهيئة السعودية للمقيّمين المعتمدين “تقييم” بالتعاون مع شريكها الاستراتي…",
    image:"/33.jpg"
  }
]
export default function ArabicWebsite() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">القائمة</span>
            </Button>
            <h1 className="text-2xl font-bold">
              <img src="/4.png" alt="" width={120}/> </h1>
          </div>
          <nav className="hidden lg:flex space-x-4 space-x-reverse">
            <Button variant="ghost">الرئيسية</Button>
            <Button variant="ghost">من نحن</Button>
            <Button variant="ghost">خدماتنا</Button>
            <Button variant="ghost">اتصل بنا</Button>
          </nav>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">بحث</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">حساب المستخدم</span>
            </Button>
          </div>
        </div>
      </header>

      <FullPageSlideshow />

      <main className="container mx-auto px-4 py-8 mt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 font">مرحبًا بكم في موقعنا</h2>
          <p className="text-lg font">
          منظومة متكاملة لإدارة وتشغيل وتنظيم عمليات تقييم أضرار المركبات بشكل الكتروني وبمهنية واحترافية عالية،          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((i,index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={i.image}
                alt={`صورة ${i.image}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
{i.title}</h3>
                <p className="text-gray-600">

{i.des}        </p>
                <Button className="mt-4">اقرأ المزيد</Button>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <form className="flex space-x-4 space-x-reverse">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-grow"
            />
            <Button type="submit">اشتراك</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 font">عن الشركة</h3>
              <p>
              منظومة متكاملة لإدارة وتشغيل وتنظيم عمليات تقييم أضرار المركبات بشكل الكتروني وبمهنية واحترافية عالية              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:underline">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:underline">وظائف</a></li>
                <li><a href="#" className="hover:underline">خريطة الموقع</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
              <p>شارع الرئيسي، المدينة، الدولة</p>
              <p>هاتف: 123-456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 موقعي العربي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}