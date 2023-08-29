import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [id]);

    return isLoading ? (
      <p>Loading ...</p>
    ) : (
      <main>
        <div className="ticket">
          <img src={data.product_image.secure_url} alt={data.product_name} />

          <div>
            <h2>{data.product_price} €</h2>
            {data.product_details.map((detail, index) => {
              console.log(detail);
              const keys = Object.keys(detail);
              // console.log(keys);
              const key = keys[0];
              // console.log(key);
              return (
                <p className="detail" key={index}>
                  {key} : {detail[key]}
                </p>
              );
            })}
            <button className="header-button-reverse">Acheter</button>
          </div>
        </div>
      </main>
    );
}

export default Offer