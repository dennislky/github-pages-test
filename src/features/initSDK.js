import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@mui/material";

import { CardActionButton } from "../components/CardActionButton";
import { DemoDialog } from "../components/DemoDialog";
import { useStore } from "../stores";

// card per feature
const InitSDKCard = () => {
  // local UI state
  const [showDialog, setShowDialog] = useState(false);

  // mobx store that link up with sdk wallets
  const { walletStore } = useStore();
  const isInit = walletStore.isInit;

  // local UI state cleanup when sdk re-initialized
  useEffect(() => {
    setShowDialog(false);
  }, [isInit]);

  // event handler
  const confirmDialog = () => {
    walletStore.dispose();
    setShowDialog(false);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  // feature logic
  const initSDK = () => {
    walletStore.initialize();
  };
  const dispose = () => {
    setShowDialog(true);
  };
  // const linkToGithub = () => {
  //   window.open("https://github.com/dennislky/github-pages-test", "_blank");
  // };

  // render logic
  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 275, borderRadius: 5 }}>
        <CardContent sx={{ pb: 1 }}>
          <Typography display="inline" sx={{ fontSize: 26 }}>
            OKX Wallet SDK
          </Typography>
          {isInit && (
            <Typography display="inline" sx={{ fontSize: 14, color: "blue" }}>
              {" (Initialized)"}
            </Typography>
          )}
        </CardContent>
        <CardActions sx={{ pl: 2, pr: 2, pb: 2 }}>
          {!isInit ? (
            <CardActionButton
              buttonText="Initialize"
              onClick={initSDK}
              testId="initialize"
            />
          ) : (
            <CardActionButton
              buttonText="Dispose"
              onClick={dispose}
              testId="dispose"
            />
          )}
          {/* <CardActionButton buttonText="Github" onClick={linkToGithub} /> */}
          <Grid
            container
            spacing={1}
            sx={{
              ml: 1,
              mt: 0,
            }}
          >
            <iframe
              src="https://ghbtns.com/github-btn.html?user=dennislky&repo=github-pages-test&type=star&count=true&size=large"
              frameborder="0"
              width="170"
              height="30"
              title="GitHub"
            />
          </Grid>
        </CardActions>
      </Card>
      <DemoDialog
        title={"Are you sure?"}
        content={"The Mnenomics and Private Keys generated will be lost!"}
        showDialog={showDialog}
        handleClose={closeDialog}
        handleConfirm={confirmDialog}
      />
    </>
  );
};

export default observer(InitSDKCard);
