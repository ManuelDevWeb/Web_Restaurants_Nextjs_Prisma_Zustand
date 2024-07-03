const OrderPage = ({ params }: { params: { category: string } }) => {
  console.log(params.category);
  return (
    <div>
      <h1>Order Page</h1>
      <p>{params.category}</p>
    </div>
  );
};

export default OrderPage;
