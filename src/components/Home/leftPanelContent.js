import React, { useEffect, useState } from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  Button,
  LeftPanel,
  Ul,
  P,
} from "./HomeElement";
import renderLeftPanelItems from "./homeData";

export default function LeftPanelContent(isOpen, toggle) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <LeftPanel
      style={{
        top: `${scrollPosition}px`,
        position: "sticky",
      }}
    >
      <div style={{ width: "70%", overflow: "auto" }}>
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
          ;
        </Ul>
      </div>
    </LeftPanel>
  );
}
