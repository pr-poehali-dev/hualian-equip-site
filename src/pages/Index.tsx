import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const equipment = [
    {
      title: 'Упаковочное оборудование',
      description: 'Автоматические линии для упаковки продуктов питания',
      image: 'https://cdn.poehali.dev/projects/c70ab85f-9a99-4bed-9623-357d52d5f171/files/f95021d0-8179-4d60-901b-6bfc0914d956.jpg',
      features: ['Высокая производительность', 'Точная дозировка', 'Автоматизация']
    },
    {
      title: 'Производственные линии',
      description: 'Комплексные решения для пищевого производства',
      image: 'https://cdn.poehali.dev/projects/c70ab85f-9a99-4bed-9623-357d52d5f171/files/f207c400-0b20-460d-ba7b-b7f72709283f.jpg',
      features: ['Полный цикл', 'Модульность', 'Надежность']
    },
    {
      title: 'Вакуумное оборудование',
      description: 'Современные вакуумные упаковщики',
      image: 'https://cdn.poehali.dev/projects/c70ab85f-9a99-4bed-9623-357d52d5f171/files/90e372ed-ced0-408e-b0d8-5199c523ddbb.jpg',
      features: ['Сохранность продуктов', 'Энергоэффективность', 'Простота управления']
    }
  ];

  const advantages = [
    { icon: 'Factory', title: 'Прямой производитель', text: 'Работаем напрямую с заводом без посредников' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Сертифицированное оборудование с гарантией' },
    { icon: 'Truck', title: 'Быстрая доставка', text: 'Организуем доставку по всей России' },
    { icon: 'Wrench', title: 'Сервисное обслуживание', text: 'Полная техническая поддержка и ремонт' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0071e3] flex items-center justify-center">
                <Icon name="Factory" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#303239]">Hualian Machinery</h1>
                <p className="text-xs text-gray-500">Пищевое оборудование из Китая</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-[#0071e3]' : 'text-[#303239] hover:text-[#0071e3]'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors ${activeSection === 'catalog' ? 'text-[#0071e3]' : 'text-[#303239] hover:text-[#0071e3]'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contacts' ? 'text-[#0071e3]' : 'text-[#303239] hover:text-[#0071e3]'}`}
              >
                Контакты
              </button>
            </nav>

            <Button className="hidden md:inline-flex bg-[#0071e3] hover:bg-[#0056b3] text-white">
              Получить консультацию
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-[#303239]" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col gap-4">
                <button 
                  onClick={() => handleNavigate('home')}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-[#0071e3] bg-gray-50' : 'text-[#303239]'}`}
                >
                  Главная
                </button>
                <button 
                  onClick={() => handleNavigate('catalog')}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${activeSection === 'catalog' ? 'text-[#0071e3] bg-gray-50' : 'text-[#303239]'}`}
                >
                  Каталог
                </button>
                <button 
                  onClick={() => handleNavigate('contacts')}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${activeSection === 'contacts' ? 'text-[#0071e3] bg-gray-50' : 'text-[#303239]'}`}
                >
                  Контакты
                </button>
                <div className="px-4">
                  <Button className="w-full bg-[#0071e3] hover:bg-[#0056b3] text-white">
                    Получить консультацию
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#303239] mb-4 md:mb-6 leading-tight">
                    Профессиональное оборудование для пищевого производства
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                    Прямые поставки от китайского завода-производителя Hualian Machinery. 
                    Надежность, качество и выгодные цены без посредников.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Button 
                      size="lg" 
                      className="bg-[#0071e3] hover:bg-[#0056b3] text-white w-full sm:w-auto"
                      onClick={() => setActiveSection('catalog')}
                    >
                      Смотреть каталог
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white w-full sm:w-auto"
                      onClick={() => setActiveSection('contacts')}
                    >
                      Связаться с нами
                    </Button>
                  </div>
                </div>
                <div className="relative order-first md:order-last">
                  <img 
                    src="https://cdn.poehali.dev/projects/c70ab85f-9a99-4bed-9623-357d52d5f171/files/f207c400-0b20-460d-ba7b-b7f72709283f.jpg" 
                    alt="Пищевое оборудование Hualian"
                    className="w-full h-[300px] md:h-[500px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center text-[#303239] mb-12">Наши преимущества</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {advantages.map((item, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#0071e3] flex items-center justify-center mx-auto mb-4">
                        <Icon name={item.icon as any} className="text-white" size={32} />
                      </div>
                      <h4 className="text-lg font-bold text-[#303239] mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#0071e3] text-white">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-6">Готовы начать сотрудничество?</h3>
              <p className="text-xl mb-8 opacity-90">
                Получите индивидуальное коммерческое предложение для вашего производства
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#0071e3] hover:bg-gray-100"
                onClick={() => setActiveSection('contacts')}
              >
                Запросить КП
              </Button>
            </div>
          </section>
        </>
      )}

      {activeSection === 'catalog' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#303239] mb-4">Каталог оборудования</h2>
            <p className="text-lg text-gray-600 mb-12">
              Широкий ассортимент профессионального оборудования для вашего производства
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {equipment.map((item, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#303239] mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-[#0071e3]" size={18} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#0071e3] hover:bg-[#0056b3] text-white">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#303239] mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-gray-600 mb-12">
                Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303239] mb-2">
                        Ваше имя *
                      </label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#303239] mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="ivan@example.com"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#303239] mb-2">
                        Телефон *
                      </label>
                      <Input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#303239] mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Расскажите о ваших потребностях..."
                        rows={5}
                        className="border-gray-300"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#0071e3] hover:bg-[#0056b3] text-white">
                      Отправить заявку
                    </Button>
                  </form>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#303239] mb-1">Email</h4>
                          <p className="text-gray-600">info@hualian-machinery.ru</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#303239] mb-1">Телефон</h4>
                          <p className="text-gray-600">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#303239] mb-1">Режим работы</h4>
                          <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                          <p className="text-gray-600">Сб-Вс: выходной</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-[#303239] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0071e3] flex items-center justify-center">
                  <Icon name="Factory" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Hualian Machinery</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональное пищевое оборудование от китайского производителя
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => setActiveSection('home')} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Главная
                </button>
                <button onClick={() => setActiveSection('catalog')} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Каталог
                </button>
                <button onClick={() => setActiveSection('contacts')} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Email: info@hualian-machinery.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Hualian Machinery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;