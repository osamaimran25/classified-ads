import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import menuIamge from "../../../assets/menu.png";
import options from "./SidebarOption";

class ReactDrawer extends Component {
  state = {
    isOpen: false,
  };
  handleSidebarToggle = (isOpen) => {
    this.setState({ isOpen });
  };

  handleClick = (itemOptions) => {
    /*
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      <div>
        <MultilevelSidebar
          open={this.state.isOpen}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="IslamicAds"
          onItemClick={this.handleClick}
        />
        {/* using in our button to open the sidebar */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleSidebarToggle(true)}
        >
          <img src={menuIamge} alt="menu dropdown" style={{ width: "30px" }} />
        </Button>
      </div>
    );
  }
}

export default ReactDrawer;
