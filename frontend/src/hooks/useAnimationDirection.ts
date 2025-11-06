'use client'
import { UseAnimationDirectionProps, AnimationDirection } from '@/types/animation'

export function useAnimationDirection({ 
  lng, 
  isRight = false, 
  index, 
  isMobile, 
  reverse = false 
}: UseAnimationDirectionProps): AnimationDirection {
  
  if (!isMobile) {
    return 'up'
  }

  if (lng === 'ar') {
    if (reverse) {
      return isRight ? 'left' : 'right'
    }
    if (index !== undefined) {
      return index === 0 || index === 2 ? 'right' : 'left'
    }
    return isRight ? 'left' : 'right'
  } else {
    if (reverse) {
      return isRight ? 'right' : 'left'
    }
    if (index !== undefined) {
      return index === 0 || index === 2 ? 'left' : 'right'
    }
    return isRight ? 'right' : 'left'
  }
}