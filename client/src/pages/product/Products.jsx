import SwiperCore from "swiper";
import "swiper/css";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import bg from "../../assets/bg.png";
import listimage1 from "../../assets/listimage1.png";
import listimage2 from "../../assets/listimage2.png";
import listimage3 from "../../assets/listimage3.png";
import featuresProduct from "../../assets/featuresProduct.png";
import coldProduct from "../../assets/coldProduct.png";
import topsell from "../../assets/topsell.png";
import health from "../../assets/health.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { useState, useEffect } from "react";
import { useCartStore } from "../../store/masterStore";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import axios from "axios";
import Toast, { Toaster } from "react-hot-toast";
import Navbar from '../../components/home/Navbar';
// import Navbar from '../../components/Product/Navbar/Navbar';
import Offer from '../../components/Product/Offers/Offers';
import Crousel from '../../components/Product/Carousel/Carousel';

const data = [
  { image: image2 },
  { image: image3 },
  { image: image2 },
  { image: image3 },
  { image: image2 },
  { image: image3 },
];

const minerals = [
  {
    id: 9,
    image: featuresProduct,
    name: "Supradyn Daily Multivitamin (15 Tablets)",
    price: 49.0,
  },
  {
    id: 10,
    image: featuresProduct,
    name: "Supradyn Daily Multivitamin (15 Tablets)",
    price: 49.0,
  },
  {
    id: 11,
    image: featuresProduct,
    name: "Supradyn Daily Multivitamin (15 Tablets)",
    price: 49.0,
  },
  {
    id: 12,
    image: featuresProduct,
    name: "Supradyn Daily Multivitamin (15 Tablets)",
    price: 49.0,
  },
];
const coldfever = [
  {
    id: 13,
    image: coldProduct,
    name: "Nicip Cold And Flu Strip Of 10 Tablets",
    price: 63.8,
  },
  {
    id: 14,
    image: coldProduct,
    name: "Nicip Cold And Flu Strip Of 10 Tablets",
    price: 63.8,
  },
  {
    id: 15,
    image: coldProduct,
    name: "Nicip Cold And Flu Strip Of 10 Tablets",
    price: 63.8,
  },
  {
    id: 16,
    image: coldProduct,
    name: "Nicip Cold And Flu Strip Of 10 Tablets",
    price: 63.8,
  },
  {
    id: 17,
    image: coldProduct,
    name: "Nicip Cold And Flu Strip Of 10 Tablets",
    price: 63.8,
  },
];
const topsellProducts = [
  {
    id: 18,
    image: topsell,
    name: "Nose Spray 30ml Drops",
    price: 69,
  },
  {
    id: 19,
    image: topsell,
    name: "Nose Spray 30ml Drops",
    price: 69,
  },
  {
    id: 20,
    image: topsell,
    name: "Nose Spray 30ml Drops",
    price: 69,
  },
  {
    id: 21,
    image: topsell,
    name: "Nose Spray 30ml Drops",
    price: 69,
  },
];

