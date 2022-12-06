import styled from "styled-components"

export const CardStyled = styled.div`
  width: 100%;
  .card {
    gap: 16px;
    display: flex;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6e6e6;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    @media (max-width: 480px) {
      flex-direction: column;
    }

    &__image {
      object-fit: cover;
      margin-bottom: 10px;
    }

    &__content {
      font-size: 14px;
      line-height: 1.5;
      flex: 1;

      &__artist {
        font-weight: 600;
        border-bottom: 3px solid #000;
      }

      &__title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }

    &__stats {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__text {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;

          a {
            color: #000;
            text-decoration: underline;

            &:hover {
              color: #000;
            }
          }
        }
      }
    }
  }
`

export const LinkStyled = styled.a``
