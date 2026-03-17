import type { Meta, StoryObj } from '@storybook/preact-vite';
import { FilmCard } from '../components/FilmCard';
import { FilmType, type FilmInfo } from '../utils/kinopoisk';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const FilmStory: Meta<typeof FilmCard> = {
  title: 'Film item',
  component: FilmCard,
  argTypes: {
    ...({} as FilmInfo),
  },
  args: {
    nameOriginal: 'Film name',
    year: 2026,
    kinopoiskId: 1234,
    posterUrl: 'example.com/no-poster.png',
    posterUrlPreview: 'example.com/no-poster.png',
    type: FilmType.FILM,
  } as FilmInfo,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default FilmStory;

type Story = StoryObj<typeof FilmStory>;

export const Default: Story = {};
