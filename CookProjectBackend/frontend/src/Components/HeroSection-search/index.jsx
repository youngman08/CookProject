import React, { useState } from "react";

import Hero from "../../images/hero-search.jpg";
import { Button } from "../ButtonElements";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  ImageBg,
  Searchcontainer,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import axios from "axios";
import {BASE_API} from "../../App";

const HeroSectionSearch = ({setFoods}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const navigate = useNavigate();
  const advanced_search = () => {
    navigate('/advanced_search');
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .get(
        BASE_API + `recipes/filter/?criterion=name__contains&name__contains=${data.name__contains}`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setFoods(response.data); //results
        navigate("/foods");
      })
      .catch((error) => {
        console.log("error in filter by name");
      });
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>غذای مورد علاقت رو پیدا کن!</HeroH1>
        <Searchcontainer>
          <form className="f-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="اسم غذا"
                  class="f-input"
                  {...register("name__contains")}
                />
              </div>
            </div>
            <div className="d-button">
              <button type="submit" className="f-button">
              جست وجو
              </button>
            </div>
          </form>
        </Searchcontainer>
        <br/>
        <div>
            <Button onClick={advanced_search} primary={+true} onMouseEnter={onHover} onMouseLeave={onHover} dark={+true}>
                جستجوی پیشرفته{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </div>

      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSectionSearch;
