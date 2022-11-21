import * as A from "./Weather.styles";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

export default function WeatherUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>현재 날씨를 확인해보세요!</A.Title>

        <A.BoxWrap>
          <A.ContentsBox>
            {props.loading ? (
              <ClipLoader
                color="gold"
                loading={props.loading}
                // cssOverride={override}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <>
                <A.TextWrap>
                  <A.Lable>CITY : &nbsp;</A.Lable>
                  <A.Text> {props.weather?.name}</A.Text>
                </A.TextWrap>

                <A.TextWrap>
                  <A.Lable>TEMPERATURE : &nbsp;</A.Lable>
                  <A.Text> {props.weather?.main?.temp}℃</A.Text>
                </A.TextWrap>

                <A.TextWrap>
                  <A.Lable>SKY : &nbsp;</A.Lable>
                  <A.Text> {props.weather?.weather[0].description}</A.Text>
                </A.TextWrap>
              </>
            )}
          </A.ContentsBox>

          <A.BtnBox>
            <Button variant="warning">Current Location</Button>
            {/* <Button variant="warning">NewYork</Button> */}

            {props.cities.map((city, index) => (
              <Button
                variant="warning"
                key={index}
                onClick={() => props.setCity(city)}
              >
                {" "}
                {city}
              </Button>
            ))}
          </A.BtnBox>
        </A.BoxWrap>
      </A.Wrapper>
    </>
  );
}
