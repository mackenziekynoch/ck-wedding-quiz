import * as React from 'react';
import _ from 'lodash';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/store.js';
import PublicIcon from '@mui/icons-material/Public';
import TitleIcon from '@mui/icons-material/Title';
import RedoIcon from '@mui/icons-material/Redo';
import ImageIcon from '@mui/icons-material/Image';
import ListIcon from '@mui/icons-material/List';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TargetColorPicker } from '../../components/common/colorPicker/TargetColorPicker.jsx';
import { StepSlider } from '../../components/common/slider/StepSlider.jsx';
import { AlignTextButtons } from '../../components/manage/AlignTextButtons.jsx';
import { StatefulSelect } from '../../components/common/select/StatefulSelect.jsx';
import { TooltipIconButton } from '../../components/common/buttons/TooltipIconButton.jsx';
import { JustModal } from '../../components/common/modal/JustModal.jsx';


const GlobalEditFields = ({defaults}) => (
  <Box>
    <TargetColorPicker
      key='bg-color-global'
      defaultValue={defaults.bg.value}
      title={`global background color`}
      handleColorChange={defaults.bg.handler}
    />
    {/* <TargetColorPicker
      key='font-color-global'
      defaultValue={defaults.fc.value}
      title={`global font color`}
      handleColorChange={defaults.fc.handler}
    /> */}
  </Box>
);

const HeaderEditFields = ({defaults}) => (
  <Box>
    <TargetColorPicker
      key='bg-color-header'
      defaultValue={defaults.bg.value}
      title={`header background color`}
      handleColorChange={defaults.bg.handler}
    />
    <TargetColorPicker
      key='font-color-header'
      defaultValue={defaults.fc.value}
      title={`header font color`}
      handleColorChange={defaults.fc.handler}
    />
    <StepSlider
        defaultValue={defaults.fs.value}
      title={`header font size`}
      key={`header-font-size`}
      handleChange={defaults.fs.handler}
      min={1}
      max={7}
    />
    <AlignTextButtons
      key={`header-align-items`}
      handleChange={defaults.align.handler}
      defaultValue={defaults.align.value}
    />
    <StepSlider
      defaultValue={defaults.fw.value}
      title={`header font weight`}
      key={`header-font-weight`}
      handleChange={defaults.fw.handler}
      min={1}
      max={3}
    />
  </Box>
);

const PageCounterEditFields = ({defaults}) => (
  <Box>
    <TargetColorPicker
      key='counter color'
      defaultValue={defaults.bg.value}
      title={`page counter color`}
      handleColorChange={defaults.bg.handler}
    />
    <StatefulSelect
        key='select counter'
        label='Stepper Icon'
        options={[
          {value: 'default', visual: <CircleIcon />},
          {value: 'checkmark', visual: <CheckIcon />},
          {value: 'flower', visual: <FilterVintageIcon />},
          {value: 'bounce', visual: <AirlineStopsIcon />},
          {value: 'smile', visual: <EmojiEmotionsIcon />},
          {value: 'ski', visual: <DownhillSkiingIcon />},
          {value: 'love', visual: <FavoriteIcon />},
        ]}
        defaultValue='default'
        handler={defaults.select.handler}
      />
  </Box>
);

const ImageEditFields = ({defaults}) => (
  <Box>
    <StepSlider
        defaultValue={defaults.bh.value}
        title={`image box height`}
        key={`image-box-height`}
        handleChange={defaults.bh.handler}
        min={0}
        max={10}
      />
    <StepSlider
        defaultValue={defaults.bw.value}
        title={`image box width`}
        key={`image-box-width`}
        handleChange={defaults.bw.handler}
        min={0}
        max={10}
      />
    <StepSlider
        defaultValue={defaults.ih.value}
        title={`image height`}
        key={`image-height`}
        handleChange={defaults.ih.handler}
        min={0}
        max={10}
      />
    <StepSlider
        defaultValue={defaults.iw.value}
        title={`image width`}
        key={`image-width`}
        handleChange={defaults.iw.handler}
        min={0}
        max={10}
      />
  </Box>
);

const QuestionOptionFields = ({defaults}) => (
  <Box>
    <TargetColorPicker
      key='bg-color-option'
      defaultValue={defaults.bg.value}
      title={`option background color`}
      handleColorChange={defaults.bg.handler}
    />
    <TargetColorPicker
      key='font-color-option'
      defaultValue={defaults.fc.value}
      title={`option font color`}
      handleColorChange={defaults.fc.handler}
    />
  </Box>
);


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const fontSizeOptions = [
  'body1', 'subtitle2', 'subtitle1', 'h6', 'h5', 'h4', 'h3', 'h2'
];
const weightOptions = ['300', '400', '700'];

