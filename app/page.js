import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from '../public/aviocover.png'
import AboutUsImage1 from '../public/AboutUsImage1.jpg'
import AboutUsImage2 from '../public/AboutUsImage2.jpg'
import hours24 from '../public/Features/hours24.png'
import parking2 from '../public/Features/parking2.png'
import Wifi from '../public/Features/Wifi.png'
import OnSiteDinning from '../public/Features/Dinner.png'
import fitness from '../public/Features/fitness.png'
import SwimingPool from '../public/Features/SwimingPool.png'
import testimonialBg from '../public/homePageHeroSectionImage.jpg'
import TestimonialImage1 from '../public/Testimonial/testimonialPerson1.png'
import TestimonialImage2 from '../public/Testimonial/testimonialPerson2.png'
import TestimonialImage3 from '../public/Testimonial/testimonialPerson3.png'
import Footer from "./components/Footer";
import { CiParking1 } from "react-icons/ci";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      {/* ----------------- Hero Section --------------------- */}
      <header>
        <div className="w-[100vw] h-[85vh] max-sm:h-[75vh] relative ">
          <Image 
            src={HomePage}
            width={1000}
            height={1000}
            alt="Home Page Image"
            className="w-full h-full object-cover object-center"
          />

          <div className="bg-[#000000]  bg-opacity-50 absolute top-0 right-0 w-[90.8%] max-w-[90.8%] min-w-[90.8%] h-full  mx-auto "></div>
          <div className=" absolute top-0 w-full h-full text-white font-semibold flex flex-col justify-center items-start ">
            <div className=" w-[90%] px-6 max-sm:px-0 mx-auto">
              <h2 className="text-[3rem] max-lg:text-[2.6rem] max-md:text-[2.4rem] max-sm:text-center">Iskusite Nezaboravnu  <br className="max-sm:hidden" /> Udobnost i <span className="text-Primary-Golden"> Eleganciju</span></h2>
              <p className="max-lg:text-[.9rem] max-sm:text-center">Dobrodošli u oazu mira i stila,gde je svaki detalj pažljivo osmišljen da vaš boravak učini savršenim. <br /> Radujemo se što ćemo vašu posetu učiniti nezaboravnom. </p>
            </div>


          </div>
        </div>
      </header>

      {/* ------------------- About Us ---------------------- */}
      <div className=" py-20 max-sm:py-0 max-sm:pt-14 bg-black">
        <div className="flex justify-between items-center  w-[90%] px-6 max-sm:px-0  mx-auto h-full max-sm:flex-col ">
          <div className="w-[40%] max-sm:w-full max-lg:w-[45%] flex flex-col gap-y-5  max-sm:mb-10">
            <h2 className="text-white text-[2rem] max-lg:text-[1.8rem] font-semibold">O <span className="text-Primary-Golden">nama</span></h2>
            <p className="text-white max-lg:text-[.9rem] max-md:text-[.8rem]">Avio apartmani su porodična firma koja je sa ponosom otvorila svoja vrata 2018. godine u samom srcu Novog Pazara.Naši apartmani se nalaze u središtu novopazarske pijace,idealno pozicionirani za sve koji žele da budu u neposrednoj blizini svih važnih lokaliteta ovog prelepog grada.Sa lakoćom možete istražiti sve kulturne i istorijske znamenitosti,kao i uživati u svemu što Novi Pazar nudi.

Naši apartmani odišu stilom,luksuzom i besprekornom čistoćom,pružajući vam udobnost i toplinu koja vam je potrebna za opuštanje nakon uzbudljivog dana u gradu.Bilo da ste ovde zbog posla ili zadovoljstva,Avio apartmani će vam omogućiti miran i prijatan boravak u okruženju koje odiše elegancijom.

