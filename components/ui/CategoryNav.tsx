import Image from 'next/image';
import Link from 'next/link';

import { Category } from '@prisma/client';

type CategoryNavProps = {
  category: Category;
};

const CategoryNav = ({ category }: CategoryNavProps) => {
  return (
    <div className={`flex w-full items-center gap-4 border-t border-gray-200 p-3 last-of-type:border-b`}>
      <div className="relative h-16 w-16">
        <Image src={`/icon_${category.slug}.svg`} alt="Image category" fill />
      </div>

      <Link href={`/order/${category.slug}`} className="text-xl font-bold">
        {category.name}
      </Link>
    </div>
  );
};

export { CategoryNav };
