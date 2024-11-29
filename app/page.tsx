import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Shield, Users, Building2, ArrowRight, Menu } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">القائمة</span>
            </Button>
            <Image
              src="/placeholder.svg?height=40&width=120&text=Logo"
              alt="Logo"
              width={120}
              height={40}
            />
          </div>
          <Tabs defaultValue="insurance" dir="rtl" className="w-full">
            <TabsList className="h-16 w-full justify-start gap-4 hidden lg:flex">
              <TabsTrigger value="insurance" className="text-sm">التأمين الطبي</TabsTrigger>
              <TabsTrigger value="car" className="text-sm">تأمين السيارات</TabsTrigger>
              <TabsTrigger value="travel" className="text-sm">تأمين السفر</TabsTrigger>
              <TabsTrigger value="corporate" className="text-sm">تأمين الشركات</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      <main className="py-8">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-right">الموقع الأول لمقارنة أسعار التأمين في المملكة</h1>
              <p className="text-gray-600 mb-6 text-center lg:text-right">٢٥٠+ شركة تأمين معتمدة • تغطيات متعددة • تسعيرة فورية</p>
              <Card className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button variant="outline" className="flex-1 text-sm md:text-base">سيارة جديدة من المعرض</Button>
                  <Button variant="outline" className="flex-1 text-sm md:text-base">سيارة مستعملة</Button>
                </div>
                <div className="relative">
                  <Input 
                    placeholder="اختر نوع السيارة" 
                    className="w-full pl-12 text-right"
                  />
                  <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
                </div>
              </Card>
            </div>
              <Link href="https://www.coc.com">
            <Button className="bg-blue-500">

              تقديم طلب
            </Button>
              </Link>

            <div className="lg:w-1/2">
              <img
                src="/Products-scaled.jpg"
                alt="Insurance Comparison"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"

              />

            </div>
            <Link href="https://www.coc.com">
            <Button className="bg-blue-500">

شراء تأمين            </Button>
              </Link>          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">تغطية تأمينية شاملة</h3>
              <p className="text-sm text-gray-600">حماية كاملة لك ولعائلتك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">خدمة عملاء متميزة</h3>
              <p className="text-sm text-gray-600">دعم فني على مدار الساعة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">شركات معتمدة</h3>
              <p className="text-sm text-gray-600">نتعامل مع أفضل شركات التأمين</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">إجراءات سريعة</h3>
              <p className="text-sm text-gray-600">إصدار وثيقة التأمين فوراً</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-xl font-semibold mb-8">شركاؤنا</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={partner} className="w-20 h-10 md:w-24 md:h-12 bg-white rounded shadow-sm flex items-center justify-center">
                  <Image
                    src={`/22.png}`}
                    alt={`Partner ${partner}`}
                    width={80}
                    height={30}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-center text-xl font-semibold mb-12">أنواع التأمين المتوفرة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Medical"
                  alt="Medical Insurance"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="text-center md:text-right">
                  <h3 className="font-semibold mb-2">التأمين الطبي</h3>
                  <p className="text-sm text-gray-600">تغطية شاملة للرعاية الصحية لك ولعائلتك مع أفضل المستشفيات والعيادات</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Corporate"
                  alt="Corporate Insurance"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="text-center md:text-right">
                  <h3 className="font-semibold mb-2">تأمين الشركات</h3>
                  <p className="text-sm text-gray-600">حلول تأمينية متكاملة للشركات والمؤسسات مع تغطية شاملة للموظفين</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-xl font-semibold mb-12">ماذا يقول عملاؤنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <Card key={testimonial} className="p-4 md:p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=User${testimonial}`}
                      alt={`User ${testimonial}`}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-4">خدمة ممتازة وسريعة. وجدت أفضل تأمين يناسب احتياجاتي بسهولة.</p>
                    <h4 className="font-semibold">عميل {testimonial}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="font-semibold mb-4">عن الشركة</h3>
              <p className="text-sm text-gray-400">نحن نقدم خدمات التأمين الأفضل في المملكة مع تغطية شاملة وأسعار تنافسية</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">روابط سريعة</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>عن الشركة</li>
                <li>اتصل بنا</li>
                <li>الأسئلة الشائعة</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">تواصل معنا</h3>
              <p className="text-sm text-gray-400">البريد الإلكتروني: info@example.com</p>
              <p className="text-sm text-gray-400">الهاتف: 920000000</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

