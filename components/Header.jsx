import GlobalNotification from './Header/GlobalNotification'
import Navigation from './Header/Navigation'
import Topbar from './Header/Topbar'

export default function Header() {
  return (
    <div>
      <GlobalNotification />
      <Topbar />
      <Navigation />
    </div>
  )
}
