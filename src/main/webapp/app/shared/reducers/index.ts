import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore

// prettier-ignore
import scheduleConfig, {
ScheduleConfigState
} from 'app/entities/scheduler/schedule-config/schedule-config.reducer';
// prettier-ignore
import fetch, {
FetchState
} from 'app/entities/fetcher/fetch/fetch.reducer';
// prettier-ignore
import siteConfig, {
SiteConfigState
} from 'app/entities/configure/site-config/site-config.reducer';
/* coolybot-needle-add-reducer-import - Coolybot will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly siteConfig: SiteConfigState;
  readonly scheduleConfig: ScheduleConfigState;
  readonly fetch: FetchState;
  /* coolybot-needle-add-reducer-type - Coolybot will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  siteConfig,
  scheduleConfig,
  fetch,
  /* coolybot-needle-add-reducer-combine - Coolybot will add reducer here */
  loadingBar
});

export default rootReducer;
