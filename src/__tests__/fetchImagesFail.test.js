import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchImages } from '../actions/index';

describe('fetchImages action', () => {
  it('should return LOAD_IMAGES_FAIL action type', (done) => {
    const mock = new MockAdapter(axios);
    const data = { type: 'LOAD_IMAGES_FAIL' };
    mock.onGet('example').reply(200);

    fetchImages('sky').then((res) => {
      expect(res).toEqual(data);
      done();
    });
  });
});
