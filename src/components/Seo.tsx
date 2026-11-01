import { useEffect } from 'react'

interface Props {
  title: string
  description: string
  path?: string
  noindex?: boolean
}

const SITE_URL = 'https://columbus-auto-repair-demo.thewateringhole-team.workers.dev'

export default function Seo({ title, description, path = '/', noindex = false }: Props) {
  const canonical = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = title

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.href = canonical

    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow')
    }

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)

    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
  }, [title, description, canonical, noindex])

  return null
}
