import Header from "./components/Header";
import Footer from "./components/Footer";
import ListFilm from "./components/ListFilm";
import ListWatch from "./components/ListWatch";
import HeroBanner from "./components/HeroBanner";

// Import Film
import film1 from "../../assets/poster/film1.png";
import film2 from "../../assets/poster/film2.png";
import film3 from "../../assets/poster/film3.png";
import film4 from "../../assets/poster/film4.png";
import film5 from "../../assets/poster/film5.png";

const Home = () => {
  const trendingFilms = [
    {
      id: 1,
      title: "Film 1",
      poster: film1,
      description:
        "Seorang Bruce Wayne muda menjalani masa-masa awal sebagai Batman dan harus menyelidiki serangkaian pembunuhan misterius yang mengguncang Gotham. Dalam atmosfer kelam dan penuh hujan, ia menghadapi teka-teki dari Riddler yang menguji batas moral dan dedikasinya sebagai pelindung kota.",
    },
    {
      id: 2,
      title: "Film 2",
      poster: film2,
      description:
        "Sekelompok orang tiba-tiba terjebak di dunia alternatif Tokyo, di mana mereka dipaksa ikut dalam permainan mematikan untuk bertahan hidup. Dengan nyawa sebagai taruhannya, mereka harus menggunakan akal dan kekuatan untuk mengungkap misteri dunia tersebut dan mencari jalan keluar",
    },
    {
      id: 3,
      title: "Film 3",
      poster: film3,
      description:
        "Suzume, seorang remaja perempuan, tanpa sengaja membuka pintu misterius yang menghubungkan dunia nyata dengan bencana supernatural. Bersama seorang pemuda, ia berpetualang untuk menutup kembali pintu-pintu bencana sambil menemukan makna kehilangan, harapan, dan cinta",
    },
    {
      id: 4,
      title: "Film 4",
      poster: film4,
      description:
        "Miles Morales kembali beraksi menjelajahi berbagai dimensi yang dipenuhi Spider-Man dari alam semesta lain. Ketika konflik besar mengancam multiverse, Miles harus menentukan jalannya sendiri dan membuktikan bahwa ia adalah pahlawan sejati",
    },
    {
      id: 5,
      title: "Film 5",
      poster: film5,
      description:
        "Dalam upaya menciptakan striker terbaik Jepang, sebuah proyek ekstrim bernama Blue Lock mengumpulkan para pemain muda berbakat dalam sistem pelatihan kompetitif. Hanya yang terkuat dan paling egois yang akan bertahan demi menjadi bintang sepak bola berikutnya",
    },
  ];

  const newReleases = [
    {
      id: 1,
      title: "Film 1",
      poster: film1,
      description:
        "Seorang Bruce Wayne muda menjalani masa-masa awal sebagai Batman dan harus menyelidiki serangkaian pembunuhan misterius yang mengguncang Gotham. Dalam atmosfer kelam dan penuh hujan, ia menghadapi teka-teki dari Riddler yang menguji batas moral dan dedikasinya sebagai pelindung kota.",
    },
    {
      id: 2,
      title: "Film 2",
      poster: film2,
      description:
        "Sekelompok orang tiba-tiba terjebak di dunia alternatif Tokyo, di mana mereka dipaksa ikut dalam permainan mematikan untuk bertahan hidup. Dengan nyawa sebagai taruhannya, mereka harus menggunakan akal dan kekuatan untuk mengungkap misteri dunia tersebut dan mencari jalan keluar",
    },
    {
      id: 3,
      title: "Film 3",
      poster: film3,
      description:
        "Suzume, seorang remaja perempuan, tanpa sengaja membuka pintu misterius yang menghubungkan dunia nyata dengan bencana supernatural. Bersama seorang pemuda, ia berpetualang untuk menutup kembali pintu-pintu bencana sambil menemukan makna kehilangan, harapan, dan cinta",
    },
    {
      id: 4,
      title: "Film 4",
      poster: film4,
      description:
        "Miles Morales kembali beraksi menjelajahi berbagai dimensi yang dipenuhi Spider-Man dari alam semesta lain. Ketika konflik besar mengancam multiverse, Miles harus menentukan jalannya sendiri dan membuktikan bahwa ia adalah pahlawan sejati",
    },
    {
      id: 5,
      title: "Film 5",
      poster: film5,
      description:
        "Dalam upaya menciptakan striker terbaik Jepang, sebuah proyek ekstrim bernama Blue Lock mengumpulkan para pemain muda berbakat dalam sistem pelatihan kompetitif. Hanya yang terkuat dan paling egois yang akan bertahan demi menjadi bintang sepak bola berikutnya",
    },
  ];
  const popularNow = [
    {
      id: 1,
      title: "Film 1",
      poster: film1,
      description:
        "Seorang Bruce Wayne muda menjalani masa-masa awal sebagai Batman dan harus menyelidiki serangkaian pembunuhan misterius yang mengguncang Gotham. Dalam atmosfer kelam dan penuh hujan, ia menghadapi teka-teki dari Riddler yang menguji batas moral dan dedikasinya sebagai pelindung kota.",
    },
    {
      id: 2,
      title: "Film 2",
      poster: film2,
      description:
        "Sekelompok orang tiba-tiba terjebak di dunia alternatif Tokyo, di mana mereka dipaksa ikut dalam permainan mematikan untuk bertahan hidup. Dengan nyawa sebagai taruhannya, mereka harus menggunakan akal dan kekuatan untuk mengungkap misteri dunia tersebut dan mencari jalan keluar",
    },
    {
      id: 3,
      title: "Film 3",
      poster: film3,
      description:
        "Suzume, seorang remaja perempuan, tanpa sengaja membuka pintu misterius yang menghubungkan dunia nyata dengan bencana supernatural. Bersama seorang pemuda, ia berpetualang untuk menutup kembali pintu-pintu bencana sambil menemukan makna kehilangan, harapan, dan cinta",
    },
    {
      id: 4,
      title: "Film 4",
      poster: film4,
      description:
        "Miles Morales kembali beraksi menjelajahi berbagai dimensi yang dipenuhi Spider-Man dari alam semesta lain. Ketika konflik besar mengancam multiverse, Miles harus menentukan jalannya sendiri dan membuktikan bahwa ia adalah pahlawan sejati",
    },
    {
      id: 5,
      title: "Film 5",
      poster: film5,
      description:
        "Dalam upaya menciptakan striker terbaik Jepang, sebuah proyek ekstrim bernama Blue Lock mengumpulkan para pemain muda berbakat dalam sistem pelatihan kompetitif. Hanya yang terkuat dan paling egois yang akan bertahan demi menjadi bintang sepak bola berikutnya",
    },
  ];

  return (
    <>
      <Header />

      <HeroBanner />

      <ListWatch />

      <ListFilm
        title="Top Rating Film dan Series Hari ini"
        films={trendingFilms}
      />

      <ListFilm title="Film Trending" films={newReleases} />

      <ListFilm title="Rilis Baru" films={popularNow} />

      <Footer />
    </>
  );
};

export default Home;
