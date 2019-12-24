import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_GLOW_TOGGLE from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_QUICKIE_TOGGLE_RESET from "../../../actions/Treatments/Quickie/ACTION_QUICKIE_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import "./Glow.css";

const Glow = props => {
  const calmToggle = useSelector(state => state.calmToggle.toggle);
  const clarifyToggle = useSelector(state => state.clarifyToggle.toggle);
  const bacialToggle = useSelector(state => state.bacialToggle.toggle);
  const glowToggle = useSelector(state => state.glowToggle.toggle);
  const rejuvenateToggle = useSelector(state => state.rejuvenateToggle.toggle);
  const quenchToggle = useSelector(state => state.quenchToggle.toggle);
  const quickieToggle = useSelector(state => state.quickieToggle.toggle);
  const chemicalpeelToggle = useSelector(
    state => state.chemicalpeelToggle.toggle
  );
  const dermaplaningToggle = useSelector(
    state => state.dermaplaningToggle.toggle
  );
  const cbdToggle = useSelector(state => state.cbdToggle.toggle);
  const microneedleToggle = useSelector(
    state => state.microneedleToggle.toggle
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!glowToggle) {
      dispatch(ACTION_GLOW_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
      }
      if (rejuvenateToggle) {
        dispatch(ACTION_REJUVENATE_TOGGLE_RESET());
      }
      if (quenchToggle) {
        dispatch(ACTION_QUENCH_TOGGLE_RESET());
      }
      if (quickieToggle) {
        dispatch(ACTION_QUICKIE_TOGGLE_RESET());
      }
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_GLOW_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (glowToggle) {
      return (
        <>
          <div className="card_description_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>50 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$70</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Accelerate brightening and clarify skin with Glow. Hyper-pigmentation
          and sun damage don’t stand a chance.
        </p>
      );
    }
  };

  const SuitcaseBounce = Keyframes.Spring({
    suitcaseBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 }
      },
      {
        marginTop: "-5px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-5",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "-3px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 }
      }
    ]
  });

  const bookButtonBounce = () => {
    if (glowToggle) {
      return (
        <SuitcaseBounce state="suitcaseBounce">
          {styles => (
            <FontAwesomeIcon
              className="card_suitcase_icon"
              style={styles}
              icon={faSuitcase}
            />
          )}
        </SuitcaseBounce>
      );
    } else {
      return (
        <FontAwesomeIcon
          className="card_suitcase_icon"
          style={{
            color: glowToggle ? "rgb(155, 98, 107)" : "rgb(175, 118, 127)",
            transition: "ease all 0.5s"
          }}
          icon={faSuitcase}
        />
      );
    }
  };
  return (
    <InView
      threshold={props.initialScreenSize >= 1200 ? 0.3 : 0.2}
      triggerOnce={true}
    >
      {({ inView, ref }) => (
        <div className="glow_wrapping" ref={ref}>
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {props => (
                <section className="card" style={props}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: glowToggle
                        ? "rgb(255, 198, 207)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: glowToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <Spring
                      from={{ x: 210, fill1: "white", fill2: "white" }}
                      to={{
                        x: 0,
                        fill1: "rgba(253, 253, 150, 0.7)",
                        fill2: "255, 179, 71, 0.6"
                      }}
                      config={{ delay: 300, duration: 1000 }}
                    >
                      {props => (
                        <svg
                          className="card_svg"
                          width="100%"
                          height="15rem"
                          viewBox="0 0 50.006 50.006"
                        >
                          <circle
                            cx="25"
                            cy="25"
                            r="23"
                            stroke={
                              glowToggle
                                ? "rgb(235, 178, 187)"
                                : "rgba(191, 191, 191)"
                            }
                            strokeWidth="0.5"
                            fill="white"
                          />
                          <g transform="translate(14, -97.5)">
                            <animated.path
                              className="glow_icon_path"
                              strokeDasharray="210"
                              strokeDashoffset={`${props.x}`}
                              stroke="#000"
                              strokeWidth="0.8"
                              fill={`${props.fill1}`}
                              d="M22.28 292.51c1.195-.877 2.3-1.595 2.457-1.595.156 0 1.357.792 2.67 1.76 1.378 1.017 2.465 1.683 2.574 1.577.104-.1.772-1.291 1.485-2.647 1.537-2.922 1.315-2.831 5.064-2.072 1.39.282 2.568.47 2.62.42.051-.052.146-1.446.21-3.1.065-1.653.177-3.064.25-3.136.073-.072 1.4-.465 2.948-.873s2.88-.782 2.959-.83c.078-.047-.372-1.253-1-2.678-.63-1.425-1.144-2.772-1.144-2.992 0-.252.822-1.09 2.211-2.257 1.216-1.021 2.21-1.954 2.21-2.074 0-.12-.994-1.053-2.21-2.074-1.39-1.166-2.21-2.005-2.21-2.257 0-.22.514-1.567 1.142-2.992.63-1.425 1.08-2.63 1-2.679-.078-.047-1.41-.42-2.958-.829-1.549-.408-2.875-.801-2.948-.873-.073-.072-.185-1.483-.25-3.137-.064-1.653-.159-3.047-.21-3.098-.052-.051-1.23.137-2.62.419-3.75.76-3.527.85-5.064-2.072-.713-1.356-1.381-2.547-1.485-2.648-.11-.105-1.196.56-2.575 1.578-1.312.968-2.512 1.76-2.667 1.76-.156 0-1.356-.792-2.668-1.76-1.38-1.017-2.466-1.683-2.575-1.578-.104.1-.772 1.292-1.485 2.648-1.537 2.922-1.315 2.831-5.064 2.072-1.39-.282-2.568-.47-2.62-.42-.051.052-.146 1.446-.21 3.1-.065 1.653-.177 3.064-.25 3.136-.072.072-1.399.465-2.948.873-1.548.408-2.88.782-2.958.83-.08.047.37 1.253 1 2.678.629 1.425 1.143 2.772 1.143 2.992 0 .252-.822 1.09-2.21 2.257-1.217 1.021-2.212 1.954-2.212 2.074 0 .12.995 1.053 2.211 2.074 1.39 1.166 2.211 2.005 2.211 2.257 0 .22-.514 1.567-1.143 2.992-.63 1.425-1.08 2.63-1 2.678.078.048 1.41.422 2.958.83 1.549.408 2.876.801 2.948.873.073.072.185 1.483.25 3.136.064 1.654.159 3.048.21 3.1.052.05 1.23-.138 2.62-.42 3.74-.757 3.53-.841 5.042 2.011 1.607 3.031 1.575 2.984 1.873 2.751.134-.105 1.222-.908 2.417-1.785z"
                            />
                            <animated.path
                              className="glow_icon_path"
                              strokeDasharray="210"
                              strokeDashoffset={`${props.x}`}
                              stroke="#000"
                              strokeWidth="0.8"
                              d="M22.779 287.564c-5.25-.7-9.61-3.737-12.053-8.39-1.225-2.334-1.712-4.372-1.712-7.161 0-6.082 3.24-11.281 8.747-14.032 4.271-2.133 9.684-2.133 13.955 0 4.14 2.068 7.155 5.736 8.31 10.108.589 2.231.589 5.617 0 7.848-.53 2.007-1.785 4.437-3.165 6.127-3.192 3.91-9 6.18-14.082 5.5z"
                              fill={`${props.fill2}`}
                            />
                          </g>
                        </svg>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: glowToggle
                          ? "1px solid rgbA(155, 98, 107, 0.4)"
                          : "1px solid rgbA(211, 211, 211)"
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: glowToggle
                        ? "rgba(255, 198, 207, 0.2)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: glowToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s"
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>GLOW</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Brightening
                      </p>
                      {cardDescriptionHandler()}
                      <div
                        className="card_bottom_wrapper"
                        style={{
                          color: glowToggle
                            ? "rgb(155, 98, 107)"
                            : "rgb(175, 118, 127)",
                          transition: "ease all 0.5s"
                        }}
                      >
                        <p className="card_toggler" onClick={handleToggle}>
                          {glowToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
                        </p>
                        <span className="card_bottom_spacer" />
                        {bookButtonBounce()}
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default Glow;
