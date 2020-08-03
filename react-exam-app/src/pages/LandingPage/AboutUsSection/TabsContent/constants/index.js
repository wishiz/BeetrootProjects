import React from "react";

// Modules
import { FaUndoAlt, FaAward, FaBrain } from "react-icons/fa";

export const contents = [
  {
    icon: () => <FaUndoAlt />,
    name: "tabOne",
    title: "A bit about our past",
    "text-top":
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "text-bottom":
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    icon: () => <FaAward />,
    name: "tabTwo",
    title: "A bit about our awards",
    "text-top":
      "Vivamus lacinia iaculis sapien sit amet vestibulum. Donec elementum, dui sit amet placerat suscipit, nisi est interdum magna, quis consequat ante purus eu lacus. Suspendisse feugiat consequat bibendum. Aliquam fermentum sem vel purus lacinia auctor.",
    "text-bottom":
      "Suspendisse at erat vel felis efficitur cursus sed quis turpis. Aenean dui odio, aliquam ut ligula scelerisque, placerat auctor metus. Praesent est tortor, viverra sit amet dui vel, faucibus tincidunt sem. Vestibulum elit risus, tincidunt eu elementum vel, condimentum a felis.",
  },
  {
    icon: () => <FaBrain />,
    name: "tabThree",
    title: "A bit  our philosophy",
    "text-top":
      "Fusce feugiat nisl libero, nec rutrum mi blandit sed. Morbi egestas justo a blandit tristique. Sed non interdum ante. Nulla quis mi nec arcu condimentum laoreet. ",
    "text-bottom":
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent velit augue, iaculis eget sagittis sed, ultricies eget tellus. Fusce vestibulum tempus tortor, vel tempor dui condimentum vel. Maecenas eget pulvinar sem. Etiam tristique eros in porttitor varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempor enim eu ex elementum aliquet. Duis eros dui, sagittis a magna vel, interdum lacinia turpis.",
  },
];
