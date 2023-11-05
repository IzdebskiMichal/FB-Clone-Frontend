import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { People } from "@styled-icons/bootstrap/People";
import { Clock } from "@styled-icons/entypo/Clock";
import { Groups } from "@styled-icons/material-outlined/Groups";
import { Messenger } from "@styled-icons/boxicons-logos/Messenger";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { ArrowUpCircle } from "@styled-icons/bootstrap/ArrowUpCircle";
import { ArrowDownCircle } from "@styled-icons/bootstrap/ArrowDownCircle";
import { Games } from "@styled-icons/fluentui-system-regular/Games";
import { StayCurrentPortrait } from "@styled-icons/material/StayCurrentPortrait";
import { Plant } from "@styled-icons/remix-line/Plant";
import { MegaphoneFill } from "@styled-icons/bootstrap/MegaphoneFill";
import { Shop } from "@styled-icons/bootstrap/Shop";
import { GraphUp } from "@styled-icons/bootstrap/GraphUp";
import { BadgeAd } from "@styled-icons/bootstrap/BadgeAd";
import { PowerOutline } from "@styled-icons/typicons/PowerOutline";
import { Flag } from "@styled-icons/bootstrap/Flag";
import { PuzzleOutline } from "@styled-icons/typicons/PuzzleOutline";
import { CalendarPlusFill } from "@styled-icons/bootstrap/CalendarPlusFill";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { Heart } from "@styled-icons/bootstrap/Heart";

export const HomePage = styled.div`
  background-color: #18191a;
  display: flex;
  position: relative;
  box-sizing: border-box;
  z-index: 0;
  overflow: hidden;
`;

export const LeftPanel = styled.div`
  padding-top: 10px;
  width: 25%;
  background: #18191a;
  height: 100vh;
  position: fixed;
  top: 1;
  left: 0;
`;

export const MiddlePanel = styled.div`
  width: 50%;
  height: 200vh;
  background: white;
  margin-left: 25%;
`;

export const RightPanel = styled.div`
  padding-top: 10px;
  width: 25%;
  background: blue;
  overflow: auto;
  position: fixed;
  top: 1;
  right: 0;
`;

export const LeftPanelDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-left: 10px;
  &:hover {
    background-color: grey;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  height: 70vh;
  padding: 0px;
`;

export const LeftPanelLink = styled(Link)`
  text-decoration: none;
  color: #65676b;
  cursor: pointer;
`;

export const ProfilePic = styled.img`
  padding-right: 10px;
  width: 10%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 10px;
  margin-left: 10px;
  background: none;
  cursor: pointer;
  background-color: inherit;
  border: none;
  &:hover {
    background-color: grey;
  }
`;

export const FriendsIcon = styled(People)`
  width: 10%;
  height: 100%;
`;

export const MemoriesIcon = styled(Clock)`
  width: 10%;
  height: 100%;
`;

export const GroupsIcon = styled(Groups)`
  width: 10%;
  height: 100%;
`;

export const MessengerIcon = styled(Messenger)`
  width: 10%;
  height: 100%;
`;

export const FilmIcon = styled(Tv)`
  width: 10%;
  height: 100%;
`;

export const GamesIcon = styled(Games)`
  width: 10%;
  height: 100%;
`;

export const ShopIcon = styled(Shop)`
  width: 10%;
  height: 100%;
`;

export const GraphUpIcon = styled(GraphUp)`
  width: 10%;
  height: 100%;
`;

export const BadgeAdIcon = styled(BadgeAd)`
  width: 10%;
  height: 100%;
`;

export const PowerOutlineIcon = styled(PowerOutline)`
  width: 10%;
  height: 100%;
`;

export const FlagIcon = styled(Flag)`
  width: 10%;
  height: 100%;
`;

export const PuzzleOutlineIcon = styled(PuzzleOutline)`
  width: 10%;
  height: 100%;
`;

export const CalendarPlusFillIcon = styled(CalendarPlusFill)`
  width: 10%;
  height: 100%;
`;

export const CreditCardIcon = styled(CreditCard)`
  width: 10%;
  height: 100%;
`;

export const BookmarkIcon = styled(Bookmark)`
  width: 10%;
  height: 100%;
`;

export const HeartIcon = styled(Heart)`
  width: 10%;
  height: 100%;
`;

export const StayCurrentPortraitIcon = styled(StayCurrentPortrait)`
  width: 10%;
  height: 100%;
`;

export const PlantIcon = styled(Plant)`
  width: 10%;
  height: 100%;
`;

export const MegaphoneFillIcon = styled(MegaphoneFill)`
  width: 10%;
  height: 100%;
`;

export const ArrowUpCircleIcon = styled(ArrowUpCircle)`
  width: 10%;
  height: 100%;
  color: #65676b;
`;

export const ArrowDownCircleIcon = styled(ArrowDownCircle)`
  width: 10%;
  height: 100%;
  color: #65676b;
`;

export const P = styled.p`
  color: white;
  padding-left: 10px;
`;
