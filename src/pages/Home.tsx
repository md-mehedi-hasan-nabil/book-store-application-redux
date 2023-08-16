import FilterFeaturedBook from "../components/FilterFeaturedBook";
import BookContainer from "../components/BookContainer";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <FilterFeaturedBook />
          </div>
          <BookContainer />
        </div>
        <Form />
      </div>
    </>
  );
}