const Products = () => {

  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (item) => {
    const addcart = addToCart(item);
    if (addcart) {
      Toast.error("Item added Successfully !")
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterItems = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // fetch the data from the backend and show in the filterproducts
  const [products, setProducts] = useState([]);
  try {
    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get(`${BASE_URL}/medicines/`);
        setProducts(data);
      };

      fetchProducts();

    }, []);
  } catch (error) {
    console.log(data.error);
  }


  // const filteredProducts = filterItems(products);
  const filteredMinerals = filterItems(minerals);
  const filteredColdFever = filterItems(coldfever);
  const filteredTopSellProducts = filterItems(topsellProducts);

  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      {/* <header className="flex items-center justify-center w-full z-10 fixed top-0 bg-white"> */}
      {/* <nav className="flex items-center justify-center w-full flex-col gap-2">
          <div className="flex items-center justify-between px-6 py-3 border-[#dfdfdf] border-b w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="logo" className="w-12 h-12" />
              <p className="font-lime text-base sm:flex hidden">HealthSaathi</p>
            </div>
            <NavLink
              to="/"
              className="text-xs s:text-sm sm:text-base font-normal font-popp text-black"
            >
              Home
            </NavLink>
            <NavLink
              to="/labs"
              className="text-xs s:text-sm sm:text-base font-normal font-popp text-black"
            >
              LabTest
            </NavLink>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-black">
              Sample Collection
            </NavLink>
          </div>
          <div className="flex items-center justify-between px-12 py-2 md:flex-row flex-col w-full gap-2">
            <div className="relative w-full md:w-[30rem]">
              <input
                type="text"
                placeholder="Search for medicines, health products and more"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="py-2 pl-8 pr-4 w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
            <button
              onClick={() => navigate("/cart")}
              className="bg-[#28661E] text-white px-5 py-2"
            >
              View Cart
            </button>
          </div>
        </nav> */}
      <Toaster />
      <Navbar />

      <Offer />

      <Crousel />


      {/* </header> */}
      <main className="w-full h-full flex items-center justify-center flex-col gap-10 pt-[7rem]">
        <section className="w-full h-full flex items-center justify-center bg-product rounded-br-[5rem] rounded-bl-[5rem]">
          <div className="flex items-center justify-center w-full">
            <div className="flex w-full flex-col pb-12 pt-32 md:py-12 px-4">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                className="w-full"
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="s:p-4 xs:p-7 p-4 flex items-center justify-center"
                  >
                    <div
                      data-aos="flip-right"
                      className="flex items-center justify-center p-4 bg-[#28661e] md:w-[95%] h-72 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        className="w-full object-contain h-56"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="w-full h-full overflow-hidden flex items-center justify-center relative">
          <div className="flex items-center justify-center p-2 max-w-screen-xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-14 w-full">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
                {products.map((item, index) => (
                  <div
                    key={index}
                    data-aos="flip-left"
                    className="flex flex-col gap-2 border border-gray-300 text-center"
                  >
                    <img
                      src={item.medImg}
                      alt={name}
                      className="w-full h-[50%] object-cover mx-auto"
                    />
                    <div className="w-full flex flex-col gap-2 p-4 items-center justify-center text-center">
                      <div className="text-gray-700 font-bold">{item.brandName
                      }</div>
                      <div className="font-semibold">
                        MRP ₹<span className="text-red-700">{item.price}</span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-[#D9D9D9] text-black rounded-full px-6 py-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat bg-center w-[550px] h-[550px] -z-[1] absolute bottom-[10%] -left-[7%]"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </section>
        <section className="w-full h-full  flex items-center justify-center relative">
          <div className="flex items-center justify-center p-2 max-w-screen-xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-14 w-full">
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src={listimage1}
                    alt={name}
                    className="w-full h-[50%] object-cover mx-auto"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={listimage2}
                    alt={name}
                    className="w-full h-[50%] object-cover mx-auto"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={listimage3}
                    alt={name}
                    className="w-full h-[50%] object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center justify-center p-2 max-w-screen-xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-14 w-full">
              <div className="flex items-center justify-center flex-col gap-12 w-full">
                <h1 className="text-black font-bold font-Inter text-2xl">
                  Vitamins & minerals
                </h1>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
                  {filteredMinerals.map((item, index) => (
                    <div
                      key={index}
                      data-aos="flip-right"
                      className="flex flex-col gap-2 border border-gray-300 text-center"
                    >
                      <img
                        src={item.image}
                        alt={name}
                        className="w-full h-[50%] object-cover mx-auto"
                      />
                      <div className="w-full flex flex-col gap-2 p-4 items-center justify-center text-center">
                        <div className="text-gray-700 font-bold">
                          {item.name}
                        </div>
                        <div className="text-[#28661E] font-semibold">
                          Rs. {item.price}
                        </div>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#D9D9D9] text-black rounded-full px-6 py-2"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full flex items-center justify-center relative overflow-hidden px-4 py-8">
          <div className="flex items-center justify-center p-2 max-w-screen-xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-14 w-full">
              <div className="flex items-center justify-center flex-col gap-12 w-full">
                <h1 className="text-black font-bold font-Inter text-2xl">
                  Cold & Fever
                </h1>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
                  {filteredColdFever.map((item, index) => (
                    <div
                      key={index}
                      data-aos="flip-left"
                      className="flex flex-col gap-2 border border-gray-300 text-center"
                    >
                      <img
                        src={item.image}
                        alt={name}
                        className="w-full h-[50%] object-cover mx-auto"
                      />
                      <div className="w-full flex flex-col gap-2 p-4 items-center justify-center text-center">
                        <div className="text-gray-700 font-bold">
                          {item.name}
                        </div>
                        <div className="text-[#28661E] font-semibold">
                          Rs. {item.price}
                        </div>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#D9D9D9] text-black rounded-full px-6 py-2"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-[560px] h-[560px] -z-[1] absolute right-[-10%]"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </div>
        </section>

        <section className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
              <div className="flex items-center justify-center flex-col gap-4 text-white h-full bg-[#28661E] w-full p-12 sm:p-16 md:p-24 lg:p-32">
                <div
                  className="flex items-start w-full justify-start font-Inter"
                  data-aos="flip-left"
                >
                  <h1 className="text-2xl lg:text-4xl">
                    Your health, made affordable
                  </h1>
                </div>
                <div
                  className="lg:text-base text-sm flex items-center justify-start font-Inter"
                  data-aos="flip-right"
                >
                  <p>
                    {" "}
                    At HealthSaathi, we believe everyone deserves access to quality
                    medication at fair prices. We cut out unnecessary costs and
                    partner directly with manufacturers to bring you the savings
                    you need. So whether you&apos;re refilling a prescription or
                    trying a new supplement, you can feel confident knowing
                    you&apos;re getting the best value for your health. With
                    HealthSaathi, staying healthy is always within reach.
                  </p>
                </div>
              </div>
              <div
                className="w-full h-full flex items-center justify-center"
                data-aos="flip-left"
              >
                <img src={health} alt="heath" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex items-center justify-center relative">
          <div className="flex items-center justify-center p-2 max-w-screen-xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-14 w-full">
              <div className="flex items-center justify-center flex-col gap-12 w-full">
                <h1 className="text-black font-bold font-Inter text-2xl">
                  Top Selling products
                </h1>
                <div className="grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-center gap-6">
                  {filteredTopSellProducts.map((item, index) => (
                    <div
                      key={index}
                      data-aos="flip-right"
                      className="flex flex-col md:flex-row gap-2 border border-gray-300 text-center"
                    >
                      <img
                        src={item.image}
                        alt={name}
                        className="w-32 h-auto object-cover mx-auto"
                      />
                      <div className="w-full flex flex-col gap-2 p-4 items-start justify-center md:text-start text-center">
                        <div className="text-gray-700 font-bold">
                          {item.name}
                        </div>
                        <div className="text-[#28661E] font-semibold">
                          Rs. {item.price}
                        </div>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#D9D9D9] text-black rounded-full px-6 py-2"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full flex items-center justify-center py-12">
            <div className="max-w-2xl flex items-center justify-center w-full flex-col gap-6">
              <div className="flex-col items-center justify-center flex gap-6">
                <h1 className="lg:text-5xl font-Inter md:text-3xl sm:text-2xl text-xl text-center font-semibold">
                  Ask your pharmacist,
                  <br />
                  not the Internet.
                </h1>
                <p className="text-center font-Inter">
                  Feeling stressed? Meds a mess? Ditch self-searching, web
                  distress.Visit our site, your Pharm&apos;s right there, Expert
                  advice, healthy care.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 font-Inter w-full">
                <button
                  onClick={() => navigate("/exp")}
                  className="bg-[#28661E] text-white px-4 py-2 uppercase text-sm"
                >
                  ask your pharmacist
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Products;
