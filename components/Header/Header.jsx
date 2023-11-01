import GlobalNotification from './GlobalNotification'
import Navigation from './Navigation'
import Topbar from './Topbar'

export default function Header() {
  return (
    <div>
      <GlobalNotification />
      <Topbar />
      <Navigation />
    </div>
  )
}
