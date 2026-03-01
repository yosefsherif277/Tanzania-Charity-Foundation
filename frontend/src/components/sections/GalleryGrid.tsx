// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { Locale } from '@/i18n/settings'
// import GalleryLightbox from '@/components/sections/gallery/GalleryLightbox'

// interface GalleryImage {
//   id: number
//   src: string
//   alt: string
// }

// interface GalleryGridProps {
//   lng: Locale
//   images: GalleryImage[]
// }

// export default function GalleryGrid({ lng, images }: GalleryGridProps) {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return <div className="py-12 text-center">جاري التحميل...</div>
//   }

//   if (images.length === 0) {
//     return (
//       <div className="text-center py-16">
//         <p className="text-text-secondary text-lg">
//           {lng === 'ar' ? 'لا توجد صور' : 'No images'}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <section className="py-12 bg-background">
//         <div className="container mx-auto px-4 sm:px-6">
//           {/* ✅ شبكة الصور - تعرض كل الصور مرة واحدة */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {images.map((image) => (
//               <div
//                 key={image.id}
//                 onClick={() => setSelectedImage(image)}
//                 className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-sand/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <GalleryLightbox
//         selectedImage={selectedImage}
//         setSelectedImage={setSelectedImage}
//         images={images}
//       />
//     </>
//   )
// }