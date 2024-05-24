import React from "react";
import ProductCard from "./ProductCard";

const dataProducts = [
  {
    img: "/p3.jpeg",
    title: "Jaket Kekinian",
    decs: "Jaket Mahal Nih Boss!",
    price: "100.000",
  },
  {
    img: "/p4.jpg",
    title: "Tas Sekolah",
    decs: "Cocok Untuk Anak Anda Agar Makin Gemoy",
    price: "150.000",
  },
  {
    img: "/p1.jpg",
    title: "Sneakers Adidas Pria",
    decs: "Nambah Damage Para Cowo",
    price: "475.000",
  },
  {
    img: "/p2.jpg",
    title: "T Shirt Hits Katanya",
    decs: "Cocok Buat Nongkrong Di Cafe Sambil Beli Kopi 80 Ribu",
    price: "40.000",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {dataProducts.map((item, index) => (
            <ProductCard key={index} img={item.img} title={item.title} desc={item.decs} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
