import React from "react";
import styled from "styled-components";
import bannerImg from "../assests/bannerImg.png";
import Card from "./Card";
const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="heroBanner">
          <div className="leftBox">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dignissimos repellendus odio saepe dolor sequi doloremque quaerat.
              Repellat itaque reprehenderit voluptatibus aspernatur qui ducimus
              omnis neque atque, placeat, eaque autem?
            </p>
          </div>
          <div className="rightBox">
            <img src={bannerImg} alt="banner" loading="lazy" />
          </div>
        </div>
      </Wrapper>
      <Card />
    </>
  );
};

export default Home;
const Wrapper = styled.section`
  .heroBanner {
    padding: 0 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f4f0e8;
  }
  .leftBox {
    width: 60%;
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .rightBox {
    width: 40%;
    img {
      width: 25rem;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  @media (max-width: 430px) {
    .leftBox {
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 960px) {
    .heroBanner {
      flex-direction: column-reverse;
      padding: 0 1rem;
    }
    .leftBox {
      width: 80%;
      p {
        text-align: center;
        margin-bottom: 2rem;
      }
    }
    .rightBox {
      width: auto;
      img {
        width: 18rem;
      }
    }
  }
`;
