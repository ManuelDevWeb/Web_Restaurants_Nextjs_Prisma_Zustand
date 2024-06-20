import { prisma } from '@/src/lib/prisma';

import { CategoryNav } from '../ui/CategoryNav';

// Funcion para obtener las categorias de la DB
const getCategories = async () => {
  return await prisma.category.findMany();
};

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="bg-white md:h-screen md:w-72">
      <nav className="mt-10">
        {categories.map((category) => {
          return <CategoryNav key={category.id} category={category} />;
        })}
      </nav>
    </aside>
  );
};

export { OrderSidebar };
