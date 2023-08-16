import BookCard from "./BookCard";

export default function BookContainer() {
  return (
    <div className="lws-bookContainer">
      {/* {books?.length > 0
        ? books
            ?.filter((book) =>
              book.featured === featuredFilter ? book : book.featured && book
            )
            ?.filter((book) => book.name.toLowerCase().includes(keyword))
            ?.map((book) => <BookCard key={book.id} book={book} />)
        : "Loading..."} */}

      <BookCard key={"book.id"} book={"book"} />
      <BookCard key={"book.id"} book={"book"} />
      <BookCard key={"book.id"} book={"book"} />
      <BookCard key={"book.id"} book={"book"} />
      <BookCard key={"book.id"} book={"book"} />
    </div>
  );
}
