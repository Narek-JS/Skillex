export function filterProducts(products, filters) {
  return products.filter((p) => {
    const { category, brand, priceRange, rating } = filters;

    if (category.length > 0 && !category.includes(p.category)) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    if (brand.length > 0 && !brand.includes(p.brand)) return false;
    if (rating > 0 && p.rating < rating) return false;

    return true;
  });
}
