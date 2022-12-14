import moment from "moment";
import Currency from "react-currency-formatter";

function Order({id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div className="relative border border-gray-400 rounded-md">
        <div className="flex items-center space-x-10 p-10 bg-gray-300 text-sm text-gray-600">
            <div>
                <p className="font-bold text-xs"> Order Placed</p>
                <p>{moment.unix(timestamp).format("DD MM YY")}</p>

            </div>
            <div>
                <p className="text-xs font-bold"> TOTAL</p>
                <p> 
                   <Currency quantity={amount} currency="USD" /> - Next day delivery | {" "}
                   <Currency quantity={amountShipping} currency="USD" /> - Shipping

                </p>
            </div>
            <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
                 {items?.length} Items
            </p>
            <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
                Order # {id}
            </p>
            
        </div>
        <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images?.map((image) => (
                        <img src={image} alt="" className="h-20 object-contain sm:h-32"
                    />
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Order