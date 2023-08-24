import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
const [data, setData] = useState({});
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        } catch (error) {
        console.log(error.message);
        }
    };
    fetchData();
    }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
        <Header />
        <Main />
        <div className='container items'>
            {data.offers.map((offer) => {
                return (
                    <Link key={offer._id} to={`/offers/${offer._id}`}>
                        <article key={offer._id} style={{border: '1px solid black'}}>
                            <div>
                                {offer.owner.account.avatar && (
                                    <img 
                                    src={offer.owner.account.avatar.secure_url} 
                                    alt={offer.owner.account.username}
                                    />
                                )}
                            </div>
                            <div>
                                <img
                                src={offer.product_image.secure_url}
                                alt={offer.product_name}
                                />
                            </div>
                        </article>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Home