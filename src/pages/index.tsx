import { Fragment } from 'react'
import Container from 'components/container'
import SEO from 'components/seo'
import Link from 'components/link'
import routes from 'data/routes'
import config from 'utils/config'

export default function Index() {
  return (
    <Container>
      <SEO />
      <div className="prose mx-auto w-full bg-light pt-8 dark:bg-dark dark:prose-dark md:prose-lg">
        <h1 className="md:text-center">
          Ejaan Bahasa Indonesia yang Disempurnakan
        </h1>
        <p className="text-base md:text-center md:text-xl">
          <strong>(Edisi Kelima)</strong>
        </p>
        <p className="md:text-justify">
          <em>Ejaan Bahasa Indonesia yang Disempurnakan</em> (EYD) adalah
          pedoman resmi yang dapat dipergunakan oleh instansi pemerintah dan
          swasta serta masyarakat dalam penggunaan bahasa Indonesia secara baik
          dan benar.
        </p>
        <hr />
        <h2>Daftar Isi</h2>
        {routes
          .filter((routesOnly) => routesOnly.title !== 'Beranda')
          .map((route) => (
            <Fragment key={route.title}>
              <h3>{route.title}</h3>
              <ul>
                {route.tree.map((routeTree) => (
                  <li key={routeTree.title}>
                    <Link href={route.path + routeTree.path}>
                      {routeTree.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        <hr />
        <h2>Hak Cipta dan Lisensi</h2>
        <p>
          Hak cipta EYD dimiliki oleh Badan Pengembangan dan Pembinaan Bahasa
          Republik Indonesia. Seluruh konten dalam situs web ini dilisensikan di
          bawah CC BY-SA 4.0 dan kode sumber dilisensikan di bawah Lisensi MIT
          oleh {config.author.name}.
        </p>
      </div>
    </Container>
  )
}
