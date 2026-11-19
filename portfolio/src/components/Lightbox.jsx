import { useEffect, useRef } from 'react'
import './lightbox.css'

// Full-screen image viewer. `items` are { src, caption }, `index` is the open one (null = closed).
// Arrow keys and swipes move between images, Esc or a click outside the image closes it.
export default function Lightbox({ items, index, onChange, label = 'Image viewer' }) {
  const dialog = useRef(null)
  const touchStart = useRef(null)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (index !== null && !el.open) el.showModal()
    if (index === null && el.open) el.close()
  }, [index])

  const count = items.length
  const step = (delta) => onChange((i) => (i + delta + count) % count)
  const close = () => onChange(null)
  const current = index !== null ? items[index] : null

  const onKeyDown = (e) => {
    if (count < 2) return
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  // One-finger horizontal swipe changes image; ignored while pinch-zoomed in
  const onTouchStart = (e) => {
    const zoomed = window.visualViewport && window.visualViewport.scale > 1.01
    touchStart.current = e.touches.length === 1 && !zoomed ? e.touches[0] : null
  }
  const onTouchEnd = (e) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start || count < 2) return
    const dx = e.changedTouches[0].clientX - start.clientX
    const dy = e.changedTouches[0].clientY - start.clientY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1)
  }

  return (
    <dialog
      ref={dialog}
      className="viewer"
      aria-label={label}
      onClose={close}
      onClick={(e) => (e.target === dialog.current || e.target.classList.contains('viewer-stage')) && close()}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="viewer-stage">
        {current && (
          <figure className={`viewer-figure ${current.width > current.height ? 'is-wide' : ''}`}>
            <img src={current.src} alt={current.caption || ''} />
            {(current.caption || count > 1 || current.width > current.height) && (
              <figcaption>
                {current.caption}
                {count > 1 && <span className="viewer-count">{index + 1} / {count}</span>}
                <span className="viewer-hint">Pinch to zoom</span>
              </figcaption>
            )}
          </figure>
        )}
      </div>

      <button type="button" className="viewer-btn viewer-close" aria-label="Close" onClick={close}>
        ✕
      </button>

      {count > 1 && (
        <>
          <button type="button" className="viewer-btn viewer-prev" aria-label="Previous image" onClick={() => step(-1)}>
            ‹
          </button>
          <button type="button" className="viewer-btn viewer-next" aria-label="Next image" onClick={() => step(1)}>
            ›
          </button>
        </>
      )}
    </dialog>
  )
}
