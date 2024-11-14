import { Button } from "./components/ui/button";
import Header from "./components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import browser from "/browser.svg";
import appstore from "/appstore.svg";
import googleplay from "/googleplay.svg";
import huaweigallery from "/huawei-gallery.svg";

function App() {
  return (
    <>
      <Header />

      <div className="container mx-auto mt-14 px-4 sm:px-6 lg:px-44 flex items-center flex-col md:flex-row">
        <div className="flex-row w-full md:w-3/5 gap-y-8">
          <div className="text-5xl font-bold mb-5 text-left">
            Chargeback ile harcama itirazı yaparak iade kazan.
          </div>
          <p className="text-xl text-zinc-500 mb-5 text-left">
            <span className="bg-[#ffe6eb] px-1 text-black">
              Kampanya süresi, koşul, şart olmadan,
            </span>{" "}
            istediğin tarih aralığındaki harcamalarını Chargeback ile{" "}
            <span className="bg-[#fffdd4] px-1 text-black">
              anında iade kazan.
            </span>
          </p>
          <a
            href="https://www.shopier.com/ShowProductNew/products.php?id=30725531"
            target="_blank"
          >
            <Button className="bg-black text-white rounded-lg p-6 text-lg font-medium hover:text-black border border-black">
              Hemen Satın Al
            </Button>
          </a>
        </div>
        <div className="flex justify-end w-full md:w-2/5">
          <img
            src="/chargeback.png"
            alt="harcama itiraz"
            className="w-[280px] h-[560px] hidden md:block"
          />
        </div>
      </div>
      <div className="text-4xl font-bold mb-5 mt-14 text-center">
        Merak Edilenler
      </div>
      <div className="flex mx-auto container px-4 sm:px-6 lg:px-44 flex-col md:flex-row">
        <Card className="mt-6 w-full md:w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="/cropped-adalet.png" alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Yasal Bir Yaptırım Var mı ?
            </Typography>
            <Typography className="text-zinc-500">
              Chargeback başvurusu tamamen banka üzerinden yapılır.Herhangi bir
              mahkeme,soruşturma,adli bir olay değildir. Banka size ceza kesemez
              yada bir araştırma yapmaz verdiğiniz başvuruyu işleme alır. Çünkü
              chargeback mastercard visa troy uluslar arası protokoller
              çerçevesinde mevcuttur banka sadece aracıdır.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-full md:w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="/cropped-what-is-time-kapak.jpg" alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              İade Ne Kadar Sürer?
            </Typography>
            <Typography className="text-zinc-500">
              İade bankanıza göre değişmektedir. Garanti Bankası ve İşbankası 2
              , 2.5 ay sürerken diğer bankalar 3.5 ay sürebilmektedir.Zaten
              yasal olarak bankalar size 180 gün içinde iade yapmaktadır.Ama
              başvurusu sonrası yapılacak işlemler ile paranızı zamanında iade
              alırsınız. Çünkü bu işlemleri yapmazsanız karşı taraftan parayı
              alan bankanız sizin paranızı faizde kullanıp 180 günün dolmasını
              bekleyebilir. O yüzden eğitim setinde anlatılan her noktaya dikkat
              edilmelidir. Papara iadeleri en az 1 ay en fazla 180 gün
              sürmektedir. Başvuru yapmadan önce bu konulara dikkat ediniz.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-full md:w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="/cropped-liderlik-mitleri4-1-1583745348.jpg"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Sürekli Chargeback Yapıp Zengin Olurum?
            </Typography>
            <Typography className="text-zinc-500">
              Arkadaşlar tek olarak kesinlikle 1 defadan fazla chargeback
              yapamazsınız. Banka ikinci defa yaptığınız toplu iade sonucu sizin
              hesaplarınızı kapatıp ilişiği kesecektir. Bu işi profesyonelce
              yapan müşterilerim mevcut. Farkı kişiler farklı hesaplar ile
              yatırım yapıp iade alabilirsiniz. Çünkü belirli süre sonra hem
              siteler sizi kısıtlayacak hemde 2. toplu iade sonucu banka ile
              ilişiğiniz kesilecektir.
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className="container mx-auto  px-4 sm:px-6 lg:px-44 mt-10 flex-col">
        <h1 className="text-4xl font-bold w-full text-left">
          Sıkça Sorulan Sorular
        </h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              Chargeback Nedir?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Chargeback , harcama itirazıdır.5464 sayılı kanunca hakkınız olup
              kart işlemlerinin tamamında geçerlidir.Son 120 gün içindeki
              işlemler için harcama itirazında bulunabilirsiniz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              Kimler Başvuru Yapabilir?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Banka Kartı,Kredi Kartı Ve Papara ile yasadışı bahis sitelerine
              yatırım yapan arkadaşlar aynı zamanda tiktok , letgo gibi uygulama
              içi satın alımlar yapan arkadaşlar son 120 gün içindeki işlemler
              için itirazda bulunabilir.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">
              Eğitim Seti Hakkında
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Eğitim Seti satın alarak hem videolu hem pdf şeklinde başvuruyu
              nasıl yapacağınızı öğrenip vakit kaybetmeden başvuru
              yapabilirsiniz.Tüm bankalar için detaylı anlatım yapılmıştır.Örnek
              ve Boş formlar eğitim seti içinde mevcuttur.Eğitim seti satın alan
              arkadaşlara whatsapp üzerinden 7/24 destek sunulmaktadır.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="container mx-auto  px-4 sm:px-6 lg:px-44 flex-row mt-10">
        <h1 className="text-4xl font-bold mb-4 text-left">
          24 saat içinde harcama itiraz
        </h1>
        <p className="mb-4 text-2xl text-zinc-500 text-left">
          Ödemenizi gerçekleştirip, harcama itirazınız için anında cevap
          alabilirsiniz.
        </p>
        <a
          href="https://www.shopier.com/ShowProductNew/products.php?id=30725531"
          target="_blank"
        >
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-black hover:text-white text-xl font-medium"
          >
            Satın Al
          </Button>
        </a>
      </div>
      <div className="container mx-auto mt-2 px-4 sm:px-6 lg:px-44 flex flex-col md:flex-row items-start mb-12 pt-10">
        <div className="grid grid-cols-2 gap-4 mb-4 md:mb-0 md:grid-cols-4">
          <img src={browser} alt="browser Logo" className="h-10" />
          <img src={appstore} alt="appstore Logo" className="h-10" />
          <img src={googleplay} alt="googleplay Logo" className="h-10" />
          <img src={huaweigallery} alt="huaweigallery Logo" className="h-10" />
        </div>

        <div className="flex flex-col text-2xl font-semibold text-left md:text-right md:ml-auto">
          <span>paparacashback@gmail.com</span>
          <span>0850 340 0 340</span>
        </div>
      </div>
    </>
  );
}

export default App;
