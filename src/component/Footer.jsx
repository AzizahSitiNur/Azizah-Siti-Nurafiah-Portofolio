import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 py-4 flex justify-between items-center md:flex-row flex-col gap-6 md:gap-0'>
        <h1 className='text-2xl font-bold'>Portofolio</h1>
        <div className='flex gap-7 hover:text-gray-700'>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className='flex items-center gap-3'>
            <a href="https://github.com/AzizahSitiNur">
                <i className='ri-github-fill ri-2x'></i>
            </a>
            <a href="https://www.instagram.com/asn.a_?igsh=cWc2bjJnODZkb3dy">
                <i className='ri-instagram-fill ri-2x'></i>
            </a>
            <a href="https://www.linkedin.com/in/azizah-siti-nurafiah">
                <i className='ri-linkedin-fill ri-2x'></i>
            </a>
            <a href="mailto:azizahsitinurafiah@gmail.com">
                <i className='ri-mail-fill ri-2x'></i>
            </a>
        </div>
    </div>
  )
}

export default Footer