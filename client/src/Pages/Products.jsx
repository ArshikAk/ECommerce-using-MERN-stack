import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const [sortOption, setSortOption] = useState("relevance");

  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      setCategory(location.state.category);
    }
  }, [location]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/getProducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [selectedCategories, setSelectedCategories] = useState({
    "men's clothing": false,
    "women's clothing": false,
    electronics: false,
    jewelery: false,
  });

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  useEffect(() => {
    if (category) {
      setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [category]: true,
      }));
    }
  }, [category]);

  const filteredProducts = products
    ? products
        .filter((item) => {
          const itemCategory = item.category.toLowerCase();
          const activeCategories = Object.keys(selectedCategories).filter((category) => selectedCategories[category]);
          if (activeCategories.length === 0) return true;
          return activeCategories.includes(itemCategory);
        })
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (sortOption === "priceLowToHigh") return a.price - b.price;
          if (sortOption === "priceHighToLow") return b.price - a.price;
          return 0;
        })
    : [];

  return (
    <div>
      <LanguageBar />
      <Navbar />

      <div className="border-b border-gray-300 border-solid py-5 w-full flex justify-center items-center">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="border border-gray-500 border-solid w-[60%] py-1 rounded-2xl px-5"
        />
      </div>

      <div className="my-10 flex">
        
        <div className="w-[20%] border-r border-gray-400 border-solid flex justify-center relative">
          <div className="w-[80%] mx-[10%]">
            <h1 className="my-3 text-xl font-bold sticky top-10">Filters</h1>

            <div className="border border-gray-500 border-solid mt-10 p-5 sticky top-24">
              <h1 className="text-xl my-3 text-black">CATEGORIES</h1>
              {Object.keys(selectedCategories).map((category) => (
                <label key={category} className="flex items-center space-x-2 ml-3 my-1">
                  <input
                    type="checkbox"
                    checked={selectedCategories[category]}
                    onChange={() => handleCheckboxChange(category)}
                    className="form-checkbox text-black"
                  />
                  <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[80%]">
          <div className="flex justify-end items-center mb-5">
            <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-500 border-solid py-1 px-3 rounded-md mr-10 bg-gray-100"
            >
              <option value="relevance">Relevance</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          <div className="flex justify-evenly items-center flex-wrap" style={filteredProducts.length === 0 ? { display: "none" } : { display: "flex" }}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="flex justify-center items-center flex-wrap" style={filteredProducts.length === 0 ? { display: "flex" } : { display: "none" }}>
            <h1 className="text-2xl font-bold">No Products Found.</h1>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
