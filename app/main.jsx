import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import agendaContent2 from "./agenda.json"

import { TreeView } from "@progress/kendo-react-treeview";

const StyledTree1 = styled(TreeView)`
  background-color: yellow;
  font-size: 1.5em;
`;

class AgendaViewer extends React.Component {
  render() {
    return (
      <StyledTree1
        data={agendaContent2.TOC}
        textField="Title"
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
