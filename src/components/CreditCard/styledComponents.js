import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const CreditCardDetailsContainer = styled.div`
  display: flex flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
`

export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreditCardHeading = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 9px;
`
export const HorizontalLine = styled.hr`
  width: 112px;
  border: 2px solid #ffd773;
  margin: 0;
`

export const CardContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 281px;
  height: 200px;
  border-radius: 19px;
  padding: 20px;
  box-shadow: 0px 4px 33px #344e7a;
`

export const CardNumber = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  margin: 0;
`

export const CardholderNameText = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  margin-top: 30px;
  line-height: 1.3;
`

export const CardholderName = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  margin-top: 12px;
  min-height: 16px;
  line-height: 1.33;
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 90%;
  max-width: 350px;
  border-radius: 12px;
  margin-top: 32px;
  padding: 32px 24px;
  box-shadow: 0px 4px 16px #d3d9e0;
`
export const PaymentMethodHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  margin-bottom: 12px;
  line-height: 1.2;
`

export const Input = styled.Input`
  font-size: 14px;
  color: #475569;
  font-family: 'Roboto';
  color: #475569;
  border: 1px solid #c3cad9;
  border-radius: 2px;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
`
