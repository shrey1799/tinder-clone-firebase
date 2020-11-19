import React from "react";
import "../style/swipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons__container">
      <IconButton>
        <ReplayIcon className="yellow button_styling" fontSize="large" />
      </IconButton>

      <IconButton>
        <CloseIcon className="red button_styling" fontSize="large" />
      </IconButton>

      <IconButton>
        <StarIcon className="blue button_styling" fontSize="large" />
      </IconButton>

      <IconButton>
        <FavoriteIcon className="green button_styling" fontSize="large" />
      </IconButton>

      <IconButton>
        <FlashOnIcon className="purple button_styling" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
