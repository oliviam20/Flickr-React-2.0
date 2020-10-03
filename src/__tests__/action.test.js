import axios from 'axios';
import { clearImages, loadImages, fetchImages } from '../actions/index';

jest.mock('axios');

describe('Action creators', () => {
  it('shout return CLEAR_IMAGES action type', () => {
    expect(clearImages()).resolves.toMatchObject({ type: 'CLEAR_IMAGES' });
  });

  it('should return LOAD_IMAGES action type', () => {
    expect(loadImages()).resolves.toMatchObject({ type: 'LOAD_IMAGES' })
  });

  it('should return LOAD_IMAGES_SUCESS action type', async () => {
    const data = { type: 'LOAD_IMAGES_SUCESS' };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchImages('sky')).resolves.toEqual(data);
  });
});
