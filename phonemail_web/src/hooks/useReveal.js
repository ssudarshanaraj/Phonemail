import { useEffect, useRef, useState } from 'react'

function isNearViewport(node, margin) {
  const rect = node.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewportHeight + margin && rect.bottom > -margin
}

export default function useReveal(margin = 120) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let done = false
    const check = () => {
      if (done) return
      if (isNearViewport(node, margin)) {
        done = true
        setInView(true)
        cleanup()
      }
    }

    function cleanup() {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      if (observer) observer.disconnect()
    }

    let observer
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            done = true
            setInView(true)
            cleanup()
          }
        },
        { threshold: 0.1, rootMargin: `${margin}px` },
      )
      observer.observe(node)
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()

    return cleanup
  }, [margin])

  return [ref, inView]
}
