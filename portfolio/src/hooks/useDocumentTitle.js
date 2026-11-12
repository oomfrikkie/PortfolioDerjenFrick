import { useEffect } from 'react'

const SITE = 'Derjen Frick'

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Full-stack developer`
  }, [title])
}
