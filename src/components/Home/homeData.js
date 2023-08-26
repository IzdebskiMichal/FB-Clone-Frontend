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
    title: "Play games",
    details: {
      name: "Games",
      icon: GamesIcon,
    },
    id: 7,
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
