import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Statistics from "@/components/home/Statistics";
import CompanyLogos from "@/components/home/CompanyLogos";

export default async function Home() {

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <Header />
        <main className="flex flex-col items-center gap-16 pt-16">
          <Hero />
          <SearchBar />
          <Statistics />
        </main>
      </div>
      <CompanyLogos />
    </>
  );
}