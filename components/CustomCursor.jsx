'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(2.2)'
      ring.style.borderColor = '#C9A84C'
      ring.style.background = 'rgba(201, 168, 76, 0.08)'
      dot.style.transform = 'translate(-50%, -50%) scale(0)'
    }

    const onLeaveLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.borderColor = '#C9A84C'
      ring.style.background = 'transparent'
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    window.addEventListener('mousemove', onMove)
    animate()

    const addListeners = () => {
      const links = document.querySelectorAll('a, button')
      links.forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    // Initial + re-check after DOM loads fully
    addListeners()
    setTimeout(addListeners, 1000)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      {/* Dot central — blanc avec contour sombre pour contraste */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          background: '#FFFFFF',
          border: '1.5px solid rgba(0,0,0,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Anneau or — toujours visible */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 36,
          height: 36,
          border: '1.5px solid #C9A84C',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.35s ease, border-color 0.3s ease, background 0.3s ease',
        }}
      />
    </>
  )
}