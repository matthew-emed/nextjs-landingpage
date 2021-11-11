import React from "react";
import { Footer } from "@components";
import {
  InfoSegment,
  AboutSegment,
  StudiesSegment,
} from "@components/BodySegment";
import { SliderSegment } from "@components/Slider/slider";

export const HomepageComponent = () => (
  <>
    <InfoSegment />
    <AboutSegment />
    <StudiesSegment />
    <Footer />
  </>
);
