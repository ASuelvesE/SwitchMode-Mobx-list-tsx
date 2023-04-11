import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import store from "../dao/DaoStore";

function NavBar() {
  
  const onLoad = () => {
    store.load();
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default NavBar;
