import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";

const ProductPage = () => {
  return (
    <div className="p-6 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Product Page</h1>
      <Button>Fechar o Pedido</Button>
      <Input placeholder="Digite seu nome" />
    </div>
  );
};

export default ProductPage;
