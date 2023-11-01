import React from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  Button,
  Ul,
  P,
} from "./HomeElement";
import renderLeftPanelItems from "./homeData";

export default function LeftPanelContent({ isOpen, toggle }) {
  return (
    <div
      style={{
        width: "70%",
        overflow: "auto",
      }}
    >
      <Ul>
        {renderLeftPanelItems(isOpen)}
        <li>
          <Button onClick={toggle}>
            {isOpen ? (
              <>
                <ArrowUpCircleIcon /> <P>See less</P>
              </>
            ) : (
              <>
                <ArrowDownCircleIcon /> <P>See more</P>
              </>
            )}
          </Button>
        </li>
      </Ul>
    </div>
  );
}
