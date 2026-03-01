// 'use client'

// import { useEffect } from 'react'
// import Image from 'next/image'

// interface GalleryImage {
//   id: number
//   src: string
//   alt: string
// }

// interface GalleryLightboxProps {
//   selectedImage: GalleryImage | null
//   setSelectedImage: (image: GalleryImage | null) => void
//   images: GalleryImage[]
// }

// export default function GalleryLightbox({ 
//   selectedImage, 
//   setSelectedImage, 
//   images 
// }: GalleryLightboxProps) {
  
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setSelectedImage(null)
//     }
//     window.addEventListener('keydown', handleEsc)
//     return () => window.removeEventListener('keydown', handleEsc)
//   }, [setSelectedImage])

//   useEffect(() => {
//     if (selectedImage) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [selectedImage])

//   if (!selectedImage) return null

//   const currentIndex = images.findIndex(img => img.id === selectedImage.id)

//   const navigateImage = (direction: 'prev' | 'next') => {
//     let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    
//     if (newIndex >= images.length) newIndex = 0
//     if (newIndex < 0) newIndex = images.length - 1
    
//     setSelectedImage(images[newIndex])
//   }

//   return (
//     <div 
//       className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//       onClick={() => setSelectedImage(null)}
//     >
//       <div 
//         className="relative w-full max-w-6xl h-[80vh]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <Image
//           src={selectedImage.src}
//           alt={selectedImage.alt}
//           fill
//           sizes="100vw"
//           className="object-contain"
//           priority
//         />

//         <button
//           onClick={() => setSelectedImage(null)}
//           className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {images.length > 1 && (
//           <>
//             <button
//               onClick={() => navigateImage('prev')}
//               className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={() => navigateImage('next')}
//               className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//               {currentIndex + 1} / {images.length}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }