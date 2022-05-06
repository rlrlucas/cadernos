import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import Layout from '../../Styles/layout/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',

    },

    toolbars: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(2, 3),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,

    },
    contents: {
      flexGrow: 1,
      padding: theme.spacing(3),


    },

    label: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(16),
        height: theme.spacing(16),
        minWidth: 325,
      },

    },
    paper: {
      background: 'linear-gradient(45deg, #E7F0DA 70%,  #BBD698 60%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px #90918e ',
      color: '#353C47',
      padding: '0 20px',
      fontSize: 36,
      fontFamily: 'Arial',
      alignItems: 'center',
    },
  }),
);


export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout title="404 not fond" />
      <main className={classes.contents}>

        <div className={classes.toolbars} />

        <div className={classes.label}>
         <h1>Pagina não encontrada</h1>
        </div>



      </main>
    </div>
  );
}