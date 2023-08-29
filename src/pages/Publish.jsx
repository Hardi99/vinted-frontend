import axios from 'axios';
import '../App.css';
import { useEffect, useState } from 'react';

const Publish = ({token}) => {
    // On crée des statees pour chaque champ de notre
    const [file, setFile] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [city, setCity] = useState("");
    const [condition, setCondition] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    return (
        <div className="contact-form">
            <form
                onSubmit={async e => {
                    // Empêche le rafraichissement de page à la soumission du formulaire
                    e.preventDefault();

                    // le formData crée un formulaire
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('title', title);
                    formData.append('description', description);
                    formData.append('price', price);
                    formData.append('city', city);
                    formData.append('condition', condition);
                    formData.append('brand', brand);
                    formData.append('color', color);
                    formData.append('size', size);

                    try {
                        const response = await axios.post(
                            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                            title,
                            description,
                            price,
                            condition,
                            city,
                            brand,
                            size,
                            color,
                            file,

                            formData,
                            {
                                // L'objet headers sert à s'authentifier auprès du serverur à l'aide du Bearer token
                                headers: {
                                    Authorization: "Bearer " + token,
                                    "Content-Type": 'multipart/form-data'
                                }
                            }
                        );
                        //Le stringify convertit le format JSON en string
                        console.log(JSON.stringify(response.data))
                    } catch (err) {
                        if (err.response.status === 500) {
                            console.error("An error occured");
                        } else {
                            console.log(err)
                            console.error(err.response.data.msgs)
                        }
                    }
                }}>
            <h1>Vends ton article</h1>
    
            <input
              type='file'
              onChange={event => {
                setFile(event.target.files.name)
                console.log(event.target.files[0])
              }}
              value={file}
            />
    
            <input
              type='text'
              onChange={event => {
                setTitle(event.target.value)
              }}
              value={title}
            />
    
            <input
              type='text'
              onChange={event => {
                setDescription(event.target.value)
              }}
              value={description}
            />
    
            <input
              type='text'
              onChange={event => {
                setBrand(event.target.value)
              }}
              value={brand}
            />
    
            <input
              type='text'
              onChange={event => {
                setSize(event.target.value)
              }}
              value={size}
            />
    
            <input
              type='text'
              onChange={event => {
                setColor(event.target.value)
              }}
              value={color}
            />
    
            <input
              type='text'
              onChange={event => {
                setCondition(event.target.value)
              }}
              value={condition}
            />
    
            <input
              type='text'
              onChange={event => {
                setCity(event.target.value)
              }}
              value={city}
            />
    
            <input
              type='text'
              onChange={event => {
                setPrice(event.target.value)
              }}
              value={price}
            />
            <input type="submit" />
            </form>
        </div>
    )
}

export default Publish