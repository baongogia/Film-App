import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleVisibility);
  }

  toggleVisibility() {
    if (window.pageYOffset >300) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <div
        onClick={this.scrollToTop}
        className={`scrollToTop ${this.state.isVisible ? "show" : "hide"}`}
      >
        <FontAwesomeIcon className="scrollToTop--btn dark:text-dark" icon={faCaretUp} />
      </div>
    );
  }
}
