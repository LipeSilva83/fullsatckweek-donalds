import { getRestaurantBySlug } from "@/data/get-restaurant-byslug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
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
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl || ""}
          alt={restaurant?.name || "Restaurant Image"}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* BEM VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="gap 4 grid grid-cols-2 pt-14">
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <Image
              src="/dine_in.png"
              width={78}
              height={80}
              alt="Para comer aqui"
            />
            <Button variant="secondary" className="rounded-full">
              Para comer aqui
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <div className="relative h-[80px] w-[80px]">
              <Image
                src="/take_away.png"
                fill
                alt="Para Levar"
                className="object-contain"
              />
            </div>
            <Button variant="secondary" className="rounded-full">
              Para Levar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RestaurantPage;
