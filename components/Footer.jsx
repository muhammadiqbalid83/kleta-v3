import Copyright from './Footer/Copyright'
import Sitemap from './Footer/Sitemap'
import Subscribe from './Footer/Subscribe'

export default function Footer() {
  return (
    <div className="w-auto h-auto">
      <Subscribe />
      <Sitemap />
      <Copyright />
    </div>
  )
}
