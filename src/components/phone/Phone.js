import { Button } from "reactstrap";
import React from "react";
import "./Phone.css";

export default function Phone() {
  return (
    <div className="phone">
      <Button>
        <i class="fa-solid fa-phone-volume"></i>
      </Button>
    </div>
  );
}
