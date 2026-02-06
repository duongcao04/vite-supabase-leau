import { Link } from '@tanstack/react-router'
import { useTheme } from 'next-themes'
import { memo } from 'react'

import { cn } from '@/lib/utils'

import IsoValveLogoImg from '../../assets/logo.png'

type Props = {
 canRedirect?: boolean
 href?: string
 classNames?: {
  base?: string
  logo?: string
  appName?: string
  slogan?: string
 }
 logoTheme?: 'light' | 'dark'
}

function IsoValveLogo({
 logoTheme: forceTheme,
 canRedirect = true,
 href = '/',
 classNames,
}: Props) {
 const { resolvedTheme } = useTheme()
 const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = cn('block w-fit', classNames?.base)
  return canRedirect ? (
   <Link to={href} className={wrapperClassName}>
    {children}
   </Link>
  ) : (
   <div className={wrapperClassName}>{children}</div>
  )
 }

 const logoTheme = forceTheme ?? resolvedTheme

 return (
  <Wrapper>
   <div className="flex items-center justify-start gap-2">
    <img
     src={logoTheme === 'light' ? IsoValveLogoImg : IsoValveLogoImg}
     alt="ISOVALVE Logo"
     className={cn('object-contain w-20', classNames?.logo)}
    />
    <div>
     <p
      className={cn(
       'font-quicksand text-4xl font-black text-text-default',
       classNames?.appName,
      )}
     >
      isovalve
     </p>
     <p
      className={cn(
       'text-nowrap text-sm font-medium text-primary',
       classNames?.slogan,
      )}
     >
      Industrial Solutions
     </p>
    </div>
   </div>
  </Wrapper>
 )
}
export default memo(IsoValveLogo)
