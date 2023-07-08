import React from "react";

const MenuCard = ({ data, place }) => {
  const { name, imgSrc, price, qty } = data;
  return (
    <div className="h-[350px] flex flex-col gap-1 shadow-sm rounded-md hover:scale-105 transition delay-100 cursor-pointer">
      <section className="h-2/3">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover rounded-t-md"
        />
      </section>
      <section className="h-1/3 px-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">
          {price} for {qty}
        </p>
        <p className="text-gray-600 text-sm">{place}</p>
      </section>
    </div>
  );
};

const MenuList = ({ menu, place }) => {
  return (
    <div className="grid xs:grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {menu.map((data, index) => (
        <MenuCard key={index} data={data} place={place} />
      ))}
    </div>
  );
};

export default MenuList;
