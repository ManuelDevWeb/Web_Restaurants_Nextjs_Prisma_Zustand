import { OrderSidebar } from '@/components/order/OrderSidebar';
import { OrderSummary } from '@/components/order/OrderSummary';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="gap-2 md:flex">
        <OrderSidebar />

        <main className="bg-gray-100 p-5 md:h-screen md:flex-1 md:overflow-y-scroll">{children}</main>

        <OrderSummary />
      </div>
    </>
  );
}
