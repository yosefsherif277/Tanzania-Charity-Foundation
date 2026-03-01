// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useTranslation } from "@/i18n/client";
// import { Locale } from "@/i18n/settings";

// interface GalleryCloudinaryProps {
//   lng: Locale;
//   cloudName: string;
//   tag?: string;
// }

// export default function GalleryCloudinary({ lng, cloudName, tag = 'tanzania-charity' }: GalleryCloudinaryProps) {
//   const { t } = useTranslation(lng, "common");
//   const [images, setImages] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState<any>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ✅ جلب الصور من Cloudinary - بدون أي مفاتيح أو إعدادات!
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         setLoading(true);
        
//         // هذا الـ API العام يعمل فوراً مع أي حساب Cloudinary
//         const response = await fetch(
//           `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
//         );

//         if (!response.ok) {
//           throw new Error('فشل تحميل الصور');
//         }

//         const data = await response.json();
        
//         if (!data.resources || data.resources.length === 0) {
//           console.log('لا توجد صور بهذا التاج');
//           setImages([]);
//           return;
//         }

//         // تحويل الصور مع تحسينات Cloudinary التلقائية
//         const galleryImages = data.resources.map((resource: any, index: number) => ({
//           id: index + 1,
//           publicId: resource.public_id,
//           // صورة مصغرة محسّنة (400px)
//           src: `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_400,h_400,q_auto,f_auto/${resource.public_id}`,
//           // صورة كبيرة للتكبير
//           largeSrc: `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto/${resource.public_id}`,
//           alt: `صورة ${index + 1}`,
//         }));

//         setImages(galleryImages);
//       } catch (error) {
//         console.error('خطأ في تحميل الصور:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, [cloudName, tag]);

//   // فتح Lightbox
//   const openLightbox = (index: number) => {
//     setCurrentIndex(index);
//     setSelectedImage(images[index]);
//   };

//   // إغلاق Lightbox
//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   // التنقل بين الصور
//   const navigateImage = (direction: 'prev' | 'next') => {
//     let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
//     if (newIndex >= images.length) newIndex = 0;
//     if (newIndex < 0) newIndex = images.length - 1;
    
//     setCurrentIndex(newIndex);
//     setSelectedImage(images[newIndex]);
//   };

//   // منع التمرير عند فتح Lightbox
//   useEffect(() => {
//     if (selectedImage) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedImage]);

//   // إغلاق بالضغط على ESC
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') closeLightbox();
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-20 text-center">
//         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
//         <p className="mt-4 text-text-secondary">{t("gallery.loading") || 'جاري تحميل الصور...'}</p>
//       </div>
//     );
//   }

//   if (images.length === 0) {
//     return (
//       <div className="text-center py-16">
//         <p className="text-text-secondary text-lg">
//           {lng === 'ar' ? 'لا توجد صور' : 
//            lng === 'en' ? 'No images' :
//            lng === 'sw' ? 'Hakuna picha' :
//            lng === 'it' ? 'Nessuna immagine' :
//            'Keine Bilder'}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* شبكة الصور */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             onClick={() => openLightbox(index)}
//             className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-sand/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//           onClick={closeLightbox}
//         >
//           <div 
//             className="relative w-full max-w-6xl h-[80vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={selectedImage.largeSrc}
//               alt={selectedImage.alt}
//               fill
//               sizes="100vw"
//               className="object-contain"
//               priority
//             />

//             {/* زر الإغلاق */}
//             <button
//               onClick={closeLightbox}
//               className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//               aria-label="إغلاق"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* أزرار التنقل */}
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={() => navigateImage('prev')}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//                   aria-label="السابق"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <button
//                   onClick={() => navigateImage('next')}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//                   aria-label="التالي"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>

//                 {/* عداد الصور */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//                   {currentIndex + 1} / {images.length}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }