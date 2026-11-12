import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '8rem var(--gutter)' }}>
      <p className="label">404</p>
      <h1 className="section-title" style={{ margin: '1rem 0 2rem' }}>
        This page doesn't exist.
      </h1>
      <Link to="/" className="btn">← Back home</Link>
    </section>
  )
}
