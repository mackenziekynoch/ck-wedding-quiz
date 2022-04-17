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

const fontSizeOptions = [
  'body1', 'subtitle2', 'subtitle1', 'h6', 'h5', 'h4', 'h3', 'h2'
];

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
          <ThemeFields
            title='Global theme'
            bgColor={{
              handler: (color) => {
                const newTheme = _.cloneDeep(theme);
                _.set(newTheme, ['palette', 'primary', 'main'], color);
                dispatch(updateTheme(newTheme));
              },
              defaultValue: _.get(theme, ['palette', 'primary', 'main'])
            }}
          />
          <ThemeFields
            title='Header theme'
            bgColor={{
              handler: (color) => {
                handleBgColorChange('header', color);
              },
              defaultValue: _.get(theme, ['components', 'header', 'color']) || _.get(theme, ['palette', 'primary', 'main'])
            }}
            fontColor={{
              handler: (color) => {
                handleFontColorChange('header', color)
              },
              defaultValue: _.get(theme, ['components', 'header', 'fontColor']) || _.get(theme, ['palette', 'primary', 'contrastText'])
            }}
            fontSize={{
              handler: (size) => {
                handleFontSizeChange('header', fontSizeOptions[size])
              },
              defaultValue: fontSizeOptions.indexOf(_.get(theme, ['components', 'header', 'fontSize']) || 'h6')
            }}
          />
          <ThemeFields
            title='Page counter theme'
            bgColor={{
              handler: (color) => {
                handleBgColorChange('stepper', color)
              },
              defaultValue: _.get(theme, ['components', 'stepper', 'color']) || _.get(theme, ['palette', 'primary', 'main'])
            }}
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
          <ThemeFields
            title='Question title theme'
            fontColor={{
              handler: (color) => {
                handleFontColorChange('questionTitle', color)
              },
              defaultValue: _.get(theme, ['components', 'questionTitle', 'fontColor']) || _.get(theme, ['palette', 'common', 'black'])
            }}
            fontSize={{
              handler: (size) => {
                handleFontSizeChange('questionTitle', fontSizeOptions[size])
              },
              defaultValue: fontSizeOptions.indexOf(_.get(theme, ['components', 'questionTitle', 'fontSize']) || 'h6')
            }}
          />
          <ThemeFields
            title='Question options theme'
            bgColor={{
              handler: (color) => {
                handleBgColorChange('questionOption', color)
              },
              defaultValue: _.get(theme, ['components', 'questionOption', 'color']) || _.get(theme, ['palette', 'primary', 'main'])
            }}
            fontColor={{
              handler: (color) => {
                handleFontColorChange('questionOption', color)
              },
              defaultValue: _.get(theme, ['components', 'questionOption', 'fontColor']) || _.get(theme, ['palette', 'primary', 'contrastText'])
            }}
            fontSize={{
              handler: (size) => {
                handleFontSizeChange('questionOption', fontSizeOptions[size])
              },
              defaultValue: fontSizeOptions.indexOf(_.get(theme, ['components', 'questionOption', 'fontSize']) || 'body1')
            }} />
          <ThemeFields
            title='Question description theme'
            fontColor={{
              handler: (color) => {
                handleFontColorChange('questionDescription', color)
              },
              defaultValue: _.get(theme, ['components', 'questionDescription', 'fontColor']) || _.get(theme, ['palette', 'text', 'primary'])
            }}
            fontSize={{
              handler: (size) => {
                handleFontSizeChange('questionDescription', fontSizeOptions[size])
              },
              defaultValue: fontSizeOptions.indexOf(_.get(theme, ['components', 'questionDescription', 'fontSize']) || 'body1')
            }}
          />
          <ThemeFields
            title='Next page theme'
            fontColor={{
              handler: (color) => {
                handleFontColorChange('nextPage', color)
              },
              defaultValue: _.get(theme, ['components', 'nextPage', 'fontColor']) || _.get(theme, ['palette', 'primary', 'main'])
            }}
          />
        </Stack>
      </Box>
      <ThemeProvider theme={createTheme(theme)}>
        <PreviewQuiz />
      </ThemeProvider>
    </Box>
  );
}