import Product from './Product';

export default function App() {
  const product = {
    id: 1,
    name: 'Dunk',
    image: 'blanchedalmond',
    description: 'blabal',
    price: 3500
  };
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      <button className="bg-blue-500 px-4 py-2 rounded-md text-white">
        Click
      </button>
      {/* <Product
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
      /> */}
      <Product {...product} />
      {/* <Product {...product} /> */}
      {/* <Product name="Air Jordan 1 Low" image="green" />
      <Product name="Dunk" image="blanchedalmond" />
      <Product name="Air force 1" image="olivedrab" /> */}
      {/* <Product />
      <Product />
      <Product /> */}
      {/* <Product /> */}
      {/* <img src="" alt="" /> */}
      <Header>
        <Menu type="test" />
      </Header>
    </div>
  );
}
type HeaderProps = { children: React.ReactNode };
function Header({ children }: HeaderProps) {
  return <div className="header">{children}</div>;
}
type MenuProps = { type: string };
function Menu(props: MenuProps) {
  // props.type = 'hello';
  return <h1>Menu</h1>;
}
