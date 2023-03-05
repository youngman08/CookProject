import styled from "styled-components";
export const ChiefContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;

  background-color: #35334d;
`;
export const ChiefWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;
export const ChiefCard = styled.div`
  background: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 600px;
  max-width: 650px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ChiefImage = styled.img`
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ChiefH1 = styled.h3`
  color: #fff;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChiefH2 = styled.h5`
  margin-bottom: 10px;
  text-align: center;
`;
export const ChiefP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: indigo;
  direction: rtl;
`;
