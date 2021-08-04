import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import TrendingIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();
  useEffect(() => {
    switch (value) {
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('/movies');
        break;
      case 2:
        history.push('/series');
        break;
      case 3:
        history.push('/search');
        break;
      default:
        break;
    }
  });
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{
          color: 'white',
        }}
        label='Trending'
        icon={<TrendingIcon />}
      />
      <BottomNavigationAction
        style={{
          color: 'white',
        }}
        label='Movies'
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{
          color: 'white',
        }}
        label='TV Series'
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{
          color: 'white',
        }}
        label='Search'
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
