import '../App.css';

function Item({data}) {
  return (
    <div>
        <br />
        <ul>
            {data.offers.map((item, index) => {
                console.log(data.offers);
                return (
                    <div key={item.id}>
                        <span>{item.procuct_name}</span>
                        <li key={index}>{item.description}</li>;
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default Item