import './presentacion.scss'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.94 1.94 0 0 0 5.2 3a1.95 1.95 0 1 0 0 3.9 1.94 1.94 0 0 0 1.96-1.96ZM21 13.04c0-3.52-1.88-5.16-4.4-5.16-2.03 0-2.94 1.12-3.45 1.9V8.5H9.77c.04.85 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H21v-6.96Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.75A3 3 0 0 0 4.75 7.75v8.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-8.5a3 3 0 0 0-3-3h-8.5Zm8.9 1.32a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06ZM12 7.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 1.75A2.55 2.55 0 1 0 14.55 12 2.55 2.55 0 0 0 12 9.45Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.3 3c.24 2.02 1.38 3.46 3.3 3.72v2.52a5.8 5.8 0 0 1-3.2-1.02v5.47c0 3.17-1.89 5.31-5.18 5.31A4.95 4.95 0 0 1 4 14.08c0-3.28 2.45-5.42 5.67-5.1v2.63c-1.56-.21-2.94.78-2.94 2.4a2.34 2.34 0 0 0 2.45 2.37c1.65 0 2.49-1.1 2.49-2.68V3h2.63Z" />
    </svg>
  )
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sebastian-cmoralesaroca-110940179/', icon: <LinkedInIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/seba.devs/', icon: <InstagramIcon /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sebadevs?_r=1&_d=edg5dgg95b5g1a&sec_uid=MS4wLjABAAAA0f4OBtSvq90Ra1r32Ywk926PApNdOZlPm_w9B195iXPeTxDa_Zu1GEXL0zDgiA7o&share_author_id=7089451988085933062&sharer_language=es&source=h5_m&u_code=e1bd4klf16g8b5&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA0f4OBtSvq90Ra1r32Ywk926PApNdOZlPm_w9B195iXPeTxDa_Zu1GEXL0zDgiA7o&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=7089451988085933062&enable_checksum=1&share_link_id=68D8B8DA-CE4B-400F-B3FB-D0A63F11C3A8&share_app_id=1233', icon: <TikTokIcon /> },
]

function Presentacion() {
  return (
    <section className="presentacion" aria-label="Presentacion principal">
      <div className="presentacion__copy">
        <h1 className="presentacion__title">SEBASTIAN</h1>
        <p className="presentacion__subtitle">
          Ingeniero Software | Programador App Web | Data Base SQL NoSQL
        </p>
      </div>

      <div className="presentacion__socials" aria-label="Redes sociales">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            className="presentacion__social-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Presentacion
