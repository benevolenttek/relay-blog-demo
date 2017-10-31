import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <div>
      <Link prefetch href="/"><a>Home</a></Link>
      &nbsp;-&nbsp;
      <Link prefetch href="/about"><a>About</a></Link>
      &nbsp;-&nbsp;
      <Link prefetch href="/blog"><a>Blog</a></Link>
      &nbsp;-&nbsp;
      <Link prefetch href="/admin"><a>Dashboard</a></Link>
      &nbsp;-&nbsp;
      <Link prefetch href="/admin/entries"><a>Content</a></Link>
    </div>
  )
}
