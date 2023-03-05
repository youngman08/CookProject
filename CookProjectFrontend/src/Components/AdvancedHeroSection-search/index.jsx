import React, { useState, useEffect } from "react";
import Hero from "../../images/hero2.jpg";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../ButtonElements";
import { useNavigate } from "react-router-dom";
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
} from "./AdvancedHeroElements";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { MultiSelect } from "react-multi-select-component";
import FoodList from "../Foods/FoodList";

const FoodCategoryOptions = [
  {
    value: "",
    label: "همه",
  },
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

const HeroSectionSearch = ({setFoods}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const navigate = useNavigate();
  const search = () => {
    navigate("/search");
  };
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tag, setTag] = useState("");
  const [preparation_time, setPreparation_time] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [fetchData, setfetchData] = useState([]);
  const onSubmit = (data) => {
    let mingredients = ingredients.map((resDataItem) => resDataItem.value);
    data.ingredients = mingredients;
    axios
      .post(
        `http://127.0.0.1:8000/api/recipes/advanced_filter/`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setFoods(response.data);
        navigate("/foods");
      })
      .catch((error) => {
        console.log("NDD");
      });
  };

  const [ingredientList, setingredientList] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/foodstuffs/")
      .then((res) => res.json())
      .then((data) => {
        setingredientList([...data]);
      });
  }, []);
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>جست و جوی پیشرفته!</HeroH1>
        <Searchcontainer>
          <form className="f-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <br />
              <div>
                <HeroLabel for="category">دسته‌ی غذایی: &emsp; </HeroLabel>
                <select
                  {...register("category")}
                  name="category"
                  id="category"
                  style={{
                    borderRadius: "25px",
                    textAlign: "center",
                    width: "55%",
                    fontSize: "16px",
                  }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  {FoodCategoryOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <br />
              <div>
                <HeroLabel>درجه‌ی سختی: </HeroLabel>
                <br />
                <div className="difficulty">
                  <input
                    {...register("difficulty")}
                    type="radio"
                    value=""
                    checked={difficulty === ""}
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  />{" "}
                  همه &emsp;
                  <input
                    {...register("difficulty")}
                    type="radio"
                    value="1"
                    checked={difficulty === "1"}
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  />{" "}
                  آسان &emsp;
                  <input
                    {...register("difficulty")}
                    type="radio"
                    value="2"
                    checked={difficulty === "2"}
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  />{" "}
                  متوسط &emsp;
                  <input
                    {...register("difficulty")}
                    type="radio"
                    value="3"
                    checked={difficulty === "3"}
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  />{" "}
                  سخت
                </div>
              </div>
              <br />
              <div>
                <HeroLabel>مدت زمان آماده شدن: </HeroLabel>
                <br />
                <div className="preparation">
                  <input
                    {...register("preparation_time")}
                    type="radio"
                    value=""
                    checked={preparation_time === ""}
                    onChange={(e) => {
                      setPreparation_time(e.target.value);
                    }}
                  />{" "}
                  همه &emsp;
                  <input
                    {...register("preparation_time")}
                    type="radio"
                    value="1"
                    checked={preparation_time === "1"}
                    onChange={(e) => {
                      setPreparation_time(e.target.value);
                    }}
                  />{" "}
                  زمان‌بر &emsp;
                  <input
                    {...register("preparation_time")}
                    type="radio"
                    value="2"
                    checked={preparation_time === "2"}
                    onChange={(e) => {
                      setPreparation_time(e.target.value);
                    }}
                  />{" "}
                  معمولی &emsp;
                  <input
                    {...register("preparation_time")}
                    type="radio"
                    value="3"
                    checked={preparation_time === "3"}
                    onChange={(e) => {
                      setPreparation_time(e.target.value);
                    }}
                  />{" "}
                  سریع!
                </div>
              </div>
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
                  }}
                  {...register("meal_tags")}
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </div>
              <br />
              <HeroLabel>مواد غذایی: </HeroLabel>
              <br />
              <div style={{ maxWidth: "330px", margin: "auto" }}>
                <MultiSelect
                  options={ingredientList}
                  value={ingredients}
                  onChange={setIngredients}
                  labelledBy="انتخاب کنید"
                  style={{
                    borderRadius: "35px",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <div className="d-button">
              <button type="submit" className="f-button">
                پیدا کن!
              </button>
            </div>
          </form>
        </Searchcontainer>
        <br />
        <div>
          <Button
            onClick={search}
            primary={+true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            dark={+true}
          >
            جستجوی ساده{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </div>
      </HeroContent>
      {fetchData && <FoodList foods={fetchData}/>}
    </HeroContainer>
  );
};

export default HeroSectionSearch;
// <DropdownButton
//   alignRight
//   Multiselect
//   title="مواد غذایی"
//   id="Ingredients"
//   name="Ingredients"
//   onSelect={handleSelect}
//     >
//           <Dropdown.Item eventKey="" active>همه</Dropdown.Item>
//           <Dropdown.Divider />
//           {ingredientList.map((data, key) => {
//             return(
//               <Dropdown.Item eventKey={data.name}>{data.name}</Dropdown.Item>
//             );
//           })}
//   </DropdownButton>
//   <p>You selected {value}</p> */}

// <Select
//     id="Ingredients"
//     name="Ingredients"
//     placeholder="انتخاب کنید"
//     value={selectedIngredients}
//     onChange={handleChange}
//     options=
//       {ingredientList.map((data, key) => {
//         return(
//           <option value="{data.name}">{data.name}</option>
//         );
//       })}
//     isSearchable
//     isMulti
//   />
