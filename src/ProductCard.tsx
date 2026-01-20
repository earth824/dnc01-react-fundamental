type ProductCardProps = {
  name: string;
  brand: string;
  price: number;
  discount?: number;
};

export default function ProductCard({
  name,
  brand,
  price,
  discount
}: ProductCardProps) {
  const netPrice =
    discount !== undefined ? (
      <span className="text-red-500">{price * (1 - discount)}</span>
    ) : null;

  return (
    <div className="border p-4 rounded-md border-blue-400">
      <h1>{name}</h1>
      <h2>{brand}</h2>
      <div className="flex gap-2">
        <span className={discount ? 'line-through' : undefined}>{price}</span>
        {/* {discount !== undefined && (
          <span className="text-red-500">{price * (1 - discount)}</span>
        )} */}
        {netPrice}
      </div>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() => {
          console.log('clickkkkkkkkkkkkk');
        }}
      >
        Click
      </button>
    </div>
  );
}
// const b = document.querySelector('button');
// b?.addEventListener('click', function () {
//   console.log('Clickkkkkkkk');
// });
