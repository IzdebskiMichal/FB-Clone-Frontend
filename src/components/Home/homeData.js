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
      imgUrl: undefined,
      icon: FriendsIcon,
    },
    id: 2,
  },
  {
    title: memoriesTitle,
    details: {
      name: capitalizeFirstLetter(memoriesTitle),
      imgUrl: undefined,
      icon: MemoriesIcon,
    },
    id: 3,
  },
  {
    title: groupsTitle,
    details: {
      name: capitalizeFirstLetter(groupsTitle),
      imgUrl: undefined,
      icon: GroupsIcon,
    },
    id: 4,
  },
  {
    title: messengerTitle,
    details: {
      name: capitalizeFirstLetter(messengerTitle),
      imgUrl: undefined,
      icon: MessengerIcon,
    },
    id: 5,
  },
  {
    title: filmTitle,
    details: {
      name: capitalizeFirstLetter(filmTitle),
      imgUrl: undefined,
      icon: FilmIcon,
    },
    id: 6,
  },
  {
    title: "Play games",
    details: {
      name: "Games",
      imgUrl: undefined,
      icon: GamesIcon,
    },
    id: 7,
  },
];
//todo handle the logic to add items and make sure that all of them are displayed when button is clicked and hidden when clicked again.
export default function renderLeftPanelItems(isOpen) {
  return leftPanelVisibleItems.map((item) => {
    console.log(item.id);
    return (
      <li>
        <LeftPanelLink to={"/" + item.title}>
          <LeftPanelDiv>
            {item.details.imgUrl === undefined ? (
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
