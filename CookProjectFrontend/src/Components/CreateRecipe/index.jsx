import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ButtonElements";
import axios from "axios";
import Sidebar from "../Sidebar";
import Select from "react-select";
import Navbar from "../Navbar-second";
import create_recipe_img from "../../images/create_recipe.jpg";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroLi,
  HeroLabel,
  ImageBg,
  Searchcontainer,
  ArrowForward,
  ArrowRight,
} from "./createRecipe";
import { useLogin } from "../../hooks/useLogin";
import { margin } from "@mui/system";

// Enum: FoodCategory
const FoodCategoryOptions = [
  {
    value: "1",
    label: "آسیایی",
  },
  {
    value: "2",
    label: "دریایی",
  },
  {
    value: "3",
    label: "گیاهی",
  },
  {
    value: "4",
    label: "کباب",
  },
  {
    value: "5",
    label: "ایرانی",
  },
  {
    value: "6",
    label: "فست فود",
  },
];
// selected value:  {category}
const FoodCategoryMultipleCheckBoxComponent = () => {
  const [category, setCategory] = useState("1");
  function handleChange(event) {
    setCategory(event.target.value);
  }
  return (
    <div>
      <HeroLabel for="category">دسته‌ی غذایی: &emsp; </HeroLabel>
      <select
        value={category}
        onChange={handleChange}
        name="category"
        id="category"
        style={{
          borderRadius: "25px",
          textAlign: "center",
          width: "55%",
          fontSize: "20px",
          height: "40px",
        }}
      >
        {FoodCategoryOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

// Enum: DifficultyType
//selected value: {difficulty}
const Difficulty = () => {
  const [difficulty, setDifficulty] = useState("2");
  function onChangeValue(event) {
    setDifficulty(event.target.value);
  }

  return (
    <div>
      <HeroLabel>درجه‌ی سختی: </HeroLabel>
      <br />
      <div onChange={onChangeValue}>
        &emsp;&emsp;
        <input
          type="radio"
          value="1"
          name="difficulty"
          checked={difficulty === "1"}
        />{" "}
        آسان &emsp;
        <input
          type="radio"
          value="2"
          name="difficulty"
          checked={difficulty === "2"}
        />{" "}
        متوسط &emsp;
        <input
          type="radio"
          value="3"
          name="difficulty"
          checked={difficulty === "3"}
        />{" "}
        سخت
      </div>
    </div>
  );
};

// Enum: DurationType
//selected value: {preparation_time}
const PreparationTime = () => {
  const [preparation_time, setPreparation_time] = useState("2");
  function onChangeValue(event) {
    setPreparation_time(event.target.value);
  }

  return (
    <div>
      <HeroLabel>مدت زمان آماده شدن: </HeroLabel>
      <br />
      <div onChange={onChangeValue}>
        &emsp; &emsp;
        <input
          type="radio"
          value="1"
          name="preparation_time"
          checked={preparation_time === "1"}
        />{" "}
        زمان‌بر &emsp;
        <input
          type="radio"
          value="2"
          name="preparation_time"
          checked={preparation_time === "2"}
        />{" "}
        معمولی &emsp;
        <input
          type="radio"
          value="3"
          name="preparation_time"
          checked={preparation_time === "3"}
        />{" "}
        سریع!
      </div>
    </div>
  );
};

// Enum: UnitType
const UnitTypeOptions = [
  {
    value: "1",
    label: "گرم",
  },
  {
    value: "2",
    label: "میلی لیتر",
  },
  {
    value: "3",
    label: "پیمانه",
  },
  {
    value: "4",
    label: "قاشق",
  },
  {
    value: "5",
    label: "ورقه",
  },
  {
    value: "6",
    label: "عدد",
  },
];
// selected value:  {category}
const UnitTypeComponent = () => {
  const [unitType, setUnitType] = useState("1");
  function handleChange(event) {
    setUnitType(event.target.value);
  }
  return (
    <select
      value={unitType}
      onChange={handleChange}
      name="unitType"
      id="unitType"
      style={{
        borderRadius: "10px",
        textAlign: "center",
        width: "95px",
        fontSize: "16px",
        height: "45px",
        padding: "10px",
        marginRight: "10px",
      }}
    >
      {UnitTypeOptions.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

const Ingredients = () => {
  const [inputFields, setInputFields] = useState([
    { name: "", amount: "", unit: "" },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { name: "", age: "" };

    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    if (index == 0) return;
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const url = "http://127.0.0.1:8000/api/foodstuffs/"; //View Foodstuffs
  const [ingredientList, setingredientList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setingredientList([...data]))
      .then(setisLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          {" "}
          <span className="sr-only">در حال دریافت اطلاعات...</span>{" "}
        </div>
      ) : (
        <div></div>
      )}

      <HeroLabel>موارد لازم برای چهار نفر:</HeroLabel>
      <br />
      {inputFields.map((input, index) => {
        return (
          <div key={index} className="ingredients">
            <div className="ingredients-container">
              <Select
                id="name"
                name="name"
                placeholder="ماده غذایی"
                style={{
                  borderRadius: "10px !important",
                  textAlign: "center",
                  width: "50px",
                }}
                options={ingredientList}
                isSearchable
              />
            </div>
            <input
              name="amount"
              type="number"
              placeholder="مقدار"
              value={input.amount}
              style={{
                borderRadius: "10px",
                textAlign: "center",
                width: "95px",
                height: "45px",
                padding: "10px",
              }}
              onChange={(event) => handleFormChange(index, event)}
            />
            <UnitTypeComponent />
            &emsp;
            <button
              onClick={() => removeFields(index)}
              style={{
                borderRadius: "10px",
                textAlign: "center",
                width: "72px",
                height: "45px",
                padding: "10px",
                textAlign: "center",
                width: "30%",
                alignItems: "center",
                margin: "10px auto",
              }}
            >
              حذف
            </button>
            <hr />
          </div>
        );
      })}
      <button
        onClick={addFields}
        style={{
          borderRadius: "10px",
          textAlign: "center",
          width: "200px",
          height: "45px",
          padding: "10px",
        }}
      >
        افزودن ماده غذایی...
      </button>
    </div>
  );
};

const CreateRecipe = () => {
  const { register, handleSubmit } = useForm();
  const user = useLogin();

  if (user === "unauth") {
    return <div>ابتدا وارد شوید</div>;
  }

  let chief = user.username;

  const onSubmit = (data) => {
    axios
      .post(`http://127.0.0.1:8000/api/recipes/`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert(JSON.stringify(response));
        //results
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <HeroContainer style={{ backgroundImage: `url(${create_recipe_img})` }}>
      <HeroBg>
        <HeroContent>
          <HeroH1>غذای جدیدی تعریف کنید!</HeroH1>
          <Searchcontainer>
            <form onSubmit={handleSubmit(onSubmit)} className="my-form">
              <div>
                <HeroLabel style={{ fontSize: `30px` }}>
                  آشپز: {chief}
                </HeroLabel>
                <div>
                  <div>
                    <HeroLabel>نام غذا:</HeroLabel>
                    <input
                      type="text"
                      placeholder="نام غذا را وارد کنید"
                      id="name"
                      class="f-input"
                      style={{
                        textAlign: "center",
                        width: "100%",
                        fontSize: "14px",
                      }}
                      {...register("name")}
                    />
                  </div>
                </div>
                <br />
                <div>
                  <HeroLabel>دستور پخت:</HeroLabel>
                  <textarea
                    placeholder="طرز تهیه غذا را بنویسید..."
                    id="description"
                    class="f-input"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      height: "187px",
                      marginBottom: "10px",
                    }}
                    {...register("description")}
                  />
                </div>
                <FoodCategoryMultipleCheckBoxComponent />
                <br />
                <Difficulty />
                <br />
                <PreparationTime />
                <br />
                <div>
                  <input
                    type="text"
                    placeholder="شامل چه تگ‌هایی باشد؟  مثلا: #صبحانه"
                    id="meal_tags"
                    class="f-input"
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "14px",
                      height: "40px",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                    {...register("meal_tags")}
                  />
                </div>
                <br />
                <Ingredients />
              </div>

              <div className="d-button">
                <button type="submit" className="f-button-ing">
                  بساز !
                </button>
              </div>
            </form>
          </Searchcontainer>
          <br />
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  );
};

export default CreateRecipe;
