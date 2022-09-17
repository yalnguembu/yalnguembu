import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import OneTick from "@mui/icons-material/Check";
import DoubleTick from "@mui/icons-material/Check";
import Send from "@mui/icons-material/Send";

function ChatApp() {
  const discussions = [
    {
      id: "0",
      user: "mazeking",
      img: "12341234.jpg",
      message: {
        text: "I want to see you.",
        statut: "send",
        date: "14:12",
        sender: "me",
      },
    },
    {
      id: "1",
      user: "soupnazie21",
      img: "12341234.jpg",
      message: {
        text: "I want to see you.",
        statut: "recieved",
        date: "11:42",
        sender: "me",
      },
    },
    {
      id: "2",
      user: "soupnazie21",
      img: "12341234.jpg",
      message: {
        text: "I want to see you.",
        statut: "read",
        date: "11:42",
        sender: "me",
      },
    },
  ];
  const messages = [
    {
      id: "0",
      text: "I want to see you. rjkdnkbxclbmmmmmmmmmmm,.z   djhxdxni dn jnnnn  dsjnkjkbjfajkv baxzbhsdfvbsbvhwe <Br>   bvvjcd,   db dfg  ",
      statut: "send",
      date: "14:12",
      sender: "1",
    },
    {
      id: "1",
      text: "I want to see you.",
      statut: "send",
      date: "14:12",
      sender: "1",
    },
    {
      id: "2",
      text: "I want to see you.",
      statut: "send",
      date: "14:12",
      sender: "me",
    },
    {
      id: "3",
      text: "I want to see you.",
      statut: "send",
      date: "14:12",
      sender: "you",
    },
  ];

  const Discussion = ({ discussion }) => {
    const { id, user, img, message } = discussion;
    const { text, statut, date, sender } = message;

    return (
      <Box
        style={{
          borderBottom: "1px solid #000",
          height:"70px"
        }}
      >
        <Box style={{
            display:"flex",
            flexDirectio:"row",
            // justifyContent:"space-between",
            alignItems:"center"
        }}>
          <Box style={{
              width:"70px"
          }}>
            <img
              src={img}
              style={{
                borderRadius: "50%",
                backgroundColor: "gray",
                width: "50px",
                height:"50px",
                marginInline: "10px",
                marginBlock: "12px",
              }}
            />
          </Box>
          <Box
            item
            xs={9}
            sx={{
              p: 1,
              width:"100%"
            }}
          >
            <Typography variant="h6">{user}</Typography>
            <Typography style={{color:"lightgray"}}>
              {text}
              <span
                style={{
                  float: "right",
                  color: "GrayText",
                  fontSize: 13,
                  marginTop: "3px",
                }}
              >
                {date + " "}
                {statut === "send" ? (
                  <OneTick
                    fontSize="small"
                    color="gray"
                    style={{
                      fontSize: "19px",
                      verticalAlign: "middle",
                    }}
                  />
                ) : statut === "recieved" ? (
                  <>
                    <DoubleTick fontSize="small" color="gray" />
                    <DoubleTick fontSize="small" color="gray" />
                  </>
                ) : (
                  <>
                    <DoubleTick fontSize="small" color="primary" />
                    <DoubleTick fontSize="small" color="primary" />
                  </>
                )}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  const Message = ({ message }) => {
    const { text, statut, date, sender } = message;

    return (
      <>
        <Box
          style={{
            width: "100%",
            display: "block",
            float: "left",
          }}
        >
          <Box
            style={{
              background: sender === "me" ? "lightgray" : "#1f1f1f",
              color: sender === "me" ? "#1a1919" : " lightgray",
              float: sender === "me" ? "left" : "right",
              borderRadius: 8,
              padding: 15,
              maxWidth: "80%",
              marginBottom: 15,
              display: "block",
            }}
          >
            <Typography>
              {text}
              <span
                style={{
                  float: "right",
                  color: "GrayText",
                  fontSize: 13,
                  marginTop: "3px",
                }}
              >
                {date + " "}
                {statut === "send" ? (
                  <OneTick
                    fontSize="small"
                    color="gray"
                    style={{
                      fontSize: "19px",
                      verticalAlign: "middle",
                    }}
                  />
                ) : statut === "recieved" ? (
                  <>
                    <DoubleTick fontSize="small" color="gray" />
                    <DoubleTick fontSize="small" color="gray" />
                  </>
                ) : (
                  <>
                    <DoubleTick fontSize="small" color="primary" />
                    <DoubleTick fontSize="small" color="primary" />
                  </>
                )}
              </span>
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <div
      style={{
        // position:"fixed",
        top: "10%",
        left: "10%",
        // transform: "translate(10%,10%)",
        // width: "80%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            style={{
              backgroundColor: "#1a1919",
              color: "#f5f5f5",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <Paper
              elevation={3}
              square
              style={{
                backgroundColor: "#1f1f1f",
              }}
            >
              <Typography variant="h6" color="secondary">
                Discussion
              </Typography>
              <TextField fullWidth placeholder="search.." size="small" />
            </Paper>
            {discussions.map((discussion) => (
              <Discussion discussion={discussion} key={discussion.id} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            square
            style={{
              backgroundColor: "#1f1f1f",
              padding: "8px",
            }}
          >
            <Button></Button>
            <Typography variant="h6" color="secondary" style={{ margin: 0 }}>
              {"Mazeking"}
            </Typography>
          </Paper>
          <Box
            style={{
              padding: "15px",
              maxHeight: "80%",
              overflow: "scroll",
            }}
          >
            {messages.map((message) => (
              <Message message={message} key={message.id} />
            ))}
          </Box>
          <Box
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              //   width: "66%",
            }}
          >
            <TextField placeholder="Type text here..." fullWidth />
            <Button>
              <Send fontSize="large" color="secondary" />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatApp;
