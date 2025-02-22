import { getRestaurantBySlug } from "@/data/get-restaurant-byslug";
import { notFound } from "next/navigation";
import Image from "next/image";

interface RestarantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestarantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="item-center flex h-screen flex-col justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl || ""}
          alt={restaurant?.name || "Restaurant Image"}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>

      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
    </div>
  );
};

export default RestaurantPage;
