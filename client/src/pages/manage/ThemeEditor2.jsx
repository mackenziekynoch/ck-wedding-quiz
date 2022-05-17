import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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


const globalEditFields = (
  <Box>
    <TargetColorPicker
      key='bg-color-global'
      // defaultValue={other.bgColor.defaultValue}
      title={`global background color`}
      // handleColorChange={other.bgColor.handler}
    />
    <TargetColorPicker
      key='font-color-global'
      // defaultValue={other.bgColor.defaultValue}
      title={`global font color`}
      // handleColorChange={other.bgColor.handler}
    />
  </Box>
);

const headerEditFields = (
  <Box>
    <TargetColorPicker
      key='bg-color-header'
      title={`header background color`}
    />
    <TargetColorPicker
      key='font-color-header'
      title={`header font color`}
    />
    <StepSlider
        // defaultValue={other.fontSize.defaultValue}
        title={`header font size`}
        key={`header-font-size`}
        // handleChange={other.fontSize.handler}
        min={1}
        max={7}
      />
      <AlignTextButtons
        key={`header-align-items`}
        // handleChange={other.align.handler}
        // defaultValue={other.align.defaultValue}
      />
      <StepSlider
        // defaultValue={other.fontWeight.defaultValue}
        title={`header font weight`}
        key={`header-font-weight`}
        // handleChange={other.fontWeight.handler}
        min={1}
        max={3}
      />
  </Box>
);

const pageCounterEditFields = (
  <Box>
    <TargetColorPicker
      key='counter color'
      // defaultValue={other.bgColor.defaultValue}
      title={`page counter color`}
      // handleColorChange={other.bgColor.handler}
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
        // handler={other.select.handler}
      />
  </Box>
);

const imageEditFields = (
  <Box>
    <StepSlider
        // defaultValue={other.boxHeight.defaultValue}
        title={`image box height`}
        key={`image-box-height`}
        // handleChange={other.boxHeight.handler}
        min={0}
        max={10}
      />
    <StepSlider
        // defaultValue={other.boxHeight.defaultValue}
        title={`image box width`}
        key={`image-box-width`}
        // handleChange={other.boxHeight.handler}
        min={0}
        max={10}
      />
    <StepSlider
        // defaultValue={other.boxHeight.defaultValue}
        title={`image height`}
        key={`image-height`}
        // handleChange={other.boxHeight.handler}
        min={0}
        max={10}
      />
    <StepSlider
        // defaultValue={other.boxHeight.defaultValue}
        title={`image width`}
        key={`image-width`}
        // handleChange={other.boxHeight.handler}
        min={0}
        max={10}
      />
  </Box>
);

const questionOptionFields = (
  <Box>
    <TargetColorPicker
      key='bg-color-option'
      // defaultValue={other.bgColor.defaultValue}
      title={`option background color`}
      // handleColorChange={other.bgColor.handler}
    />
    <TargetColorPicker
      key='font-color-option'
      // defaultValue={other.bgColor.defaultValue}
      title={`option font color`}
      // handleColorChange={other.bgColor.handler}
    />
  </Box>
);

const editFields = [
  {title: "Global Theme", component: globalEditFields, icon: <PublicIcon />},
  {title: "Header Theme", component: headerEditFields, icon: <TitleIcon />},
  {title: "Page Stepper", component: pageCounterEditFields, icon: <RedoIcon />},
  {title: "Image Settings", component: imageEditFields, icon: <ImageIcon />},
  {title: "Question Options", component: questionOptionFields, icon: <ListIcon />},
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ThemeEditor = (props) => {
  const [modalContents, setModalContents] = React.useState(null);

  const handleMenuButtonClick = (contents) => {
    console.log('setting modal contents', editFields[contents])
    setModalContents(contents);
  };

  const handleMenuModalClose = () => {
    setModalContents(null);
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
