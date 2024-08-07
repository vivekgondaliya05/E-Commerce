import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";


const ProductCart = ({ products }) => {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              
              <Link to={`/productDetail/${product._id}`}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.image}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      <StarIcon className="h-4 w-4 inline mb-1"/>{product.rating}
                      </p>
                    </div>
                    <div >
                      <span className="text-sm font-medium text-gray-900 flex flex-col">${product.price}</span>
                      <span className="text-sm font-medium line-through text-gray-400 flex flex-col">${product.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
