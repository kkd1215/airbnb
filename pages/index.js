import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData, otherCardsData }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header classs="fixed" />
      <Banner />
      <main className=" sm:bg-white m-10 rounded-xl max-w-7xl mx-auto px-8 sm:px-16 sm:shadow-md">
        <section className=" pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://kdsh.herokuapp.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          h3Class="text-4xl font-bold mb-3 w-64"
          pClass=""
          buttonClass="text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-5 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150"
        />
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
                h3Class="text-2xl mt-3"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Discover things to do</h2>
          <div className="flex space-x-6 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {otherCardsData?.map(({ img, title, desc }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
                desc={desc}
                h3Class="text-lg mt-3 font-semibold"
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://kdsh.herokuapp.com/ILEThxpCf"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn More"
          h3Class="text-5xl mb-3 w-64 text-white font-bold"
          pClass="text-white max-w-[250px]"
          buttonClass="text-md font-semibold bg-white rounded-lg px-4 py-2 mt-7 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://kdsh.herokuapp.com/pyy").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://kdsh.herokuapp.com/zp1").then((res) =>
    res.json()
  );

  const otherCardsData = await fetch("https://kdsh.herokuapp.com/kjk").then(
    (res) => res.json()
  );

  https: return {
    props: {
      exploreData,
      cardsData,
      otherCardsData,
    },
  };
}
