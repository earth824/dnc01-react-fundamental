import type { FormEvent, FormEventHandler } from 'react';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  discount?: number;
};
const products: Product[] = [
  {
    id: 1,
    // id: uuid (if data not from database, must use lib for generate unique id ex.uuid)
    name: 'NIKE Pegaus 41',
    brand: 'NIKE',
    price: 5200,
    discount: 0.3
  },
  {
    id: 2,
    name: 'ON Running Cloudmonster 2',
    brand: 'ONCLOUD',
    price: 7500
  }
];
// { id, name, brand, price, discount } ==> <ProductCard /> (transform object to Component)
// transform array element (array map)

export default function App() {
  // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   // validate data in the form
  //   // sent form data to web server
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    // <div className="flex gap-8">
    //   {products.map((el) => (
    //     <ProductCard
    //       key={el.id}
    //       name={el.name}
    //       brand={el.brand}
    //       price={el.price}
    //       discount={el.discount}
    //     />
    //     // <ProductCard {...el} />
    //   ))}

    //   {/* <ProductCard
    //     name="NIKE Pegaus 41"
    //     brand="NIKE"
    //     price={5200}
    //     discount={0.2}
    //   />
    //   <ProductCard
    //     name="ON Running Cloudmonster 2"
    //     brand="ONCLOUD"
    //     price={7500}
    //   /> */}
    // </div>

    <div>
      {/* SINGLE RESPONSIBILITY */}
      <form
        action=""
        method="get"
        onSubmit={handleSubmit}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   // vlaidate data in the form
        //   // sent form data to web server
        // }}
      >
        <input
          type="text"
          className="border px-3 py-1.5 rounded-md"
          onChange={() => {}}
        />
        <button className="border px-4 py-2 bg-blue-500 text-white hover:cursor-pointer">
          Submit Form
        </button>
      </form>
    </div>
  );
}
