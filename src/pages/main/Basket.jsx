import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/slices/tokenSlice";

function Basket() {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders", {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to get orders");
        }
        const data = await response.json();
        console.log(data.orderItems);
        setOrderItems(data.orderItems);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="basketContainer">
      {orderItems.map((order, index) => (
        <div className="basketraw" key={index}>
          <div className="basketPhotosec">
            <div className="basketimg">
              <img src={order.image[0]} alt={`Product ${index + 1}`} />
            </div>
            <div className="basketCountsec">
              <button>+</button>
              <p>
                <b>1</b>
              </p>
              <button>-</button>
            </div>
          </div>

          <div className="basketItemInfo">
            <h3>{order.name}</h3>
            <h4>{order.price}</h4>
            <h5>{order.description}</h5>
            <p>
              <b>Size:</b>
            </p>
            <div className="productSize">
              {order.sizes.map((size, index) => (
                <div key={index}> {size}</div>
              ))}
            </div>
            <p>
              <b>Color:</b>
            </p>
            <div className="productColor">
              {order.color.map((color, index) => (
                <div
                  style={{
                    backgroundColor: color,
                    color:
                      color === "White" || color === "Natural"
                        ? "#000"
                        : "#fff",
                  }}
                  key={index}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Basket;
