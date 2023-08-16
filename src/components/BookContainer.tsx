import BookCard from "./BookCard";
import { useGetBooksQuery } from "../features/book/bookApi";
import { BookType } from "../types/types";

export default function BookContainer() {
  const { isSuccess, isLoading, data: books } = useGetBooksQuery(undefined);

  let content;

  if (isLoading) {
    return "Loading...";
  } else if (isSuccess && books?.length > 0) {
    content = books?.map((book: BookType) => (
      <BookCard key={book.id} book={book} />
    ));
  } else if (isSuccess && books?.length === 0) {
    content = <h2>No book here.</h2>;
  } else {
    content = <h2>Something is worng.</h2>;
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {content}
      {content}
      {/* {books?.length > 0
        ? books
            // ?.filter((book) =>
            //   book.featured === featuredFilter ? book : book.featured && book
            // )
            // ?.filter((book) => book.name.toLowerCase().includes(keyword))
            ?.map((book: BookType) => <BookCard key={book.id} book={book} />)
        : "Loading..."} */}
    </div>
  );
}
