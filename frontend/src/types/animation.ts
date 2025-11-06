// types/animation.ts
export type AnimationDirection = 'left' | 'right' | 'up' | 'down'

export interface AnimationProps {
  direction?: AnimationDirection
  delay?: number
  duration?: number
  className?: string
}

export interface StaggerAnimationProps {
  staggerChildren?: number
  delayChildren?: number
}

export interface SlideInProps extends AnimationProps {
  children: React.ReactNode
}

export interface FadeInProps extends Omit<AnimationProps, 'direction'> {
  children: React.ReactNode
}

export interface AnimatedTextProps extends Omit<AnimationProps, 'direction'> {
  text: string
  className?: string
}

export interface UseAnimationDirectionProps {
  lng: string
  isRight?: boolean
  index?: number
  isMobile: boolean
  reverse?: boolean
}