import Head from "next/head";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import Slide from "react-reveal";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Head>
        <title>{`${
          location.charAt(0).toUpperCase() + location.slice(1)
        } · Stays · Airbnb`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        classs="sticky"
        placeholder={`${location} | ${range} | ${guests} guests`}
      />
      <main className="flex">
        <section className="pt-14 px-6 flex-grow">
          <div className="bg-gray-50 rounded-xl pt-4 pl-4 mb-4">
            <p className="text-sm font-semibold">
              300+ stays -{" "}
              <span className="bg-[#f18285] rounded-lg p-1">
                {formattedStartDate}
              </span>{" "}
              -{" "}
              <span className="bg-[#f18285] rounded-lg p-1">
                {formattedEndDate}
              </span>{" "}
              - for {guests} guests
            </p>
            <h1 className="font-semibold text-3xl mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex whitespace-nowrap mb-5 text-gray-800 space-x-3">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
          </div>
          <Slide left>
            <div className="flex flex-col mb-5 bg-gray-50 rounded-xl">
              {searchResults?.map(
                ({ img, location, title, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    title={title}
                    location={location}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
          </Slide>
        </section>
        <Slide right>
          <section className="hidden pt-14 lg:inline-flex lg:min-w-[600px] ">
            <Map searchResults={searchResults} />
          </section>
        </Slide>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://kdsh.herokuapp.com/pyj").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
