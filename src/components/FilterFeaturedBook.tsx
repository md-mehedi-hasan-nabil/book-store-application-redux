
export default function FilterFeaturedBook() {
  return (
    <div className="flex items-center space-x-4">
      <button
        // onClick={() => filter(false)}
        // className={`filter-btn ${!featuredFilter ? "active-filter" : ""}`}
        id="lws-filterAll"
      >
        All
      </button>
      <button
        // onClick={() => filter(true)}
        // className={`filter-btn ${featuredFilter ? "active-filter" : ""}`}
        id="lws-filterFeatured"
      >
        Featured
      </button>
    </div>
  );
}
