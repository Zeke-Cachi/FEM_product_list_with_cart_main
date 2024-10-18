import { productDataType } from "../types";

const OrderConfirmedCard: React.FC<{
  item: productDataType;
}> = ({ item }) => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-2 ps-4">
        <img
          src={item.image.thumbnail}
          alt="dessert thumbnail"
          className="h-14 w-14 rounded-lg"
        />
        <div className="grid gap-2">
          <h3 className="font-semibold text-project_rose_900">{item.name}</h3>
          <div className="flex">
            <p className="text-project_red me-2 font-semibold">
              {item.quantity}x
            </p>
            <p className="text-project_rose_400">@${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <p className="text-project_rose_500 font-semibold">
          ${(item.price * item.quantity!).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmedCard;
