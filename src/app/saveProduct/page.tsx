'use client'
import React from 'react';
import styles from "../../styles/saveProduct.module.css"
import {H} from "../../../components/Htag/Htag";
import {Input} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {useEffect, useRef, useState} from "react";

interface ProductFormData {
    category: string;
    title: string;
    description: string;
    country: string;
    price: number;
    amount: number;
    calories: number;
    fats: number;
    carbohydrates: number;
    cellulose: number;
    proteins: number;
    image: string;
}

interface ProductResponse {
    message: string;
}

type InputState = "default" | "error";

const SaveProduct: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [image, setImage] = useState<string>("");
    const [category, setCategory] = useState<string>("fruit");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [titleState, setTitleState] = useState<InputState>("default");
    const [descState, setDescState] = useState<InputState>("default");
    const [countryState, setCountryState] = useState<InputState>("default");
    const [amountState, setAmountState] = useState<InputState>("default");
    const [priceState, setPriceState] = useState<InputState>("default");
    const [imageState, setImageState] = useState<InputState>("default");
    const [calories, setCalories] = useState<number>(0);
    const [caloriesState, setCaloriesState] = useState<InputState>("default");
    const [fats, setFats] = useState<number>(0);
    const [fatsState, setFatsState] = useState<InputState>("default");
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [carbohydratesState, setCarbohydratesState] = useState<InputState>("default");
    const [cellulose, setCellulose] = useState<number>(0);
    const [celluloseState, setCelluloseState] = useState<InputState>("default");
    const [proteins, setProteins] = useState<number>(0);
    const [proteinsState, setProteinsState] = useState<InputState>("default");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.options[e.target.selectedIndex].value);
    };

    const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCalories(Number(e.target.value));
    };

    const handleFatsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFats(Number(e.target.value));
    };

    const handleCarbohydratesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarbohydrates(Number(e.target.value));
    };

    const handleCelluloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCellulose(Number(e.target.value));
    };

    const handleProteinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProteins(Number(e.target.value));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64Image = reader.result as string;
                setImage(base64Image);
            }

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (!title) {
            setTitleState("error");
        } else {
            setTitleState("default");
        }

        if (!description) {
            setDescState("error");
        } else {
            setDescState("default");
        }

        if (!country) {
            setCountryState("error");
        } else {
            setCountryState("default");
        }

        if (!price || Number(price) <= 0) {
            setPriceState("error");
        } else {
            setPriceState("default");
        }

        if (!amount || Number(amount) <= 0) {
            setAmountState("error");
        } else {
            setAmountState("default");
        }

        if (!calories || Number(calories) <= 0) {
            setCaloriesState("error");
        } else {
            setCaloriesState("default");
        }

        if (!fats || Number(fats) <= 0) {
            setFatsState("error");
        } else {
            setFatsState("default");
        }

        if (!carbohydrates || Number(carbohydrates) <= 0) {
            setCarbohydratesState("error");
        } else {
            setCarbohydratesState("default");
        }

        if (!cellulose || Number(cellulose) <= 0) {
            setCelluloseState("error");
        } else {
            setCelluloseState("default");
        }

        if (!proteins || Number(proteins) <= 0) {
            setProteinsState("error");
        } else {
            setProteinsState("default");
        }

        const inputValue = fileInputRef.current?.value;

        if (!inputValue) {
            setImageState("error");
        } else {
            setImageState("default");
        }
    }, [title, description, country, price, amount, calories, fats, proteins, carbohydrates, cellulose])

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("country", country);
        formData.append("price", String(price));
        formData.append("amount", String(amount));
        formData.append("calories", String(calories));
        formData.append("carbohydrates", String(carbohydrates));
        formData.append("cellulose", String(cellulose));
        formData.append("fats", String(fats));
        formData.append("proteins", String(proteins));
        formData.append("image", String(image.substring(image.indexOf('/9'))));

        try {
            const response = await fetch("http://localhost:8808/product/create", {
                method: "POST",
                body: formData,
            });
            const data: ProductResponse = await response.json();
            window.location.href = "/";
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <div className={styles.page}>
            <H type={"h5"} weight={400}>Добавьте новый продукт</H>
            <select className={styles.select} value={category} onChange={handleCategoryChange}>
                <option value={"fruit"}>Фрукты</option>
                <option value={"vegetable"}>Овощи</option>
                <option value={"meat"}>Мясо</option>
                <option value={"bread"}>Хлебные изделия</option>
                <option value={"milk"}>Молочные изделия</option>
            </select>
            <Input
                name="title"
                state={titleState}
                placeholder="Название товара"
                type="text"
                value={title}
                onChange={handleTitleChange}
            />
            <Input
                name="description"
                state={descState}
                placeholder="Описание товара"
                type="text"
                value={description}
                onChange={handleDescChange}
            />
            <Input
                name="country"
                state={countryState}
                placeholder="Страна поставщика"
                type="text"
                value={country}
                onChange={handleCountryChange}
            />
            <Input
                name="price"
                state={priceState}
                placeholder="Цена за 1 кг/шт"
                type="number"
                value={price}
                onChange={handlePriceChange}
            />
            <Input
                name="amount"
                state={amountState}
                placeholder="Количество"
                type="number"
                value={amount}
                onChange={handleAmountChange}
            />
            <Input
                name="calories"
                state={caloriesState}
                placeholder="Калории"
                type="number"
                value={calories}
                onChange={handleCaloriesChange}
            />
            <Input
                name="fats"
                state={fatsState}
                placeholder="Жиры"
                type="number"
                value={fats}
                onChange={handleFatsChange}
            />
            <Input
                name="carbohydrates"
                state={carbohydratesState}
                placeholder="Углеводы"
                type="number"
                value={carbohydrates}
                onChange={handleCarbohydratesChange}
            />
            <Input
                name="cellulose"
                state={celluloseState}
                placeholder="Клетчатка"
                type="number"
                value={cellulose}
                onChange={handleCelluloseChange}
            />
            <Input
                name="proteins"
                state={proteinsState}
                placeholder="Белки"
                type="number"
                value={proteins}
                onChange={handleProteinsChange}
            />
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
            />
            <Button type={"fill"} onClick={handleSubmit}>Сохранить</Button>
        </div>
    );
}

export default SaveProduct;