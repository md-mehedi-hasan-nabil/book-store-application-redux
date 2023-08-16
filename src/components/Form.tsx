export default function Form() {
  function handleChanged() {}

  function handleSubmit() {}

  return (
    <div className="col-span-12 md:col-span-4">
      <div className="sticky top-14 p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {/* {status ? "Update Book Information" : "Add New Book"} */}
        </h4>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="px-2 py-1 rounded"
              type="text"
              id="input-Bookname"
              // defaultValue={status ? name : ""}
              name="name"
              onChange={(e) => handleChanged(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              // defaultValue={status ? author : ""}
              name="author"
              onChange={(e) => handleChanged(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              // defaultValue={status ? thumbnail : ""}
              name="thumbnail"
              onChange={(e) => handleChanged(e)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                // defaultValue={status ? price : ""}
                name="price"
                onChange={(e) => handleChanged(e)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                // defaultValue={status ? rating : null}
                min="1"
                max="5"
                onChange={(e) => handleChanged(e)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              // defaultChecked={status ? featured : false}
              className="w-4 h-4"
              onChange={(e) => handleChanged(e)}
            />
            <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {/* {status ? "Update Book" : "Add Book"}
             */}
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
