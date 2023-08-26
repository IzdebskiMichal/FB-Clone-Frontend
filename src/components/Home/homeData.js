import profilePic from "../../images/profile-picture.png";
import {
  LeftPanelDiv,
  LeftPanelLink,
  FriendsIcon,
  MemoriesIcon,
  GroupsIcon,
  MessengerIcon,
  FilmIcon,
  GamesIcon,
  StayCurrentPortraitIcon,
  PlantIcon,
  MegaphoneFillIcon,
  ShopIcon,
  GraphUpIcon,
  BadgeAdIcon,
  PowerOutlineIcon,
  FlagIcon,
  PuzzleOutlineIcon,
  CalendarPlusFillIcon,
  CreditCardIcon,
  BookmarkIcon,
  HeartIcon,
} from "../../components/Home/HomeElement.js";

const user = {
  name: "Michał Izdebski",
  imgUrl: { profilePic },
  imgSize: "10%",
};

const friendsTitle = "friends";
const memoriesTitle = "memories";
const groupsTitle = "groups";
const messengerTitle = "messenger";
const filmTitle = "film";
const marketplaceTitle = "marketplace";
const activitesTitle = "activites";
const savedsTitle = "saved";
const currentTitle = "current";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const leftPanelVisibleItems = [
  {
    title: "profile",
    details: { name: user.name, imgUrl: user.imgUrl, imgSize: user.imgSize },
    id: 1,
  },
  {
    title: friendsTitle,
    details: {
      name: capitalizeFirstLetter(friendsTitle),
      icon: FriendsIcon,
    },
    id: 2,
  },
  {
    title: memoriesTitle,
    details: {
      name: capitalizeFirstLetter(memoriesTitle),
      icon: MemoriesIcon,
    },
    id: 3,
  },
  {
    title: groupsTitle,
    details: {
      name: capitalizeFirstLetter(groupsTitle),
      icon: GroupsIcon,
    },
    id: 4,
  },
  {
    title: messengerTitle,
    details: {
      name: capitalizeFirstLetter(messengerTitle),
      icon: MessengerIcon,
    },
    id: 5,
  },
  {
    title: filmTitle,
    details: {
      name: capitalizeFirstLetter(filmTitle),
      icon: FilmIcon,
    },
    id: 6,
  },
];

const leftSidePanelHiddenItems = [
  {
    title: "games",
    details: {
      name: "Play games",
      icon: GamesIcon,
    },
    id: 7,
  },
  {
    title: "ad",
    details: {
      name: "Ad centre",
      icon: MegaphoneFillIcon,
    },
    id: 8,
  },
  {
    title: "climate",
    details: {
      name: "Climate knowledge centre",
      icon: PlantIcon,
    },
    id: 9,
  },
  {
    title: marketplaceTitle,
    details: {
      name: capitalizeFirstLetter(marketplaceTitle),
      icon: ShopIcon,
    },
    id: 10,
  },
  {
    title: "admgr",
    details: {
      name: "Ad manager",
      icon: GraphUpIcon,
    },
    id: 11,
  },
  {
    title: "adactivity",
    details: {
      name: "Last ad activity",
      icon: BadgeAdIcon,
    },
    id: 12,
  },
  {
    title: "crisis",
    details: {
      name: "Reaction to crisis",
      icon: PowerOutlineIcon,
    },
    id: 13,
  },
  {
    title: "pages",
    details: {
      name: "Pages",
      icon: FlagIcon,
    },
    id: 14,
  },
  {
    title: "gamesvids",
    details: {
      name: "Videos of games",
      icon: PuzzleOutlineIcon,
    },
    id: 15,
  },
  {
    title: activitesTitle,
    details: {
      name: capitalizeFirstLetter(activitesTitle),
      icon: CalendarPlusFillIcon,
    },
    id: 16,
  },
  {
    title: "orders",
    details: {
      name: "Orders and payments",
      icon: CreditCardIcon,
    },
    id: 17,
  },
  {
    title: savedsTitle,
    details: {
      name: capitalizeFirstLetter(savedsTitle),
      icon: BookmarkIcon,
    },
    id: 18,
  },
  {
    title: "charity",
    details: {
      name: "Donating to charity",
      icon: HeartIcon,
    },
    id: 19,
  },
  {
    title: currentTitle,
    details: {
      name: capitalizeFirstLetter(currentTitle),
      icon: StayCurrentPortraitIcon,
    },
    id: 20,
  },
];

export default function renderLeftPanelItems(isOpen) {
  let visibleItems = isOpen
    ? leftPanelVisibleItems.concat(leftSidePanelHiddenItems)
    : leftPanelVisibleItems;
  console.log("Visible items:", visibleItems);
  console.log("isOpen value:", isOpen);
  return visibleItems.map((item) => {
    console.log(item.id);
    return (
      <li>
        <LeftPanelLink to={"/" + item.title}>
          <LeftPanelDiv>
            {!item.details.imgUrl ? (
              <item.details.icon />
            ) : (
              <img
                src={item.details.imgUrl.profilePic}
                alt={"Photo of " + item.details.name}
                style={{
                  width: item.details.imgSize,
                  padding: 0,
                  margin: 0,
                }}
              />
            )}
            <p style={{ paddingLeft: 10, color: "white" }}>
              {item.details.name}
            </p>
          </LeftPanelDiv>
        </LeftPanelLink>
      </li>
    );
  });
}
