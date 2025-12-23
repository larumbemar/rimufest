import { PageHero } from "~/components/PageHero/PageHero";
import { Details } from "./Details";
import { OnOffer } from "./OnOffer";
import { Faculty } from "./Faculty";

const Annual2025 = () => {
  return (
    <>
      <PageHero title={"7th Annual Festival 2026"} image={"/annual.jpeg"} />
      <div className="z-10 flex h-fit w-screen flex-col items-center justify-center gap-12 bg-white px-6 py-32 lg:px-8 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:mx-24">
          <Details />
          <OnOffer />
        </div>
        <Faculty />
      </div>
    </>
  );
};

export default Annual2025;