export const ThemeEditor = (props) => {
  const { setQuestionPage } = props;
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const [modalContents, setModalContents] = React.useState(null);

  React.useEffect(() => setQuestionPage(1), []);

  const handleMenuButtonClick = (contents) => {
    setModalContents(contents);
  };

  const handleMenuModalClose = () => {
    setModalContents(null);
  };

  const editFields = [
    {
      title: "Global Theme",
      component: <GlobalEditFields defaults={{
        bg: {
          value: _.get(theme, ['palette', 'primary', 'main']),
          handler: (color) => {
            const newTheme = _.cloneDeep(theme);
            _.set(newTheme, ['palette', 'primary', 'main'], color);
            dispatch(updateTheme(newTheme));
          }
        }
      }}/>,
      icon: <PublicIcon />
    },
    {
      title: "Header Theme",
      component: <HeaderEditFields defaults={{
        bg: {
          value:  _.get(theme, ['components', 'header', 'color']) || _.get(theme, ['palette', 'primary', 'main']),
          handler: (color) => {
            handleBgColorChange('header', color);
          }
        },
        fc: {
          value: _.get(theme, ['components', 'header', 'fontColor']) || _.get(theme, ['palette', 'primary', 'contrastText']),
          handler: (color) => {
            handleFontColorChange('header', color)
          }
        },
        fs: {
          value: fontSizeOptions.indexOf(_.get(theme, ['components', 'header', 'fontSize']) || 'h6'),
          handler: (size) => {
            handleFontSizeChange('header', fontSizeOptions[size])
          }
        },
        align: {
          value: _.get(theme, ['components', 'header', 'alignItems']) || 'start',
          handler: (alignment) => {
            handleAlignChange('header', alignment)
          }
        },
        fw: {
          value: weightOptions.indexOf(_.get(theme, ['components', 'header', 'fontWeight']) || '400') + 1,
          handler: (weight) => {
            handleFontWeightChange('header', weight)
          }
        }
      }}/>,
      icon: <TitleIcon />
    },
    {
      title: "Page Stepper",
      component: <PageCounterEditFields defaults={{
        bg: {
          value: _.get(theme, ['components', 'stepper', 'color']) || _.get(theme, ['palette', 'primary', 'main']),
          handler: (color) => {
            handleBgColorChange('stepper', color)
          }
        },
        select: {
          handler: (value) => {
            handleSelectChange('stepper', 'icon', value)
          }
        }
      }}/>,
      icon: <RedoIcon />
    },
    {
      title: "Image Settings",
      component: <ImageEditFields defaults={{
        bh: {
          value: _.get(theme, ['components', 'imageDimensions', 'boxHeight']) || 180,
          handler: (value) => {
            handleDimensionChange('boxHeight', value * 18);
          }
        },
        bw: {
          value: _.get(theme, ['components', 'imageDimensions', 'boxWidth']) || '100%',
          handler: (value) => {
            handleDimensionChange('boxWidth', value);
          }
        },
        ih: {
          value: _.get(theme, ['components', 'imageDimensions', 'imageHeight']) || '100%',
          handler: (value) => {
            handleDimensionChange('imageHeight', value);
          }
        },
        iw: {
          value: _.get(theme, ['components', 'imageDimensions', 'imageWidth']) || '100%',
          handler: (value) => {
            handleDimensionChange('imageWidth', value);
          }
        }
      }}/>,
      icon: <ImageIcon />
    },
    {
      title: "Question Options",
      component: <QuestionOptionFields defaults={{
        bg: {
          value: _.get(theme, ['components', 'questionOption', 'color']) || _.get(theme, ['palette', 'primary', 'main']),
          handler: (color) => {
            handleBgColorChange('questionOption', color)
          }
        },
        fc: {
          value: _.get(theme, ['components', 'questionOption', 'fontColor']) || _.get(theme, ['palette', 'primary', 'contrastText']),
          handler: (color) => {
            handleFontColorChange('questionOption', color)
          }
        }
      }}/>,
      icon: <ListIcon />
    },
  ];
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
  const handleAlignChange = (property, alignment) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'alignItems'], alignment);
    dispatch(updateTheme(newTheme));
  };
  const handleFontWeightChange = (property, weight) => {
    const newTheme = _.cloneDeep(theme);
    _.set(newTheme, ['components', property, 'fontWeight'], weightOptions[weight - 1]);
    dispatch(updateTheme(newTheme));
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={1}>
        <Box sx={{width: 60, height: 300}}>
          <Stack direction='column' spacing={1}>
            {editFields.map((field, index) => (
              <Item key={field.title}>
                <TooltipIconButton
                  title={field.title}
                  icon={field.icon}
                  onClickHandler={() => handleMenuButtonClick(index)}
                />
              </Item>
            ))}
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={11}>
        <Grid container justifyContent='center' spacing={1}>
          <Grid item xs={11}><Typography ml={4}>Default Themes</Typography></Grid>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 120,
                    width: 120,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
      {modalContents !== null &&
        <JustModal
          title={editFields[modalContents].title}
          children={editFields[modalContents].component}
          onClose={handleMenuModalClose}
        />
      }
    </Grid>
  );
};
