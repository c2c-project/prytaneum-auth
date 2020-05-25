import Users from './users';
import Mongo from '../config/mongo.config';

beforeAll(async () => {
    await Mongo.init();
    await Users.init();
});

afterAll(async () => {
    await Mongo.close();
});

describe('user collection tests', () => {
    it('init should fail since it has already been called', async () => {
        expect(Users.initialized).toStrictEqual(true);
        Users.init()
    });
});