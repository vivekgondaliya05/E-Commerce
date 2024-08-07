import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const product = {



  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
};
const reviews = { href: "#", average: 3.8, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = () => {

  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const {id} = useParams()
  const {products} = useSelector((state)=>state.products)
  const productData = products.filter((products)=>{
    return products._id ==id;
  })


  return (
    <div className="bg-white">
      
      <div className="flex flex-col lg:flex-row p-3">
        {/* Image gallery */}
        <div className="lg:w-4/6 p-6 ">
          <div className="rounded-lg flex items-center justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[560px]">
            <img
              alt={productData[0].title}
              src={productData[0].image}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto px-4  pt-10 lg:w-2/3">
          {/* product name */}
          <div className="lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {productData[0].title}
            </h1>
          </div>

          <div>
            <div className="mt-4 lg:mt-0">
              {/* price */}
              <p className="text-3xl tracking-tight text-gray-900">
                {`$${productData[0].price}`}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          Math.round(productData[0].rating) > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{productData[0].rating} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {productData[0].ratingCount} reviews
                  </a>
                </div>
              </div>

              {/* Description and details */}
              <div className="py-10 lg:border-r lg:border-gray-200 lg:pb-10 lg:pr-8 lg:pt-6 w-full">
                {/* description */}
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {productData[0].description}
                  </p>
                </div>

                {/* highlight and size section */}
                <div className="mt-10 flex flex-col lg:flex-row">
                  {/* highlight */}
                  <div className="lg:w-1/2 lg:pr-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>
                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {productData[0].highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* size and add to cart */}
                  <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0 flex flex-col justify-between"> 
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                            )}
                          >
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>

                    {/* add to cart */}
                  </div>
                  
                </div>
                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add to cart
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this for full width */}
      <style>{`
        @media (min-width: 1024px) {
          .lg\\:w-2\\/3 {
            width: 100%;
          }
        }
        .lg\\:pl-10 {
          padding-left: 2.5rem;
        }
        .lg\\:pr-10 {
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;