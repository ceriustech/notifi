import DashboardIcon, { DashboardIconProps } from '../components/DashboardIcon';
import LegislationIcon, {
	LegislationIconProps,
} from '../components/LegislationIcon';
import PoliticianProfileIcon, {
	PoliticianProfileIconProps,
} from '../components/PoliticianProfileIcon';
import UserProfileIcon, {
	UserProfileIconProps,
} from '../components/UserProfileIcon';
import CalendarIcon, { CalendarIconProps } from '../components/CalendarIcon';

export const icons = {
	dashboard: DashboardIcon as React.FC<DashboardIconProps>,
	legislation: LegislationIcon as React.FC<LegislationIconProps>,
	politicianProfile:
		PoliticianProfileIcon as React.FC<PoliticianProfileIconProps>,
	userProfile: UserProfileIcon as React.FC<UserProfileIconProps>,
	calendar: CalendarIcon as React.FC<CalendarIconProps>,
};
