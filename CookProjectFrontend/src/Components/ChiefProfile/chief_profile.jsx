import styled from "styled-components";
export const ChiefContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
`;
export const ChiefImage = styled.img`
  height: 400px;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ChiefH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;
`;
export const ChiefH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  direction: rtl;
`;
export const ChiefP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: indigo;
  direction: rtl;
`;
