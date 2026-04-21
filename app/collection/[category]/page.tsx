"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { ChevronDown } from "lucide-react";

type CategoryPageProps = {
  params: { category: string };
};

const SORT_OPTIONS = [
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = ["Black", "White", "Cream", "Navy", "Khaki", "Olive", "Sage", "Charcoal"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "$300+", min: 300, max: Infinity },
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category;
  const category = categories.find((c) => c.slug === categorySlug);

  const [sortBy, setSortBy] = useState("newest");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(0);

  if (!category) {
    return (
      <main>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <p>Category not found</p>
        </section>
        <Footer />
      </main>
    );
  }

  const categoryProducts = products.filter((p) => p.category === categorySlug);

  const filtered = useMemo(() => {
    let result = categoryProducts;

    // Price filter
    const range = PRICE_RANGES[priceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        selectedColors.some((color) => p.colors.includes(color))
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some((size) => p.sizes.includes(size))
      );
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryProducts, priceRange, selectedColors, selectedSizes, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <main>
      <Navbar />
      <CartDrawer />

      <section className="bg-[#fafaf8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-10">
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-2">
              Collection
            </p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a]">
              {category.name}
            </h1>
            <p className="text-[13px] text-[#6b6b6b] mt-3 font-light">
              {filtered.length} items
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-medium mb-4">
                      Sort By
                    </p>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full text-[12px] text-[#0a0a0a] bg-[#fafaf8] border border-black/[0.06] px-3 py-2 appearance-none cursor-pointer"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-medium mb-4">
                      Price
                    </p>
                    <div className="space-y-2">
                      {PRICE_RANGES.map((range, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="price"
                            checked={priceRange === idx}
                            onChange={() => setPriceRange(idx)}
                            className="w-3 h-3 border border-black/[0.2]"
                          />
                          <span className="text-[12px] text-[#6b6b6b]">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-medium mb-4">
                      Color
                    </p>
                    <div className="space-y-2">
                      {COLORS.map((color) => (
                        <label key={color} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => toggleColor(color)}
                            className="w-3 h-3 border border-black/[0.2]"
                          />
                          <span className="text-[12px] text-[#6b6b6b]">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-medium mb-4">
                      Size
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SIZES.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-3 py-1.5 text-[10px] font-medium border transition-all ${
                            selectedSizes.includes(size)
                              ? "bg-[#0a0a0a] text-[#fafaf8] border-[#0a0a0a]"
                              : "bg-[#fafaf8] text-[#0a0a0a] border-black/[0.1] hover:border-black/[0.3]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {(selectedSizes.length > 0 ||
                    selectedColors.length > 0 ||
                    priceRange > 0) && (
                    <button
                      onClick={() => {
                        setSortBy("newest");
                        setSelectedSizes([]);
                        setSelectedColors([]);
                        setPriceRange(0);
                      }}
                      className="text-[10px] tracking-[0.16em] uppercase text-[#9b9b9b] hover:text-[#0a0a0a] transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filtered.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-[13px] text-[#6b6b6b] mb-4">
                    No products match your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSortBy("newest");
                      setSelectedSizes([]);
                      setSelectedColors([]);
                      setPriceRange(0);
                    }}
                    className="text-[10px] tracking-[0.16em] uppercase text-[#9b9b9b] hover:text-[#0a0a0a] transition-colors"
                  >
                    View All Items
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {filtered.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
