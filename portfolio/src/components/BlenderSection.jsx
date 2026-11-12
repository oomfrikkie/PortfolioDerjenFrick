import { useEffect, useRef, useState } from 'react'
import renders from '../data/renders'
import './blender.css'

export default function BlenderSection() {
  const [active, setActive] = useState(null) // index of the render open in the viewer
  const dialog = useRef(null)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (active !== null && !el.open) el.showModal()
    if (active === null && el.open) el.close()
  }, [active])

  if (renders.length === 0) return null

  const step = (delta) => setActive((i) => (i + delta + renders.length) % renders.length)
  const current = active !== null ? renders[active] : null

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  return (
    <section id="blender" className="section section-alt section-joined">
      <div className="container">
        <div className="blender-head">
          <h2 className="section-title">Learning Blender.</h2>
          <p>
            Development comes first, but I'm also teaching myself 3D in Blender. These are a few
            things I've made along the way.
          </p>
        </div>

        <ul className="renders">
          {renders.map((r, i) => (
            <li key={r.src}>
              <button type="button" className="render" onClick={() => setActive(i)}>
                <span className="render-img">
                  <img src={r.src} alt={r.title} loading="lazy" />
                </span>
                <span className="render-title">{r.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className="viewer"
        aria-label="Render viewer"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && setActive(null)}
        onKeyDown={onKeyDown}
      >
        {current && (
          <figure className="viewer-figure">
            <img src={current.src} alt={current.title} />
            <figcaption>{current.title}</figcaption>
          </figure>
        )}

        <button type="button" className="viewer-btn viewer-close" aria-label="Close" onClick={() => setActive(null)}>
          ✕
        </button>

        {renders.length > 1 && (
          <>
            <button type="button" className="viewer-btn viewer-prev" aria-label="Previous render" onClick={() => step(-1)}>
              ‹
            </button>
            <button type="button" className="viewer-btn viewer-next" aria-label="Next render" onClick={() => step(1)}>
              ›
            </button>
          </>
        )}
      </dialog>
    </section>
  )
}
