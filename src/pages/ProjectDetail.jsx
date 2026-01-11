import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DataImage, { listProyek } from "../data";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const proyek = listProyek.find((item) => item.id === Number(id));

   const gallery = proyek?.gallery && proyek.gallery.length > 0 ? proyek.gallery : proyek ? [proyek.gambar] : [];
   const [activeImage, setActiveImage] = useState(gallery[0]);

  if (!proyek) {
    return (
      <div className="mt-0 mb-20">
        <p className="text-center text-lg mb-6">Proyek tidak ditemukan.</p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-[#3c5070] text-white rounded-2xl py-2 px-4 font-medium hover:bg-[#213a56]"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 mb-20" id="detail-proyek">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm mb-6 text-[#3c5070] hover:text-[#213a56]"
      >
        <i className="ri-arrow-left-line" />
        Kembali
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={activeImage}
            alt={proyek.nama}
            className="w-full rounded-xl shadow-lg mb-4"
          />

          {gallery.length > 1 && (
            <div className="flex flex-wrap gap-3">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-lg overflow-hidden w-20 h-16 hover:border-[#3c5070] transition ${
                    activeImage === img ? "border-[#3c5070] ring-2 ring-[#3c5070]/50" : "border-zinc-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3">{proyek.nama}</h1>
          <p className="text-base leading-relaxed opacity-80 mb-5">
            {proyek.detail}
          </p>

          {/* info ringkas */}
          <div className="mb-5">
            <h2 className="font-semibold mb-2">Teknologi yang digunakan</h2>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <span
                  key={index}
                  className="py-1 px-3 border border-zinc-400 rounded-md text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold">Tahun</h2>
            <p className="text-sm leading-relaxed opacity-80">
              {proyek.tahun}
            </p>
            <h2 className="font-semibold mt-4">Source Code</h2>
            {proyek.sourceCode ? (
              <a
                href={proyek.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#3c5070] hover:text-[#213a56] underline underline-offset-4"
              >
                Lihat source code
                <i className="ri-external-link-line" />
              </a>
            ) : (
              <p className="text-sm leading-relaxed opacity-80">
                Source code belum tersedia.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
