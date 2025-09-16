const Sorters = {
  priceLowToHigh: (a, b) => a.price - b.price,
  priceHighToLow: (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
};

export function filterAndSortProducts(
  products,
  filters,
  searchTerm = "",
  sortOption = ""
) {
  const { category, brand, priceRange, rating } = filters;

  const filtered = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const categoryMatch =
      !category?.length || category.includes(product.category);

    const brandMatch = !brand?.length || brand.includes(product.brand);

    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const ratingMatch = !rating || product.rating >= rating;

    return (
      searchMatch && categoryMatch && brandMatch && priceMatch && ratingMatch
    );
  });

  const sortFunction = Sorters[sortOption];

  return sortFunction ? [...filtered].sort(sortFunction) : filtered;
}
