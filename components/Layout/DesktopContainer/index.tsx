import {
  Visibility,
  Segment,
  Menu,
  Container,
} from "semantic-ui-react";
import { Component } from "react";
import { Media } from "@lib";
import { HomepageHeading } from "@components/Layout";
import { MenuItems } from "../MenuItems";
import { SliderSegment } from "@components/Slider/slider";
export default class DesktopContainer extends Component {
  state = {
    fixed: null,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <SliderSegment>
            <Menu
              id="top"
              fixed={fixed ? "top" : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <MenuItems />
              </Container>
            </Menu>
            <HomepageHeading mobile={false} />
          </SliderSegment>
        </Visibility>
        {children}
      </Media>
    );
  }
}
