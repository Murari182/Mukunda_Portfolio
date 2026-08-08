import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { SplineSceneName } from '../../types/portfolio'

const sceneUrls: Record<SplineSceneName, string> = {
  brain: 'https://my.spline.design/particleaibrain-X859vknw1IEXe3nJFRI24a0s/',
  'radial-glass': 'https://my.spline.design/radialglass-FCxdUgnCPmlILSXsuajGGPf0/',
  'zero-gravity': 'https://my.spline.design/zerogravityphysicslandingpage-WDqqx1h3rIXMXtO1m55iALP3/',
}

const sceneTitles: Record<SplineSceneName, string> = {
  brain: 'Interactive particle brain neural network visualization',
  'radial-glass': 'Interactive radial glass orbiting research visualization',
  'zero-gravity': 'Interactive zero-gravity scene with orbiting 3D icons',
}

interface SplineSceneProps {
  name: SplineSceneName
  className?: string
  children?: ReactNode
  description: string
  loading?: 'eager' | 'lazy'
}

export function SplineScene({ name, className = '', children, description, loading = 'lazy' }: SplineSceneProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const onLoad = () => setReady(true)
    iframe.addEventListener('load', onLoad, { once: true })
    return () => iframe.removeEventListener('load', onLoad)
  }, [])

  return (
    <div className={`spline-scene spline-scene--${name} ${ready ? 'spline-scene--ready' : ''} ${className}`}>
      <div className="spline-scene__stage" aria-hidden="true">
        <iframe
          ref={iframeRef}
          className="spline-scene__frame"
          src={sceneUrls[name]}
          title={sceneTitles[name]}
          loading={loading}
          allow="autoplay; fullscreen"
        />
      </div>
      <div className="spline-scene__overlay">{children}</div>
      <span className="visually-hidden">{description}</span>
    </div>
  )
}
