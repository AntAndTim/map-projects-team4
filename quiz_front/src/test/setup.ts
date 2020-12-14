import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest.mock('@ijl/cli', () => ({
//     getConfig: () => ({
//         'kamtim.api.base': '/api',
//     })
// }));