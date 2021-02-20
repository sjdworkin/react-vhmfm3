import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components'

import { TreeView } from "@progress/kendo-react-treeview";

const tree = [
  {
    text: "Furniture",
    expanded: true,
    items: [
      { text: "Tables & Chairs" },
      { text: "Sofas" },
      { text: "Occasional Furniture" }
    ]
  },
  {
    text: "Decor",
    items: [
      { text: "Bed Linen" },
      { text: "Curtains & Blinds" },
      { text: "Carpets" }
    ]
  }
];

class AgendaViewer extends React.Component {
  render() {
    return (
      <TreeView
        data={tree}
        expandIcons={true}
        onExpandChange={this.onExpandChange}
        onItemClick={this.onItemClick}
        aria-multiselectable={true}
      />
    );
  }
  onItemClick = event => {
    event.item.selected = !event.item.selected;
    this.forceUpdate();
  };
  onExpandChange = event => {
    event.item.expanded = !event.item.expanded;
    this.forceUpdate();
  };
}

ReactDOM.render(<AgendaViewer />, document.querySelector("my-app"));
