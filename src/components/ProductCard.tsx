import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image className="w-full h-auto pt-5px" src={img} width={200} height={300} alt={title} />
      </div>
      <div className="space-y-1 ">
        <h2 className="text-accent font font-medium">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div className="font-bold flex gap-2">Rp.{price}</div>
        <button className="bg-accent text-white text-[12px] md:text-[14px] p-2 px-4 rounded-lg inline-block cursor-poointer hover:bg-blackish transition-all duration-500 hover:scale-110 transform cursor-pointer">Detail Produk</button>
      </div>
    </div>
  );
};

export default ProductCard;
