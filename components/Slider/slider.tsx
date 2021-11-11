import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Header } from "semantic-ui-react";

export const SliderSegment = ({ mobile }: any) => {
  return (
    <div className="App">
      <AliceCarousel>
        <img
          src="images/20210917_eMed-0972.jpg"
          className="sliderimg"
          style={{ height: 700, width: "100%", objectFit: "cover" }}
        />
        <img
          src="images/20210917_eMed-0789.jpg"
          className="sliderimg"
          style={{ height: 700, width: "100%", objectFit: "cover" }}
        />
        <img
          src="images/colleagues-in-a-workspace-working-together-2021-08-27-00-06-11-utc.jpg"
          className="sliderimg"
          style={{ height: 700, width: "100%", objectFit: "cover" }}
        />
      </AliceCarousel>
      <div
        style={{
          position: "relative",
          bottom: "600px",
          textAlign: "center",
        }}
      >
        <Header
          as="h1"
          content="Testing Compliant"
          inverted
          style={{
            color: "white",
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 20,
            marginTop: mobile ? "1.5em" : "3em",
          }}
        />
        <Header
          as="h2"
          content="FREQUENTLY ASKED QUESTIONS"
          inverted
          style={{
            color: "white",
            fontSize: mobile ? "1.5em" : "1.7em",
            marginBottom: 20,
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em",
          }}
        />
      </div>
    </div>
  );
};
