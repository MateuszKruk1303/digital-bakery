import Link from 'next/link'
import {config} from "../config";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
          {config.BLOG_TITLE}
      </Link>
      .
    </h2>
  )
}

export default Header
