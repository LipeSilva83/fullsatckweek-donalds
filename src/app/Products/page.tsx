import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-6">
      <h1 className="text-red-500">Product Page</h1>
      <Button>Fechar o Pedido</Button>
      <Input placeholder="Digite seu nome" />
    </div>
  );
};

export default ProductPage;
