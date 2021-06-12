import { createMuiTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

export const themes = createMuiTheme({
    palette: {
      primary: {
        main: "#67b437",
        contrastText: "white"
      },
      secondary: {
        main: '#373737',
        contrastText: "white",
      },
      typography: {
        fontFamily: "Lato",
      }
    },
  });

  // export const themes = createMuiTheme({
  //     palette: createPalette({
  //       primary: {
  //         main: "#FFFFFF",
  //         contrastText: "#3C3C3C",
  //       },
  //       secondary: {
  //         main: '#FAD648',
  //         contrastText: "#3C3C3C",
  //       },
  //     }),
  //     shadows: ["none"],
  
  //     overrides: {

  //       MuiButton: {
  //         text: {
  //           color: "#3C3C3C",
  //           textTransform: "none",
  //           padding: "10px 30px",
  //           borderRadius: "0px",
  //           letterSpacing: "1.3px",
  //         }
  //       }
  //     }
    
  //   });

