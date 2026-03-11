import type { Meta, StoryObj } from '@storybook/preact-vite';
import { FilmElement } from '../components/Film';
import type { Film } from '../utils/kinopoisk';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const FilmStory: Meta<typeof FilmElement> = {
  title: 'Film item',
  component: FilmElement,
  argTypes: {
    ...({} as Film),
  },
  args: {
    nameEn: 'Film name',
    year: 2026,
    kinopoiskId: 1234,
    posterUrl: 'example.com/no-poster.png',
    posterUrlPreview: 'example.com/no-poster.png',
  } as Film,
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