Novi Pazar je grad bogate kulture i tradicije a našim gostima preporučujemo da isprobaju neprevaziđene lokalne specijalitete koji će zadovoljiti sva vaša čula.Pored toga,brojne trgovinske radnje koje se nalaze u neposrednoj blizini Avio apartmana pružaju vam mogućnost da istražite najbolje ponude i pronađete sve što vam je potrebno tokom vašeg boravka.

Vaše zadovoljstvo je naša primarna briga!U Avio apartmanima,trudimo se da svaki vaš trenutak bude ispunjen komforom i zadovoljstvom.Naše ljubazno osoblje je uvek na raspolaganju da vam pomogne u svakom trenutku,kako biste se osećali kao kod kuće.Dozvolite nam da vaš boravak u Novom Pazaru učinimo nezaboravnim. 
            </p>
            
          </div>
          <div className="w-[50%] max-sm:w-full relative   ">
            <div className="w-[406px] h-[385px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[270px] max-md:h-[250px] z-0 float-right mb-16 max-lg:mb-32  max-md:mb-32">
              <Image
                src={AboutUsImage1}
                width={1000}
                height={1000}
                alt="About Us "
                className="w-full h-full object-center items-center "
              />
            </div>

            <div className=" absolute top-20 left-0    w-[406px] h-[385px]  max-lg:w-[300px] max-lg:h-[300px] max-md:w-[270px] max-md:h-[250px]  z-30">
              <Image
                src={AboutUsImage2}
                width={1000}
                height={1000}
                alt="About Us "
                className="w-full h-full object-center items-center z-30"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------- feature section  ----------------------- */}

      <div className=" py-20 max-lg:py-16 bg-black">
        <h2 className="text-center text-[2.4rem] max-lg:text-[2rem] max-md:text-[1.7rem] font-semibold text-white">Sadržaji i   <span className="text-Primary-Golden">Usluge</span></h2>
        <p className="text-center text-white font-light max-lg:text-[1rem] max-md:text-[.9rem]">Nudimo vam širok spektar sadržaja i usluga koji su osmišljeni da vaš boravak učine što prijatnijim.Svaka usluga je pažljivo prilagođena kako bi ispunila vaše potrebe i pružila vam udobnost i zadovoljstvo. </p>

        <div>
          <div className="w-[90%]  px-6 max-sm:px-0 mx-auto grid  grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 gap-14 py-20 max-lg:py-16 max-sm:py-10 ">

            <div className="flex justify-start items-center gap-3">
              <div className="w-[60px] h-[60px] min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px]   flex justify-center items-center bg-Primary-Golden  rounded-full">
                <Image
                  src={hours24}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="h-[40px] w-[40px]  object-center items-center"
                />
              </div>

              <div className="text-white">
                <h2 className="font-semibold text-[1.4rem] max-xl:text-[1.15rem] ">Recepcija otvorena 24 časa</h2>
                <p className="font-light max-2xl:text-[.84rem] ">Naša recepcija je dostupna 24 sata dnevno kako bi vam pružila svu potrebnu pomoć prilikom prijave,odjave i za sve vaše zahteve i pitanja.Uvek smo tu da osiguramo da vaš boravak bude što prijatniji i bez briga. <br className="max-lg:hidden" /> </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
            <div className="w-[60px] h-[60px] min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px]   flex justify-center items-center bg-Primary-Golden  rounded-full">
                <Image
                  src={parking2}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="h-[40px] w-[40px] object-center items-center"
                />
              </div>

              <div className="text-white">
                <h2 className="font-semibold text-[1.4rem] max-xl:text-[1.15rem] ]">Parking</h2>
                <p className="font-light max-2xl:text-[.84rem]">Našim gostima obezbeđujemo siguran i prostran parking,dostupan tokom celog boravka.Bilo da dolazite automobilom ili iznajmljujete vozilo tokom boravka,naš parking je lako dostupan i besplatan za sve goste.Vaša bezbednost i udobnost su nam prioriteti,pa možete biti sigurni da će vaše vozilo biti na sigurnom mestu,u neposrednoj blizini apartmana. <br className="max-lg:hidden" /> </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
            <div className="w-[60px] h-[60px] min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px]   flex justify-center items-center bg-Primary-Golden  rounded-full">
                <Image
                  src={Wifi}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="h-[40px] w-[40px] object-center items-center"
                />
              </div>

              <div className="text-white">
                <h2 className="font-semibold text-[1.4rem] max-xl:text-[1.15rem] "> Wi-Fi</h2>
                <p className="font-light max-2xl:text-[.84rem]">U svakom našem apartmanu uživajte u ekskluzivnoj Wi-Fi mreži koja je dostupna samo vama.Bilo da ste ovde zbog posla,zabave ili želite da ostanete povezani sa najmilijima,naša brza i pouzdana internet konekcija omogućava vam nesmetano uživanje u svakom trenutku.Ostanite u kontaktu sa svetom iz udobnosti i privatnosti vašeg apartmana. <br className="max-lg:hidden" /> </p>
              </div>
            </div>
            
               
                
              

            
              </div>
            </div>

          </div>
        

      


      {/* ----------------------------  Testimonial section ------------------- */}

      <div className="">
        <div className="h-[80vh] max-sm:h-[900px] max-[440px]:h-[1000px] max-[355px]:h-[1100px] relative flex justify-center items-center">
          <Image
            src={testimonialBg}
            width={1000}
            height={1000}
            alt="image"
            className="object-cover object-center w-full h-full"
          />
          <div className=" bg-[#000000]  bg-opacity-70 absolute top-0 left-0 w-full h-full "></div>

          <div className="  absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center pt-6 max-sm:pb-7">
              <h2 className="text-white text-[2.4rem] max-lg:text-[2.2rem] max-md:text-[1.8rem]  font-semibold">Utisci  <span className="text-Primary-Golden">Gostiju</span></h2>
              <p className="font-light text-white  max-sm:text-[.9rem] max-sm:text-center max-sm:px-4 ">Pročitajte šta naši gosti kažu o svom boravku kod nas. </p>
            </div>

            <div className="w-[90%] px-6 max-sm:px-0  mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-16 max-xl:gap-10 py-16 max-xl:py-12">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[64px] h-[64px]">
                 
                </div>
                <p className="text-white text-center max-xl:text-[.9rem] max-lg:text-[.8rem] ">Na prvom mestu odlična lokacija i ljubazni domaćini.Čistoća na vrlo visokom nivou.Da ne zaboravim vrlo važnu stvar a to je privatan parking,što je ogroman plus.</p>
                <h2 className="text-Primary-Golden mt-3">Radomir</h2>
                
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[64px] h-[64px]">
                  
                </div>
                <p className="text-white text-center max-xl:text-[.9rem]  max-lg:text-[.8rem]">Naš boravak u Avio apartmanima bio je izvanredan!Osoblje je bilo neverovatno ljubazno i organizovalo nam je obilazak grada,što je bio poseban doživljaj.Zahvaljujući njima,otkrili smo sve čari Novog Pazara i saznali mnogo o njegovoj bogatoj istoriji i kulturi.Osećali smo se kao kod kuće i sigurno ćemo se vratiti!</p>
                <h2 className="text-Primary-Golden mt-3">Emrah</h2>
                
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[64px] h-[64px]">
                  
                </div>
                <p className="text-white text-center max-xl:text-[.9rem]  max-lg:text-[.8rem]">Sve je ispalo savršeno,dozvoljen je kasni ulazak i ispunjeni dodatni zahtevi.Lokacija je savršena,sve je bilo na dohvat ruke,od restorana do trgovina</p>
                <h2 className="text-Primary-Golden mt-3">Nataša</h2>
                
              </div>

            </div>

          </div>



        </div>
      </div>


      {/* ------------------------ footer ---------------------- */}


      <Footer />


    </div>
  );
}
