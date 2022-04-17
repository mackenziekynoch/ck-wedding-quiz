import * as React from 'react';
import _ from 'lodash';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { ThemeFields } from '../../components/manage/ThemeFields.jsx';


export const ThemeEditor = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const handleBgColorChange = (property, color) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'color'], color);
    dispatch(updateTheme(newTheme));
  };
  const handleFontColorChange = (property, color) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'fontColor'], color);
    dispatch(updateTheme(newTheme));
  };
  const handleFontSizeChange = (property, size) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'fontSize'], size);
    dispatch(updateTheme(newTheme));
  };
  const handleFontChange = (property, font) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'font'], font);
    dispatch(updateTheme(newTheme));
  };
  const handleSelectChange = (property, target, value) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, target], value);
    dispatch(updateTheme(newTheme));
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        sx={{
          order: 1,
          flexGrow: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{width: 650}}>
          <ThemeFields title='Global theme' bgColor={{handler: (color) => {
            const newTheme = _.cloneDeep(theme);
            _.set(newTheme, ['palette', 'primary', 'main'], color);
            dispatch(updateTheme(newTheme));
          }}} />
          <ThemeFields
            title='Header theme'
            bgColor={{handler: (color) => {
              handleBgColorChange('header', color);
            }}}
            fontColor={{handler: (color) => {
              handleFontColorChange('header', color)
            }}}
            fontSize={{handler: (size) => {
              handleFontSizeChange('header', size)
            }}}
          />
          <ThemeFields
            title='Page counter theme'
            bgColor={{handler: (color) => {
              handleBgColorChange('stepper', color)
            }}}
            fontSize={{handler: (size) => {
              handleFontSizeChange('stepper', size)
            }}}
            select={{
              label: 'Icon type',
              options: [
                {value: 'default', visual: <CircleIcon />},
                {value: 'checkmark', visual: <CheckIcon />},
                {value: 'flower', visual: <FilterVintageIcon />},
                {value: 'bounce', visual: <AirlineStopsIcon />},
                {value: 'smile', visual: <EmojiEmotionsIcon />},
                {value: 'ski', visual: <DownhillSkiingIcon />},
                {value: 'love', visual: <FavoriteIcon />},
              ],
              handler: (value) => {
                handleSelectChange('stepper', 'icon', value)
              }
            }}
          />
          <ThemeFields title='Question title theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Question options theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Question description theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Next page theme' bgColor={{handler: () => {}}} fontSize={true} />
          <ThemeFields title='Leaderboard theme' />
        </Stack>
      </Box>
      <ThemeProvider theme={createTheme(theme)}>
        <PreviewQuiz />
      </ThemeProvider>
    </Box>
  );
}