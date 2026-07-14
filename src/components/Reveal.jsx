import useReveal from '../hooks/useReveal.js'

export default function Reveal({ children, timeout = 700, delay = 0, style, ...rest }) {
  const [ref, inView] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        filter: inView ? 'none' : 'blur(6px)',
        transition: `opacity ${timeout}ms ease, transform ${timeout}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${timeout}ms ease`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform, filter',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
