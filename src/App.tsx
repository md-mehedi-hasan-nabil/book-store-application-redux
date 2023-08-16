import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import FilterFeaturedBook from "./components/FilterFeaturedBook";
import BookContainer from "./components/BookContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>
              <FilterFeaturedBook />
            </div>
            <BookContainer />
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}
