import styled from 'styled-components';
import bgSlider from '~/assets/bg-slider.png';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 63vh;
  background-image: url(${bgSlider});
  background-size: cover;
  background-repeat: repeat;
  margin-bottom: 20px;

  > button {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  button {
    font-weight: 600;
    font-size: 14px;
  }

  @media (max-width: 744px) {
    height: 70vw;

    > button {
      display: none;
    }
  }
`;

export const ShareAndSave = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;

  display: flex;
  align-items: center;

  button {
    margin-left: 15px;
  }

  @media (max-width: 744px) {
    button {
      background: transparent !important;
      color: #fff !important;
      font-size: 25px;
      padding: 10px;

      svg {
        margin: 0;
      }

      span {
        display: none;
      }
    }
  }
`;

export const List = styled.div`
  display: flex;
  height: 100%;
  border: 0.5px solid #484848;

  .first {
    width: 50%;
    border-radius: 0;
    border: 0.5px solid #484848;
  }

  .col-right {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 50%;

    > div {
      width: 50%;
      border: 0.5px solid #484848;
      border-radius: 0;
    }
  }

  @media (min-width: 744px) {
    &:hover {
      div[src] {
        filter: brightness(0.8);

        &:hover {
          filter: brightness(1);
        }
      }
    }
  }

  @media (max-width: 1128px) {
    .first {
      width: 90%;
    }

    .col-right {
      > div {
        width: 100%;
      }
      > div:nth-child(even) {
        display: none;
      }
    }
  }

  @media (max-width: 744px) {
    width: 100%;
    border: 0;

    .first {
      width: 100%;
      border: 0;
    }

    .col-right {
      display: none;
    }
  }
`;
