import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LocaleProvider } from './i18n/LocaleContext'
import RootRedirect from './i18n/RootRedirect'
import type { Locale } from './i18n/locale'
import { localizedPath } from './i18n/locale'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import WhatsNew from './pages/WhatsNew'
import Support from './pages/Support'

function LocalizedPages({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
        <Route path='terms' element={<TermsOfService />} />
        <Route path='whats-new' element={<WhatsNew />} />
        <Route path='support' element={<Support />} />
        <Route path='*' element={<Navigate to={localizedPath('/', locale)} replace />} />
      </Routes>
    </LocaleProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ru/*' element={<LocalizedPages locale='ru' />} />
        <Route
          path='/*'
          element={
            <RootRedirect>
              <LocalizedPages locale='en' />
            </RootRedirect>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
