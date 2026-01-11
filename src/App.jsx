import DataImage, { listTools, listCertificates, listProyek } from "./data";

import { useState, useEffect } from "react";

function App() {
  const [activeCertificate, setActiveCertificate] = useState(listCertificates[0]);
  const [loading, setLoading] = useState(true);
  const [filterProyek, setFilterProyek] = useState("website");

  const websiteProjectCount = listProyek.filter(
    (proyek) => proyek.kategori === "website"
  ).length;
  const gameProjectCount = listProyek.filter(
    (proyek) => proyek.kategori === "games"
  ).length;

  useEffect(() => {
    // simulasi loading data (misal dari API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero grid items-center md:grid-cols-2 px-auto xl:gap-0 gap-6 grid-cols-1" id="beranda">
        {loading ? (
          <>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-zinc-300 rounded-2xl animate-pulse" />
            </div>
            <div className="space-y-4 animate-pulse">
              <div className="h-7 w-3/4 bg-zinc-300 rounded" />
              <div className="h-9 w-full bg-zinc-300 rounded" />
              <div className="h-4 w-full bg-zinc-300 rounded" />
              <div className="h-4 w-5/6 bg-zinc-300 rounded" />
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="h-10 bg-zinc-300 rounded-2xl" />
                <div className="h-10 bg-zinc-300 rounded-2xl" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <img src={DataImage.HeroImage} alt="Home" className="w-80 rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold italic">Salam Kenal</h1>
              <h1 className="text-4xl/tight font-bold mb-6 pt-5">Halo! Saya Azizah Siti Nurafiah</h1>
              <p className="text-base/loose mb-6 opacity-75">Mahasiswa Informatika dengan ketertarikan pada pengembangan perangkat lunak. Berpengalaman mengerjakan proyek berbasis web dan aplikasi interaktif sebagai bagian dari pengembangan skill dan portofolio personal.</p>
              <div className="grid grid-cols-2 sm:gap-4 gap-2">
                <button className="bg-[#3c5070] font-bold rounded-2xl py-2 m-4 hover:bg-[#213a56] text-white"><a href="#proyek">Lihat Project</a></button>
                <button className="bg-[#3c5070] font-bold rounded-2xl py-2 m-4 hover:bg-[#213a56] text-white"><a href="#kontak">Let's connect</a></button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* section tentang */}
      <div className="about mt-20 py-10" id="tentang">
        <div className="xl:w-2/3 lg:mx-auto w-full p-7 bg-zinc-200 rounded-lg">
          {loading ? (
            <div className="animate-pulse space-y-6">
              <div className="w-12 h-12 bg-zinc-300 rounded-md mb-4" />
              <div className="h-4 w-full bg-zinc-300 rounded" />
              <div className="h-4 w-5/6 bg-zinc-300 rounded" />
              <div className="flex items-center justify-between pt-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-md" />
                <div className="flex items-center gap-6">
                  <div>
                    <div className="h-8 w-16 bg-zinc-300 rounded mb-2" />
                    <div className="h-3 w-24 bg-zinc-300 rounded" />
                  </div>
                  <div>
                    <div className="h-8 w-16 bg-zinc-300 rounded mb-2" />
                    <div className="h-3 w-28 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <img src={DataImage.HeroImage} alt="Home" className="w-12 rounded-md mb-10 sm:hidden" />
              <p className="text-base/loose mb-10">Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada pengembangan perangkat lunak. Saya menikmati proses merancang dan mengembangkan aplikasi, baik berbasis web maupun aplikasi interaktif. Melalui berbagai proyek akademik dan personal, saya terbiasa mengolah logika program, mengelola data, serta membangun aplikasi yang fungsional dan mudah digunakan. Saya terus berusaha mengembangkan kemampuan teknis dan pemahaman konsep software sebagai bekal untuk berkarier di bidang teknologi.</p>
              <div className="flex items-center justify-between">
                <img src={DataImage.HeroImage} alt="Home" className="w-12 rounded-md sm:block hidden" />
                <div className="flex items-center gap-6">
                  <div>
                    <h1 className="text-4xl mb-1">
                      <span className="text-[#3c5070]">{websiteProjectCount}</span>
                    </h1>
                    <p>Proyek Website</p>
                  </div>
                  <div>
                    <h1 className="text-4xl mb-1">
                      <span className="text-[#3c5070]">{gameProjectCount}</span>
                    </h1>
                    <p>Proyek Game</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    <div className="mt-20">
      <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Tools yang dipakai</h1>
      <p className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 text-base leading-loose opacity-50" data-aos="fade-up" data-aos-delay="300">
        Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website, desain, maupun game.
      </p>
      <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border border-zinc-300 rounded-md animate-pulse"
              >
                <div className="w-14 h-14 bg-zinc-300 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-zinc-300 rounded" />
                  <div className="h-3 w-1/2 bg-zinc-300 rounded" />
                </div>
              </div>
            ))
          : listTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-500 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-300 p-1 group-hover:bg-zinc-700 rounded" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="text-sm opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
      </div>
    </div>

    <div className="mt-20" id="certificate">
      <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Sertifikat
      </h1>
      <p
        className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 text-base leading-loose opacity-50 mb-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Beberapa sertifikat yang pernah saya dapatkan terkait pengembangan web
        dan teknologi pendukungnya.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Kiri: detail sertifikat atau skeleton */}
        <div
          className="p-5 rounded-xl bg-zinc-200 dark:bg-zinc-200/40 border border-zinc-300 dark:border-zinc-700 min-h-40 flex flex-col justify-center"
          data-aos="fade-right"
        >
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-6 w-2/3 bg-zinc-300 rounded" />
              <div className="h-3 w-1/2 bg-zinc-300 rounded" />
              <div className="h-3 w-full bg-zinc-300 rounded" />
              <div className="h-3 w-5/6 bg-zinc-300 rounded" />
              <div className="h-3 w-4/6 bg-zinc-300 rounded" />
            </div>
          ) : activeCertificate ? (
            <>
              <h2 className="text-2xl font-semibold mb-2">
                {activeCertificate.nama}
              </h2>
              <p className="text-sm opacity-70 mb-1">
                {activeCertificate.penyelenggara}  {activeCertificate.tahun}
              </p>
              <p className="text-base leading-relaxed opacity-80 mt-4">
                {activeCertificate.desk}
              </p>
            </>
          ) : (
            <p className="opacity-60">
              Arahkan kursor ke salah satu sertifikat di sebelah kanan untuk
              melihat detailnya.
            </p>
          )}
        </div>

        {/* Kanan: kartu sertifikat atau skeleton grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="h-44 rounded-xl border border-zinc-300 bg-zinc-200 animate-pulse"
                />
              ))
            : listCertificates.map((item) => (
                <div
                  key={item.id}
                  className="group relative cursor-pointer rounded-xl overflow-hidden border border-zinc-600 bg-zinc-900/80 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  onMouseEnter={() => setActiveCertificate(item)}
                >
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-44 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm sm:text-base">
                      {item.nama}
                    </h4>
                    <p className="text-[11px] sm:text-xs opacity-80">
                      {item.penyelenggara}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>

    {/* Proyek Section */}
    <div className="mt-20 py-4 items-center" id="proyek">
      <h1 className="font-bold text-4xl text-center">Proyek</h1>
      <p className="text-center text-base/loose opacity-70">Berikut beberapa proyek yang pernah saya kerjakan.</p>
      <div className="py-5 px-50 flex justify-center gap-6">
        <button
          type="button"
          onClick={() => setFilterProyek("website")}
          className={`${
            filterProyek === "website" ? "bg-[#3c5070] text-white" : "bg-transparent text-[#3c5070] border border-[#3c5070]"
          } rounded-2xl py-1 px-3 font-medium hover:bg-[#213a56] hover:text-white transition`}
        >
          Website
        </button>
        <button
          type="button"
          onClick={() => setFilterProyek("games")}
          className={`${
            filterProyek === "games" ? "bg-[#3c5070] text-white" : "bg-transparent text-[#3c5070] border border-[#3c5070]"
          } rounded-2xl py-1 px-3 font-medium hover:bg-[#213a56] hover:text-white transition`}
        >
          Games
        </button>
      </div>
      <div className="proyek-box mt-5 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border border-zinc-300 rounded-lg p-3 animate-pulse">
                <div className="w-full h-40 bg-zinc-300 rounded" />
                <div className="mt-3 h-5 w-3/4 bg-zinc-300 rounded" />
                <div className="mt-2 h-4 w-full bg-zinc-300 rounded" />
                <div className="mt-2 h-4 w-5/6 bg-zinc-300 rounded" />
                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="h-7 w-16 bg-zinc-300 rounded-md" />
                  <div className="h-7 w-20 bg-zinc-300 rounded-md" />
                  <div className="h-7 w-14 bg-zinc-300 rounded-md" />
                </div>
                <div className="mt-4 h-9 w-32 bg-zinc-300 rounded-2xl" />
              </div>
            ))
          : listProyek
              .filter((proyek) => {
                if (filterProyek === "website") return proyek.kategori === "website";
                else if (filterProyek === "games") return proyek.kategori === "games";
                return true;
              })
              .map((proyek => (
                <div key={proyek.id}>
                  <img src={proyek.gambar} alt="Proyek Image" />
                  <div>
                    <h1 className="text-2xl font-bold my-3">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-400 rounded-md font-semibold" key={index}>
                          {tool}
                        </p>
                      ))}
                    </div>
                    <div>
                      <a href={`/proyek/${proyek.id}`}>
                        <button className="mt-4 bg-[#3c5070] font-bold rounded-2xl py-2 px-4 hover:bg-[#213a56] text-white cursor-pointer">
                          Lihat Proyek
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="kontak mt-20 sm:p-10 p-0" id="kontak">
      {loading ? (
        <div className="animate-pulse">
          <div className="h-9 w-40 bg-zinc-300 rounded mx-auto mb-3" />
          <div className="h-4 w-64 bg-zinc-300 rounded mx-auto mb-10" />
          <div className="bg-zinc-100 p-10 sm:w-fit mx-auto rounded-md w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 bg-zinc-300 rounded" />
                <div className="h-10 w-full bg-zinc-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-zinc-300 rounded" />
                <div className="h-10 w-full bg-zinc-300 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-16 bg-zinc-300 rounded" />
                <div className="h-32 w-full bg-zinc-300 rounded" />
              </div>
              <div>
                <div className="h-9 w-32 bg-zinc-300 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
          <p className="text-base/loose text-center mb-10 opacity-70">Mari terhubung dengan saya melalui email (azizahsitinurafiah@gmail.com) maupun isi form di bawah.</p>
          <form
            action="https://formsubmit.co/azizahsitinurafiah@gmail.com"
            method="POST"
            className="bg-zinc-100 p-10 sm:w-fit mx-auto rounded-md w-full"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama Anda"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan Email Anda"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Pesan Anda..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#3c5070] text-white rounded-2xl py-1 px-3 font-medium hover:bg-[#213a56] cursor-pointer"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
    </>
  );
}

export default App;
