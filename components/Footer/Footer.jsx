import Copyright from './Copyright'
import Sitemap from './Sitemap'
import Subscribe from './Subscribe'

export default function Footer() {
  return (
    <div className="w-auto h-auto">
      <Subscribe />
      <Sitemap />
      <Copyright />
    </div>
  )
}
