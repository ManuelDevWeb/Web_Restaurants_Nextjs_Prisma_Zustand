const OrderPage = ({ params }: { params: { category: string } }) => {
  console.log(params.category);
  return <div>Order Page</div>;
};

export default OrderPage;
