import Container from 'components/container'
import SEO from 'components/seo'
import config from 'utils/config'

export default function License() {
  return (
    <Container>
      <SEO title={`Lisensi | ${config.site.title}`} />
      <div className="prose mx-auto w-full bg-light pt-8 dark:bg-dark dark:prose-dark md:prose-lg">
        <h1>Lisensi</h1>
        <h2 id="konten">Konten (CC BY-SA 4.0)</h2>
        <p>Hak cipta &#169; 2022 Badan Pengembangan dan Pembinaan Bahasa Republik Indonesia</p>
        <p>
          <strong>Anda diperbolehkan:</strong>
        </p>
        <p>
          <strong>Berbagi</strong> — menyalin dan menyebarluaskan kembali materi
          ini dalam bentuk atau format apa pun;
        </p>
        <p>
          <strong>Adaptasi</strong> — menggubah, mengubah, dan membuat turunan
          dari materi ini untuk kepentingan apa pun, termasuk kepentingan
          komersial.
        </p>
        <p>
          Pemberi lisensi tidak dapat mencabut ketentuan di atas sepanjang Anda
          mematuhi ketentuan lisensi ini.
        </p>
        <p>
          <strong>Berdasarkan ketentuan berikut:</strong>
        </p>
        <p>
          <strong>Atribusi</strong> — Anda harus mencantumkan nama yang sesuai,
          mencantumkan tautan terhadap lisensi, dan menyatakan bahwa telah ada
          perubahan yang dilakukan. Anda dapat melakukan hal ini dengan cara
          yang sesuai, namun tidak mengisyaratkan bahwa pemberi lisensi
          mendukung Anda atau penggunaan Anda.
        </p>
        <p>
          <strong>Berbagi Serupa</strong> — Apabila Anda menggubah, mengubah,
          atau membuat turunan dari materi ini, Anda harus menyebarluaskan
          kontribusi Anda di bawah lisensi yang sama dengan materi asli.
        </p>
        <p>
          <strong>Tidak ada pembatasan tambahan</strong> — Anda tidak dapat
          menggunakan ketentuan hukum atau sarana kontrol teknologi yang secara
          hukum membatasi orang lain untuk melakukan hal-hal yang diizinkan
          lisensi ini.
        </p>
        <hr />
        <h2 id="kode-sumber">Kode sumber (MIT)</h2>
        <p>Hak cipta &#169; 2023 {config.author.name}</p>
        <p>
          Izin dengan ini diberikan, secara gratis, kepada siapa pun yang
          memperoleh salinan perangkat lunak ini dan file dokumentasi terkait
          (&#34;Perangkat Lunak&#34;), untuk berurusan dengan Perangkat Lunak
          tanpa batasan, termasuk namun tidak terbatas pada hak untuk
          menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan,
          mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat
          Lunak, dan untuk mengizinkan orang yang kepadanya Perangkat Lunak
          dilengkapi untuk melakukannya, tunduk pada ketentuan berikut:
        </p>
        <p>
          Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus
          disertakan dalam semua salinan atau bagian penting dari Perangkat
          Lunak.
        </p>
        <p>
          PERANGKAT LUNAK INI DISEDIAKAN &#34;SEBAGAIMANA ADANYA&#34;, TANPA
          JAMINAN APA PUN, TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK
          TERBATAS PADA JAMINAN KELAYAKAN UNTUK DIPERDAGANGKAN, KESESUAIAN UNTUK
          TUJUAN TERTENTU, DAN NON-PELANGGARAN. DALAM KEADAAN APA PUN, PENULIS
          ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB ATAS KLAIM, KERUSAKAN,
          ATAU KEWAJIBAN LAINNYA, BAIK DALAM TINDAKAN KONTRAK, KESALAHAN, ATAU
          LAINNYA, YANG TIMBUL DARI, ATAU SEHUBUNGAN DENGAN PERANGKAT
          LUNAK ATAU PENGGUNAAN ATAU TRANSAKSI LAIN DALAM PERANGKAT LUNAK.
        </p>
      </div>
    </Container>
  )
}
