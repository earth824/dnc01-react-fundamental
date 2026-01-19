// PROPS
// <Product name="Air Jordan 1 Low" image="green" />
// Product({ name: 'Air Jordan 1 Low', image: 'green' })
// props: { name: 'Air Jordan 1 Low', image: 'green' }
type ProductProps = {
  id: number;
  name: string;
  image: React.CSSProperties['backgroundColor'];
  description: string;
  price: number;
};

export default function Product({ name, image = 'gray' }: ProductProps) {
  // name = 'blue';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'red'
      }}
    >
      <div style={{ width: 40, height: 40, backgroundColor: image }}></div>
      <h2 style={{ fontSize: 16 }}>{name}</h2>
    </div>
  );
}
