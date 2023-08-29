import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "../components/Main";

const Home = ({ search }) => {
const [data, setData] = useState({});
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get(
            `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        } catch (error) {
        console.log(error.message);
        }
    };
    fetchData();
    }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
        <Main />
        <div className='container items'>
            {data.offers.map((offer) => {
                return (
                    <Link key={offer._id} to={`/offers/${offer._id}`}>
                        <article key={offer._id}>
                            <div className="avatar">
                                {offer.owner.account.avatar && (
                                    <>
                                        <img 
                                        src={offer.owner.account.avatar.secure_url} 
                                        alt={offer.owner.account.username}
                                        />
                                        <p>{offer.owner.account.username}</p>
                                    </>
                                )}
                            </div>
                            <div className="offer">
                                <img
                                src={offer.product_image.secure_url}
                                alt={offer.product_name}
                                />
                            </div>
                            <p>{offer.product_price} €</p>
                        </article>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Home