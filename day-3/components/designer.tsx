"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
};

const CardText = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const SANITY_API_TOKEN ="skyEDFMwmS8Y9laviQSbbXOzFxEe1MNwZvgnWURpuUWm5qnn7lmRSltk7tgcClGe4N0m7i8kGAllFLhMg8Ww1A27O49uWYW7EdWLy8Jabhy6Eesk9hGMgvijMDnbsYCIdXajOsrSmxg42pUIXv8YOwkVetGVFv7KqChA4QwWXRCZuV3uaZJr"; // Replace with your token

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc)[0...8] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url
      }`;

      const url = `https://15hm7ok6.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${SANITY_API_TOKEN}`,
          },
        });
        setProducts(response.data.result);
      } catch (error: unknown) {  // Specify the error type as unknown
        if (axios.isAxiosError(error)) { // Check if the error is an AxiosError
          console.error("Error fetching products:", error.response?.data || error.message);
        } else {
          console.error("An unknown error occurred:", error);
        }
      }
    };

    fetchProducts();
  }, []);

  const notify = () => toast("Item added to cart! ✅");

  return (
    <div className="lg:mt-[350px] w-full rounded-[5px] absolute top-[1750px] border bg-white max-sm:mt-[-100px]">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col justify-evenly p-5 sm:p-10">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-8">
          <h4 className="font-Montserrat font-normal lg:text-[20px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold lg:text-[28px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal lg:text-[17px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Product Cards */}
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="w-full sm:w-[238px] md:w-[250px] lg:w-[300px] flex flex-col items-center mb-8">
                {/* Image */}
                <div className="w-[239px] h-[427px] flex justify-center overflow-hidden mb-4">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-contain rounded"
                      width={239}
                      height={427}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>
                {/* Text Section */}
                <div className="w-full text-center">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    {product.title}
                  </h5>
                  <div className="flex justify-center gap-2 mt-2">
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                      ${product.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardText;
