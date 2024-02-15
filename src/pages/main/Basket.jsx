import React, { useEffect } from "react";
import myimage from "../../assets/images/image.png";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/slices/orderSlice";

function Basket() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!orders || orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="basketContainer">
      {orders.map((order, index) => (
        <div className="basketraw" key={index}>
          <div className="basketPhotosec">
            <div className="basketimg">
              <img src={myimage} alt="" />
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
              <b>Size:</b> {order.size}
            </p>
            <div className="productSize">
              {order.sizes.map((size, index) => (
                <div key={index}>{size}</div>
              ))}
            </div>
            <p>
              <b>Color:</b>
            </p>
            <div className="productColor">
              {order.colors.map((color, index) => (
                <div key={index}>{color}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
