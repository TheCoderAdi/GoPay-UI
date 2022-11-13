import React from "react";
import styled from "styled-components";
import buyC from "../assests/buy_ccy_2.png";
import spotcash from "../assests/cash_1.png";
import wallet from "../assests/card_2.jpg";
import localStore from "../assests/store_1.png";
import cSupport from "../assests/Support.png";
const Card = () => {
  return (
    <>
      <Wrapper>
        <div className="cardSection">
          <div className="cards">
            <div className="card_img">
              <img src={buyC} alt="Buy Currency" />
            </div>
            <div className="card_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, deserunt quos voluptatem quidem iusto similique
                cumque voluptas, blanditiis ipsam, quia delectus exercitationem
                adipisci?
              </p>
            </div>
          </div>
        </div>
        <div className="cardSection bgColor">
          <div className="cards dir bgColor">
            <div className="card_img">
              <img src={spotcash} alt="Buy Currency" />
            </div>
            <div className="card_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, deserunt quos voluptatem quidem iusto similique
                cumque voluptas, blanditiis ipsam, quia delectus exercitationem
                adipisci?
              </p>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="cards">
            <div className="card_img">
              <img src={wallet} alt="Buy Currency" />
            </div>
            <div className="card_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, deserunt quos voluptatem quidem iusto similique
                cumque voluptas, blanditiis ipsam, quia delectus exercitationem
                adipisci?
              </p>
            </div>
          </div>
        </div>
        <div className="cardSection bgColor">
          <div className="cards dir bgColor">
            <div className="card_img">
              <img src={localStore} alt="Buy Currency" />
            </div>
            <div className="card_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, deserunt quos voluptatem quidem iusto similique
                cumque voluptas, blanditiis ipsam, quia delectus exercitationem
                adipisci?
              </p>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="cards">
            <div className="card_img">
              <img src={cSupport} alt="Buy Currency" />
            </div>
            <div className="card_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, deserunt quos voluptatem quidem iusto similique
                cumque voluptas, blanditiis ipsam, quia delectus exercitationem
                adipisci?
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Card;
const Wrapper = styled.section`
  .cardSection {
    width: 100%;
    padding: 0 6rem;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 50vh;
  }
  .bgColor {
    background-color: #f4f0e8;
  }
  .dir {
    flex-direction: row-reverse;
  }
  .card_img {
    width: 30%;
    img {
      width: 20rem;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
  .card_text {
    width: 60%;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 430px) {
    .card_text {
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 960px) {
    .cardSection {
      padding: 0 1rem;
    }
    .card_img {
      img {
        width: 16rem;
      }
    }
  }
  @media (max-width: 1080px) {
    .cards {
      flex-direction: column;
      min-height: 90vh;
      justify-content: space-evenly;
    }
    .card_img {
      width: auto;
    }
    .card_text {
      width: 90%;
      p {
        text-align: center;
      }
    }
  }
`;
