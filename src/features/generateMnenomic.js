import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Alert,
  AlertTitle,
  Autocomplete,
  TextField,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { bip39 } from "@okxweb3/crypto-lib";

import { coinTypeOptions } from "../constants/coinTypeOptions";
import { useStore } from "../stores";

const GenerateMnenomicCard = () => {
  const [coinType, setCoinType] = useState();
  const [mnenomic, setMnenomic] = useState();
  const [walletInfos, setWalletInfos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const { walletStore } = useStore();
  const isInit = walletStore.isInitialized;

  useEffect(() => {
    setCoinType();
    setMnenomic();
    setWalletInfos([]);
    setErrorMessage("");
    setShowDialog(false);
  }, [isInit]);

  const confirmDialog = () => {
    setShowDialog(false);
  };
  const generateMnenomic = async () => {
    try {
      const result = await bip39.generateMnemonic();
      setMnenomic(result);
    } catch (err) {
      console.error(err);
    }
  };
  const generatePrivateKey = async () => {
    if (!coinType) {
      setErrorMessage("Please select a coin type!");
      return;
    }
    if (
      walletInfos.findIndex((walletInfo) => walletInfo.coinType === coinType) >
      -1
    ) {
      setShowDialog(true);
      return;
    }
    try {
      setErrorMessage("");
      let wallet = walletStore.getWallet(coinType);
      if (wallet) {
        const derivedPath = await wallet.getDerivedPath({ index: 0 });
        const privateKey = await wallet.getDerivedPrivateKey({
          mnenomic,
          hdPath: derivedPath,
        });
        const address = await wallet.getNewAddress({ privateKey });
        const walletInfo = {
          coinType,
          derivedPath,
          privateKey,
          address: address.address,
        };
        if (address.publicKey) {
          Object.assign(walletInfo, {
            publicKey: address.publicKey,
          });
        }
        setWalletInfos([...walletInfos, walletInfo]);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.toString());
    }
  };
  return isInit ? (
    <>
      <Card variant="outlined" sx={{ minWidth: 275, borderRadius: 5 }}>
        <CardContent sx={{ pb: 1 }}>
          <Typography sx={{ fontSize: 26 }}>Generate Mnenomic</Typography>
        </CardContent>
        <Divider flexItem />
        <CardContent sx={{ pb: 0 }}>
          <Typography sx={{ fontSize: 20, pb: 1 }}>Mnenomic</Typography>
        </CardContent>
        <CardContent
          sx={{
            pt: 1,
            pb: 2,
            mx: 2,
            borderRadius: 2,
            backgroundColor: "#f7f7f7",
          }}
        >
          <Typography sx={{ minHeight: 24, fontSize: 20 }}>
            {mnenomic}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2 }}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "black", borderRadius: 2 }}
            onClick={generateMnenomic}
            disabled={!isInit || !!mnenomic}
          >
            Generate Mnenomic
          </Button>
        </CardActions>
        {!!mnenomic && (
          <>
            <CardContent sx={{ pb: 0 }}>
              <Typography sx={{ fontSize: 20 }}>Coin Type</Typography>
            </CardContent>
            <CardActions sx={{ pl: 2, pr: 2, pb: 2 }}>
              <Autocomplete
                options={coinTypeOptions}
                sx={{ width: 288, p: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Coin Type" />
                )}
                onChange={(_, value) => setCoinType(value?.value)}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                key={!isInit}
                disabled={!isInit}
              />
              <Button
                size="small"
                variant="contained"
                sx={{ backgroundColor: "black", borderRadius: 2 }}
                onClick={generatePrivateKey}
                disabled={!isInit || !mnenomic || !coinType}
              >
                Generate Address
              </Button>
            </CardActions>
            {errorMessage && (
              <Alert severity="error">
                <AlertTitle>Failure</AlertTitle>
                {errorMessage}
              </Alert>
            )}
            {walletInfos &&
              walletInfos.map((walletInfo, index) => {
                return walletInfo ? (
                  <>
                    <Alert severity="success" key={index}>
                      <AlertTitle>Success</AlertTitle>
                      <strong>{`Chain: ${walletInfo.coinType}`}</strong>
                      <br />
                      <strong>{`Derivation Path: ${walletInfo.derivedPath}`}</strong>
                      <br />
                      <strong>{`Private Key: ${walletInfo.privateKey}`}</strong>
                      <br />
                      <strong>{`Address: ${walletInfo.address}`}</strong>
                      <br />
                      <strong>{`Public Key: ${walletInfo.publicKey}`}</strong>
                    </Alert>
                    <Divider flexItem key="divider" />
                  </>
                ) : null;
              })}
          </>
        )}
      </Card>
      <Dialog
        open={showDialog}
        onClose={confirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Already created</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The Private Key is already created, please try other coin types!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDialog} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  ) : null;
};

export default observer(GenerateMnenomicCard);
