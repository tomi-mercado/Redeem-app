import { UserData } from '../common/interfaces';

import AerolabLogo from './AerolabLogo';
import Points from './Points';

export interface NavbarProps {
  userName?: UserData['name'];
  userPoints?: UserData['points'];
}

export default function Navbar({ userName, userPoints }: NavbarProps) {
  return (
    <nav className="flex justify-between py-3 px-5 sm:px-10">
      <AerolabLogo />
      {userName && userPoints !== undefined && (
        <div className="flex items-center">
          <p className="typography-gray mr-4 whitespace-nowrap overflow-ellipsis overflow-x-hidden">{userName}</p>
          <Points amount={userPoints} />
        </div>
      )}
    </nav>
  );
}
