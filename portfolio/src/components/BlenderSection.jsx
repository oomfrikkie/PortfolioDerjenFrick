import { useState } from 'react'
import renders from '../data/renders'
import Lightbox from './Lightbox'
import './blender.css'

export default function BlenderSection() {
  const [active, setActive] = useState(null) // index of the render open in the viewer

  if (renders.length === 0) return null

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

      <Lightbox
        label="Render viewer"
        items={renders.map((r) => ({ src: r.src, caption: r.title }))}
        index={active}
        onChange={setActive}
      />
    </section>
  )
}
