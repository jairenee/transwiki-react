import { GuidesPageState } from 'app/containers/GuidesPage/types';
import { GuideState } from 'app/containers/Guide/types';
import { PortfolioState } from 'app/containers/Portfolio/types';
import { ProfilePageState } from 'app/containers/ProfilePage/types';
import { HandleAuthState } from 'app/containers/HandleAuth/types';
import { AuthState } from 'store/authentication/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  guidesPage?: GuidesPageState;
  guide?: GuideState;
  portfolio?: PortfolioState;
  profilePage?: ProfilePageState;
  handleAuth?: HandleAuthState;
  authentication?: AuthState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
